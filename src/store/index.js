import Vue from 'vue'
import Vuex from 'vuex'
import {getSpecs} from '../common/utils'

Vue.use(Vuex)

// const isProd = process.env.NODE_ENV === 'production'
//
// const app ={
//   ctx :['http://local.xxbb.me:3000','http://xxbb.me:3000',][+isProd]
// }

const specs = getSpecs()


const state = {
  // TODO: 初始状态
  loading: 'ing',
  app: {},
  sideState: false,
  specs
}

const getters = {
  loading(state) {
    return state.loading
  },
  app(state){
    return state.app
  },
  specs(state){
    return state.specs
  },
  sideState(state){
    return state.sideState
  }
}

export default new Vuex.Store({
  state,
  mutations: {
    loading(state, lstate) {
      state.loading = lstate
    },
    changeSideState(state){
      state.sideState = !state.sideState
    }
  },
  actions: {
    loading({commit}, lstate) {
      commit('loading', lstate)
    },
    changeSideState({commit}){
      commit('changeSideState')
    }
  },
  getters
})