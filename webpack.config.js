const path = require("path");

const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
];

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    },
    devServer: {
        // in charge of saving changes made on the html, full reload
        before: function (app, server) {
            server._watch("./app/**/*.html");
        },
        contentBase: path.join(__dirname, "app"),
        // not a full reload, css and js
        hot: true,
        host: "0.0.0.0",
        port: 3000,
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader?url=false", {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: postCSSPlugins,
                    }
                }
            }],
        },],
    },
}