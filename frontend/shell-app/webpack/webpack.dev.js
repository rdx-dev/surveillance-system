module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map', // recommended by CRA,
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	}
}