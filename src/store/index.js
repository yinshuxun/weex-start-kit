import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const isProd = process.env.NODE_ENV === 'production'
//
// const app ={
//   ctx :['http://local.xxbb.me:3000','http://xxbb.me:3000',][+isProd]
// }

const state = {
  // TODO: 初始状态
  count: 0,
  steps: [],
  loading: 'ing',
  app:{}
}

const getters = {
  count(state) {
    return state.count
  },
  steps(state) {
    return state.steps
  },
  loading(state) {
    return state.loading
  },
  app(state){
    return state.app
  }
}

export default new Vuex.Store({
  state,
  mutations: {
    increment(state, num) {
      state.count += num
      state.steps.unshift('加上' + num)
    },
    reduce(state, num) {
      state.count -= num
      state.steps.unshift('减去' + num)
    },
    loading(state, lstate) {
      state.loading = lstate
    }
  },
  actions: {
    increment({commit}, num) {
      commit('increment', num)
    },
    reduce({commit}, num) {
      commit('reduce', num)
    },
    loading({commit}, lstate) {
      commit('loading', lstate)
    }
  },
  getters
})