const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const DEBUG = false;
const styleLoaders = [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    {
        loader: 'sass-loader',
        options: {
            includePaths: [ 'src/css' ]
        }
    }
];

module.exports = {
    entry: './src/js/main.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,   
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.scss$/,
                use: DEBUG ? styleLoaders : ExtractTextPlugin.extract({ use: styleLoaders })
            }
        ]
    },
    plugins: [
        ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
    ]
};
