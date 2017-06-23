const path = require('path');

module.exports = {
	entry: {
		js: path.join(__dirname, './src/app.js')
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: [/\.js$/], loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
}
