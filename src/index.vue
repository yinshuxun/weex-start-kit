<template>
    <div>
        <sideBar></sideBar>
        <router-view></router-view>
        <menu></menu>
    </div>
</template>
<style>

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
        'src': "url(\'http://at.alicdn.com/t/font_h5e6t401ajhmpldi.ttf\')"
      })
    },
    components: {
      SideBar,
      Menu
    }
  }
</script>
