import router from 'vue-router'
import home from '../views/home.vue'
import spec1 from '../views/spec1.vue'

Vue.use(router)

export default new router({
  routes: [
    {
      path: '/spec1',
      component: spec1
    },
    {
      path: '/home',
      component: home
    },
    {path: '/', redirect: '/home'}
  ]
})