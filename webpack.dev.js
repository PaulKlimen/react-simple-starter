const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const WebpackNotifier = require('webpack-notifier');

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
      chunks: false,
      modules: false,
      colors: true,
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifier({
      title: 'React Simple Starter',
    }),
  ]
});
