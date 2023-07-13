const devConfig = require("./webpack.dev")
const prodConfig = require("./webpack.prod")
const optimizationConfig = require("./webpack.optimization")
const {merge} = require("webpack-merge")

module.exports = (env, argv) => {
    const isProduction = argv?.mode === "production"

    let mainConfig = optimizationConfig

    mainConfig = merge(devConfig, mainConfig)
    if (isProduction) {
        mainConfig = merge(prodConfig, mainConfig)
    }

    return mainConfig
}
