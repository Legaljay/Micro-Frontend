const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development', 
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', //only needed for clarity
            remotes: { //list projects that the container can search to get additional code
                products: 'products@http://localhost:8081/remoteEntry.js', //loads the file at the listed URL if anything in Container has an import like: ~import abc from 'products'~;
                //products ~ Related to the 'name' property in the Products webpack config file
                //@http://... ~ URL for the remoteEntry file
                cart: 'cart@http://localhost:8082/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
};