
module.exports = {
    beforeEach: browser => {
        bustin = browser.page.bustinPage()
        bustin.navigate()
        browser.resizeWindow(1920, 1080)
    },
    after: browser => {
        bustin.end()
    },
    
}