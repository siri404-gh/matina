# 16.2 Automated Cross browser testing in Saucelabs

#### Sep 20, 2018 by Sreeram Padmanabhan

## Install

npm i --save-dev karma-sauce-launcher

## Environment Variables
`SAUCE_USER`

`SAUCE_TOKEN`

## Configuration


`karma.sauce.conf.js`

    const { customLaunchers, browsers } = require('./karma.sauce.launchers');
    const webpackConfig = require('./webpack/webpack.test');

    module.exports = function (config) {
      config.set({
        sauceLabs: {
          testName: "Boilerplate",
          // recordVideo: true
          username: process.env.SAUCE_USER,
          accessKey: process.env.SAUCE_TOKEN,
          tunnelIdentifier: 'Boilerplate Tests',
        },
        customLaunchers,
        browsers,
        basePath: '.',
        singleRun: true,
        frameworks: ['jasmine'],
        files: [
          'src/web/spec.js',
        ],
        preprocessors: {
          'src/web/spec.js': [ 'webpack', 'sourcemap' ],
        },
        reporters: [ 'dots', 'saucelabs' ],
        webpack: webpackConfig,
      });
    };


`karma.sauce.launchers`

    const customLaunchers = {
      sl_ie_11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11'
      },
      sl_firefox: {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '30'
      },
      sl_chrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'Windows 7',
        version: '35'
      },
    };

    const browsers = ['sl_ie_11', 'sl_firefox', 'sl_chrome'];

    module.exports = { customLaunchers, browsers };

`package.json`

    "test:saucelabs": "karma start karma.sauce.conf.js"