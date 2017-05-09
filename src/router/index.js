import Router from 'vue-router'
import home from '../views/home.vue'
import spec1 from '../views/spec1.vue'
import video from '../views/video-spec.vue'
import trans from '../views/transform-spec.vue'
import slider from '../views/slider-spec.vue'
import input from '../views/input-spec.vue'

function requireAll(requireContext) {
    return requireContext.keys().map((value) => {
        return {
            path: value,
            component: requireContext
        }
    });
}
// requires and returns all modules that match

var modules = requireAll(require.context("../views", true, /^\.\/.*spec\.vue/));

console.log(modules[0])

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/input', component: input},
        {path: '/slider', component: slider},
        {path: '/trans', component: trans},
        {path: '/video', component: video},
        {path: '/spec1', component: spec1},
        {path: '/home', component: home},
        {path: '/', redirect: '/home'}
    ]
})