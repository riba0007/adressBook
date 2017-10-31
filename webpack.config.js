var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
    entry: __dirname + "/src/js/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // Match both .js and .jsx
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                use: "url-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Address Book",
            author: "Priscila Ribas da Costa",
            date: "2017",
            template: "src/index.ejs"
        }),
        new ExtractTextPlugin({
            filename: "main.css",
            allChunks: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
};

module.exports = webpackConfig;