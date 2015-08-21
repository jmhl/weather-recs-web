'use strict';

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.es6$/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx$/, loader: 'babel-loader' },
    ]
  },
};
