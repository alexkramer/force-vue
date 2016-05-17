// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.randPersonBtn')
      .pause(5000)
      .end()
  },

  'startship e2e tests': function (browser) {
    browser
        .url('http://localhost:8080')
        .waitForElementVisible('#app', 5000)
        //.click('.mdl-tabs__tab')
        .setValue('.mdl-tabs__tab','Starship')
        .click('.mdl-tabs__tab')
        //.click('option[value="Starship"]') //selects the option but doesn't click
        .pause(1000)
        .keys(['\uE006']) //hits the enter key.
        .pause(3000)
        .assert.elementPresent('.randStarshipBtn')
        .click('.randStarshipBtn')
        .waitForElementPresent('.mdl-textfield__input', 2000)
        .pause(3000)
        .getText(".mdl-textfield__input", function(result) {this.assert.notEqual(result,'')})
            //this.assert.true(result.length > 0)})
        .end()
  }


}
