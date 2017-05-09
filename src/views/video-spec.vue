<template>
    <div>
        <video class="video" :src="src" autoplay controls
               @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
        <text class="info">state: {{state}}</text>
    </div>
</template>
<style scoped>
    .video {
        width: 630px;
        height: 350px;
        margin-top: 60px;
        margin-left: 60px;
    }
    .info {
        margin-top: 40px;
        font-size: 40px;
        text-align: center;
    }
</style>
<script>
  export default {
    data () {
      return {
        state: '----',
        src:'httpd://flv2.bn.netease.com/vieolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
      }
    },
    methods:{
      onstart (event) {
        this.state = 'onstart'
      },
      onpause (event) {
        this.state = 'onpause'
      },
      onfinish (event) {
        this.state = 'onfinish'
      },
      onfail (event) {
        this.state = 'onfinish'
      }
    }
  }
</script>