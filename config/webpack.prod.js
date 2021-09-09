const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const prodConfig = {
  mode: 'production',
  devtool: false,
}

module.exports = merge(prodConfig, baseConfig);