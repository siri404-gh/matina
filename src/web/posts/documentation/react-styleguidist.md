# 11.2 React styleguidist

#### Sep 2, 2018 by Sreeram Padmanabhan

## Summary

Like knowing how to write code, it is important to be equally good in know how to read it. Even more so, it is harder to read and understand someone else's code. Although code in itself is the ultimate documentation in itself, I often face issues while trying to understand what the previous developer intended to do. Hence, It is always good to provide documentation for your code. This helps in anyone reading the code understand it quicker. React styleguidist takes all these comments and creates a site out of it. You could deploy this as a static documentation website of your code.

## Install

`npm install --save-dev react-styleguidist`

## Configure

Create a file called `styleguide.config.js` at the root with the following code.

## Code

    module.exports = {
      components: 'src/web/components/**/[A-Z]*.js',
        webpackConfig: Object.assign({}, require('./webpack/webpack.prod'),
        {
          node: {
            net: 'empty',
            tls: 'empty',
            dns: 'empty',
            fs: 'empty',
          },
          plugins: [],
        }
      ),
    };

## Execute

`npx styleguidist server` - Serves a static website locally.

`npx styleguidist build` - Emits a static website.

## Note

You might have to enable externals in your `webpack.prod.js`

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

Commit and push.
