# Clean Webpack Plugin

#### Sep 20, 2018 by Sreeram Padmanabhan

npm i clean-webpack-plugin --save-dev

const CleanWebpackPlugin = require('clean-webpack-plugin');



    new CleanWebpackPlugin([ 'dist' ], {
      root: path.resolve(__dirname, '../'),
      exclude: [],
      verbose: false,
      dry: false,
    }),