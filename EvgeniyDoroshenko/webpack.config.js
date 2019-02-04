const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, "src", "app", "components", "App.js"),
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "App.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "app"),
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "app", "html", "tmp.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: "/node_modules/",
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;
