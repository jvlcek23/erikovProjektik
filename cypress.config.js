const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.pinsight.com/", // Add your desired base URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
