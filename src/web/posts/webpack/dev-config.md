# 9.1 Webpack Dev Config

#### Sep 2, 2018 by Sreeram Padmanabhan, Last updated on Sep 14, 2018

## Summary

In the previous 3 chapters, we saw how to setup the development environment, we pushed the initial set of code, we configured editorconfig, eslint, we created the entry point, configured babel and hot module replacement and we saw why we should compile and bundle the source code.

Because browsers dont support the latest features of Javascript, we use babel to compile our JS to ES5 format. We can tell webpack to do that. It compiles the code using babel bundles it to create an output file. You need to specify the configuration in a file called `webpack.config.js`. You can also have multiple config files for different environments. For eg, `webpack.dev.js` for Development and `webpack.prod.js` for production. You just need to specify which environment to build for via command line. In this case, we have a `webpack.config.js` and a `webpack.dev.js` and we invoke it using `webpack --env=dev -c webpack/webpack.config.js`.

## Install

`npm i --save-dev webpack webpack-cli`

## Configure

Create a file called `webpack/webpack.config.js` and `webpack/webpack.dev.js` at the root with the following code.

## Code for webpack.config.js

    module.exports = env => require(`./webpack.${env}.js`);

## Code for webpack.dev.js

    import path from 'path';

    module.exports = {
      entry: {
        app: './src/web/index.js',
      },
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'my-first-webpack.bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      mode: 'development',
    };

## Execute

`./node_modules/.bin/webpack --env=dev --config=webpack/webpack.config.js`

or

`npx webpack --env=dev --config=webpack/webpack.config.js`

The output will look like this. Notice the build time, asset name and the asset size. These are important.

![webpack dev output](/img/webpack_dev_output.png "webpack dev output")

## Concepts

### Entry

This is the entry file to tell webpack where to start the packaging from. In our case, its `src/web/index.js`. I have also set react as another entry point. More on this later.

### Output

This tells webpack where to output the end product. Also specified is the name of the file to be output as. So, all the code in our `src/web/index.js` will be output as `dist/my-first-webpack-bundle.js`. If you look at both the codes, they will look vastly different. It will look something like this given below.

![webpack dev code](/img/webpack_dev_code.png "webpack dev code")

### Module

You need to tell webpack how to compile files. We specify this in the `module` section. In our config, we are telling webpack to compile all `.js` files using `babel-loader`.

Commit and push.
