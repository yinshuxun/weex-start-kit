<template>
    <div class="header">
        <div class="nav">
            <div v-for="{name,path} in specs" class="link" @click="distributeView(`${path}`)">
                <text class="title">{{name}}</text>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default{
        methods: {
            distributeView(router){
                this.$emit('distributeView', router)
            }
        },
        computed: {
            ...mapGetters(['specs'])
        }
    }

</script>

<style scoped>
    .header {
        margin-bottom: 3px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
        background-color: #454545;
    }

    .nav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }

    .link {
        flex: 1;
        padding: 0 10px;
    }

    .title {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 32px;
        line-height: 80px;
        color: #FFFFFF;
    }
</style>
