const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const styleRules = require("./utils/styleRules");

module.exports = merge(baseWebpackConfig, {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  module: {
    rules: [...styleRules("prod")],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
    }),
  ],
});
