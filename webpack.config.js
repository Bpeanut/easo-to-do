const path = require("path");

module.exports = {
    mode: "production",
    output: {
        filename: "electron.js",
        path: path.resolve(__dirname, "../public"),
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    target: "electron-main",
}