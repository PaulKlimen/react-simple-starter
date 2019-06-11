const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'main.[contenthash].js',
        chunkFilename: 'chunk.[contenthash].js',
    },

    resolve: { extensions: ['.js', '.jsx'] },

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
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'React Simple Starter',
        }),
        new CleanWebpackPlugin(),
    ]
};


