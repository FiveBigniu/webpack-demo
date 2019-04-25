const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware'); //连接webpack配置
const webpackHotMiddleware = require('webpack-hot-middleware'); //热更新模块

const app = express();
const config = require('./webpack.config.js');
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
    noInfo:true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler));

app.listen(3000, function () {

})