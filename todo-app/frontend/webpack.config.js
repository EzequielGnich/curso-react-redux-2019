const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, './node_modules/')
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
        exclude: /node_modules/
      }, {
        test: /\.(svg|woff|woff2|ttf|eot|otf)([?]?.*)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  }
}
