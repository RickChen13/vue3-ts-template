/**
 * vue.config.js
 * @description 配置文件
 * 
 * @see https://cli.vuejs.org/zh/config/index.html#vue-config-js
 */
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}