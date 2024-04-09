const { config } = require('./main')

config.cucumberOpts.require = ['./tests/e2e_tests/Steps/stepDef_CeFi.js'];

config.capabilities = [{

    "deviceName": "8235eb51",
    "platformName": "Android",
    "platformVersion": "9",
    "appName": "app-release.apk",
    "appPackage": "com.coinburp.mobile",
    "appActivity": ".MainActivity",
    "resetOnSessionStartOnly": "true",
    "noReset": "false",
    "app": "/Users/em/Documents/CoinBurp/coinburp_mobile_automation/app/CeFi/app-release.apk"

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