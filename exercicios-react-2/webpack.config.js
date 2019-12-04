const webpack = require("webpack");

module.exports = {
  entry: "./ex/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "./bundle.js"
  },
  devServer: {
    port: 3333,
    contentBase: "./public" // Pasta para onde será compilado os arquivos
  },
  resolve: {
    extensions: ["", ".js", ".jsx"] // Utilizado para o webpack poder resolver as extensões
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  }
};
