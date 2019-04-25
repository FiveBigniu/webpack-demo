const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin');//生成之前清除dist文件夹下的
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',//如果代码有错，控制台报错可以找到源文件，而非打包文件
    devServer: {
        contentBase: './dist', //建立服务 运行开发环境
        hot: true //启用热跟新
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),//热更新依赖详情
        new webpack.HotModuleReplacementPlugin(), //热更新
        // new webpack.optimize.CommonsChunkPlugin({//提取公共重复模块 生成common命名的文件
        //     name: 'common'
        // })
    ],
    mode: "production", //压缩输出 未使用的代码删除
};