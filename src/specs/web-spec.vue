<template>
	<web ref="webview" :src="url" class="webview"></web>
</template>
<script>
	export default{
		data(){
			return {
				url: "https://m.made-in-china.com"
			}
		}
	}
</script>
<style scoped>
	.webview {
		width: 750px;
		height: 1334px;
	}
</style>
