var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: ['css-loader', 'sass-loader']
        }),
        test: /\.scss$/,
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: "bundle"
    }),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new ExtractTextPlugin({
      filename: 'style.[contenthash].css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
};