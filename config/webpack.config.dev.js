const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const { BUILD_DIR } = require('./constants');

module.exports = merge(baseConfig, {
  output: {
    path: `${BUILD_DIR}`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: 'eval-source-map',
  /** Dont commit this line */
  // devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});
