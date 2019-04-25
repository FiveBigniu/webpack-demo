const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin');//生成之前清除dist文件夹下的
const webpack = require('webpack');

module.exports = {
    entry: {
        app:'./src/index.js',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Production'
        }),
        new webpack.ProvidePlugin({ //_ 全局使用lodash 
            _:'lodash',
            join: ['lodash', 'join']
        })
    ]
};