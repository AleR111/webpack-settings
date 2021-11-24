const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const styleLoaders = [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader",]

module.exports = merge(baseWebpackConfig, {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [...styleLoaders, "sass-loader"],
      },
      {
        test: /\.less$/i,
        use: [...styleLoaders, "less-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
    }),
  ],
});
