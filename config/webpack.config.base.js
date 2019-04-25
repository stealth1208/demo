// const { APP_DIR } = require('./constants');

module.exports = {
  // mode,
  entry: [
    'babel-polyfill',
    // `src/index.jsx`,
    // `src/styles/main.scss`,
  ],
  resolve: {
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
      }
    ]
  }
};
