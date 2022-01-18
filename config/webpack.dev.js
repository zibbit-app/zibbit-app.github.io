console.log("evan dev");
var webpackMerge = require('webpack-merge');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
module.exports = webpackMerge(commonConfig, {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    
    filename: '[name].js',
    //chunkFilename: '[id].chunk.js'
  },

  plugins: [
    // new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    publicPath: "/dist/bundle/",
    historyApiFallback: true,
    stats: 'minimal',
    // index: 'index-test.html'
  }
});