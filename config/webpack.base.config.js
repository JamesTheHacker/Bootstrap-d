const config = require('./config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: [
        'font-awesome/scss/font-awesome.scss',
        'bootstrap-loader',
        config.entry
    ],
    output: {
        path: config.dist,
        filename: config.js
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,   
                exclude: [ path.join(__dirname, 'node_modules') ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'env', 'react' ]
                    }
                }
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({ template: config.index }),
    ]
};
