<template>
    <div class="menu" ref='sideBar' @click="changeSideState">
        <div class="menu-inr"></div>
    </div>
</template>
<style scoped>
    .menu {
        background-color: #00FFFF;
        position: fixed;
        bottom: 30px;
        right: 30px;
        height: 80px;
        font-size: 80px;
        width: 80px;
        border-radius:80px;
        justify-content: center;
        align-items: center;
    }
    .menu-inr{
        width: 60px;
        height: 60px;
        border-radius: 60px;
        background: #808080;
    }
</style>
<script>
   import {mapActions} from 'vuex'

  export default{
    methods: {
      ...mapActions(['changeSideState'])
    }
  }

</script>
