const { generalSettings } = require("./webpack/general-settings");

module.exports = {
  devServer: {
    port: 8080,
  },
  ...generalSettings.paramsEntryOutput,
  module: {
    rules: [
      ...generalSettings.moduleRules,
      {
        test: /\.(less|css)$/,
        use: ["style-loader', 'css-loader', 'postcss-loader', 'sass-loader"]
      }
    ],
  },
  plugins: [
    ...generalSettings.plugins
  ],
};
