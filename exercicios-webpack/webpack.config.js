const webpack = require("webpack");

module.exports = {
  entry: "./ex/index.js",
  output: {
    // eslint-disable-next-line no-undef
    path: __dirname + "/public",
    filename: "./bundle.js"
  },
  devServer: {
    port: 3333,
    contentBase: "./public"
  },
  module: {
    loaders: [
      {
        test: /.js?$/, // Faz a leitura nos arquivos da aplicação que terminam com .js
        loader: "babel-loader", //Chama o babel-loader para fazer a tradução do código javascript para um código que o browser entenda
        exclude: /node_modules/, // Exclui a pasta node_modules da leitura dos arquivos
        query: {
          presets: ["es2015"] // Utiliza o dicionario do es2015 para traduzir o código para o browser
        }
      }
    ]
  }
};
