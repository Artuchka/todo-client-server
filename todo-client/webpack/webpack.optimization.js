const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(
            {
                parallel: 5,
                minify: TerserPlugin.swcMinify,
                terserOptions: {
                    compress: true,
                    keep_classnames: false,
                    ecma: "2020",
                }
            }
        )],
    },
};
