const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = (env) => {
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin("styles.css");
    
    return {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public", "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/, //$ means end with, so tests if it ends with .js
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        }]
    },
    plugins: [
        CSSExtract
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true, //tells dev server to handle routing with client side code
        publicPath: "/dist/"
    }
};
};
