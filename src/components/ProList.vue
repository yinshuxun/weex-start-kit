<template>
    <list class="pro-list" @loadmore="loadMore">
        <cell class="pro" v-for="{name,imgUrl,fobPrice,minOrder,componey} in proList">
            <image class="pro-img" :src="imgUrl"></image>
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