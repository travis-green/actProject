require('shelljs/global')
process.env.NODE_ENV = 'production'
process.env.AUTO_DEPLOY = true
process.env.IS_BUILD = true

const path = require('path')
const config = require('../config')
const webpack = require('webpack')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const webpackConfig = require('./webpack.prod.conf')
const util = require('util')

const assetsPath = path.join(
  config.build.assetsRoot,
  config.build.assetsSubDirectory
)
const projectPath = path.resolve(__dirname, '../')
cd(projectPath)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)
const compiler = webpack(webpackConfig)

compiler.apply(new ProgressPlugin())

async function projPackaging() {
  return new Promise((resolve, reject) => {
    try {
      compiler.run(function (err, stats) {
        if (err) {
          resolve({
            success: false,
            msg: util.inspect(err, {depth: null})
          })
          return
        }
        if (stats.compilation && stats.compilation.errors && stats.compilation.errors.length > 0) {
          resolve({
            success: false,
            msg: util.inspect(err, {depth: null})
          })
          return
        }
        resolve({
          success: true,
          msg: stats.toString({
            colors: false,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
          })
        })
      })
    } catch (err) {
      resolve({
        success: false,
        msg: util.inspect(err, {depth: null})
      })
    }
  })
}

module.exports = projPackaging
