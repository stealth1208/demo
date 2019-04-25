const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { APP_DIR, BUILD_DIR, resolve } = require('./constants');

module.exports = () => ({
  output: {
    path: `${BUILD_DIR}`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
          fallback: 'style-loader',
        }),
        // include: [`${APP_DIR}/styles`],
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    // Extract imported CSS into own file
    // new ExtractTextPlugin({
    //   filename: '[name].[chunkhash].css',
    // }),
    // // Minify JS
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     sourceMap: true,
    //     mangle: false,
    //     compress: {
    //       comparisons: true,
    //       conditionals: true,
    //       dead_code: true,
    //       evaluate: true,
    //       if_return: true,
    //       join_vars: true,
    //       screw_ie8: true,
    //       sequences: true,
    //       unused: true,
    //       warnings: false,
    //     },
    //     output: {
    //       comments: false,
    //     },
    //   }
    // }),
    // // Minify CSS
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    // }),
    // new CompressionPlugin({
    //   filename: '[path].gz[query]',
    //   test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ],
});