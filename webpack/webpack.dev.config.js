const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const styleLoaders = ["style-loader", "css-loader", "postcss-loader",]

module.exports = merge(baseWebpackConfig, {
  devServer: {
    port: 8080,
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
  plugins: [],
});
