/**
 * 一些活动的临时数据
 */
export default {
  namespaced: true,
  state: {
    readData: { // baidu read 活动临时数据
      name: ''
    }
  },
  mutations: {
    READ_DATA(state, data) {
      state.readData = data
    }
  },
  actions: {
    READ_DATA({commit}, state) {
      commit('READ_DATA', state)
    }
  }
}
