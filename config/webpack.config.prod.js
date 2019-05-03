const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { APP_DIR, BUILD_DIR } = require('./constants');

// process.traceDeprecation = true;
module.exports = () => merge(baseConfig, {
  mode: 'production',
  output: {
    path: `${BUILD_DIR}`,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader',
        }),
        include: [`${APP_DIR}/styles`],
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
    }),
    // Minify JS
    new UglifyJsPlugin({
      uglifyOptions: {
        sourceMap: true,
        mangle: false,
        compress: {
          comparisons: true,
          conditionals: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          sequences: true,
          unused: true,
          warnings: false,
        },
        output: {
          comments: false,
        },
      }
    }),

    new webpack.HashedModuleIdsPlugin(),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: 'all',
      fileBlacklist: [/\.(css|map)$/, /base?.+/],
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: 'vendor',
      filename: 'vendor.[hash].js',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
});