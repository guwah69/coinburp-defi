const {config} = require('./main')


config.cucumberOpts.require = ['./tests/e2e_tests/Steps/stepDef_DeFi.js'];

config.capabilities = [{
    "deviceName": "8235eb51",
    "platformName": "Android",
    "platformVersion": "9",
    "appName": "app-release.apk",
    "appPackage": "com.coinburp.wallet",
    "resetOnSessionStartOnly": "true",
    "appActivity": ".MainActivity",
    "noReset": "false",
    "app": "/Users/em/Documents/CoinBurp/coinburp_mobile_automation/app/DeFi/app-release.apk"
  
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

