var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.[chunkhash].js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};