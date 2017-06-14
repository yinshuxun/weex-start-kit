<template>
    <div class="search-wrap">
        <mask @></mask>
        <div class="search-bar-wrap">
            <text class="back micon">&#xe675;</text>
            <div class="input-wrap">
                <input class="input-search" type="text"
                       :value="searchWord"
                       @input="onInput"
                       @click="getSuggestions"
                       @return="search"/>
                <div class="input-btn" @click="search">
                    <text class="micon sea-icon">&#xe60d;</text>
                </div>
            </div>
            <text class="menu micon">&#xe603;</text>
        </div>
        <suggestion @suggSearch="suggSearch" :suggestions="suggestions" v-if="suggIsOpen"></suggestion>
    </div>

</template>
<style scoped>
    .search-wrap {
        position: fixed;
        top: 0;
    }

    .search-bar-wrap {
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
    import {mapActions, mapGetters} from 'vuex'
    import suggestion from '../components/Suggestion.vue'
    import mask from "../components/Mask.vue"

    const stream = weex.requireModule("stream")

    export default{
        data(){
            return {
                searchWord: "led",
                suggestions: [],
            }
        },
        methods: {
            ...mapActions(['changeSideState', 'triggerSuggestions', 'setSearchData']),
            onInput(e){
                const _self = this
                this.searchWord = e.value
                this.timeoutId && clearTimeout(this.timeoutId)
                this.timeoutId = setTimeout(() => {
                    _self.getSuggestions()
                }, 300)
            },
            search(){
                this.$emit("triggerSearch", this.searchWord)
                this.triggerSuggestions(false)
                this.timeoutId && clearTimeout(this.timeoutId)
            },
            getSuggestions(){
                const _self = this
//                if (!this.searchWord)return
                this.triggerSuggestions(true)

                this.fetchSuggestion(this.searchWord).then(res => {
                    _self.suggestions = res
                })
            },
            fetchSuggestion(word){
                const _self = this
                return new Promise((succ, error) => {
                    stream.fetch({
                        method: "get",
                        type: "json",
                        url: `${_self.app.ctx}/getSugg?word=${encodeURIComponent(this.searchWord)}`
                    }, res => {
                        res.ok && succ(res.data.suggs)
                    })
                })
            },
            suggSearch(value){
                this.searchWord = value
                this.search()
            }
        },
        computed: {
            ...mapGetters(["searchData", "suggIsOpen", "app"])
        },
        components: {
            suggestion,
            mask
        }
    }

</script>
