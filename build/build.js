// https://github.com/shelljs/shelljs
require('shelljs/global')
process.env.IS_BUILD = true

var gulp = require('gulp')
var vsftp = require('gulp-vsftp')
var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var spinner = ora('building for production...')

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
const compiler = webpack(webpackConfig)
const ProgressPlugin = require('webpack/lib/ProgressPlugin')

rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'assets/', assetsPath)

const gulpUploadFile = (remotePath, host, count, password) => {
  let dist = path.resolve(__dirname, '../dist/**')
  gulp.src(dist)
    .pipe(vsftp({
      remotePath,
      host,
      user: count,
      pass: password,
      cleanFiles: false,
      port: 22
    }))
}

spinner.start()
compiler.apply(new ProgressPlugin())
compiler.run(function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
  if (stats.compilation.errors.length > 0) {
    return
  }
  if (process.env.NODE_ENV === 'development') {
    // 上传到开发服务器
    // gulpUploadFile('/opt/webapps/winxin/act-vue', 'xxx.xxx.xxx.xxx', 'root', 'asdasd')
  }
  if (process.env.NODE_ENV === 'testing') {
    // 上传到测试服务器
    // gulpUploadFile('/opt/webapps/winxin/act-vue', 'xxx.xxx.xxx.xxx', 'root', 'asdasd')
  }
})
