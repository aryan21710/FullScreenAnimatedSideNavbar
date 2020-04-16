const path = require("path");
const webpack = require("webpack");

module.exports = () => {
  return {
    mode: "development",
    // babel-polyfill allows us to use all the latest es7 javascript features like Array.includes , Array.from and so on
    //
    entry: ["babel-polyfill", path.join(__dirname, "lib/index.js")],

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
      ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: "cheap-module-eval-source-map",
  };
};
