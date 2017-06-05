<template>
    <div class="mask" @click="triggerMask(false)" v-if="mask"></div>
</template>
<style scoped>
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 750px;
        height: 2000px;
        background-color: #000;
        opacity: .5;
    }
</style>
<script>
    import {mapActions, mapGetters} from "vuex"

    export default{
        data(){
            return {}
        },
        computed: {
            ...mapGetters(["mask"])
        },
        methods:{
            ...mapActions(["triggerMask"]),
        }
    }
</script>
