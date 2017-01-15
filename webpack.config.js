require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = [{
  name: 'js',
  devtool: 'cheap-eval-source-map',
  entry: ['./src/index.jsx'],
  output: {
    filename: 'dist.js',
    path: `${__dirname}/dist`,
    publicPath: `${__dirname}/dist`,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'node_modules'),
  },
  devServer: {
    inline: true,
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
},

];
