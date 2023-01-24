const fs = require('fs')
const _ = require('lodash')

const isDuplicate = (a, b) => a.key === b.key;

const dedupeObjects = (objects) => {
  if (!objects?.length) return [];

  // remove duplicate objects
  const cleanedObjects = _.uniqWith(objects, isDuplicate)
  // remove duplicate fields within each object
  return cleanedObjects.map(obj => {
    return {...obj, fields: _.uniqWith(obj.fields, isDuplicate)}
  })
}

const dedupeScenes = (scenes) => {
  if (!scenes?.length) return [];

  // remove duplicate scenes
  const cleanedScenes = _.uniqWith(scenes, isDuplicate)
  // remove duplicate fields within each scene
  return cleanedScenes.map(scene => {
    return {...scene, views: _.uniqWith(scene.views, isDuplicate)}
  })
}

const dedupeFile = (fileName) => {
  const rawData = fs.readFileSync(`./mock_data/${fileName}`);
  if (!rawData) return;

  const data = JSON.parse(rawData);
  data.versions = data.versions.map(versionObj => {
    versionObj.objects = dedupeObjects(versionObj.objects)
    versionObj.scenes = dedupeScenes(versionObj.scenes)

    return versionObj
  })

  // if clean_data directory doesnt exist, create it
  if (!fs.existsSync("./clean_data")) {
    fs.mkdirSync('clean_data')
  }
  
  // create cleaned file in the clean_data folder
  fs.writeFileSync(`./clean_data/clean_${fileName}`, JSON.stringify(data, null, 2));
};

// dedupes each data file in the mock_data folder
fs.readdirSync("mock_data").forEach(file => {
  dedupeFile(file)
});

module.exports = { dedupeFile, dedupeScenes, dedupeObjects }

