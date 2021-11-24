const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

module.exports = merge(baseWebpackConfig, {
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      }
    ],
  },
  plugins: [],
});
