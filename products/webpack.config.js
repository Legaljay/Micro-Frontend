const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development', 
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products', //do not have an ID with thesame name has the module
            filename: 'remoteEntry.js', //sets the name of the manifest file. Leave it as 'remoteEntry.js' unless you've got a good reason to change it
            exposes: { // controls which modules/files we want to expose to the outside world 
                //'./ProductsIndex': './src/index' //Aliases filename
                './ProductsIndex': './src/bootstrap', //since my export occurs here
            },
            //shared: ['faker'], //these array holds the list of shared dependencies
            shared: {
                faker: {
                    singleton: true, //this means we only want to load up one copy of faker
                },
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
};