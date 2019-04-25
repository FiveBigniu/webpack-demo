const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); 
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common,{
    devtool:'source-map',//开发环境用的 inline-source-map
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true //代码压缩 将输出的js变得最小 丑化代码
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production') //为所有依赖定义这个变量 使某些特定比如测试下能用
        }),

    ]
})