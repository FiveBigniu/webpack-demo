const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//生成之前清除dist文件夹下的
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true, //路由刷新后能访问页面
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: 'index.html',
            filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),//热更新依赖详情
        new webpack.HotModuleReplacementPlugin(), //热更新
        // new webpack.ProvidePlugin({ //_ 全局使用lodash 
        //     _: 'lodash',
        //     join: ['lodash', 'join']
        // })
    ],
    // devServer: {
    //     proxy: {
    //         '/': {
    //             bypass: function (req, res, proxyOptions) {
    //                 console.log('Skipping proxy for browser request.')
    //                 return '/index.html'
    //             }
    //         }
    //     }
    // }
})