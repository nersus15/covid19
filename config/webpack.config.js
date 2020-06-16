const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/index.js',
        server: './src/server.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /datatables\.net.*/,
                use: [
                    {loader: 'imports-loader?define=>false'}
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            moment: 'moment'
        })
    ]
}
