const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.join(__dirname, "/testbundle"),
    filename: "bundle.js",
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        use: [
          { 
            loader: 'ts-loader' 
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset',
      }
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/main_page.html",
    }),
    new ESLintPlugin({
      extensions: 'ts',
    }),
  ],
  devServer: {
    host: "localhost",
    port: 5500,
  },
  mode: "development",
};