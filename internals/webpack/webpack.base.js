const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require("path");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const alias = require("../alias");

const plugins = [
	new ProgressBarPlugin(),
	new HtmlWebPackPlugin({
		template: "./app/temp/index.html",
		filename: "./index.html",
	}),
	new MiniCssExtractPlugin({
		filename: "[name].[contenthash].css",
		chunkFilename: "[name].[contenthash].css",
	}),
	new webpack.ProvidePlugin({
		fetch: "exports-loader?self.fetch!whatwg-fetch",
	}),
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		},
	}),
	new webpack.NamedModulesPlugin(),
];

module.exports = (options) => ({
	entry: options.entry,
	output: Object.assign(
		{
			path: path.resolve(process.cwd(), "build/public"),
			publicPath: "/",
		},
		options.output
	),
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|app[/\\]+libs.*)/,
				use: {
					loader: "babel-loader",
					options: options.babelQuery,
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader?modules=false",
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: process.env.NODE_ENV !== "production" ? "[name]-[local]-[hash:base64:5]" : "[hash:base64:5]",
						},
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: [autoprefixer()],
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
				use: "file-loader",
			},
			{
				test: /\.(mp4|webm|png|gif)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 10000,
					},
				},
			},
		],
	},
	plugins: options.plugins.concat(plugins),
	resolve: {
		alias,
		modules: [path.resolve("./app"), path.resolve(process.cwd(), "node_modules")],
		extensions: [".js", ".jsx", ".react.js"],
		mainFields: ["browser", "main", "jsnext:main"],
	},
	devtool: options.devtool,
	target: "web",
	performance: options.performance || {},
	mode: process.env.NODE_ENV,
	node: {
		child_process: "empty",
		fs: "empty",
		module: "empty",
		net: "empty",
		tls: "empty",
	},
});
