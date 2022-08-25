import ajax from './ajax'

export default function(Vue) {
  Vue.prototype.$axios = ajax
}
