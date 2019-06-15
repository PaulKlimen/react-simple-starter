const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  stats: {
    chunks: false,
    modules: false,
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ]
});
