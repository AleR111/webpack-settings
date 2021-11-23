import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const generalSettings = {
    paramsEntryOutput: {
        entry: ["@babel/polyfill", "./src/index.ts"],
        output: {
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
                template: path.resolve(__dirname, "./src/index.html")
            }
        ),
    ],
}