// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
var config = require('../../../config')
var port = process.env.PORT || config.dev.port
var ui = require('../ui-properties/ui-locators.js')

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url(browser.launchUrl)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.randPersonBtn')
      .pause(5000)
      .end()
  },

  'starship e2e tests': function (browser) {
    browser
    .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.starship)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006']) //hits the enter key.
      .pause(3000)
      .assert.elementPresent(ui.dev.randomBtn.starship)
      .click(ui.dev.randomBtn.starship)
      .waitForElementPresent(ui.dev.tableRecord, 2000)
      .pause(3000)
      .getText(ui.dev.tableRecord, function(result) {this.assert.notEqual(result,'')})
      .end()
  }


}
