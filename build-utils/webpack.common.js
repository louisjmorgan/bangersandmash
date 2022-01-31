const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|webp|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Bangers and Mashtival',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: path.resolve(__dirname, '..', './src/404.html'),
    }),
    new FaviconsWebpackPlugin(
      '/home/louis/Dev/BangersAndMash/favicon.png'
    ),
    new CnameWebpackPlugin({
      domain: 'www.bangersandmash.fun',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
};
