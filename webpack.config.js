const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssnanoPlugin = require("cssnano-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fse = require("fs-extra");

const { config } = require("webpack");

const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
];

class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap("Copy images", function () {
            fse.copySync("./app/assets/images", "./docs/assets/images");
        });
    }
}

let cssConfig = {
    test: /\.css$/i,
    use: [
        "css-loader?url=false",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: postCSSPlugins,
                },
            },
        },
    ],
};

// html pages

// [
//     new HtmlWebpackPlugin({
//         filename: "index.html",
//         template: "./app/index.html",
//     }),
// ]

let pages = fse
    .readdirSync("./app")
    .filter((file) => file.endsWith(".html"))
    .map(
        (page) =>
            new HtmlWebpackPlugin({
                filename: page,
                template: `./app/${page}`,
            })
    );

let configuration = {
    entry: "./app/assets/scripts/App.js",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./app/index.html",
        }),
    ],
    module: {
        rules: [cssConfig],
    },
};

if (currentTask == "dev") {
    cssConfig.use.unshift("style-loader");

    configuration.output = {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app"),
    };

    configuration.devServer = {
        // in charge of saving changes made on the html, full reload
        before: function (app, server) {
            server._watch("./app/**/*.html");
        },
        contentBase: path.join(__dirname, "app"),
        // not a full reload, css and js
        hot: true,
        host: "0.0.0.0",
        port: 3000,
    };

    configuration.mode = "development";
}

if (currentTask == "build") {
    configuration.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    });

    cssConfig.use.unshift(MiniCssExtractPlugin.loader);
    // postCSSPlugins.push(require("cssnano-webpack-plugin"));

    configuration.output = {
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "docs"),
    };

    configuration.mode = "production";

    configuration.optimization = {
        splitChunks: { chunks: "all" },
        minimizer: [new CssnanoPlugin()],
    };

    configuration.plugins.push(
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" }),
        new RunAfterCompile()
    );
}

module.exports = configuration;
