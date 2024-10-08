const { merge } = require('webpack-merge'); //used to merge two different webpack config objects 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',

        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
};


module.exports = merge(commonConfig, devConfig);

