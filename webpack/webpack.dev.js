const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ports: { wdsPort, serverPort }, dist } = require('../config/variables');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, `../${dist}`),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    // lazy: true,
    contentBase: path.join(__dirname, `../${dist}`),
    compress: true,
    port: wdsPort,
    hotOnly: true,
    // https: true,
    proxy: {
      '**': 'http://localhost:' + serverPort,
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY_STAGE),
        FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN_STAGE),
        FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL_STAGE),
        FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID_STAGE),
        FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET_STAGE),
        FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID_STAGE),
      },
    }),
  ],
});