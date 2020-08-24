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
    afterEach: browser => {
        bustinPage.end()
    },

//Deck Tests
    'User can complete custom longboard config with a Sportster deck': browser => {
        customFunction(bustinPage,'@sportsterBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@sportsterVerif')
    },
    'User can complete custom longboard config with a Shrike deck': browser => {
        customFunction(bustinPage,'@shrikeBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@shrikeVerif')
    },
    'User can complete custom longboard config with a Maestro deck': browser => {
        customFunction(bustinPage,'@maestroBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@maestroVerif')
    },
    'User can complete custom longboard config with a Yoface deck': browser => {
        customFunction(bustinPage,'@yofaceBtn','@wolfGraphic','@blackStain','@finishPurple','@yoBlackTruck','@yoOrangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@yofaceVerif')
    },
//Graphics Tests
    'User can complete custom longboard config with the Capital graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@lionGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@capVerif')
    },
    'User can complete custom longboard config with the Boombox graphic': browser => {
        customFunction(bustinPage,'@maestroBtn','@djGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@boomVerif')
    },
    'User can complete custom longboard config with the Bedstuy graphic': browser => {
        customFunction(bustinPage,'@yofaceBtn','@powerGraphic','@blackStain','@finishPurple','@yoBlackTruck','@yoOrangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@bedstuyVerif')
    },
    'User can complete custom longboard config with the Direwolf graphic': browser => {
        customFunction(bustinPage,'@shrikeBtn','@wolfGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@direwolfVerif')
    },
    'User can complete custom longboard config with the Dragon graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@dragonGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@dragonVerif')
    },
    'User can complete custom longboard config with the Exposure graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@shoesGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@exposureVerif')
    },
    'User can complete custom longboard config with the Jonas graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@eyeGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@jonasVerif')
    },
    'User can complete custom longboard config with the Symbols graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@statueGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@symbolsVerif')
    },
    'User can complete custom longboard config with the Times graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@bustinGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@timesVerif')
    },
    'User can complete custom longboard config with the Yann graphic': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@blackStain','@finishPurple','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@yannVerif')
    },
//Stains Tests
    'User can complete custom longboard config with the Wood background stain': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@woodStain','@noArtistFinish','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@woodStnVerif')
    },
    'User can complete custom longboard config with the White background stain': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@whiteStain','@noArtistFinish','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@whiteStnVerif')
    },
    'User can complete custom longboard config with the Black background stain': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@blackStain','@noArtistFinish','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@blackStnVerif')
    },
    'User can complete custom longboard config with the Red background stain': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@redStain','@noArtistFinish','@yoBlackTruck','@yoBlueWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@redStnVerif')
    },
    'User can complete custom longboard config with the Yellow background stain': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@noArtistFinish','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@yellowStnVerif')
    },
//Artist Finish Tests
    'User can complete custom longboard config with the Blue artist finish': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlue','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@blueFnshVerif')
    },
    'User can complete custom longboard config with the Green artist finish': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@yellowStain','@finishGreen','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@greenFnshVerif')
    },
    'User can complete custom longboard config with the Rainbow artist finish': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@yellowStain','@finishRainbow','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@rainbowFnshVerif')
    },
    'User can complete custom longboard config with the Purple artist finish': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishPurple','@yoNoTruck','@yoBlackWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@purpleFnshVerif')
    },
    'User can complete custom longboard config with the Blue Line artist finish': browser => {
        customFunction(bustinPage,'@sportsterBtn','@djGraphic','@yellowStain','@finishBlueLine','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@blueLineFnshVerif')
    },
//Truck Tests
    'User can complete custom longboard config with the Black truck color': browser => {
        customFunction(bustinPage,'@yofaceBtn','@djGraphic','@yellowStain','@finishBlue','@yoBlackTruck','@yoOrangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@yoBlackTrkVerif')
    },
    'User can complete custom longboard config with the Blue truck color': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blueTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@blueTrkVerif')
    },
    'User can complete custom longboard config with the Green truck color': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@greenTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@greenTrkVerif')
    },
    'User can complete custom longboard config with the Gold truck color': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@goldTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@goldTrkVerif')
    },
    'User can complete custom longboard config with no trucks': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@noTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementNotPresent('@blackTrkVerif')
        .verify.elementNotPresent('@blueTrkVerif')
        .verify.elementNotPresent('@greenTrkVerif')
        .verify.elementNotPresent('@goldTrkVerif')
    },
//Wheel Tests
    'User can complete custom longboard config with the Clear wheel color': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@clearWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@clearWhlVerif')
    },
    'User can complete custom longboard config with the Blue wheel color': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blueWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@blueWhlVerif')
    },
    'User can complete custom longboard config with the Orange wheel color': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@orangeWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@orangeWhlVerif')
    },
    'User can complete custom longboard config with the Black wheel color': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@yoBlackTruck','@yoBlackWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@blackWhlVerif')
    },
    'User can complete custom longboard config with no wheels': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@noWheel','@sixballBear')
        verifyPage
        .verify.elementNotPresent('@clearWhlVerif')
        .verify.elementNotPresent('@blueWhlVerif')
        .verify.elementNotPresent('@orangeWhlVerif')
        .verify.elementNotPresent('@blackWhlVerif')
    },
//Bearings Tests
    'User can complete custom longboard config with the ABEC-7 bearings': browser => {
        customFunction(bustinPage,'@yofaceBtn','@djGraphic','@yellowStain','@finishBlue','@blackTruck','@blackWheel','@abec7Bear')
        verifyPage
        .verify.elementPresent('@abec7BearVerif')
    },
    'User can complete custom longboard config with the ABEC-9 bearings': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@abec9Bear')
        verifyPage
        .verify.elementPresent('@abec9BearVerif')
    },
    'User can complete custom longboard config with the ABEC-9 Built-In bearings': browser => {
        customFunction(bustinPage,'@maestroBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@abec9BuiltBear')
        verifyPage
        .verify.elementPresent('@abec9BuiltBearVerif')
    },
    'User can complete custom longboard config with the 6-Ball Built-In bearings': browser => {
        customFunction(bustinPage,'@shrikeBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@sixballBear')
        verifyPage
        .verify.elementPresent('@sixballBearVerif')
    },
    'User can complete custom longboard config with the Ceramic Built-In bearings': browser => {
        customFunction(bustinPage,'@yofaceBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@yoBlackTruck','@yoBlackWheel','@ceramicBear')
        verifyPage
        .verify.elementPresent('@ceramicBearVerif')
    },
    'User can complete custom longboard config with no bearings': browser => {
        customFunction(bustinPage,'@sportsterBtn','@catgirlGraphic','@yellowStain','@finishBlueLine','@blackTruck','@blackWheel','@noBear')
        verifyPage
        .verify.elementNotPresent('@abec7BearVerif')
        .verify.elementNotPresent('@abec9BearVerif')
        .verify.elementNotPresent('@abec9BuiltBearVerif')
        .verify.elementNotPresent('@sixballBearVerif')
        .verify.elementNotPresent('@ceramicBearVerif')
    },
}