const base = require('./webpack.base.config.js');
const config = require('./config.js');
const merge = require('webpack-merge');
const path = require('path');


module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: config.dist,
        port: config.devPort,
        host: config.devHost
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [ config.sassIncludes ]
                            }
                        }
                ]
            }
        ]
    }
});
