<template>
    <div>
        <div>this is template body</div>
        <div @click="jump('spec1')">jump to spec1</div>
    </div>
</template>
<style scoped>
    body{
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
