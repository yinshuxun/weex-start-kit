<template>
    <div class="main-wrap">
        <div>
            <sideBar></sideBar>
            <router-view></router-view>
            <menu></menu>
        </div>
        <div class="loading" v-if="loading==='on'"></div>
    </div>
</template>
<style>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 750px;
        height: 2000px;
        background-color: #000;
        opacity: .5;
    }

    body {
        margin: 0;
    }

</style>

<script>
    import SideBar from './components/SideBar.vue'
    import Menu from './components/Menu.vue'
    import {mapGetters} from 'vuex'
    Vue.prototype.$modal = weex.requireModule("modal")

    export default {
        data() {
            return {
                sideState: true
            }
        },
        created(){
            const domModule = weex.requireModule('dom')

            domModule.addRule('fontFace', {
                'fontFamily': 'iconfont',
                'src': "url(\'http://at.alicdn.com/t/font_47qz8lcd2qkw3ik9.woff\')",
                'src': "url(\'http://at.alicdn.com/t/font_47qz8lcd2qkw3ik9.ttf\')",
            })
        },
        components: {
            SideBar,
            Menu
        },
        computed: {
            ...mapGetters(['loading'])
        }
    }
</script>
