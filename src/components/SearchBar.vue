<template>
    <div class="search-wrap">
        <text class="back micon">&#xe675;</text>
        <div class="input-wrap">
            <input class="input-search" type="text" v-model="searchWord" @input="input" @click="getSuggestions" @return="search"/>
            <div class="input-btn" @click="search">
                <text class="micon sea-icon">&#xe60d;</text>
            </div>
        </div>
        <text class="menu micon">&#xe603;</text>
        <suggestion :suggestions="suggestions" v-if="suggIsOpen"></suggestion>
    </div>
</template>
<style scoped>
    .search-wrap {
        position: fixed;
        top:0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 106px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #dae0e5;
        background-color: #fff;
    }

    .input-wrap {
        width: 590px;
        height: 70px;
        border-radius: 7px;
        flex-direction: row;
    }

    .input-search {
        width: 490px;
        height: 70px;
        background-color: #f0f1f2;
        color: #666666;
        border-width: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 6px;
        padding: 14px;
    }

    .input-btn {
        background-color: #e54545;
        width: 100px;
        height: 70px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 6px;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    .back {
        width: 80px;
        height: 40px;
        font-size: 50px;
        text-align: center;
    }

    .menu {
        width: 80px;
        height: 50px;
        font-size: 50px;
        text-align: center;
    }

    .sea-icon {
        height: 40px;
        font-size: 32px;
        color: #ffffff;
        align-items: center;
    }

    .micon {
        font-family: iconfont;
        font-size: 40px;
    }
</style>
<script>
    import {mapActions,mapGetters} from 'vuex'
    import suggestion from '../components/Suggestion.vue'
    var stream = weex.requireModule("stream")

    export default{
        data(){
            return {
                searchWord: "",
                suggestions:[]
            }
        },
        methods: {
            ...mapActions(['changeSideState','triggerSuggestions']),
            input(e){
                console.log(this.searchWord)
            },
            search(){
                this.$modal.toast({message: this.searchWord})
            },
            getSuggestions(jsonpCallback){
                const _self = this
//                if (!this.searchWord)return
                this.triggerSuggestions(true)
                this.fetchSuggestion(this.searchWord || "led").then(res => {
                    console.log(res)
                    _self.suggestions = res
                })
            },
            fetchSuggestion(word = "led"){
                return new Promise((succ, error) => {
                    window.jsonp1 = succ;
                    stream.fetch({
                        method: "get",
                        type: "jsonp",
                        url: `https://keywordsuggestions.made-in-china.com/suggest/getEnProdSuggest.do?count=10&kind=5&call=jsonp1&param=${word}`
                    })
                })
            }
        },
        computed: {
            ...mapGetters(["suggIsOpen"])
        },
        components:{
            suggestion
        }
    }

</script>
