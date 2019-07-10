const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
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
      modules: path.resolve(__dirname, 'node_modules/')
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        { loader: 'style-loader' },
        {
          query: {
            presets: ['es2015', 'stage-0']
          }
        }
      ]
    }, {
      test: /.(svg|woff|woff2|ttf|eot|otf)([?]?.*)$/,
      loader: 'file-loader?name=assets/fonts/[name].[ext]'
    }
    ]
  }
}
