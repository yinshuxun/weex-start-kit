<template>
    <div class="search-wrap">
        <text class="back micon"> < </text>
        <div class="input-wrap">
            <input class="input-search" type="text" @return="search" @input="input" @change="change"/>
            <div class="input-btn" @click="search"></div>
        </div>
        <text class="menu">=</text>
    </div>
</template>
<style scoped>
    .search-wrap{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 106px;
        border-bottom-style:solid ;
        border-bottom-width: 1px;
        border-bottom-color: #dae0e5;
    }
    .input-wrap{
        width: 590px;
        height: 70px;
        border-radius: 7px;
        flex-direction: row;
    }
    .input-search{
        width: 490px;
        height: 70px;
        background-color:#f0f1f2;
        color: #666666;
        border-width: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 6px;
        padding: 14px;
    }
    .input-btn{
        background-color:#e54545;
        width: 100px;
        height: 70px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 6px;
    }
    .back{
        width: 80px;
        height: 40px;
        font-size: 50px;
        text-align: center;
    }
    .menu{
        width: 80px;
        height: 50px;
        font-size:50px;
        text-align: center;
    }
    .micon{
        font-family: micon;
        font-size: 40px;
    }
</style>
<script>
    import {mapActions} from 'vuex'

    const domModule = weex.requireModule('dom')
    domModule.addRule('micon',{
        fontFamily:"micon",
        src:"../assets/iconfont/ali.woff"
    })

    export default{
        data(){
            return {
                searchWord:""
            }
        },
        methods: {
            ...mapActions(['changeSideState']),
            input(e){
                this.searchWord = e.value
            },
            change(e){
            },
            search(){
                console.log(this.searchWord)
            }
        }
    }

</script>
