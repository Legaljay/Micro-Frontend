const { merge } = require('webpack-merge'); //used to merge two different webpack config objects 
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json'); //load up all dependencies to be used as shared modules


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',

        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'Container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ]
};


module.exports = merge(commonConfig, devConfig);

