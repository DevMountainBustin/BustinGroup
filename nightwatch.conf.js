module.exports = {
    src_folders : ["Tests"],
    page_objects_path : "pageObjects",
    webdriver : {
      start_process: true,
      server_path: require("chromedriver").path,
      port: 9515
    },
  
    test_settings : {
      default : {
        desiredCapabilities: {
          browserName: "chrome",
          chromeOptions:{
            w3c:false
          }
        }
      }
    }
  }