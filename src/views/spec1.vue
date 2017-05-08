<template>
    <div>
        <text class="back" @click="jump('/')">back</text>
        <text @click="changeMessage" class="message">{{ message }} </text>
    </div>
</template>
<style scoped>
    body {
        /*background-color:#ff0000;*/
    }
</style>
<script>
  export default{
    data(){
      return {
        message: 'This is a weex text tag'
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
