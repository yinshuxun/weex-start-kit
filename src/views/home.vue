<template>
    <div>
        <header @distributeView="distributeView"></header>
        <component :is="curr"></component>
    </div>
</template>
<style scoped>
    .search-area {
        flex-direction: row;
    }

    .input {
        flex: 4;
        border: 1px solid;
    }

    .fixed-button {
        flex: 1;
        background-color: #FC6621;
        border-radius: 10px;
        height: 40px;
        margin-left: 20px;
    }
</style>
<script>
    import Header from '../components/header.vue'
    import back from '../views/back-spec.vue'

    export default{
        components: {Header},
        data(){
            return {
                curr: back
            }
        },
        methods: {
            distributeView(router){
                this.curr = this.$router.getMatchedComponents(router)[0]
            }
        }
    }
</script>
