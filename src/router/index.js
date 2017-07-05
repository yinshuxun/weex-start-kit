import Router from "vue-router"
import Hello from "../views/hello.vue"
import A from "../views/A.vue"
import B from "../views/B.vue"
import listAna from "../views/list-ana.vue"
import proDetail from "../views/proDetail.vue"
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
		{path: "/listAna", component: listAna},
		{path: "/A", component: A},
		{path: "/B", component: B},
		{path: "/", redirect: "/search"}
	]
})
