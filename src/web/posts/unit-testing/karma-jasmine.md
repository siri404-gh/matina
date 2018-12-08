# 15.1 Unit testing using Karma, Jasmine

#### Sep 20, 2018 by Sreeram Padmanabhan

## Install

`npm i --save-dev jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-sourcemap-loader karma-webpack`

`npm  i --save babel-plugin-istanbul`

## Configure

`karma.conf.js`

    const webpackConfig = require('./webpack/webpack.test');

    module.exports = function (config) {
      config.set({
        basePath: '.',
        browsers: [ 'ChromeHeadless' ],
        autoWatch: false,
        singleRun: true,
        frameworks: [ 'jasmine' ],
        files: [
          // 'src/web/components/App/App.js',
          'src/web/spec.js',
        ],
        preprocessors: {
          // 'src/web/components/App/App.js': ['webpack'],
          'src/web/spec.js': [ 'webpack', 'sourcemap' ],
        },
        reporters: [ 'dots', 'coverage' ],
        coverageReporter: {
          includeAllSources: true,
          reporters: [
            { type: 'html', subdir: 'test' },
            { type: 'lcovonly', subdir: '.', file: 'test/lcov.txt' },
          ],
          dir: `./dist`,
        },
        webpack: webpackConfig,
      });
    };

`src/web/spec.js`

    const context = require.context('./', true, /\.test\.js$/);
    context.keys().forEach(context);

    `src/web/components/App/App.test.js`

    describe("some", () => {
      it("should run tests", () => {
        expect(true).toBe(true);
      });
    });

`webpack/webpack.test.js`

    module.exports = {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.md$/,
            exclude: /node_modules/,
            use: {
              loader: 'raw-loader',
            },
          },
        ],
      },
      externals: {
        request: {
          commonjs: 'request',
          commonjs2: 'request',
        },
        os: {
          commonjs: 'os',
          commonjs2: 'os',
        },
        process: 'process',
      },
    };

`package.json`

    "test": "karma start",
    "test:dev": "karma start --auto-watch=true --single-run=false"