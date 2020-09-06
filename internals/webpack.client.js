const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";

module.exports = {
	entry: "./app/index.js",
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(process.cwd(), "build/public"),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { url: false, sourceMap: true },
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: "url-loader",
			},
			{
				test: /\.(gif)$/,
				use: "file-loader",
			},
			{
				test: /\.(jpe?g|png|ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use: "base64-inline-loader?limit=1000&name=[name].[ext]",
			},
			{
				test: /\.html$/,
				use: "html-loader",
			},
			{
				test: /\.(mp4|webm|gif)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: true,
					},
				},
			},
		],
	},
	plugins: [
		new ProgressBarPlugin(),
		new MiniCssExtractPlugin({
			filename: "style.css",
		}),
	],
	mode: dev ? "development" : "production",
	watch: dev,
	performance: {
		hints: dev ? false : "warning",
	},
};
