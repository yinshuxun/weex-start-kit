<template>
	<div>
		<web ref="webview"
			 :src="url"
			 class="webview"></web>
		<!--<text class="hello">hello </text>-->
	</div>
</template>
<script>
	const storage = weex.requireModule('storage')
	const modal = weex.requireModule('modal')

	export default{
		data(){

			const url = storage.getItem('detailLink')
			modal.alert({
				message: url
			})

			return {
				url
			}
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
