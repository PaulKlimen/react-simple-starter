const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
  },

  stats: {
    chunks: false,
    modules: false,
    colors: true,
  },

  profile: true,

  optimization: {
    minimizer: [new UglifyJsPlugin({
      chunkFilter: (chunk) => {
        // Exclude uglification for the `vendor` chunk
        return chunk.name !== 'vendor';
      },
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
    })],
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ]
});
