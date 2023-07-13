const {merge} = require("webpack-merge")
const Dotenv = require("dotenv-webpack")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    client: {
      overlay: false,
    },
  },
  plugins: [ new Dotenv() ],
})
