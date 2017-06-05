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
    .place-blank{
        margin-top: 106px;
    }
</style>
<script>
    import searchBar from "../components/SearchBar.vue"
    import navigatorBar from "../components/NavigatorBar.vue"
    import proList from "../components/ProList.vue"
    import mask from "../components/Mask.vue"
    import ledJson from "../assets/simulation/led-json"
    var stream = weex.requireModule("stream")

    export default{
        data(){
            return {
                totalNum: 1655,
                proList:[]
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
            _self.search().then((res) => {
                const {totalNum, dataList, totalPage} = res.data;
                _self.totalNum = totalNum
                _self.proList = dataList
            })
        },
        methods: {
            search(callback){
//                return stream.fetch({
////                    method: 'GET',
////                    type: 'json',
////                    url: 'https://api.github.com/repos/alibaba/weex'
//
//                    method : "POST",
//                    headers :{"Content-Type": "application/json"},
//                    type: "json",
//                    url: "https://m.made-in-china.com/search/product",
//                    body: JSON.stringify({
//                        word: "led",
//                        page: "2"
//                    })
//                }, callback)
                return new Promise((succ, error) => {
                    setTimeout(() => {
                        succ({
                            data: ledJson
                        })
                    }, 300)
                })
            }
        }
    }
</script>