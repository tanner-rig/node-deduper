const app = require("./app")

describe("dedupeObjects", () => {
    const expectedResults = [
        {
            name : "Products",
            fields : [ 
                {
                    key : "field_1",
                    name : "Products Name"
                }, 
                {
                    key : "field_2",
                    name : "Products Name"
                },
            ],
            key : "object_1",
        },
    ]

    test("should remove duplicate objects and fields based on key", () => {
        const result = app.dedupeObjects(testData.versions[0].objects)
        
        expect(result).toStrictEqual(expectedResults)
    })
})

describe("dedupeScenes", () => {
    const expectedResults = [
        {
            key: "scene_1",
            name: "Home",
            views: [
                {
                    key : "view_1",
                    name : "Products Name"
                }, 
                {
                    key : "view_2",
                    name : "Products Name"
                }, 
            ]
        },
    ]

    test("should remove duplicate scenes and views based on key", () => {
        const result = app.dedupeScenes(testData.versions[0].scenes)
        
        expect(result).toStrictEqual(expectedResults)
    })
})

const testData = {
    versions: [
        {
          objects: [
                {
                    name : "Products",
                    fields : [ 
                        {
                            key : "field_1",
                            name : "Products Name"
                        }, 
                        {
                            key : "field_2",
                            name : "Products Name"
                        }, 
                        {
                            key : "field_2",
                            name : "Products Name"
                        }, 
                        {
                            key : "field_1",
                            name : "Products Name"
                        }, 
                    ],
                    key : "object_1",
                },
                {
                    name : "Products",
                    fields : [ 
                        {
                            key : "field_1",
                            name : "Products Name"
                        }, 
                        {
                            key : "field_2",
                            name : "Products Name"
                        }, 
                        {
                            key : "field_2",
                            name : "Products Name"
                        }, 
                        {
                            key : "field_1",
                            name : "Products Name"
                        }, 
                    ],
                    key : "object_1",
                }
            ],
            scenes: [
                {
                    key: "scene_1",
                    name: "Home",
                    views: [
                        {
                            key : "view_1",
                            name : "Products Name"
                        }, 
                        {
                            key : "view_2",
                            name : "Products Name"
                        }, 
                        {
                            key : "view_2",
                            name : "Products Name"
                        }, 
                        {
                            key : "view_1",
                            name : "Products Name"
                        }, 
                    ]
                },
                {
                    key: "scene_1",
                    name: "Home",
                    views: [
                        {
                            key : "view_1",
                            name : "Products Name"
                        }, 
                        {
                            key : "view_2",
                            name : "Products Name"
                        }, 
                        {
                            key : "view_2",
                            name : "Products Name"
                        }, 
                        {
                            key : "view_1",
                            name : "Products Name"
                        }, 
                    ]
                }
            ]
        }
    ]
}
