<template>
	<div>
		<text class="webview" @click="jump('search')">点击进入搜索列表</text>
	</div>
</template>
<style scoped>
	.webview {
		/*position: absolute;*/
		/*top:400px;*/
		width: 200px;
		line-height: 50px;
		/*margin-top: 400px;*/
		left: 200px;
		text-align: center;
		background-color: #999999;
	}
</style>
<script>
	const navigator = weex.requireModule('navigator')

	export default{
		data(){
			return {
				msg: 'hello vue',
				micIndex: 'https://m.made-in-china.com/'
			}
		},
		methods: {
			jumpNav(){
//				navigator.push({
//					url: 'http://localhost:8080/dist/app.web.js?1',
//					animated: "true"
//				}, event => {
////					modal.toast({ message: 'callback: ' + event })
//				})
			}
		}
	}
</script>
