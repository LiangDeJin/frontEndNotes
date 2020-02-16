const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
  entry:'./src/index.js',
  // entry:{
  //   home: './src/home.js',
  //   about:'./src/about.js'
  // },
  output:{
    // path:path.resolve(__dirname,'dist'), //__dirname：    获得当前执行文件所在目录的完整目录名
    path:path.resolve(process.cwd(),'dist'), 
    filename:'static/js/[name].[chunkHash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template using Handlebars',
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'static/css/[name].[chunkHash:8].css',
      // chunkFilename: '[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  devServer:{
    port:3000,
    open:true

  }
};