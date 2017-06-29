<template>
	<div>
		<web ref="webview" :src="url" class="webview"></web>
	</div>
</template>
<script>
	const storage = weex.requireModule('storage')

	export default{
		data(){
			return {
				url: ""
			}

		},
		created(){
			storage.getItem('detailLink', e => {
				this.url = "http://m.made-in-china.com"
			})
		}
	}
</script>
<style scoped>
	.webview {
		width: 750px;
		height: 1334px;
	}

	.hello {
		margin-top: 200px;
	}
</style>
