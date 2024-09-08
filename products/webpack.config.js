const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development', 
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js', //sets the name of the manifest file. Leave it as 'remoteEntry.js' unless you've got a good reason to change it
            exposes: { // controls which modules/files we want to expose to the outside world 
                './ProductsIndex': './src/index' //Aliases filename
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
};