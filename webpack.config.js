const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
console.log(path.resolve(__dirname));
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
            }
        ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'build.js'
    },
    resolve: {
      // 省略后缀
      extensions: ['.js', '.jsx', '.less', 'css'],
    }
    
}