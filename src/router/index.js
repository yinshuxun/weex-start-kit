import Router from 'vue-router'
import home from '../views/home.vue'
import {getSpecs} from '../common/utils'

Vue.use(Router)

export default new Router({
    routes: [
        ...getSpecs(),
        {path: '/home', component: home},
        {path: '/', redirect: '/home'}
    ]
})