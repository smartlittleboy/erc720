const webpack = require("webpack");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.common");

module.exports = merge(baseConfig,{
    mode:"development",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.CONTRACT_ADDRESS': JSON.stringify(process.env.CONTRACT_ADDRESS),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
        }),
    ],

    devServer: {
        historyApiFallback: true,
        port:8080,
        hot:true
    }

});