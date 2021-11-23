const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    port: 8000,
    historyApiFallback: true,
    hot: true,
  },
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        use: ["style-loader', 'css-loader', 'postcss-loader', 'sass-loader"]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "./src/index.html")
        }
    ),
  ],
};
