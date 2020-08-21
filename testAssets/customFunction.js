let boardArray = ['@sportsterBtn','@shrikeBtn','@maestroBtn','@yofaceBtn']
let graphicChoiceArray = ['@lionGraphic','@djGraphic','@powerGraphic','@wolfGraphic','@dragonGraphic','@shoesGraphic','@eyeGraphic','@statueGraphic','@bustinGraphic','@catgirlGraphic']
let backgroundArray = ['@woodStain','@whiteStain','@blackStain','@redStain','@yellowStain']
let artistArray = ['@finishBlue','@finishGreen','@finishRainbow','@finishPurple','@finishBlueLine']
let truckArray = ['@blackTruck','@blueTruck','@greenTruck','@goldTruck','@noTruck']
let wheelArray = ['@clearWheel','@blueWheel','@orangeWheel','@blackWheel','@noWheel']
let bearingArray = ['@abec7Bear','@abec9Bear','@abec9BuiltBear','@sixballBear','@ceramicBear','@noBear']
var i  

module.exports = (page,boardChoice,graphicChoice,backgroundChoice,artistFinishChoice,truckChoice,wheelChoice,bearingChoice) => {
    page
        .waitForElementPresent('@sportsterBtn')
for(i=0; i<4; i++){

    if(boardChoice===boardArray[i]){
        page
        .waitForElementPresent(boardArray[i])
        .click(boardArray[i])
    }
}
        page
        .waitForElementVisible('@dropGraphic')
        //.click('@dropGraphic')
        .pause(1000)
for(i=0; i<10; i++){

    if(graphicChoice===graphicChoiceArray[i]){
        page
        .waitForElementVisible(graphicChoiceArray[i])
        .click(graphicChoiceArray[i])
    }
}
    page
        .click('@dropStain')
        .pause(1000)
for(i=0; i<5; i++){

    if(backgroundChoice===backgroundArray[i]){
        page
        .waitForElementVisible(backgroundArray[i])
        .click(backgroundArray[i])
    }
}
    page
        .click('@dropFinish')
        .pause(1000)
for(i=0; i<5; i++){

    if(artistFinishChoice===artistArray[i]){
        page
        .waitForElementVisible(artistArray[i])
        .click(artistArray[i])
    }
}
    page
        .click('@dropTruck')
        .pause(1000)
for(i=0; i<5; i++){

    if(truckChoice===truckArray[i]){
        page
        .waitForElementVisible(truckArray[i])
        .click(truckArray[i])
    }
}
    page
        .click('@dropWheel')
        .pause(1000)
for(i=0; i<5; i++){

    if(wheelChoice===wheelArray[i]){
        page
        .waitForElementVisible(wheelArray[i])
        .click(wheelArray[i])
    }
}       
    page
        .click('@dropBear')
        .pause(1000)
for(i=0; i<6; i++){

    if(bearingChoice===bearingArray[i]){
        page
        .waitForElementVisible(bearingArray[i])
        .click(bearingArray[i])
    }
}
    page
        .pause(1000)
        .click('@cartBtn')
}
