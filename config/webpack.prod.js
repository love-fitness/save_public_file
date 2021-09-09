const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prodConfig = {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'MiniCssExtractPlugin.loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader', options: {}
          },
          { loader: 'less-loader' },
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css'
    }),
  ]
}

module.exports = merge(prodConfig, baseConfig);
