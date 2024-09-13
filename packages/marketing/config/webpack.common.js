const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // whenever we import in a file that ends with mjs or js, we want it processed by babel
                exclude: /node_modules/, // do not run this babel thing on files in this (node module) directory
                use: {
                    loader: 'babel-loader', // the goal of a loader is to tell webpack to process some different files as we start to import them into our project 
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}

