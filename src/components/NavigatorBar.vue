<template>
	<div class="navigator">
		<div class="nav-left">
			<text class="nav-text">about</text>
			<text class="nav-num"> {{totalNum}} </text>
			<text class="nav-text">result</text>
		</div>
		<div class="nav-right">
			<text class="micon nav-right-icon1" @click="changeGrid">&#xe618;</text>
			<!--<text>|</text>-->
			<text class="micon nav-right-icon2">&#xe642;</text>
		</div>
	</div>
</template>
<style scoped>
	.navigator {
		flex:1;
		height: 96px;
		flex-direction: row;
		padding-left: 20px;
		padding-right: 20px;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #dae0e5;
		align-items: center;
		justify-content: space-between;
	}

	.nav-left {
		flex-direction: row;
		width: 433px;
		height: 36px;
	}

	.nav-right {
		flex-direction: row;
		height: 96px;
		text-align: right;
	}

	.nav-right-icon1 {
		padding-right: 30px;
		line-height: 96px;
		border-right-style: solid;
		border-right-width: 1px;
		border-right-color: #dae0e5;
	}

	.nav-right-icon2 {
		padding-left: 30px;
		line-height: 96px;
	}

	.nav-text {
		color: #888;
		font-size: 30px;
	}

	.nav-num {
		color: #e54545;
		font-size: 30px;
	}

	.micon {
		font-family: iconfont;
		font-size: 40px;
	}
</style>
<script>

	export default{
		data(){
			return {
//                totalNum: 1655
			}
		},
		props: ["totalNum"],
		methods: {
			changeGrid(){
				this.$emit("changeGrid")
			}
		}
	}
</script>
