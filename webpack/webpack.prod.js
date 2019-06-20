const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
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
        if (chunk.name === 'vendor') {
          return false;
        }

        return true;
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
