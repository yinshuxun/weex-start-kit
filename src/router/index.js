import Router from "vue-router"
import Hello from "../views/hello.vue"
import proDetail from "../views/pro-detail.vue"
import {getSpecs} from "../common/utils"

Vue.use(Router)

export default new Router({
	mode: "hash",
	routes: [
		...getSpecs(),
		{name: "proDetail", path: "/proDetail", component: proDetail},
		{
			path: "/hello", component: (resolve) => {
			require(['../views/hello.vue'], resolve)
		}
		},
		{path: "/", redirect: "/search"}
	]
})
