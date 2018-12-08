# 11.1 JSDOC Configuration

#### Sep 15, 2018 by Sreeram Padmanabhan, Last updated on Sep 18, 2018

## Summary

Generate documentation of the code using JSDocs.

## Install

`npm i --save-dev jsdoc`

## Configure

Create a file called `jsdoc.js` at root.

    module.exports = {
      "tags": {
        "allowUnknownTags": true,
      },
      "source": {
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_",
      },
      "plugins": [],
    };


## Execute

Add an npm script as follows

    ...
    "docs": "./node_modules/.bin/jsdoc src/web/components/**/*.js -c jsdoc.js"

