const dotenv = require('dotenv')
const { addWopeePlugin } = require("@wopee-io/wopee.cy");
const { defineConfig } = require("cypress");

dotenv.config();

module.exports = defineConfig({
  env: {
    wopee: {
      apiUrl: process.env.WOPEE_API_URL,
      apiKey: process.env.WOPEE_API_KEY,
      projectUuid: process.env.WOPEE_PROJECT_UUID,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addWopeePlugin(on, config);
    },
  },
});
