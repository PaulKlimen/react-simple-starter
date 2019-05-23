const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  mode: 'development',

  resolve: { extensions: ['.js', '.jsx'] },

  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
        loader: 'file-loader',
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React starter',
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
};
