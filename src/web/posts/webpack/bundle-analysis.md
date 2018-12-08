# Webpack Bundle Analysis

#### Sep 2, 2018 by Sreeram Padmanabhan, Last updated on Sep 14, 2018

## Summary

In the previous chapter, we saw how webpack bundles the souce code and we saw the emitted size of the assets (or bundle). It is important to keep your bundle to a low size. If not minified, uglified and compressed, the bundled file can be of great size which will have a direct impact on performance. Webpack bundle analyser is a plugin which will tell you what consumes all the size in the bundled file.

## Install

`npm install webpack-bundle-analyzer --save-dev`

## Configure

Add these lines to your `webpack.prod.js` in the `plugins` section.

## Code

    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

    ...
    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: path.resolve(__dirname, `../dist/bundle.html`),
      }),
    ]

## Execute
`./node_modules/.bin/webpack --env=prod --config=webpack/webpack.config.js`

or

`npx webpack --env=prod --config=webpack/webpack.config.js`

You can see a file called `bundle.html` in the dist folder once the prod build has been successfully completed. Open it to understand which packages take up the most space. It will look something like this below.

![bundle analysis output](/img/bundle_analysis_output.png "bundle analysis output")

Commit and push.
