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
    components: {
      SideBar,
      Menu
    }
  }
</script>
