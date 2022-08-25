import util from 'util'
import axios from 'axios'

export default {
  state: {},
  mutations: {
    /**
     * 登录成功
     *
     * @param {Object} state
     * @param {String} token
     */
    SIGNIN(state, token) {
      util.setCookie('token', token, 30)
      state.token = token
    },
    /**
     * 退出登录
     *
     * @param {Object} state
     */
    SIGNOUT(state) {
      util.delCookie('token')
      state.token = ''
    }
  },
  actions: {
    GETUSER({
      commit, state
    }) {
      commit('ISLOADING')
      let identity = util.getCookie('token')
      axios.post('/user/information', {
        token: identity
      }).then((data) => {
        if (data.success) {
          Object.assign(state, data)
          commit('ISLOADED')
        }
      }, (response) => {
        console.log(response)
      })
    },
    SIGNIN({
      commit
    }, token) {
      commit('SIGNIN', token)
    },
    SIGNOUT({
      commit
    }) {
      commit('SIGNOUT')
    }
  }
}
