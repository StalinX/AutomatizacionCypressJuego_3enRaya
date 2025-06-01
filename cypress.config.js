const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fqhcai",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    
    baseUrl: "https://harman052.github.io",
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: 32,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    trashAssetsBeforeRuns: true,

    reporter : "cypress-mochawesome-reporter",
    reporterOptions : {
      reportDir: "cypress/reports",
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },

  },
});
