<template>
	<list class="pro-list" @loadmore="loadMore" loadmoreoffset="0" @scroll="scroll">
		<refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown"
				 :display="refreshing ? 'show' : 'hide'">
			<text class="indicator">loading...</text>
		</refresh>
		<template v-if="grid === 1">
			<cell class="pro-wrap1" v-for="{name,imgUrl,fobPrice,minOrder,componey,url},i in proList" @click="toDetail(url)" v-if="grid == 1">
				<div class="pro1">
					<image class="pro-img" :src="imgUrl"></image>
					<div class="pro-detail1">
						<text lines="2">{{name}}</text>
					</div>
				</div>
			</cell>
		</template>
		<template v-else>
			<cell class="pro-wrap2" v-for="p,i in proList" v-if="i % grid === 0">
				<div
					v-for="{name,imgUrl,fobPrice,minOrder,componey,url} in (i+1 === proList.length?[proList[i]]:[proList[i],proList[i+1]])"
					class="pro2" @click="toDetail(url)">
					<image class="pro-img" :src="imgUrl"></image>
					<div class="pro-detail2">
						<text lines="2">{{name}}</text>
					</div>
				</div>
			</cell>
		</template>
	</list>
</template>
<style scoped>
	.pro-list {
		flex-direction: row;
		height: 1050px;
	}

	.pro-wrap2 {
		flex-direction: row;
		width: 750px;
		height: 525px;
	}

	.pro-wrap1 {
		flex-direction: row;
		width: 750px;
		height: 425px;
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
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #ced3d9;
		border-right-style: solid;
		border-right-width: 1px;
		border-right-color: #ced3d9;
		margin-left: 0;
		padding-top: 20px;
		padding-bottom: 20px;
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
		font-size: 14px;
		line-height: 34px;
		color: #222222;
	}

	.pro-detail2 {
		width: 335px;
		height: 150px;
		margin-left: 0;
		margin-top: 10px;
		font-size: 28px;
		line-height: 34px;
		color: #222222;
		lines: 2;
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

	.loading {
		line-height: 40px;
		font-size: 24px;
		text-align: center;
	}
</style>
<script>
	const navigator = weex.requireModule('navigator')
	const storage = weex.requireModule('storage')

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
			},
			listStyle(){
			    return {
			        height: `${WXEnvironment.deviceHeight}px`
				}
			}
		},
		methods: {
			loadMore(){
			    this.$modal.toast({
					message:'loadmore'
				})
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
				storage.setItem('detailLink', `https://m.made-in-china.com/${url}`)
//				storage.setItem('detailLink', "http://www.made-in-china.com")
//				navigator.push({
//					url: 'http://192.168.31.174:8080/pro-detail.weex.js',
//					animated: "true"
//				})
				this.goTo("proDetail")
//				this.$router.push({name: 'proDetail', params: {url: ``}})
			},
		}
	}
</script>
