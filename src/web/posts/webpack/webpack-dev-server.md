# 9.7 Webpack Dev Server

#### Sep 2, 2018 by Sreeram Padmanabhan, Last updated on Sep 18, 2018

## Summary

In the previous chapter, we generated the prod bundle, the dev bundle and a html file referencing the bundled file in each of the modes. You could double click and open the file but thats not what we intend to do. Our goal is to deploy it in a server and users will access it via the internet. So, we need to deploy it in a webserver accessible by all. But, for development purposes, lets create a mock server.

Webpack-dev-server is a powerful tool which creates a development server with live reloading without having to create and start your own server. Webpack-dev-server does this work for us. (Note that this is not to be confused with Hot Module replacement which is a different topic.). Our aim here is to write code, save it and refresh the browser to see the updated app.

**Note**: Use this in development mode only.

## Install

`npm install webpack-dev-server --save-dev`

## Configure

Add this to your webpack.dev.js

## Code

    const path = require('path');

    ...
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      compress: true,
      port: 9000,
    },

Webpack-dev-server opens an express server internally and serves at the specified port.

When compress is set to false, it sends the raw files across. If you look closely at the image below, there is no compression.

![webpack-dev-server-no-compress-network](/img/webpack-dev-server-no-compress-network.png "webpack-dev-server-no-compress-network")

And the headers in the response is like below.

![webpack-dev-server-no-compress-header](/img/webpack-dev-server-no-compress-header.png "webpack-dev-server-no-compress-header")


When its set to true, it gzip compresses the files and sends a `content-Encoding: gzip` header along with the responses.

![webpack-dev-server-compress-network](/img/webpack-dev-server-compress-network.png "webpack-dev-server-compress-network")

And the headers in the response is like below.

![webpack-dev-server-compress-header](/img/webpack-dev-server-compress-header.png "webpack-dev-server-compress-header")

## Execute
`npx webpack-dev-server --open --env=dev --config=webpack/webpack.config.js`

And now, we see our first output in the browser. Phew!.

Commit and push.
