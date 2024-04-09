const {config} = require('./main')

config.cucumberOpts.require = ['./tests/e2e_tests/Steps/stepDef_CeFi.js'];

config.capabilities = [{
    "deviceName": "Iphone11",
    "platformName": "iOS",
    "platformVersion": "11",
    "appName": "app-release.apk",
    "appPackage": "com.coinburp.mobile",
    "appActivity": ".MainActivity",
    "resetOnSessionStartOnly": "true",
    "noReset": "false",
    "fullReset": "true",
    "app":"/Users/em/Documents/coinburp_mobile_automation/app/CeFi/CoinBurpMobile.ipa"

}]
// config.suites = {
//     smokeTest: [
//         './tests/e2e_tests/CeFi/login.feature'
//     ],
//     regressionTest: [
//         './tests/e2e_tests/CeFi/*.feature',
//     ]
// }

exports.config = config
   