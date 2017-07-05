<template>
	<list>
		<cell v-for="index in 500" :key="index">
			<image v-if="index % 5 === 0" style="width: 750px;height: 400px;" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
			<div v-else-if="index % 4 === 1" style="width:750px;height:30px;background-color:red;"></div>
			<text v-else>测试</text>
		</cell>
	</list>
</template>
<style scoped>
</style>
<script>
	export default{
		data(){
			return {
			}
		}
	}
</script>
