const path = require("path");
const webpack = require("webpack");

module.exports = () => {
  return {

    entry: './index.js',


    output: {
      path: path.resolve(__dirname, "lib"),
      filename: "index.js",
      libraryTarget: "commonjs2",
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
    resolve: {
      alias: {
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'react-router-dom': path.resolve(__dirname, './node_modules/react-router-dom')
      }
    },
    
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react'
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom'
      },
      'react-router-dom': {
        commonjs: 'react-router-dom',
        commonjs2: 'react-router-dom'
      }
    },
    
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: "cheap-module-eval-source-map",
  };
};
