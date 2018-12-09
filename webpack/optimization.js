const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          const index = 1;
          // get the name. E.g. node_modules/packageName/not/this/part.js
          // or node_modules/packageName
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[index];
          // npm package names are URL-safe, but some servers don't like @ symbols
          return `npm/npm-${packageName.replace('@', '')}`;
        },
      },
    },
  },
  minimizer: [
    new OptimizeCSSAssetsPlugin({}),
  ],
};