var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpack = require('html-webpack-plugin');
var CopyWebpack = require('copy-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(svg|ttf|woff|woff2|eot)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {extensions: [ '.js', '.jsx', '.css', '.json']},
    devServer: {
        inline: true,
        contentBase:'./build',
        port:8080
    },
    devtool:'source-map',
    plugins: [
       /* new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })*//*,
        new CopyWebpack([{
            from: './index.html'
        }]),
        new HtmlWebpack({
            template: './index.html'
        })*/
    ]
}