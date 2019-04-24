const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin');//生成之前清除dist文件夹下的

module.exports = {
    entry: {
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool:'inline-source-map',//如果代码有错，控制台报错可以找到源文件，而非打包文件
    devServer:{
        contentBase:'./dist' //建立服务 运行开发环境
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]  
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        
    ]
};