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
  }
};
