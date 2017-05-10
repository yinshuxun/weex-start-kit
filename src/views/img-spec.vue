<template>
    <div>
        <text @click="changeMessage" class="message">{{ message }} </text>
    </div>
</template>
<style scoped>
    body {
        /*background-color:#ff0000;*/
    }
    .message{
        flex:1;
        margin-top: 50px;
        font-size: 1rem;
    }
</style>
<script>
    export default{
        data(){
            return {
                message: 'This is a weex page111'
            }
        },
        methods: {
            changeMessage() {
                this.message = 'You click it now!';
            }
        },
        components: {}
    }
</script>
