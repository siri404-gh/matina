# Code splitting

Add this to webpack.common.js

    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
