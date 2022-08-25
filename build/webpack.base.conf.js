const path = require('path')
const webpack = require('webpack')
const notifier = require('node-notifier')
const WebpackOnBuildPlugin = require('on-build-webpack')
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')

const _ENTRY_PATH = {
  development: './src/entry_dev.js',
  testing: './src/entry_test.js',
  production: './src/entry_pro.js'
}

// 打包提示
var pushNotification = function(title, message, sound) { //通知
  if (process.env.NOTIFY !== 'true') return
  sound = sound || false
  notifier.notify({
    title: title,
    message: message,
    sound: sound,
    icon: path.resolve(__dirname, '../src/assets/logo.png')
  }, function(err, respond) {
    if (err) console.error(err)
  })
}

module.exports = {
  entry: {
    app: ['babel-polyfill', _ENTRY_PATH[process.env.NODE_ENV]],
    vendor: ['babel-polyfill', 'vue', 'vue-router', 'vuex']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.IS_BUILD ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js?v=[hash]' //编译后的文件名
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      // https://github.com/vuejs/vue/wiki/Vue-2.0-RC-Starter-Resources
      'vue': 'vue/dist/vue.min', //webpack打包时，需要设置别名
      'store': path.resolve(__dirname, '../src/store/'), //常用工具方法
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'toast': path.resolve(__dirname, '../src/components/toast'),
      'setWechatTitle': path.resolve(__dirname, '../src/util/setWechatTitle.js'),
      'lib': path.resolve(__dirname, '../src/lib/'),
      'util': path.resolve(__dirname, '../src/lib/util.js'),
      'wx': path.resolve(__dirname, '../src/lib/wx'),
      'jsBridge': path.resolve(__dirname, '../src/lib/jsBridge/index.js'),
      'clipboard': path.resolve(__dirname, '../src/lib/clipboard.js')
    }
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      include: projectRoot,
      exclude: /node_modules/,
      enforce: 'pre'
    },
    {
      test: /\.js/,
      include: projectRoot,
      exclude: /node_modules/,
      enforce: 'pre'
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: ['babel-loader'],
      include: projectRoot,
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        loaders: utils.cssLoaders({
          sourceMap: process.env.IS_BUILD,
          extract: process.env.IS_BUILD
        }),
        postcss: [
          require('autoprefixer')({
            browsers: ['last 3 versions']
          })
        ]
      }
    }),
    // 增加一个plugins
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new WebpackOnBuildPlugin(function(stats) {
      var compilation = stats.compilation
      var errors = compilation.errors
      if (errors.length > 0) {
        var error = errors[0]
        pushNotification(error.name, error.message, 'Glass')
      } else {
        var message = 'takes ' + (stats.endTime - stats.startTime) + 'ms'

        var warningNumber = compilation.warnings.length
        if (warningNumber > 0) {
          message += ', with ' + warningNumber + ' warning(s)'
        }
        pushNotification('打包成功', message)
      }
    })
  ]
}
