const navigator = weex.requireModule('navigator')

export default {
	methods: {
		goTo (url) {
			console.log(String(weex.config.bundleUrl).split('#').shift())
			if (WXEnvironment.platform === 'Web' && this.$router) {
				this.$router.push(url)
			} else {
				// let baseUrl = String(weex.config.bundleUrl).split('#').shift()
				// let bundleUrl = baseUrl + '#' + url
				navigator.push({
					url: `http://192.168.31.174:8080/${url}.weex.js`,
					animated: "true"
				}, () => {
				})
			}
		},
		back () {
			if (WXEnvironment.platform === 'Web' && this.$router) {
				this.$router.back()
			} else {
				navigator.pop({
					animated: "true"
				}, () => {
				})
			}
		}
	}
}
