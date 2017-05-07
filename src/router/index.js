import Router from 'vue-router'
import home from '../views/home.vue'
import spec1 from '../views/spec1.vue'
import video from '../views/video-spec.vue'
import trans from '../views/transform-spec.vue'
import slider from '../views/slider-spec.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/slider',component: slider},
    {path: '/trans',component: trans},
    {path: '/video',component: video},
    {path: '/spec1',component: spec1},
    {path: '/home',component: home},
    {path: '/',redirect: '/home'}
  ]
})