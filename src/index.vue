<template>
    <div>
        <sideBar></sideBar>
        <router-view></router-view>
        <menu></menu>
    </div>
</template>
<style>
    .micon {
        font-family: iconfont;
        font-size: 40px;
    }
</style>

<script>
  import SideBar from './components/SideBar.vue'
  import Menu from './components/Menu.vue'
  Vue.prototype.$modal = weex.requireModule("modal")

  export default {
    data() {
      return {
        sideState: true
      }
    },
    mounted(){
      const domModule = weex.requireModule('dom')
      domModule.addRule('fontFace', {
        'fontFamily': 'iconfont',
        'src': "url(\'http://at.alicdn.com/t/font_47qz8lcd2qkw3ik9.ttf\')"
      },{
          'fontFamily': 'iconfont',
          'src': "url(\'http://at.alicdn.com/t/font_47qz8lcd2qkw3ik9.woff\')"
      })
    },
    components: {
      SideBar,
      Menu
    }
  }
</script>
