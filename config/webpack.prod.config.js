const base = require('./webpack.base.config.js');
const config = require('./config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge'); 
const path = require('path');
const webpack = require('webpack');


module.exports = merge(base, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [ config.sassIncludes ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: config.css,
            allChunks: true
        })
    ]
});
