# 16.1 Automated Cross browser testing in Browserstack

#### Sep 20, 2018 by Sreeram Padmanabhan

npm i --save-dev karma-browserstack-launcher

## Environment Variables
`BROWSERSTACK_USER`

`BROWSERSTACK_TOKEN`

## Configuration

`karma.browserstack.conf.js`

    const { customLaunchers, browsers } = require('./karma.browserstack.launchers');
    const webpackConfig = require('./webpack/webpack.test');

    module.exports = function (config) {
      config.set({
        browserStack: {
          username: process.env.BROWSERSTACK_USER,
          accessKey: process.env.BROWSERSTACK_TOKEN,
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
        reporters: [ 'dots', 'BrowserStack' ],
        webpack: webpackConfig,
      });
    };

`karma.browserstack.launchers.js`

    const customLaunchers = {
      bs_chrome_mac: {
        base: 'BrowserStack',
        browser: 'Chrome',
        browser_version: '49',
        os: 'OS X',
        os_version: 'Mountain Lion',
      },
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'Firefox',
        browser_version: '48',
        os: 'OS X',
        os_version: 'Mountain Lion',
      },
      bs_safari_mac: {
        base: 'BrowserStack',
        browser: 'Safari',
        browser_version: '6.2',
        os: 'OS X',
        os_version: 'Mountain Lion',
      },
    };

    const browsers = ['bs_chrome_mac', 'bs_firefox_mac', 'bs_safari_mac'];

    module.exports = { customLaunchers, browsers };

`package.json`

    "test:dev": "karma start --auto-watch=true --single-run=false"