<template>
    <div class="header">
        <div class="nav">
            <div v-for="m in modules" class="link" @click="distributeView(`/${m}`)">
                <text class="title">{{m}}</text>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                modules: ['spec1', 'video', 'trans', 'slider', 'input']
            }
        },
        methods: {
            distributeView(router){
                this.$emit('distributeView', router)
            }
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
