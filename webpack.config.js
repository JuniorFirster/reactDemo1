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
              use: {
                loader: 'babel-loader',
                options:{
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                  // plugins: [
                  //   '@babel/plugin-proposal-object-rest-spread',
                  //   '@babel/plugin-transform-runtime',
                  //   '@babel/plugin-proposal-class-properties',
                  // ],
                  sourceMap: true,
                  cacheDirectory: true,
                },
              }
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