const path = require('path');

module.exports = {
  mode: 'production',
  main: 'dist/bundle.js',
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              require('@babel/plugin-proposal-object-rest-spread')
            ]
          }
        }
      }
    ]
  }
};