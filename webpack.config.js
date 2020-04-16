const path = require("path");
const webpack = require("webpack");

module.exports = () => {
  return {
    mode: "development",
    
    entry: ["babel-polyfill",path.join(__dirname, "index.js")],

    output: {
      path: path.join(__dirname, 'lib'),
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|jpg)$/,
          loader: "url-loader",
        },
      ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: "cheap-module-eval-source-map",
  };
};
