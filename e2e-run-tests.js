const cypress = require('cypress')

cypress.run({
    reporter: 'cypress-mochawesome-reporter',
    browser: 'chrome',
    e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
        },
      },
    config: {
      baseUrl: 'https://www.globalsqa.com',
      video: false,
    },
  })