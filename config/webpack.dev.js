const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // 只用于开发环境  定义服务访问目录
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    port: 9000,
    // hot: true,
    // proxy: {
    //   './api': 'local:8001'
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(baseConfig, devConfig);
