<template lang="pug">
    <div @androidback="back">
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

    .back {
        font-size: 32px;
        color: #fff;
        line-height: 1.7;
        background: grey;
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
      },
      methods: {
        back: function () {
          this.$router.back()
        }
      }
    export default {
        data() {
            return {
                message: 'This is a weex text tag',
                quotes: 'Header',
                header: typeof __weex_define__
            };
        },
        methods: {
            changeMessage() {
                this.message = 'You click it now!';
            }
        }
    }
</script>
