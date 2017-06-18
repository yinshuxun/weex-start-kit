export const getSpecs = () => {
	function requireAll (requireContext) {
		return requireContext.keys().map((value, index) => {
			return {
				path: value.match(/(\/\w*)\-spec/)[1],
				component: requireContext(value),
				name: value.match(/\/(\w*)\-spec/)[1]
			}
		})
	}

	return requireAll(require.context("../../specs", true, /^\.\/.*spec\.vue/))
}
