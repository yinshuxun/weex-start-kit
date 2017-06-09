<template>
    <list class="pro-list" @loadmore="loadMore" loadmoreoffset="20" @scroll="scroll">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
            <text class="indicator">loading...</text>
        </refresh>
        <cell class="pro" v-for="{name,imgUrl,fobPrice,minOrder,componey,url} in proList" @click="jump(`proDetail`)">
            <image class="pro-img" :src="imgUrl"></image>
            <div class="pro-detail">
                <text>{{name}}</text>
            </div>
        </cell>
    </list>
</template>
<style scoped>
    .pro-list {
        padding-left: 20px;
        padding-right: 20px;
    }

    .pro {
        flex-direction: row;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #ced3d9;
    }

    .pro-img {
        width: 300px;
        height: 300px;
    }

    .pro-detail {
        height: 300px;

        overflow: hidden;
        width: 380px;
        margin-left: 20px;
        lines: 2;
        text-overflow: ellipsis;
        font-size: 28px;
        line-height: 34px;
        color: #222222;
    }
    .refresh{
        justify-content: center;
        background-color: #fff;
    }
    .indicator{
        line-height: 40px;
        font-size: 24px;
    }
</style>
<script>
    const modal = weex.requireModule("modal")

    export default{
        data(){
            return {
                refreshing:false
            }
        },
        props: ["proList"],
        methods: {
            loadMore(){
                modal.toast({message: 'loadmore', duration: 1})
            },
            scroll(contentOffset){
                modal.toast({
                    message: contentOffset
                })
            },
            onrefresh(){
                modal.toast({ message: 'refresh', duration: 1 })
                this.refreshing = true
                setTimeout(() => {
                    this.refreshing = false
                }, 300)
            },
            onpullingdown(){
                modal.toast({ message: 'pulling down', duration: 1 })
            }
        }
    }
</script>