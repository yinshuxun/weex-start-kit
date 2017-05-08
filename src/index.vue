<template>
    <div class="">
        <!--<text class="header">{{ quotes }}</text>-->
        <!--<text class="back" @click="jump('/')">back</text>-->
        <!--<image src="http://ata2-img.cn-hangzhou.img-pub.aliyun-inc.com/7d42775b8f0d0c86589082dc9ee179c2.png"-->
               <!--class="bannar-image"/>-->
        <router-view style="flex:1"></router-view>

    </div>
</template>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bannar-image {
        width: 200px;
        height: 200px;
    }

    .message {
        padding-top: 20px;
        padding-bottom: 40px;
        color: #0055dd;
        font-size: 28px;
    }

    .header {
        font-size: 32px;
        color: #fff;
        line-height: 1.7;
        background: grey;
        width: 100%;
    }

    .back{
        font-size: 32px;
        color: #fff;
        line-height: 1.7;
        background: #545454;
        width: 100%;
    }
</style>

<script>
  export default {
    data() {
      return {
        message: 'This is a weex text tag',
        quotes: 'Header'
      };
    },
    methods: {
      changeMessage() {
        this.message = 'You click it now!';
      }
    }
  }
</script>
