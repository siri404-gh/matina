# Split vendor libraries

#### Sep 15, 2018 by Sreeram Padmanabhan

    entry: {
      app: './src/web/index.js',
      react: ['react', 'react-dom']
    },

Not needed if you are using splitChunks to split all vendor modules.