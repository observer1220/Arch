const webpack = require('webpack')

module.exports = {
  publicPath: './',
  configureWebpack: config => {
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(/element-ui\/lib\/locale\/lang\/zh-CN/, 'element-ui/lib/locale/lang/zh-TW'))
  }
}
