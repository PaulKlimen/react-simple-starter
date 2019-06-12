const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src"),
    ],
    extensions: ['.js', '.jsx'],
  },

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
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'React Simple Starter',
    }),
    new CleanWebpackPlugin(),
  ]
};


