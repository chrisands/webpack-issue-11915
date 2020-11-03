const { resolve } = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: ['./src/index'],

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        include: [resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              // plugins: [require.resolve('react-refresh')]
            },
          }
        ],
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      title: 'test 1',
      template: './index.html',
      baseHref: '/',
    }),
  ],

  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 8000,
    hot: true,
    publicPath: '/',
    transportMode: 'ws',
  }
}
