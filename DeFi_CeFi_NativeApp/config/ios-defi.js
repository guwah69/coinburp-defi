const {config} = require('./main')


config.cucumberOpts.require = ['./tests/e2e_tests/Steps/stepDef_DeFi.js'];

config.capabilities = [{
    "deviceName": "Iphone11",
    "platformName": "iOS",
    "platformVersion": "11",
    "appName": "app-release.apk",
    "appPackage": "com.coinburp.wallet",
    "appActivity": ".MainActivity",
    "resetOnSessionStartOnly": "true",
    "noReset": "false",
    "app":"/Users/em/Documents/coinburp_mobile_automation/app/DeFi/Rainbow.ipa"

}]
// config.suites = {
//     smokeTest: [
//         './tests/e2e_tests/DeFi/createWallet.feature'
//     ],
//     regressionTest: [
//         './tests/e2e_tests/DeFi/*.feature',
//     ]
// }
exports.config = config