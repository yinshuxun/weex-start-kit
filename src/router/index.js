import Router from 'vue-router'
import Hello from '../views/hello.vue'
import {getSpecs} from '../common/utils'

Vue.use(Router)

export default new Router({
    routes: [
        ...getSpecs(),
        {path: '/hello', component: Hello},
        {path: '/', redirect: '/hello'}
    ]
})