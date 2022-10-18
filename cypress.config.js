const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  "screenshotsFolder": "./cypress/snapshots/actual",
    "trashAssetsBeforeRuns": true,
    "env": {
  "failSilently": false
},

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
