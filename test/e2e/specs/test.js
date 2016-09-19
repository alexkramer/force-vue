// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
var config = require('../../../config')
var ui = require('../ui-properties/ui-locators.js')
var personPage = require('../pages/person.js')
var planetPage = require('../pages/planet.js')
var starshipPage = require('../pages/starship.js')

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .pause(5000)
      .end()
  },

  'verify person record has seven table records': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .assert.elementCount(ui.dev.tableRecord, 7)
      .waitForElementVisible(personPage.elements.nameTextbox, 5000) // Unsure how to hook up @nameTextBox
      .assert.elementPresent(personPage.elements.nameTextbox) // The @nameTextbox was not working
      .assert.elementPresent(personPage.elements.heightTextbox)
      .assert.elementPresent(personPage.elements.massTextbox)
      .assert.elementPresent(personPage.elements.hairColorTextbox)
      .assert.elementPresent(personPage.elements.eyeColorTextbox)
      .assert.elementPresent(personPage.elements.birthYearTextbox)
      .assert.elementPresent(personPage.elements.genderTextbox)
      .pause(5000)
      .end()
  },

  'verify planet record has nine table records': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.planet)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(planetPage.elements.randomPlanetButton)
      .assert.elementCount(ui.dev.tableRecord, 9)
      .waitForElementVisible(planetPage.elements.nameTextbox, 5000) // Unsure how to hook up @nameTextBox
      .assert.elementPresent(planetPage.elements.nameTextbox) // The @nameTextbox was not working
      .assert.elementPresent(planetPage.elements.rotationPeriodTextbox)
      .assert.elementPresent(planetPage.elements.orbitalPeriodTextbox)
      .assert.elementPresent(planetPage.elements.diameterTextbox)
      .assert.elementPresent(planetPage.elements.climateTextbox)
      .assert.elementPresent(planetPage.elements.gravityTextbox)
      .assert.elementPresent(planetPage.elements.terrainTextbox)
      .assert.elementPresent(planetPage.elements.surfaceWaterTextbox)
      .assert.elementPresent(planetPage.elements.populationTextbox)
      .pause(5000)
      .end()
  },

  'verify selecting random person: name field not empty': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .click(personPage.elements.randomPersonButton)
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  },

  'verify person button has expected value: face RANDOM PERSON': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(ui.dev.app, 5000)
      .getText(personPage.elements.randomPersonButton, function(result) {
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
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(planetPage.elements.randomPlanetButton)
      .getText(planetPage.elements.randomPlanetButton, function(result) {
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
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(starshipPage.elements.randomStarshipButton)
      .click(starshipPage.elements.randomStarshipButton)
      .waitForElementPresent(ui.dev.tableRecord, 2000)
      .pause(3000)
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  }
}
