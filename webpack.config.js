const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: ['./src/index.js'],
  output: {
    filename: 'dist.js',
    path: `${__dirname}/dist`,
    publicPath: `${__dirname}/dist`,
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel' },
      { test: /\.jsx?$/, loader: 'babel' },
    ],
  },
  devServer: {
    inline: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // To enable production mode:
        // NODE_ENV: JSON.stringify('production')
      },
    }),
  ],
};
