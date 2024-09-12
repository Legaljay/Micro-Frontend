const { merge } = require('webpack-merge'); //used to merge two different webpack config objects 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json'); //load up all dependencies to be used as shared modules



const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',

        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: packageJson.dependencies, // this approach is not neccesary if you are specific about the dependencies you want to share

        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
};


module.exports = merge(commonConfig, devConfig);

