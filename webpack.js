var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'static/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
