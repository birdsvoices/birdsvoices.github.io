// Webpack configuration file
const path = require("path")

module.exports = {
    entry: "./source/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.m?(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}