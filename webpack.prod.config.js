import { generalSettings } from "./webpack/general-settings";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  ...generalSettings.paramsEntryOutput,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      ...generalSettings.moduleRules,
      {
        test: /\.(less|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    ...generalSettings.plugins,
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
    }),
  ],
};
