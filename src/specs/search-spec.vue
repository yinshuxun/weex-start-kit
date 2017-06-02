<template>
    <div>
        <search-bar></search-bar>
        <navigator-bar></navigator-bar>
    </div>
</template>
<style scoped>

</style>
<script>
    import searchBar from "../components/SearchBar.vue"
    import navigatorBar from "../components/NavigatorBar.vue"

    var stream = weex.requireModule("stream")

    export default{
        data(){
            return {
                num: 1655
            }
        },
        components: {
            searchBar,
            navigatorBar
        },
        created(){
            console.log(1)
            this.getData(res => {
                console.log(res.data)
            })
        },
        methods: {
            getData(callback){
                return stream.fetch({
//                    method: 'GET',
//                    type: 'json',
//                    url: 'https://api.github.com/repos/alibaba/weex'

                    method : "POST",
                    headers :{"Content-Type": "application/json"},
                    type: "json",
                    url: "https://m.made-in-china.com/search/product",
                    body: JSON.stringify({
                        word: "led",
                        page: "2"
                    })

                }, callback)
            }
        }
    }
</script>