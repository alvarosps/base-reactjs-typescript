import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.common';

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	performance: {
		hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
	},
});
