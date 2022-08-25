import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import temporary from './temporary'

Vue.use(Vuex)

const state = {
  isFetching: false
}

const mutations = {
  ISLOADING(state) {
    state.isFetching = true
  },
  ISLOADED(state) {
    state.isFetching = false
  }
}

const actions = {}

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  modules: {
    user,
    temporary
  }
})

export default store
