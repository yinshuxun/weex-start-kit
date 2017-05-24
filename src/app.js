import App from './index.vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import mixins from './mixins'

sync(store, router)

Vue.mixin(mixins)

new Vue({
  el: '#root',
  render: h => h(App),
  router,
  store
})

router.push('/home')