const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const proxyConfig = require("./proxy.config");
const webpack = require("webpack");
const devConfig = {
    mode: "development",
    devServer: {
        contentBase: ".", // 使用静态文件时需要;告诉服务器从哪个目录中提供内容
        port: 5946,
        hot: true,
        proxy: {
            "/api": {
                target: proxyConfig.target,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "",
                }
            }
        },
        disableHostCheck: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(baseConfig, devConfig);