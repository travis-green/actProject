import axios from 'axios'
import qs from 'qs'
import util from 'util'
import md5 from 'md5'
// import { getSignHeader } from '../../lib/gateway/index'
import { customReportLogs } from '../reportLog'
let appKey = 'QTSHE_WECHAT'
let version = '4.23.0'
const currentTime = Date.now()
const FIX_URL = process.env.qtbao_api
import { Base64 } from '../../lib/base64'
/***
 * ajax请求函数
 * @param url
 * @param json
 * @param timeout
 * @returns {*}
 */
var fixUrl = window.g_info.user_api
var newUrl = window.g_info.qts_api
let $axios = {
  post: (url, json = {}, timeout = 30000) => {
    return new Promise((resolve, reject) => {
      let timestamp = new Date().getTime()
      if (!url) {
        console.error('ajax url必填')
        return
      }
      let data = {}
      let params = {
        appKey: json.appKey || appKey,
        version,
        sign: json.appKey ? md5(json.appKey + timestamp + version) : md5(appKey + timestamp + version),
        token: util.getToken(),
        timestamp: timestamp
      }
      let deviceId = window.localStorage.getItem('random_number')
      if (deviceId === null) {
        deviceId = params.deviceId = Math.random()
        window.localStorage.setItem('random_number', params.deviceId)
      } else {
        params.deviceId = deviceId
      }
      util.extend(data, params, json)
      let jwttoken = util.getCookie('jwttoken') || ''
      if (url.indexOf('http') === -1 && url.indexOf('https') === -1) {
        if (url.indexOf('jobCenter') > -1 || url.indexOf('cmb') > -1 || url.indexOf('activityCenter') > -1 || url.indexOf('accountCenter') > -1 || url.indexOf('agent') > -1 || url.indexOf('integralCenter') > -1 || url.indexOf('zhongcao') > -1 || url.indexOf('commander') > -1 || url.indexOf('thirdCenter') > -1 || url.indexOf('taskCenter') > -1 || url.indexOf('tagCenter') > -1 || url.indexOf('resourceCenter') > -1 || url.indexOf('misc') > -1 || url.indexOf('taskThird') > -1 || url.indexOf('qtbUserCenter') > -1 || url.indexOf('jobApplyCenter') > -1 || url.indexOf('droplet') > -1) {
          url = newUrl + url
        } else {
          url = fixUrl + url
        }
      }
      let saveStringToSignData = {}
      const saveStringToSign = (strSign, header) => {
        saveStringToSignData.strSign = strSign
        saveStringToSignData.url = url
        saveStringToSignData.header = header
      }
      let req = {
        url: url,
        method: 'post',
        data: qs.stringify(data),
        timeout: timeout,
        headers: {
          url,
          data,
          header: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          deviceId,
          version,
          appKey: data.appKey,
          saveStringToSign
        }
      }
      if (jwttoken && jwttoken !== 'undefined') {
        req.headers.Authorization = `Bearer ${jwttoken}`
      }
      axios(req)
        .then(response => {
          saveStringToSignData = null
          resolve(response.data)
          if (response.data.errCode === 4004 || response.data.code === 4004) {
            util.getCurrentVersionInteractivePackage().evokeLoginPage(obj => {
              util.setCookie('token', obj.token)
              if (obj.jwtToken) {
                util.setCookie('jwttoken', obj.jwtToken)
              }
            })
          }
        })
        .catch(error => {
          saveStringToSignData.error = error
          customReportLogs(saveStringToSignData, deviceId)
          saveStringToSignData = null
          if (error.message) {
            reject(error.message)
          } else {
            reject(`ajax 异常: ${url}`)
          }
        })
    })
  },
  get: (url, json = {}, timeout = 30000) => {
    return new Promise(async (resolve, reject) => {
      const appKey = await util.getAppkey()
      if (!url) {
        console.error('ajax url必填')
        return
      }
      let data = {}
      let params = {
        appKey,
        version,
        timestamp: currentTime,
        sign: md5(appKey + currentTime + version),
        token: util.getToken()
      }
      let deviceId = window.localStorage.getItem('random_number')
      deviceId = (params.deviceId = !deviceId ? Math.random() : deviceId)
      window.localStorage.setItem('random_number', params.deviceId)
      util.extend(data, params, json.params)
      if (url.indexOf('http') === -1 && url.indexOf('https') === -1) {
        url = FIX_URL + url
      }
      let config = {
        params: data,
        timeout,
        headers: {
          url,
          data,
          header: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'GET',
          deviceId,
          version,
          appKey: data.appKey
        }
      }
      axios
        .get(url, config)
        .then(response => {
          resolve(response.data)
          console.log(response.data.code)
          if (response.data.code === 4004) {
            clearTimeout(window.loginTimeOut)  // 全局登录拦截标识
            window.loginTimeOut = setTimeout(() => {
              util.setCookie('qtbUserAccount', '')
              util.getCurrentVersionInteractivePackage().evokeLoginPage().then(res => {
                if (res.token) {
                  console.log('loginToken')
                  util.setCookie('qtbUserAccount', res.token)
                }
              })
            }, 200)
          }
        })
        .catch(error => {
          if (error.message) {
            reject(error.message)
          } else {
            reject(`ajax 异常: ${url}`)
          }
        })
    })
  },
  set: (url, json = {}, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      if (!url) {
        console.error('ajax url必填')
        return
      }
      let data = {}
      let params = {
        appKey,
        version,
        token: util.getToken()
      }
      let deviceId = window.localStorage.getItem('random_number')
      if (deviceId === null) {
        data.deviceId = Math.random()
        window.localStorage.setItem('random_number', data.deviceId)
      } else {
        data.deviceId = deviceId
      }
      util.extend(data, json)
      if (url.indexOf('http') === -1 && url.indexOf('https') === -1) {
        url = window.g_info.ptp_api + url
      }
      let req = {
        url: url,
        method: 'post',
        data: qs.stringify(data),
        timeout: timeout,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios(req)
        .then(response => {
          resolve(response.data)
          if (response.data.errCode === 4004) {
            util.getCurrentVersionInteractivePackage().evokeLoginPage()
          }
        })
        .catch(error => {
          if (error.message) {
            reject(error.message)
          } else {
            reject(`ajax 异常: ${url}`)
          }
        })
    })
  },
  track(config) {
    let platform = 6
    switch (util.getEnv()) {
      case 'QTSHE_IOS_USER':
        platform = 1
        break
      case 'QTSHE_MINI_APP':
        platform = 5
        break
      case 'QTSHE_ZFB_MINI_APP':
        platform = 6
        break
      case 'QTSHE_WECHAT':
        platform = 18
        break
      default:
        platform = 18
        break
    }
    let params = {}
    if (window.sessionStorage.getItem('deviceId')) {
      params = {
        deviceId: platform + '-' + window.sessionStorage.getItem('deviceId') || '',
        townId: window.sessionStorage.getItem('townId') || 87,
        lon: window.sessionStorage.getItem('longitude') || '',
        lat: window.sessionStorage.getItem('latitude') || '',
        channel: window.sessionStorage.getItem('channel') || '',
        version: window.sessionStorage.getItem('version') || version
      }
    } else {
      let deviceId = window.localStorage.getItem('random_number')
      if (!deviceId) {
        deviceId = Math.random()
        window.localStorage.setItem('random_number', deviceId)
      }
      params = {
        deviceId: platform + '-' + deviceId || '',
        townId: util.getCookie('townId') || 87,
        lon: util.getCookie('longitude') || '',
        lat: util.getCookie('latitude') || '',
        version
      }
    }
    let eventList = [
      {
        ...config,
        timestamp: Date.now(),
        remark: {
          appKey: window.sessionStorage.getItem('appKey') || ''
        }
      }
    ]
    params.eventList = JSON.stringify(eventList)
    let jwttoken = window.sessionStorage.getItem('jwtToken') || util.getCookie('jwttoken') || ''
    let req = {
      url: newUrl + '/pulsar/pulsar',
      method: 'post',
      data: qs.stringify({
        spm: Base64.encode(JSON.stringify(params))
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    if (jwttoken) {
      req.headers.Authorization = `Bearer ${jwttoken}`
    }
    // axios(req)
  }
}
export default $axios
