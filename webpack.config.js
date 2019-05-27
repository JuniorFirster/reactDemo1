/* global require */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolveEntries = () => {
  const entries = {};
  glob
    .sync("src/*.js")
    .forEach(filePath => {
      const key = filePath
      .split('.')
      .slice(0, -1)
      .join('.');
      // eslint-disable-next-line
      entries[key] = path.resolve(__dirname, filePath);
    });
  glob
    .sync("src/*.jsx")
    .forEach(filePath => {
      const key = filePath
      .split('.')
      .slice(0, -1)
      .join('.');
      // eslint-disable-next-line
      entries[key] = path.resolve(__dirname, filePath);
    });
  return entries
}

// eslint-disable-next-line
module.exports = {
    // eslint-disable-next-line
    context: path.resolve(__dirname),
    entry: () => resolveEntries(),
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
          {
            test: /\.(css|less|scss|sass)$/,
            use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'sass-loader'},
            ],
          }
        ]
    },
    optimization: {
      // minimize: true,
      // runtimeChunk: 'single',
      // splitChunks: {
      //   chunks: 'all'
      // }
    },
    plugins: [
      new CopyWebpackPlugin([{
        // eslint-disable-next-line
        from: path.join(__dirname, 'favicon.ico'),
        to: ''
      }]),
      new HtmlWebpackPlugin({
        filename: "index.html",
        // eslint-disable-next-line
        template: path.join(__dirname, 'index.html'),
        chunks: ["src/index"], // entry中的app入口才会被打包
        inject: true,
        minify: {
          // 压缩选项
          collapseWhitespace: true
        },
      }),
    ],
    output: {
      // eslint-disable-next-line
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      chunkFilename: '[name]-[chunkhash].js',
      hashDigestLength: 10,
      filename: '[name]-[contenthash].js'
    },
    resolve: {
      // 省略后缀
      extensions: ['.js', '.jsx', '.scss', 'css'],
      //定位绝对路径
      alias: {
        '@config': path.resolve(__dirname, 'src/config'),
      },
    },
    stats: 'minimal',
}