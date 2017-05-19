<template lang="pug">
    <div>
        <div>
            <text @click='imgOpen' class='btn' >open img11</text>
        </div>
    </div>
</template>
<style scoped>
    body {
        /*background-color:#ff0000;*/
    }

    .btn {
        text-align: center;
        color: #ffffff;
        padding: 12px;
        background-color: #3071a9;
        border-color: #285e8e;
        border-radius: 4px;
    }

    .img-btn {
        background: black;
        color: white;
        width: 200px;
        height: 50px;
        position: absolute;
        top: 200px;
        left: 300px;
        text-align: center;
    }

    .message {
        flex: 1;
        margin-top: 50px;
        font-size: 1rem;
    }

    .img-btn-text {
        color: white;
    }
</style>
<script>
  import Nat from 'natjs/lib/index.js'

  console.log(Nat)

  export default{
    data(){
      return {
        message: 'This is a weex page111'
      }
    },
    methods: {
      changeMessage() {
        this.message = 'You click it now!';
      },
      imgOpen(){
        console.log(Nat)
        Nat.camera.captureImage((err, ret) => {
          console.log('Path: ', ret.path)
        })

      }
    },
    components: {}
  }
</script>
