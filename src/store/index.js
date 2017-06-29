import Vue from "vue"
import Vuex from "vuex"
import {getSpecs} from "../common/utils"

Vue.use(Vuex)

const isProd = process.env.NODE_ENV === "production"

const app = {
	// ctx: [`http://${process.env.IP}:9000`, "http://m.made-in-china.com"][+isProd]
	// ctx: 'http://192.168.31.174:9000'
	ctx: 'http://192.168.26.226:9000',
	staticUrl: 'http://192.168.26.226:8080'
}

const specs = getSpecs()

const state = {
	// TODO: 初始状态
	loading: "off",
	app,
	sideState: false,
	mask: false,
	suggIsOpen: false,
	specs,
	searchData: {}
}

const getters = {
	loading (state) {
		return state.loading
	},
	app (state) {
		return state.app
	},
	specs (state) {
		return state.specs
	},
	sideState (state) {
		return state.sideState
	},
	mask (state) {
		return state.mask
	},
	suggIsOpen (state) {
		return state.suggIsOpen
	},
	searchData (state) {
		return state.searchData
	}
}

const mutations = {
	triggerLoading (state, lstate) {
		state.loading = lstate
	},
	changeSideState (state) {
		state.sideState = !state.sideState
	},
	triggerMask (state, type) {
		state.mask = type
		if (!type) {
			state.suggIsOpen = false
		}
	},
	triggerSuggestions (state, type) {
		state.mask = type
		state.suggIsOpen = type
	},
	setSearchData (state, type) {
		state.searchData = type
	}
}

const actions = {
	triggerLoading ({commit}, lstate) {
		commit("triggerLoading", lstate)
	},
	changeSideState ({commit}) {
		commit("changeSideState")
	},
	triggerMask ({commit}, type) {
		commit("triggerMask", type)
	},
	triggerSuggestions ({commit}, type) {
		commit("triggerSuggestions", type)
	},
	setSearchData ({commit}, type) {
		commit("setSearchData", type)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
