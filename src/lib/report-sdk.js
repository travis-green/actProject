import util from 'util'
import axios from 'axios'
import qs from 'qs'
export const config = {
  interval: 1000, // 发送间隔
  appkey: 'QTSHE_WECHAT',
  errorSize: 100,
  type: 'error', // alway 总是上报，error 错误才上报
  isDebris: true, // 是否需要先收集再发送，true为合并 interval 毫秒内的请求，false为直接发送
  silent: false // 禁止发送
}

export const debrisData = {}
export const globData = {}

let DEBRIS = []
/**
 * 收集日志信息
 * @param {Object} json
 */
export function collectDebris(json) {
  if (config.silent) return
  const now = Date.now()
  const param = Object.assign(
    {
      timestamp: now
    },
    debrisData,
    json
  )
  DEBRIS.push(param)
  if (config.type === 'alway') {
    if (config.isDebris) {
      // 收集
      clearReport()
    } else {
      // 直接发送
      report()
    }
  } else if (config.type === 'error' && DEBRIS.length > config.errorSize + 1) {
    DEBRIS.shift()
  }
}

let reportIng = false
function clearReport() {
  if (reportIng) return
  reportIng = true
  const done = () => {
    reportIng = false
  }
  setTimeout(() => {
    report().then(done, done)
  }, config.interval)
}

/**
 * 发送日志
 */
export const report = error => {
  const size = DEBRIS.length
  if (size < 0) return Promise.resolve()
  let header = { 'content-type': 'application/x-www-form-urlencoded' }
  const jwtToken = util.getCookie('jwttoken') || ''
  if (jwtToken) {
    header.Authorization = `Bearer ${jwtToken}`
  }
  const content = Object.assign(
    {
      list: DEBRIS,
      jwtToken,
      errorOrigin: 'H5'
    },
    globData
  )
  const data = Object.assign(
    {
      time: Date.now(),
      appkey: config.appkey,
      content: JSON.stringify(content),
      error: typeof error === 'string' ? error : JSON.stringify(error)
    },
    data
  )
  if (!config.isDebris) DEBRIS = []
  return new Promise((resolve, reject) => {
    let req = {
      url: 'https://log.qtshe.com/logCollectionCenter/client/collect',
      method: 'post',
      data: qs.stringify(data),
      headers: header
    }
    axios(req)
        .then(res => {
          if (config.isDebris) DEBRIS = DEBRIS.slice(size)
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          if (config.isDebris) DEBRIS = DEBRIS.slice(size)
          reject(err)
        })
  })
}
