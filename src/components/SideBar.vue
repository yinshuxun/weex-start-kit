<template>
    <div class="side-bar" ref='sideBar'>
        <div class="nav">
            <div v-for="{name,path} in specs" class="link" @click="go(`${path}`)">
                <text class="title">{{name}}</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .side-bar {
        background-color: #00FFFF;
        justify-content: top;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 3000px;
        width: 200px;
        overflow: scroll;
        display: block;
    }

    .nav {
        flex-direction: column;
    }

    .link {
        /*flex:1;*/
    }

    .title {
        color: #FFFFFF;
        font-size: 40px;
        margin-bottom: 20px;
        margin-top: 5px;
    }
</style>
<script>
  import {mapGetters, mapActions} from 'vuex'
  const animation = weex.requireModule('animation')

  export default{
    data(){
      return {}
    },
    watch: {
      sideState: function () {
        this.change()
      }
    },
    methods: {
      go(router){
        this.$router.push(router)
        this.changeSideState()
      },
      change(){
        const sideBar = this.$refs.sideBar;
        animation.transition(sideBar, {
          styles: {
            transform: `translate(${this.sideState ? '1px' : '-200px'})`
          },
          duration: 500,
          timingFunction: 'ease'
        })
      },
      ...mapActions(['changeSideState'])
    },
    computed: {
      ...mapGetters(['specs', 'sideState'])
    }
  }

</script>
