const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname} +  `,
    filename: 'app.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, './node_modules/')
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.(svg|woff|woff2|ttf|eot|otf)([?]?.*)$/,
      loader: 'file-loader?name=assets/fonts/[name].[ext]'
    }
    ]
  }
}
