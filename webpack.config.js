const path = require('path');

module.exports = {
	entry: './app/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'scripts.bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
	devtool: 'source-map'
};
