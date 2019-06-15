const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js', '.jsx'],
    descriptionFiles: ['package.json'],
  },

  optimization: {
    runtimeChunk: 'single', //extract all webpack runtime logic to a single bundle
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, //extract all node_modules required staff to a separate bundle
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  profile: true,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve('src'),
        use: ['thread-loader', 'cache-loader', 'babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
          },
        }],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'React Simple Starter',
    }),
    new CleanWebpackPlugin(),
  ]
};


