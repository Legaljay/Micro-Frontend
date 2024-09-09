const HtmlWebpackModule = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    }, 
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart', //do not have an ID with thesame name has the module
            filename: 'remoteEntry.js',
            exposes: {
                // './CartShow': './src/index',
                './CartShow': './src/bootstrap',
            },
            // shared: ['faker'],
            shared: {
                faker: {
                    singleton: true, //this means we only want to load up one copy of faker
                },
            }
        }),
        new HtmlWebpackModule({
            template: './public/index.html'
        }),
    ]
}