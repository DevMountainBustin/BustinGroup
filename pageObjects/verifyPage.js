module.exports = {
    elements: {
        //Boards
        sportsterVerif: {selector: '//a[contains(text(), "Sportster")]', locateStrategy: 'xpath'},
        shrikeVerif: {selector: '//a[contains(text(), "Shrike")]', locateStrategy: 'xpath'},
        maestroVerif: {selector: '//a[contains(text(), "Maestro")]', locateStrategy: 'xpath'},
        yofaceVerif: {selector: '//a[contains(text(), "Yoface")]', locateStrategy: 'xpath'},
        //Graphics
        capVerif: {selector: '//div[contains(text(), "Capital")]', locateStrategy: 'xpath'},
        boomVerif: {selector: '//div[contains(text(), "Boombox")]', locateStrategy: 'xpath'},
        bedstuyVerif: {selector: '//div[contains(text(), "Bedstuy")]', locateStrategy: 'xpath'},
        direwolfVerif: {selector: '//div[contains(text(), "Direwolf")]', locateStrategy: 'xpath'},
        dragonVerif: {selector: '//div[contains(text(), "Dragon")]', locateStrategy: 'xpath'},
        exposureVerif: {selector: '//div[contains(text(), "Exposure")]', locateStrategy: 'xpath'},
        jonasVerif: {selector: '//div[contains(text(), "Jonas")]', locateStrategy: 'xpath'},
        symbolsVerif: {selector: '//div[contains(text(), "Symbols")]', locateStrategy: 'xpath'},
        timesVerif: {selector: '//div[contains(text(), "Times")]', locateStrategy: 'xpath'},
        yannVerif: {selector: '//div[contains(text(), "Yann")]', locateStrategy: 'xpath'},
        //Stains
        woodStnVerif: {selector: '//div[contains(text(), "Natural Wood")]', locateStrategy: 'xpath'},
        whiteStnVerif: {selector: '//div[contains(text(), "White Wash")]', locateStrategy: 'xpath'},
        blackStnVerif: {selector: '//div[contains(text(), "Black Wash")]', locateStrategy: 'xpath'},
        redStnVerif: {selector: '//div[contains(text(), "Red Wash")]', locateStrategy: 'xpath'},
        yellowStnVerif: {selector: '//div[contains(text(), "Yellow Strokes")]', locateStrategy: 'xpath'},
        //Finishes
        blueFnshVerif: {selector: '//div[contains(text(), "Blue Strokes")]', locateStrategy: 'xpath'},
        greenFnshVerif: {selector: '//div[contains(text(), "Green Strokes")]', locateStrategy: 'xpath'},
        rainbowFnshVerif: {selector: '//div[contains(text(), "Rainbow Strokes")]', locateStrategy: 'xpath'},
        purpleFnshVerif: {selector: '//div[contains(text(), "Teal Purple Strokes")]', locateStrategy: 'xpath'},
        blueLineFnshVerif: {selector: '//div[contains(text(), "Blue Geo")]', locateStrategy: 'xpath'},
        //Trucks
        blackTrkVerif: {selector: '//div[a[contains(text(), "Caliber Truck Co.")] and div[contains(text(), "Black")]]', locateStrategy: 'xpath'},
        blueTrkVerif: {selector: '//div[a[contains(text(), "Caliber Truck Co.")] and div[contains(text(), "Satin Blue")]]', locateStrategy: 'xpath'},
        greenTrkVerif: {selector: '//div[a[contains(text(), "Caliber Truck Co.")] and div[contains(text(), "Satin Green")]]', locateStrategy: 'xpath'},
        goldTrkVerif: {selector: '//div[a[contains(text(), "Caliber Truck Co.")] and div[contains(text(), "Gold")]]', locateStrategy: 'xpath'},
        yoBlackTrkVerif: {selector: '//div[a[contains(text(), "Yoface Truck Choice")] and div[contains(text(), "Black")]]', locateStrategy: 'xpath'},
        //Wheels
        clearWhlVerif: {selector: '//div[a[contains(text(), "Premier Formula")] and div[contains(text(), "Clear")]]', locateStrategy: 'xpath'},
        blueWhlVerif: {selector: '//div[a[contains(text(), "Premier Formula")] and div[contains(text(), "Blue")]]', locateStrategy: 'xpath'},
        orangeWhlVerif: {selector: '//div[a[contains(text(), "Premier Formula")] and div[contains(text(), "Orange")]]', locateStrategy: 'xpath'},
        blackWhlVerif: {selector: '//div[a[contains(text(), "Premier Formula")] and div[contains(text(), "Black")]]', locateStrategy: 'xpath'},
        //Bearings
        abec7BearVerif: {selector: '//a[contains(text(), "Abec-7")]', locateStrategy: 'xpath'},
        abec9BearVerif: {selector: '//a[contains(text(), "Abec-9 Speed")]', locateStrategy: 'xpath'},
        abec9BuiltBearVerif: {selector: '//a[contains(text(), "Built-In Abec-9")]', locateStrategy: 'xpath'},
        sixballBearVerif: {selector: '//a[contains(text(), "6-Ball")]', locateStrategy: 'xpath'},
        ceramicBearVerif: {selector: '//a[contains(text(), "Ceramic")]', locateStrategy: 'xpath'},
    }
}