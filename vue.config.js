const {
    path,
    webpack
} = require('path,webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    pluginOptions: { // 第三方插件配置 less 
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/styles/vars.less')]
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]

}