const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = require("./webpack.base")({
	entry: [path.join(process.cwd(), "app/app.js")],
	optimization: {
		splitChunks: {
			name: "vendor",
			children: true,
			minChunks: 2,
			async: true,
		},
	},
	output: {
		filename: "[name].js",
		chunkFilename: "[name].chunk.js",
	},
	plugins: [
		new UglifyJsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),

		new HtmlWebpackPlugin({
			template: "src/views/index.html",
			filename: "index.html",
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyURLs: true,
			},
			inject: true,
		}),
	],
});
