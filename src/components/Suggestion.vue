<template>
    <div class="suggestion">
        <text @click="suggSearch" :value="word" class="sugg-word" v-for="{word},index in suggestions" v-if="index < 5" >{{word}}</text>
    </div>
</template>

<style scoped>
    .suggestion {
        position: absolute;
        top: 106px;
        background-color: #f7f7f7;
        flex-direction: column;
        width: 750px;
    }

    .sugg-word {
        font-size: 28px;
        height: 78px;
        line-height: 78px;
        padding-left: 40px;
        align-items: center;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #dae0e5;
    }
</style>
<script>
    import {mapActions} from 'vuex'

    export default{
        data(){
            return {}
        },
        props: ['suggestions'],
        methods:{
            ...mapActions(['triggerSuggestions']),
            suggSearch(e){
                this.$emit("suggSearch",e.target.innerText)
                this.triggerSuggestions(false)
            }
        }
    }
</script>
