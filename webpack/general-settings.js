const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

export const generalSettings = {
    paramsEntryOutput: {
        entry: ["@babel/polyfill", "./src/index.ts"],
        output: {
            // eslint-disable-next-line no-undef
            path: path.join(__dirname, "dist"),
            filename: "bundle.js",
        },
    },
    moduleRules: [
        {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.ts$/,
            loader: "ts-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.(png|jpg|svg|gif)$/,
            loader: "file-loader",
            options: {
                name: "img/[name].[ext]",
            },
        },
    ],
    plugins: [
        new HtmlWebpackPlugin({
            // eslint-disable-next-line no-undef
                template: path.resolve(__dirname, "./src/index.html")
            }
        ),
    ],
}