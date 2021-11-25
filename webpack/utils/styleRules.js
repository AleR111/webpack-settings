const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => {
  const styleLoaders = [
    mode === "prod" ? MiniCssExtractPlugin.loader : "style-loader",
    "css-loader",
    "postcss-loader",
  ];

  return [
    {
      test: /\.(sa|sc|c)ss$/i,
      use: [...styleLoaders, "sass-loader"],
    },
    {
      test: /\.less$/i,
      use: [...styleLoaders, "less-loader"],
    },
  ];
};
