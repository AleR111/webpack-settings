const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  paramsEntryOutput: {
    entry: ["@babel/polyfill", path.resolve(process.cwd(), "./src/index.tsx")],
      output: {
        path: path.join(process.cwd(), "dist"),
        filename: "bundle.js",
      },
    },
    moduleRules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]",
        },
      },
    ],
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(process.cwd(), "./src/index.html")
      }),
    ],
}