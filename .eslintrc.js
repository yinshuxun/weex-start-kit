module.exports = {
	env: {
		"browser": true,
		"node": true,
		"commonjs": true,
		"amd": true,
		"es6": true,
		"mocha": true
	},
	"parserOptions": {
		"ecmaVersion": 6,
	},
	extends: ["eslint:recommended", "plugin:vue-libs/recommended"],
	parserOptions: {
		"sourceType": "module"
	},
	"globals": {
		"__WEEX__": true,
		"Vue": true,
		"weex": true
	},
	rules: {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		// 禁用 console
		"no-console": 0,
		// 禁止使用空解构模式no-empty-pattern
		"no-empty-pattern": 2,
	}
};
