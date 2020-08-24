module.exports = {
    url: 'https://bustinboards.com/collections/who-makes-the-best-longboard-or-skateboard-you-do',
    elements: {

//Start page Buttons
        sportsterBtn: { selector: '//a[contains(text(), "DESIGN SPORTSTER")]', locateStrategy: 'xpath' },
        shrikeBtn: { selector: '//a[contains(text(), "DESIGN SHRIKE")]', locateStrategy: 'xpath' },
        maestroBtn: { selector: '//a[contains(text(), "DESIGN MAESTRO")]', locateStrategy: 'xpath' },
        yofaceBtn: { selector: '//a[contains(text(), "DESIGN YOFACE")]', locateStrategy: 'xpath' },
//Graphics choice Options
        dropGraphic: {selector: '//a[@data-reactid=".0.0.0.0.2.1.0.0"]', locateStrategy: 'xpath'},
        lionGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.0.1.0")]', locateStrategy: 'xpath' },
        djGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.1.1.0")]', locateStrategy: 'xpath' },
        powerGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.2.1.0")]', locateStrategy: 'xpath' },
        wolfGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.3.1.0")]', locateStrategy: 'xpath' },
        dragonGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.4.1.0")]', locateStrategy: 'xpath' },
        shoesGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.5.1.0")]', locateStrategy: 'xpath' },
        eyeGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.6.1.0")]', locateStrategy: 'xpath' },
        statueGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.7.1.0")]', locateStrategy: 'xpath' },
        bustinGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.8.1.0")]', locateStrategy: 'xpath' },
        catgirlGraphic: { selector: '//img[contains(@data-reactid,".0.0.0.0.2.1.1.1.0.9.1.0")]', locateStrategy: 'xpath' },
//Background Stains
        dropStain: {selector: '//a[@data-reactid=".0.0.0.0.2.2.0.0"]', locateStrategy: 'xpath'},
        woodStain: {selector: '//img[@data-reactid=".0.0.0.0.2.2.1.1.0.0.1.0"]', locateStrategy: 'xpath'},
        whiteStain: {selector: '//img[@data-reactid=".0.0.0.0.2.2.1.1.0.1.1.0"]', locateStrategy: 'xpath'},
        blackStain: {selector: '//img[@data-reactid=".0.0.0.0.2.2.1.1.0.2.1.0"]', locateStrategy: 'xpath'},
        redStain: {selector: '//img[@data-reactid=".0.0.0.0.2.2.1.1.0.3.1.0"]', locateStrategy: 'xpath'},
        yellowStain: {selector: '//img[@data-reactid=".0.0.0.0.2.2.1.1.0.4.1.0"]', locateStrategy: 'xpath'},
//Artist finish Colors
        dropFinish: {selector: '//a[@data-reactid=".0.0.0.0.2.3.0.0"]', locateStrategy: 'xpath'},
        finishBlue: {selector: '//img[@data-reactid=".0.0.0.0.2.3.1.1.0.0.1.0"]',locateStrategy: 'xpath'},
        finishGreen: {selector: '//img[@data-reactid=".0.0.0.0.2.3.1.1.0.1.1.0"]',locateStrategy: 'xpath'},
        finishRainbow: {selector: '//img[@data-reactid=".0.0.0.0.2.3.1.1.0.2.1.0"]',locateStrategy: 'xpath'},
        finishPurple: {selector: '//img[@data-reactid=".0.0.0.0.2.3.1.1.0.3.1.0"]',locateStrategy: 'xpath'},
        finishBlueLine: {selector: '//img[@data-reactid=".0.0.0.0.2.3.1.1.0.4.1.0"]',locateStrategy: 'xpath'},
//Truck Color
        dropTruck: {selector: '//a[@data-reactid=".0.0.0.0.2.4.0.0"]', locateStrategy: 'xpath'},
        blackTruck: {selector: '//img[@data-reactid=".0.0.0.0.2.4.1.1.0.0.1.0"]', locateStrategy: 'xpath'},
        blueTruck: {selector: '//img[@data-reactid=".0.0.0.0.2.4.1.1.0.1.1.0"]', locateStrategy: 'xpath'},
        greenTruck: {selector: '//img[@data-reactid=".0.0.0.0.2.4.1.1.0.2.1.0"]', locateStrategy: 'xpath'},
        goldTruck: {selector: '//img[@data-reactid=".0.0.0.0.2.4.1.1.0.3.1.0"]', locateStrategy: 'xpath'},
        noTruck: {selector: '//img[@data-reactid=".0.0.0.0.2.4.1.1.0.4.1.0"]', locateStrategy: 'xpath'},
//Wheel Color
        dropWheel: {selector: '//a[@data-reactid=".0.0.0.0.2.5.0.0"]', locateStrategy: 'xpath'},
        clearWheel: {selector: '//img[@data-reactid=".0.0.0.0.2.5.1.1.0.0.1.0"]', locateStrategy: 'xpath'},
        blueWheel: {selector: '//img[@data-reactid=".0.0.0.0.2.5.1.1.0.1.1.0"]', locateStrategy: 'xpath'},
        orangeWheel: {selector: '//img[@data-reactid=".0.0.0.0.2.5.1.1.0.2.1.0"]', locateStrategy: 'xpath'},
        blackWheel: {selector: '//img[@data-reactid=".0.0.0.0.2.5.1.1.0.3.1.0"]', locateStrategy: 'xpath'},
        noWheel: {selector: '//img[@data-reactid=".0.0.0.0.2.5.1.1.0.4.1.0"]', locateStrategy: 'xpath'},
//Bearing Selection
        dropBear: {selector: '//a[@data-reactid=".0.0.0.0.2.6.0.0"]', locateStrategy: 'xpath'},
        abec7Bear: {selector: '//a[@data-reactid=".0.0.0.0.2.6.1.1.0.0.1.0"]', locateStrategy: 'xpath'},
        abec9Bear: {selector: '//img[@data-reactid=".0.0.0.0.2.6.1.1.0.1.1.0"]', locateStrategy: 'xpath'},
        abec9BuiltBear: {selector: '//img[@data-reactid=".0.0.0.0.2.6.1.1.0.2.1.0"]', locateStrategy: 'xpath'},
        sixballBear: {selector: '//img[@data-reactid=".0.0.0.0.2.6.1.1.0.3.1.0"]', locateStrategy: 'xpath'},
        ceramicBear: {selector: '//img[@data-reactid=".0.0.0.0.2.6.1.1.0.4.1.0"]', locateStrategy: 'xpath'},
        noBear: {selector: '//img[@data-reactid=".0.0.0.0.2.6.1.1.0.5.1.0"]', locateStrategy: 'xpath'},        
//Cart
        cartBtn: {selector: '//button[@data-reactid=".0.0.0.0.2.0.1.0"]', locateStrategy: 'xpath'},
        submitBtn: {selector: '//button[@id="StickySubmit"]', locateStrategy: 'xpath'},
        
        
        






    }
}