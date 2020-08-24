var bustinPage = {}
var verifyPage = {}
let customFunction = require('../testAssets/customFunction.js')

module.exports = {
    beforeEach: browser => {
        bustinPage = browser.page.bustinPage()
        verifyPage = browser.page.verifyPage()
        bustinPage.navigate()
        browser.maximizeWindow()
    },
    after: browser => {
        bustinPage.end()
    },

// Deck Tests
    'User can complete custom longboard config with a Sportster deck': browser => {
        customFunction(bustinPage,'@sportsterBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@sportsterVerif')
    },
    'User can complete custom longboard config with a Shrike deck': browser => {
        customFunction(bustinPage,'@shrikeBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with a Maestro deck': browser => {
        customFunction(bustinPage,'@maestroBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with a Yoface deck': browser => {
        customFunction(bustinPage,'@yofaceBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
//Graphics Tests
    'User can complete custom longboard config with the Capital graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@lionGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Boombox graphic': browser => {
        customFunction(bustinPage,'@maestroBtn','@djGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Bedstuy graphic': browser => {
        customFunction(bustinPage,'@yofaceBtn','@powerGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Direwolf graphic': browser => {
        customFunction(bustinPage,'@shrikeBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Dragon graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@dragonGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Exposure graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@shoesGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Jonas graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@eyeGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Symbols graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@statueGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Times graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@bustinGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Yann graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
//Stains Tests
    'User can complete custom longboard config with the Wood background stain': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@woodStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the White background stain': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@whiteStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Black background stain': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Red background stain': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@redStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Yellow background stain': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
//Artist Finish Tests
    'User can complete custom longboard config with the Blue artist finish': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlue','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Green artist finish': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@yellowStain','@finishGreen','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Rainbow artist finish': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@yellowStain','@finishRainbow','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Purple artist finish': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Blue Line artist finish': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
//Truck Tests
    'User can complete custom longboard config with the Black truck color': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Blue truck color': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blueTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Green truck color': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@greenTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Gold truck color': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with no trucks': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@noTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
        //This may need to be verify.elementNotPresent for all 4 colors but I'm not sure.
    },
//Wheel Tests
    'User can complete custom longboard config with the Clear wheel color': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@clearWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Blue wheel color': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blueWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Orange wheel color': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Black wheel color': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with no wheels': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@noWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
        //This may need to be verify.elementNotPresent for all 4 colors but I'm not sure.
    },
//Bearings Tests
    'User can complete custom longboard config with the ABEC-7 bearings': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@abec7Bear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the ABEC-9 bearings': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@abec9Bear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the ABEC-9 Built-In bearings': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@abec9BuiltBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the 6-Ball Built-In bearings': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with the Ceramic Built-In bearings': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@ceramicBear')
        verifyPage
        .verify.elementPresent('@')
    },
    'User can complete custom longboard config with no bearings': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@noBear')
        verifyPage
        .verify.elementPresent('@')
        //This may need to be verify.elementNotPresent for all 4 colors but I'm not sure.
    },
}