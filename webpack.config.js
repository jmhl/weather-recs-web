'use strict';

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.es6$/, exclude: /node_modules/, loader: 'babel-loader', query: { stage: 0 } },
      { test: /\.jsx/, exclude: /node_modules/, loader: 'babel-loader', query: { stage: 0 } },
      { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader', query: { stage: 0 } },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
};
