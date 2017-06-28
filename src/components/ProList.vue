<template>
	<list class="pro-list" @loadmore="loadMore" loadmoreoffset="20" @scroll="scroll" column-width="300" column-count="2"
		  column-gap="10">
		<refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown"
				 :display="refreshing ? 'show' : 'hide'">
			<text class="indicator">loading...</text>
		</refresh>
		<cell :class="[`pro-wrap${grid}`]" v-for="p,i in proList" v-if="i % grid === 0 ">
			<div v-for="{name,imgUrl,fobPrice,minOrder,componey,url} in (i+1 === proList.length?[proList[i]]:[proList[i],proList[i+1]])"
				 :class="[`pro${grid}`]">
				<image class="pro-img" :src="imgUrl"></image>
				<div :class="['pro-detail1',`pro-detail${grid}`]">
					<text>{{name}}</text>
				</div>
			</div>
		</cell>
		<cell class="loading">
			<text>loading</text>
		</cell>
	</list>
</template>
<style scoped>
	.pro-list {
		/*padding-left: 20px;*/
		/*padding-right: 20px;*/
		height: 1132px;
		flex-direction: row;
	}

	.pro-wrap1 {
		flex-direction: row;
		width: 750px;
		height: 375px;
	}

	.pro-wrap2 {
		flex-direction: row;
		width: 750px;
		height: 600px;
	}

	.pro1 {
		flex-direction: row;
		padding-top: 20px;
		padding-bottom: 20px;
		margin-left: 20px;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #ced3d9;
		border-right-width: 0;
		width: 710px;
	}

	.pro2 {
		flex-direction: column;
		border-right-style: solid;
		border-right-width: 1px;
		border-right-color: #ced3d9;
		margin-left: 0;
		padding-left: 20px;
		padding-right: 20px;
		width: 375px;
		align-items: center;
	}

	.pro-img {
		width: 335px;
		height: 335px;
	}

	.pro-detail1 {
		height: 300px;
		overflow: hidden;
		width: 350px;
		margin-left: 20px;
		lines: 2;
		text-overflow: ellipsis;
		font-size: 28px;
		line-height: 34px;
		color: #222222;
	}

	.pro-detail2 {
		width: 335px;
		height: 150px;
		margin-left: 0;
	}

	.refresh {
		justify-content: center;
		background-color: #fff;
		line-height: 34px;
	}

	.indicator {
		line-height: 40px;
		font-size: 24px;
	}

	.loading{
		line-height: 40px;
		font-size: 24px;
		text-align: center;
	}
</style>
<script>
	export default{
		data(){
			return {
				refreshing: false
			}
		},
		props: ["proList", "grid"],
		computed: {
			gridName(){
				return `pro${this.grid}`
			}
		},
		methods: {
			loadMore(){
				this.$emit('loadMore')
			},
			scroll(contentOffset){

			},
			onrefresh(){
				if (this.refreshing)return
				this.refreshing = true
				setTimeout(() => {
					this.refreshing = false
				}, 3000)
			},
			onpullingdown(){

			},
			toDetail(url){
				this.$router.push({name: 'proDetail', params: {url: `https://m.made-in-china.com/${url}`}})
			},

		}
	}
</script>
