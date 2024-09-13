const { merge } = require('webpack-merge'); //used to merge two different webpack config objects 
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json'); //load up all dependencies to be used as shared modules

const domain = process.env.PRODUCTION_DOMAIN;



const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js', // this ensures that whenever we build some files for production, 
        // all the different files that are built are going to use this template for naming. it is done primarily for caching issues.

    },
    optimization: {},
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies, // this approach is not neccesary if you are specific about the dependencies you want to share

        }),
    ]
};


module.exports = merge(commonConfig, prodConfig);