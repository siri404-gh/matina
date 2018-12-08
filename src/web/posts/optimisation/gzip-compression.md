# Gzip compression

#### Sep 15, 2018 by Sreeram Padmanabhan

`npm install compression-webpack-plugin --save-dev`

Add this in `webpack.prod.js` as a plugin.

    const CompressionPlugin = require('compression-webpack-plugin');

    plugins: [
      ...
      new CompressionPlugin({
        test: /\.js/,
        cache: true,
        filename: info =>`${info.path}.gz${info.query}`,
        algorithm: 'gzip',
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),
    ]
