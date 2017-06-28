module.exports = {
	preserveWhitespace: false,
	postcss: [
		require("autoprefixer")({
			browsers: ["last 3 versions"]
		})
	],
	cssModules: {
		localIdentName: "[path][name]---[local]---[hash:base64:5]",
		camelCase: true
	},
	loaders: {
		js: "buble-loader?objectAssign=Object.assign"
	}

	// buble: {
	//     objectAssign: 'Object.assign',
	// },
}
