const { merge } = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.config")
const styleRules = require("./utils/styleRules")

module.exports = merge(baseWebpackConfig, {
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      ...styleRules(),
    ],
  },
  plugins: [],
});
