var bustinPage = {}
let customFunction = require('../testAssets/customFunction.js')
module.exports = {
    beforeEach: browser => {
        bustinPage = browser.page.bustinPage()
        bustinPage.navigate()
        browser.maximizeWindow()
    },
    after: browser => {
        bustinPage.end()
    },


    'User can complete the Bustin Board custom board utility': browser => {
        bustinPage
        customFunction(bustinPage,'@shrikeBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        bustinPage

        

    },
    
}