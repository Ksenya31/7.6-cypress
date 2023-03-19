const { defineConfig } = require("cypress");

module.exports = defineConfig({
    scripts: {
        "cy:run:chrome": "cypress run --browser chrome --headless",
        "cy:run:firefox": "cypress run --browser firefox --headless",
        "cy:run:chromeMobile": "cypress run --browser chrome --config-file cypress.env.config.js --headed",
        "cy:run:firefoxMobile": "cypress run --browser firefox --config-file cypress.env.config.js --headed",
    },
    e2e: {
        baseUrl: 'http://localhost:3000',
        retries: 2,
        viewportHeight: 667,
        viewportWidth: 375,
        specPattern: 'cypress/e2e/**/*.spec.{js, jsx, ts, tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});