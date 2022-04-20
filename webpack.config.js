const path = require('path')

module.exports = {
	mode: "production",
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'main.js',
	},
	module:{
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.join(__dirname, 'src'),
				exclude: path.join(__dirname, 'node_modules'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									'targets': 'defaults'
								}],
								'@babel/preset-react'
							]
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		]
	},
	devtool: 'source-map'
}