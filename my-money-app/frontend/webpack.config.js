const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: 'public'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, '/node_modules/'),
      jquery: 'modules/admin-lte/plugins/jQueryUI/jquery-ui.min.js',
      bootstrap: 'modules/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
      loader: 'file'
    }]
  }
}
