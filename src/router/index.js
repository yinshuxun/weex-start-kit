import Router from 'vue-router'
import Hello from '../views/hello.vue'
import {getSpecs} from '../common/utils'

Vue.use(Router)

export default new Router({
    mode:'hash',
    routes: [
        ...getSpecs(),
        {path: '/hello', component: Hello},
        {path: '/', redirect: '/search'}
    ]
})