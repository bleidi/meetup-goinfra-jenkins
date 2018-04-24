const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
        'webpack-dev-server/client?http://localhost:8080', // live reload
        './src/index'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    hot: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(['docs'], { verbose: true, root: path.resolve(__dirname, './') }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: 'static',
        ignore: ['.*']
      },
      {
        from: path.resolve(__dirname, './node_modules/reveal.js/css/reveal.css')
      },
      {
        from: path.resolve(__dirname, './node_modules/reveal.js/css/theme/black.css')
      },
      {
        from: path.resolve(__dirname, './node_modules/highlight.js/styles/railscasts.css')
      },
      {
        from: path.resolve(__dirname, './node_modules/headjs/dist/1.0.0/head.js')
      },
      {
        from: path.resolve(__dirname, './node_modules/reveal.js/js/reveal.js')
      },
      {
        from: path.resolve(__dirname, './node_modules/reveal.js/plugin/highlight/highlight.js')
      },
      {
        from: path.resolve(__dirname, 'thinking.mp4')
      },
      {
        from: path.resolve(__dirname, 'hl_ty.mp4')
      }
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ]
};