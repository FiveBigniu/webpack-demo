const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        // filename: '[name].[chunkhash].js',
        filename: 'bundle-[hash].js', //server.js
        publicPath: '/', //server.js配置静态文件路径时引入
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/,
            //     include: __dirname,
            // },
            {
                test: /\.css|\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: [
                        ["import", {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": "css" // `style: true` 会加载 less 文件 解决antdesign样式不加载
                        }]
                    ]
                }

            },
            {
                test: /\.svg|\.ico$/,
                use: ['file-loader']
            }
        ]
    },
};