<template>
    <list class="pro-list" @loadmore="loadMore" loadmoreoffset="20" @scroll="scroll">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown"
                 :display="refreshing ? 'show' : 'hide'">
            <text class="indicator">loading...</text>
        </refresh>
        <cell class="pro" v-for="{name,imgUrl,fobPrice,minOrder,componey,url} in proList"
              @click="toDetail(url)">
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
        height: 1132px;
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

    .refresh {
        justify-content: center;
        background-color: #fff;
        line-height: 34px;
    }

    .indicator {
        line-height: 40px;
        font-size: 24px;
    }
</style>
<script>
    export default{
        data(){
            return {
                refreshing: false
            }
        },
        props: ["proList"],
        methods: {
            loadMore(){
                this.$emit('loadMore')
            },
            scroll(contentOffset){
                this.$modal.toast({
                    message: contentOffset
                })
            },
            onrefresh(){
                this.refreshing = true
                this.$modal.toast({message: 'refresh', duration: 1})
                setTimeout(() => {
                    this.refreshing = false
                }, 3000)
            },
            onpullingdown(){
//                this.$modal.toast({message: 'pulling down', duration: 1})
            },
            toDetail(url){
                this.$router.push({name: 'proDetail', params: {url: `https://m.made-in-china.com/${url}`}})
            },

        }
    }
</script>