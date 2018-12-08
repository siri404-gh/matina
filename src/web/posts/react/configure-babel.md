# Configure Babel

#### Sep 1, 2018 by Sreeram Padmanabhan, Last updated on Sep 13, 2018

## Summary

Not all browsers support the newer features of Javascript. So, if we are to use some of the latest features, we need to make sure that we convert them to browser readable form. Compilers like babel do just that.

## Install

`npm i --save babel-core babel-loader babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-react babel-plugin-add-react-displayname babel-plugin-istanbul babel-plugin-transform-class-properties babel-polyfill`

## Configure

Create a file called `.babelrc` at the root with the following code.

## Code

    {
      "presets": ["env", "react"],
      "plugins": [
        "react-hot-loader/babel",
        "istanbul",
        "add-react-displayname",
        "transform-class-properties",
        "transform-object-rest-spread"
      ]
    }

Commit and push.

Now, lets implement the bundling process.
