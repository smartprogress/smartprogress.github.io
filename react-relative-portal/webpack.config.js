const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [path.join(__dirname, 'src/index.js')],
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    publicPath: '/react-relative-portal',
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      title: 'react-relative-portal examples',
      hash: true,
      template: '!!ejs!src/index.ejs',
    }),
  ],
};
