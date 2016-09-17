// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
var config = require('../../../config')
var port = process.env.PORT || config.dev.port
var ui = require('../ui-properties/ui-locators.js')

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .assert.elementPresent(ui.dev.randomBtn.person)
      .pause(5000)
      .end()
  },

  'verify person record has seven table records': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .assert.elementPresent(ui.dev.randomBtn.person)
      .assert.elementCount(ui.dev.tableRecord, 7)
      .pause(5000)
      .end()
  },

  'verify planet record has nine table records': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      // Ugly code reason: Firefox has problems with changing the dropdown.
      // Refactor this into a function next iteration.
      .setValue(ui.dev.select,ui.dev.selectValue.planet)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006']) //hits the enter key.
      .pause(3000)
      .assert.elementPresent(ui.dev.randomBtn.planet)
      .assert.elementCount(ui.dev.tableRecord, 9)
      .pause(5000)
      .end()
  },

  'verify selecting random person: name field not empty': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .assert.elementPresent(ui.dev.randomBtn.person)
      .click(ui.dev.randomBtn.person)
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  },

  'verify person button has expected value: face RANDOM PERSON': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .getText(ui.dev.randomBtn.person, function(result) {
        this.assert.equal(result.value,'face RANDOM PERSON')
      })
      .end()
  },

  'verify planet button has expected value: public RANDOM PLANET': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.planet)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006']) //hits the enter key.
      .pause(3000)
      .assert.elementPresent(ui.dev.randomBtn.planet)
      .getText(ui.dev.randomBtn.planet, function(result) {
        this.assert.equal(result.value,'public RANDOM PLANET')
      })
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
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  }


}
