const path = require("path");

module.exports = {
    entry : "./src/app.jsx",
    output : {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module : {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx$/,
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public")
    },
}; 
