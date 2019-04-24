const webpackMerge = require("webpack-merge");
const modeConfiguration = env => require(`./webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "dev" }) => {
  console.log(`mode is: ${mode}`);
  return webpackMerge({
    mode,
    entry: './src/index.jsx',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    devServer: {
      contentBase: './dist'
    }
  },
  modeConfiguration(mode));
};
