const { APP_DIR, resolve } = require('./constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      `${APP_DIR}/index.jsx`,
      `${APP_DIR}/styles/main.scss`,
    ]
  },
  resolve: {
    modules: [resolve('src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.jpe?g|png$/,
        loader: ["url-loader", "file-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: ['file-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.tpl.ejs`,
      minChunks: 5,
    }),
  ]
};
