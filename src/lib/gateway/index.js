import {BaseGateway} from './lib.js'
const HmacSHA256 = require('crypto-js/hmac-sha256')
const MD5 = require('crypto-js/md5')
const Base64 = require('crypto-js/enc-base64')
const qs = require('qs')

export class Gateway extends BaseGateway {
  constructor(options) {
    super(options)
    this.addEncryption({HmacSHA256, MD5, Base64})
  }

  // 根据环境获取 secret
  getAppSecret(appKey) {
    return window.g_info.appKeySecret[appKey]
  }

  // web端复杂参数
  buildUrl(url, data) {
    const reg = /^\s+$/g
    let params = qs.stringify(data)
    params = params.split('&').map(v => {
      const a = v.split('=')
      return [decodeURIComponent(a[0]), a[1] !== undefined || a[1] !== null ? decodeURIComponent(a[1]) : a[1]]
    }).sort((a, b) => {
      if (a[0] > b[0]) return 1
      else if (a[0] < b[0]) return -1
      else return 0
    }).map(v => v[0] + (v[1] === undefined || !(v[1] + '') || reg.test(v[1]) || v[1] === null ? '' : '=' + v[1])).join('&')
    return url + (params ? '?' + params : '')
  }

  getSignHeader(options = {}) {
    options.appSecret = this.getAppSecret(options.appKey)
    return super.getSignHeader(options)
  }
}

const gateway = new Gateway()

export const getSignHeader = (options) => gateway.getSignHeader(options)
