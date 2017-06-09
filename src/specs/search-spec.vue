<template>
    <div>
        <div class="place-blank"></div>
        <navigator-bar :totalNum="totalNum"></navigator-bar>
        <pro-list :proList="proList"></pro-list>
        <mask></mask>
        <search-bar></search-bar>
    </div>
</template>
<style scoped>
    .micon {
        font-family: iconfont;
        font-size: 40px;
    }

    .place-blank {
        margin-top: 106px;
    }
</style>
<script>
    import searchBar from "../components/SearchBar.vue"
    import navigatorBar from "../components/NavigatorBar.vue"
    import proList from "../components/ProList.vue"
    import mask from "../components/Mask.vue"
    import ledJson from "../assets/simulation/led-json"
    import {mapGetters, mapActions} from "vuex"
    var stream = weex.requireModule("stream")

    export default{
        data(){
            return {
                totalNum: "",
                proList: ""
            }
        },
        components: {
            searchBar,
            navigatorBar,
            proList,
            mask
        },
        created (){
            const _self = this;
            stream.fetch({
                method: "POST",
                url: "http://127.0.0.1:9000/search/product",
                type: "json",
                "Content-Type": "application/json",
                body: JSON.stringify({
                    word: "led"
                })
            }, res => {
                res.ok && _self.setSearchData(res.data)
            })
        },
        methods: {
            ...mapActions(['setSearchData'])
        },
        watch: {
            searchData(val){
                const {totalNum, dataList, totalPage} = val;
                this.totalNum = totalNum
                this.proList = dataList
            }
        },
        computed: {
            ...mapGetters(['searchData'])
        }
    }
</script>