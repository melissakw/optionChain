const path = require('path');
const HWP = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	resolve: {
		modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
		descriptionFiles: ['package.json'],
		extensions : ['*', '.js', '.ts', '.jsx', '.tsx']
	},
	devServer: {
    historyApiFallback: true,
  },
	entry: path.join(__dirname, '/src/index.tsx'),
	output: {
		filename: 'build.js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
	},
	module:{
		rules:[
		{
			test: /\.tsx$/,
			loader: 'babel-loader',
		},
		{
			test: /\.js$/,
			use: ["source-map-loader"],
			enforce: "pre",
			exclude: /node_modules/,
		},
		{
			test: /\.css$/,
			use: [
				"style-loader",
				"css-loader",
			]
		},
		{
			test: /\.(png|jpeg|gif)$/i,
			use: [
				"file-loader"
			]
		}
	]
	},
	plugins:[
		new HWP(
			{template: path.join(__dirname, '/public/index.html')}
		),
		new BundleAnalyzerPlugin()
	]
}