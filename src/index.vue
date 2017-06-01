<template>
    <div>
        <sideBar></sideBar>
        <router-view></router-view>
        <menu></menu>
        <text class=".micon">&#xe618;</text>
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
      })
    },
    components: {
      SideBar,
      Menu
    }
  }
</script>
