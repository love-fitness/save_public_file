const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // 默认 production 打包文件压缩   开发： development, 不被压缩
  mode: 'development',
  // cheap-module-eval-source-map 开发环境 推荐
  // cheap-module-source-map 生产推荐 不显示源码   生产不调试 也可以直接设置 none
  // devtool: 'none',
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    demo: './src/demo.js',
    // jquery: "jquery", // 打包优化
  },
  output: {
    // 自定义打包文件名
    // filename: 'index.js',
    // 多入口文件  使用占位符
    filename: "[name].[hash:5].js",
    // 写绝对路径
    path: path.resolve(__dirname, '../dist'),
    // 默认添加打包之后的前缀地址  例如： 使用cdn 添加前面的https地址
    // publicPath: 'https://yideng.com/'
    publicPath: './'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // 提取到 .babelrc
        // options: {
        // 转换es5+ 语法  方法一
        // presets: [["@babel/preset-env", {
        //   // 必须同时设置 coreJs.3 ；  默认使用 coreJs.2
        //   useBuiltIns: 'usage', // entry: 引入一次； false;  usage
        //   corejs: 3
        // }]]
        // 方法二
        // plugins: [
        //   [
        //     "@babel/plugin-transform-runtime", {
        //       corejs: 3
        //     }
        //   ]
        // ]
        // },
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif)$/, // 检查图片资源
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:5].[ext]',
            outputPath: 'assets'
          }
        }
      },
      {
        test: /\.ttf$/, // 检查字体资源
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:5].[ext]',
            outputPath: 'font'
          }
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          // 通过style标签将css 注入到html页面
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader', options: {}
          },
          { loader: 'less-loader' },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    // })
  ]
}