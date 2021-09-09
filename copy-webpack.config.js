const path = require('path');

module.exports = {
  // 默认 production 打包文件压缩   开发： development, 不被压缩
  mode: 'production',
  // entry: './src/index.js',
  entry: {
    main: './src/index.js',
  },
  output: {
    // 自定义打包文件名
    filename: 'index.js',
    // 写绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.{jpg|png|gif}$/, // 
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}