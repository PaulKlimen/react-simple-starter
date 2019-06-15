const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    historyApiFallback: true,
    hotOnly: true,
    open: true,
    overlay: true,
    stats: 'minimal',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Visualizer(),
  ]
});
