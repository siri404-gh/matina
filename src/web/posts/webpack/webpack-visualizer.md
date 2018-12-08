# 9.4 Webpack Bundle Analysis

#### Sep 2, 2018 by Sreeram Padmanabhan, Last updated on Sep 14, 2018

## Summary

In the previous chapter, we saw how to use the bundle analysis plugin to see which package consumes the most space. In this chapter, we will look at another plugin - Webpack Visualizer plugin which gives a better visual of space consumption. Personally, I prefer this over bundle analysis plugin because it gives the output in the form of a pie chart.

## Install

`npm install webpack-visualizer-plugin --save-dev`

## Configure

Add these lines to your `webpack.prod.js` in the `plugins` section.

## Code

    const Visualizer = require('webpack-visualizer-plugin');

    ...
    plugins: [
      new Visualizer({
        filename: './visualizer.html',
      }),
    ]

## Execute
`./node_modules/.bin/webpack --env=prod --config=webpack/webpack.config.js`

or

`npx webpack --env=prod --config=webpack/webpack.config.js`

You can see a file called `visualizer.html` in the dist folder once the prod build has been successfully completed. Open it to understand which packages take up the most space. It will look something like this below.

![visualizer output](/img/visualizer_output.png "visualizer output")

Commit and push.
