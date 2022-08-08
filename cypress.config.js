const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    failOnStatusCode: false,
    setupNodeEvents(on, config){ 
      // implement node event listeners here
      
    },
    _specPattern: 'cypress/integration/examples/*.js',
    get specPattern() {
      return this._specPattern;
    },
    set specPattern(value) {
      this._specPattern = value;
    },
  },
  
});




