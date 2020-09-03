const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware'); //连接webpack配置
const webpackHotMiddleware = require('webpack-hot-middleware'); //热更新模块
const path = require('path')
const app = express();
const fs = require('fs');
const config = require('./webpack.dev.js');
const compiler = webpack(config);

// const options = {
//     contentBase:'./dist',
//     hot:true,
//     host:'localhots'
// }

// webpackDevServer.addDevServerEntrypoints(config,options);
// const compiler = webpack(config);
// const server = new webpackDevServer(compiler,options);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'dist')))

app.use(function (request, response) {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})


app.listen(3000, function () {})