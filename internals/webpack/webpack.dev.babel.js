const path = require("path");
const webpack = require("webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [
	new webpack.NoEmitOnErrorsPlugin(),

	new CircularDependencyPlugin({
		exclude: /a\.js|node_modules/,
		failOnError: false,
	}),
];

module.exports = require("./webpack.base")({
	entry: ["eventsource-polyfill", path.join(process.cwd(), "app/app.js")],

	output: {
		filename: "[contenthash].js",
		chunkFilename: "[name].js",
	},

	plugins,
	devtool: "eval-source-map",

	performance: {
		hints: false,
	},
});
