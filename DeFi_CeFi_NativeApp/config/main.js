let chai = require("chai")
const allure = require('allure-commandline');

exports.config = {
    framework: 'cucumber',
    deprecationWarnings: true,
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://coinburp.com',
    waitforTimeout: 10000,
    maxInstances: 10,
    sync: true,
    runner: 'local',
    port: 4723,
    hostname: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    cucumberOpts: {
        requireModule: ['@babel/register'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 100000,
        ignoreUndefinedDefinitions: true,
        tagExpression: 'not @skip',
    },
    specs: ['./tests/e2e_tests/DeFi/*.feature'],
    suites: {
      DefiAndroid: [
        './tests/e2e_tests/DeFi/createWallet.feature'
      ],
      CefiAndroid: [
        './tests/e2e_tests/CeFi/login.feature'
      ],
      Cefiios: [
        './tests/e2e_tests/CeFi/login.feature'
      ],
      Defiios: [
        './tests/e2e_tests/DeFi/createWallet.feature'
      ],
      AlltestsDefi: [
        './tests/e2e_tests/DeFi/*.feature'
      ],
      AlltestsCefi: [
        './tests/e2e_tests/CeFi/*.feature'
      ],
    },

    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
    ],

    before: function () {
        global.chaiExpect = chai.expect
    },


    //This code is responsible for taking the screenshot in case of error and attaching it to the report
    afterStep(uri, feature, scenario) {
        if (scenario.error) {
            driver.takeScreenshot();
        }
    }
}
