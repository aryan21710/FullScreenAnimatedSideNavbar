const path = require("path");
const webpack = require("webpack");

module.exports = () => {
  return {
    mode: "development",
    // babel-polyfill allows us to use all the latest es7 javascript features like Array.includes , Array.from and so on
    //
    entry: ["babel-polyfill", path.join(__dirname, "src/index.js")],
    devServer: {
      contentBase: path.join(__dirname, "public", "dist"),
      hot: true,
      inline: true,
      historyApiFallback: true,
      watchContentBase: true,
      port: 3001,
      watchOptions: {
        ignored: [path.resolve(__dirname, "/node_modules/")],
      },
    },
    output: {
      path: path.join(__dirname, "public", "build"),
      publicPath: "/build",
      filename: "bundle.js",
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
