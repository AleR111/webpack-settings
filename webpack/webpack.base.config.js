const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", path.join(process.cwd(), "./src/index.tsx")],
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|jp?g|png|gif|eot|otf|webp|svg|ttf|woff)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "./public/index.html"),
    }),
  ],
};
