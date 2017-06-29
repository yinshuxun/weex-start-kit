const navigator = weex.requireModule('navigator')
import store from '../store'

export default {
	methods: {
		goTo (url) {
			if (WXEnvironment.platform === 'Web' && this.$router) {
				this.$router.push(url)
			} else {
				const staticUrl = store.state.app.staticUrl;
				navigator.push({
					url: `${staticUrl}/${url}.weex.js`,
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
