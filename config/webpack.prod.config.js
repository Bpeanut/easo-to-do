const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); // 用于优化和压缩CSS代码
const { CleanWebpackPlugin} = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require("webpack");

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js", // 有2种hash，效果不一样
        path: path.resolve(__dirname, "../dist"),
        publicPath: "./",
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin({
            cssProcessorPluginOptions: {
                preset: ["default", { discardComments: { removeAll: true } }],
            }
        })
        // 依赖分析
        // new BundleAnalyzerPlugin()
        //PWA
        // new WorkboxPlugin.GenerateSW({
        //   clientsClaim: true,
        //   skipWaiting: true,
        //   importWorkboxFrom: 'local',
        //   include: [/\.js$/, /\.css$/, /\.html$/, /\.jpg/, /\.jpeg/, /\.svg/, /\.webp/, /\.png/],
        // }),
    ]
}

module.exports = merge(baseConfig, prodConfig);