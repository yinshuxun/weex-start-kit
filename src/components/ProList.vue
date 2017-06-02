<template>
    <list class="pro-list" @loadmore="loadMore">
        <cell class="pro" v-for="{name,imgUrl,fobPrice,minOrder,componey} in proList">
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
    .pro-detail{
        overflow: hidden;
        width: 380px;
        margin-left: 20px;
        lines:2;
        text-overflow: ellipsis;
        font-size: 28px;
        line-height: 34px;
        color: #222222;
    }
</style>
<script>
    export default{
        data(){
            return {}
        },
        props: ["proList"],
        methods:{
            loadMore(){
                console.log("loadmore")
            }
        }
    }
</script>