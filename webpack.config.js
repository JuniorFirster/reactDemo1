const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname),
    entry: {
      'js/index': './js/index.js',
    },
    devtool: 'source-map',
    mode: 'development',
    module:{
        rules: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {compact: false},
          },
          {
            test: /\.html$/,
            loader: "html-loader",
          },
        ]
    },
    optimization: {
      minimize: true,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: path.join(__dirname, 'favicon.ico'),
        to: ''
      }]),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, 'index.html'),
        chunks: ["index"], // entry中的app入口才会被打包
        // minify: {
        //   // 压缩选项
        //   collapseWhitespace: true
        // },
        // // files: {
        // //   js: ''
        // // },
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      chunkFilename: '[name]-[chunkhash].js',
      hashDigestLength: 10,
      filename: '[name]-[contenthash].js'
    },
    resolve: {
      // 省略后缀
      extensions: ['.js', '.jsx', '.less', 'css'],
    }
    
}