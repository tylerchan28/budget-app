const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/, //$ means end with, so tests if it ends with .js
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ] //use allows an array of loaders
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true //tells dev server we handle routing with client side code
    }
}
