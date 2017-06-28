var webpack = require('webpack')
var devServer = require('webpack-dev-server')
var base = require('./base')
var webConfig = base('vue', true)
var weexConfig = base('weex', true)
var buildEntries = require('./build-entry')()

webConfig.entry = {
	app: [
		'./src/render.js',
		'./src/app.js',
		'webpack/hot/dev-server',
		'webpack-dev-server/client/?http://0.0.0.0:8080'
	]
}
webConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

// weex 版跑在 playground，里不需要热替换
buildEntries['app'] = ['./src/app.js']
weexConfig.entry = buildEntries

new devServer(webpack([webConfig, weexConfig]), {
	port: 8080,
	host: '0.0.0.0',
	hot: true,
	stats: {colors: true},
	disableHostCheck: true
}).listen('8080', '0.0.0.0')
console.log('Project is running at http://0.0.0.0:8080/')
