// import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
  // import axios from 'axios'
import routes from './routes'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import AjaxPlugin from './plugins/ajax'
Vue.use(AjaxPlugin)
import util from 'util'
import setWechatTitle from './util/setWechatTitle'
import clickEvents from './components/clickEvents'
import 'intersection-observer'
import jsBridge from 'jsBridge'
import { pageLoadEvents } from './lib/ptp_3.0'
import axios from './plugins/ajax/ajax.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueHtml2Canvas from 'vue-html2canvas'
Vue.use(VueHtml2Canvas)
Vue.config.ignoredElements = ['wx-open-launch-weapp']
// import vconsole from 'vconsole'
// Vue.use(vconsole)
// import eruda from 'eruda'
// eruda.init()
// 接入监控
var fundebug = require('fundebug-javascript')
fundebug.apikey = '338fbc859f0737c56f1b1ee01aa14cdd72719deb9cf343abe312b9e46898ca0a'
function formatComponentName(vm) {
  if (vm.$root === vm) return 'root'
  var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '')
}

Vue.config.errorHandler = function(err, vm, info) {
  var componentName = formatComponentName(vm)
  var propsData = vm.$options && vm.$options.propsData
  fundebug.notifyError(err, {
    metaData:
    {
      componentName: componentName,
      propsData: propsData,
      info: info
    }
  })
}

//加载公共组件
import components from './components/'

import './less/common.less'

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, components[key])
})
Vue.use(clickEvents.install)
Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(ElementUI)
Vue.use(require('vue-wechat-title'))

// Vue.directive('scroll-record', scrollRecord)
const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.meta.scrollToTop) {
        return {
          x: 0,
          y: 0
        }
      }
    }
  },
  routes,
  mode: 'history',
  base: 'act'
})

// 微信小程序埋点数据获取相关参数
if (window.__wxjs_environment === 'miniprogram' || util.getQueryString('isWxMiNiAPP')) {
  window.sessionStorage.setItem('referId', decodeURIComponent(util.getQueryString('referId') || ''))
  window.sessionStorage.setItem('townId', util.getQueryString('townId') || '')
  window.sessionStorage.setItem('latitude', util.getQueryString('latitude') || '')
  window.sessionStorage.setItem('longitude', util.getQueryString('longitude') || '')
  window.sessionStorage.setItem('version', util.getQueryString('version') || '')
  window.sessionStorage.setItem('jwtToken', util.getQueryString('jwtToken') || '')
  window.sessionStorage.setItem('deviceId', util.getQueryString('deviceId') || '')
  window.sessionStorage.setItem('businessTownid', util.getQueryString('businessTownid') || '')
  window.sessionStorage.setItem('channel', util.getQueryString('channel') || '')
  window.sessionStorage.setItem('env', 'wx' || '')
}

// 支付宝小程序埋点数据获取相关参数
if (util.getQueryString('isZFBMiNiAPP')) {
  window.sessionStorage.setItem('referId', decodeURIComponent(util.getQueryString('referId') || ''))
  window.sessionStorage.setItem('townId', util.getQueryString('townId') || '')
  window.sessionStorage.setItem('latitude', util.getQueryString('latitude') || '')
  window.sessionStorage.setItem('longitude', util.getQueryString('longitude') || '')
  window.sessionStorage.setItem('version', util.getQueryString('version') || '')
  window.sessionStorage.setItem('jwtToken', util.getQueryString('jwtToken') || '')
  window.sessionStorage.setItem('deviceId', util.getQueryString('deviceId') || '')
  window.sessionStorage.setItem('channel', util.getQueryString('channel') || '')
  window.sessionStorage.setItem('env', 'ali' || '')
}
// util.isAliMiniApp().then((res) => {
//   if (res) {
//     window.sessionStorage.setItem('referId', decodeURIComponent(util.getQueryString('referId') || ''))
//     window.sessionStorage.setItem('townId', util.getQueryString('townId') || '')
//     window.sessionStorage.setItem('latitude', util.getQueryString('latitude') || '')
//     window.sessionStorage.setItem('longitude', util.getQueryString('longitude') || '')
//     window.sessionStorage.setItem('version', util.getQueryString('version') || '')
//     window.sessionStorage.setItem('jwtToken', util.getQueryString('jwtToken') || '')
//     window.sessionStorage.setItem('deviceId', util.getQueryString('deviceId') || '')
//     window.sessionStorage.setItem('channel', util.getQueryString('channel') || '')
//   }
// })
// 客户端埋点数据获取相关参数
if (util.isAndroidApp() || util.isIosApp()) {
  jsBridge.getAppTrackInfo && jsBridge.getAppTrackInfo().then(res => {
    window.sessionStorage.setItem('referId', res.currentId || '')
    window.sessionStorage.setItem('townId', res.townId || '')
    window.sessionStorage.setItem('latitude', res.latitude || '')
    window.sessionStorage.setItem('longitude', res.longitude || '')
    window.sessionStorage.setItem('version', res.version || '')
    window.sessionStorage.setItem('jwtToken', res.jwtToken || '')
    window.sessionStorage.setItem('deviceId', res.deviceId || '')
    window.sessionStorage.setItem('channel', res.channel || '')
  })
  jsBridge.getAppInfo && jsBridge.getAppInfo().then(res => {
    window.sessionStorage.setItem('appKey', res.appKey || '')
  })
}

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    let token = util.getToken()
    if (!token) {
      util.goLogin(`${window.location.origin}/app${to.path}`)
    } else {
      next()
    }
  } else {
    next()
  }
})

let referIdGlob = null

router.afterEach((to, from) => {
  const p = window.location.protocol + '//' + window.location.host + '/act'
  if (!referIdGlob) {
    referIdGlob = document.referrer
  } else {
    referIdGlob = window.location.protocol + '//' + window.location.host + '/act' + from.fullPath
  }
  if (util.getEnv() === 'QTSHE_WECHAT') {
    axios.track({
      currentId: p + to.fullPath,
      referId: referIdGlob || '',
      eventType: 5
    })
  }
  pageLoadEvents()
  setWechatTitle(to.meta.title)
})

new Vue({
  store,
  router
}).$mount('#app')

export {
  router
}
