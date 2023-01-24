# Node Deduper
This script will take a list of json data files from the "mock_data" folder, remove duplicate data, and create newly cleaned files in the "clean_data" folder. If the clean_data folder does not already exists, it will be created when the script runs.

### Install and setup
After pulling the repo onto your machine, you will need to make sure that you have [Nodejs](https://nodejs.org/en/download/) installed. After you have installed node you'll want to run `npm install` or `yarn` (depending on your preference) to install all of the dependencies. 

### Run script
You can run the node script by typing either of these commands based on your preference `npm run start` or `yarn start`. This will run your application and clean your data!

### Testing
The Jest testing library is used here, all you have to do is enter `npm run test` or `yarn test` to run the tests