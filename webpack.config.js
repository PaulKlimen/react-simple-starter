const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  mode: process.env.NODE_ENV,

  resolve: { extensions: ['.js', '.jsx'] },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    historyApiFallback: true,
    hotOnly: true,
    open: true,
    overlay: true,
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
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src'],
            minimize: true,
          }
        }
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'React Simple Starter',
    }),
    new CleanWebpackPlugin(),
    new Visualizer(),
  ]
};


