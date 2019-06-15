const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    historyApiFallback: true,
    hotOnly: true,
    open: true,
    overlay: true,
    stats: {
      // Add chunk information (setting this to `false` allows for a less verbose output)
      chunks: false,
      // Add built modules information
      modules: false,
      // `webpack --colors` equivalent
      colors: true,
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Visualizer(),
  ]
});
