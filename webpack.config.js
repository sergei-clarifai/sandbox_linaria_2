const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dev = process.env.NODE_ENV !== "production";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: "development",
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "@linaria/webpack-loader",
        options: {
          sourceMap: process.env.NODE_ENV !== "production"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: dev }
          }
        ]
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
};
