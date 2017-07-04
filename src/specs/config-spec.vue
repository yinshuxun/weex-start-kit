<template>
	<div>
		<text class="spec">{{`bundleUrl: ${bundleUrl}`}}</text>
		<text class="spec" v-for="(val, key, index) in env">{{`${key}::${val}`}}</text>
	</div>
</template>
<style scoped="">
	.spec{
		margin-top: 10px;
	}
</style>
<script>
	const {bundleUrl,env} = weex.config

	export default {
	    data(){
	        return {
				bundleUrl,
				env
			}
		}
	}
</script>
