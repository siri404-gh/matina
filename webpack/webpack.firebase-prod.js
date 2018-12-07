const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      precacheManifestFilename: 'wb-manifest.[manifestHash].js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        LOGROCKET_ID: JSON.stringify(process.env.LOGROCKET_ID),
        AIRBRAKE_PROJECT_KEY: JSON.stringify(process.env.AIRBRAKE_PROJECT_KEY),
        AIRBRAKE_ID: JSON.stringify(process.env.AIRBRAKE_ID),
        FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY_PROD),
        FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN_PROD),
        FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL_PROD),
        FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID_PROD),
        FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET_PROD),
        FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID_PROD),
      },
    }),
  ],
});