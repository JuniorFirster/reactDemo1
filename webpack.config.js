const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
console.log(path.resolve(__dirname));
module.export = {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    devtool: 'cheap-module-source-map',
    mode: 'development',
    module:{
        rules: [
            {
              test: /\.jsx?$/,
              use: {
                loader: 'babel-loader',
                options:{
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                  plugins: [
                    '@babel/plugin-proposal-object-rest-spread',
                    '@babel/plugin-transform-runtime',
                    '@babel/plugin-proposal-class-properties',
                  ],
                }
              }
            }
        ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'build.js'
    }
}