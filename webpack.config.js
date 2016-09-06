var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSass = new ExtractTextPlugin('main.css');
var DEV = process.env.NODE_ENV === 'dev';

var PLUGINS = [extractSass];

if (!DEV) PLUGINS.push(
	new webpack.optimize.UglifyJsPlugin({minimize: true}),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	})
);

module.exports = {
	entry: './themes/mrpapercut/js/app.js',
	output: {
		path: __dirname + '/themes/mrpapercut/public/',
		filename: 'bundle.js'
	},
	devtool: DEV ? 'cheap-module-eval-source-map' : false,
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
