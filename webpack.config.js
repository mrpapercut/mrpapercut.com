var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var extractSass = new ExtractTextPlugin('main.css');
var DEV = process.env.NODE_ENV === 'dev';

var PLUGINS = [
	extractSass,
	new webpack.OldWatchingPlugin()
];

if (!DEV) PLUGINS.push(
	new webpack.optimize.UglifyJsPlugin({minimize: true}),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	})
);

module.exports = {
	entry: path.resolve(__dirname, './themes/mrpapercut/js/app.js'),
	output: {
		path: path.resolve(__dirname, './themes/mrpapercut/public/'),
		filename: 'bundle.js'
	},
	devtool: DEV ? 'cheap-module-eval-source-map' : false,
	watch: DEV,
	module: {
		preLoaders: [{
			test: /\.js?$/,
			loader: 'eslint',
			exclude: /node_modules/
		}],
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.scss$/,
			loader: extractSass.extract(['css', 'sass'])
		}, {
			test: /\.(png|ttf|eot|svg|woff2?)(\?[a-z0-9]+)?$/,
			loader: 'file-loader'
		}]
	},
	plugins: PLUGINS
}
