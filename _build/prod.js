var webpack = require('webpack')
var base = require('./base')
var webConfig = base('vue')
var weexConfig = base('weex')
var buildEntries = require('./build-entry')()

webConfig.entry = {
  app: ['./src/render.js', './src/app.js']
}

buildEntries['app'] = ['./src/app.js']
weexConfig.entry = buildEntries

// web 版将 vue 和 weex render 打包进去
webConfig.externals = {}

module.exports = [webConfig, weexConfig]
