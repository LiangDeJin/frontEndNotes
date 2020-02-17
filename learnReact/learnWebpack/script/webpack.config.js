const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
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
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader' ],
      },
      // {
      //   test: /\.less$/,
      //   loader: [MiniCssExtractPlugin.loader, 'css-loader','less-loader'],
      // },
      {
        test: /\.less$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader',
        {
          loader:'less-loader',
          options:{

          }
        }],
      },{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            // loader: 'file-loader',
            // options: {
            //   name: 'static/images/[name].[ext]',
            //   // name: '[name].[ext]',
            //   // outputPath: 'static/images',
            //   publicPath: '/',
            // },
            loader: 'url-loader',
            options: {
              limit:512,
              name: 'static/images/[name].[ext]',
              // name: '[name].[ext]',
              // outputPath: 'static/images',
              publicPath: '/',
            },
          },
        ],
      },{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
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
    new CopyPlugin([
      { from: path.resolve(process.cwd(),'src/static/'), 
        to: path.resolve(process.cwd(),'dist/static')
      }
    ]),
  ],
  devServer:{
    port:3000,
    open:true

  }
};