'use strict'
const form = 'application/x-www-form-urlencoded'
const hasOwnProperty = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * API Gateway Client
 */
export class BaseGateway {
  constructor({ key, version, secret, filterUrl } = {}) {
    this.appKey = key
    this.version = version
    this.appSecret = secret
    this.filterUrl = filterUrl
  }

  addEncryption({HmacSHA256, MD5, Base64} = {}) {
    this.encryption = {
      HmacSHA256,
      MD5,
      Base64
    }
  }

  buildStringToSign(method, headers, signedHeadersStr, url, data) {
    // accept, contentMD5, contentType,
    const lf = '\n'
    var list = [method, lf]

    var accept = headers['Accept']
    if (accept) {
      list.push(accept)
    }
    list.push(lf)

    var contentMD5 = headers['content-md5']
    if (contentMD5) {
      list.push(contentMD5)
    }
    list.push(lf)

    var contentType = headers['Content-Type'] || ''
    if (contentType) {
      list.push(contentType)
    }
    list.push(lf)

    var date = headers['Date']
    if (date) {
      list.push(date)
    }
    list.push(lf)

    if (signedHeadersStr) {
      list.push(signedHeadersStr)
      list.push(lf)
    }

    if (contentType.startsWith(form)) {
      list.push(this.buildUrl(url, data))
    } else {
      list.push(this.buildUrl(url))
    }

    return list.join('')
  }

  sign(stringToSign, appSecret) {
    return this.encryption.Base64.stringify(this.encryption.HmacSHA256(stringToSign, appSecret))
  }

  md5(content) {
    return this.encryption.MD5(content).toString()
  }

  getSignHeaderKeys(headers, signHeaders) {
    var keys = Object.keys(headers).sort()
    var signKeys = []
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      // x-ca- 开头的header或者指定的header
      if (key.startsWith('x-ca-') || hasOwnProperty(signHeaders, key)) {
        signKeys.push(key)
      }
    }

    // 按字典序排序
    return signKeys.sort()
  }

  buildUrl(url, data) {
    let result = url
    if (data && Object.keys(data).length) {
      const reg = /^\s+$/g
      const keys = Object.keys(data).sort()
      const list = new Array(keys.length)
      keys.forEach((key, i) => {
        if (data[key] !== undefined && data[key] !== null && '' + data[key] && !reg.test(data[key])) {
          list[i] = `${key}=${data[key]}`
        } else {
          list[i] = `${key}`
        }
      })
      result += '?' + list.join('&')
    }
    return result
  }

  buildHeaders(headers = {}, signHeaders, appKey) {
    return Object.assign(
      {
        'x-ca-timestamp': Date.now(),
        'x-ca-appkey': appKey,
        //'x-ca-nonce': uuid.v4(),
        Accept: 'application/json'
      },
      headers,
      signHeaders
    )
  }

  getSignedHeadersString(signHeaders, headers) {
    var list = []
    for (var i = 0; i < signHeaders.length; i++) {
      var key = signHeaders[i]
      list.push(key + ':' + headers[key])
    }

    return list.join('\n')
  }

  getSignHeader(opts) {
    if (!this.encryption) {
      throw new Error('无加密方法，请使用 addEncryption 方法添加')
    }
    const { method, data = {}, header: _headers, deviceId, signHeaders = {}, appKey = this.appKey, version = this.version, appSecret = this.appSecret, saveStringToSign = this.saveStringToSign } = opts
    if (this.filterUrl && this.filterUrl.test && this.filterUrl.test(opts.url)) {
      return _headers
    }
    // 删除掉域名
    const url = opts.url.replace(/^(https*:\/\/[^/]*)/, '')

    const headers = this.buildHeaders(_headers, signHeaders, appKey)

    var requestContentType = headers['Content-Type'] || ''
    if (method === 'POST' && !requestContentType.startsWith(form)) {
      headers['content-md5'] = this.md5(data)
    }

    headers['x-ca-deviceid'] = deviceId
    headers['x-ca-version'] = version

    var signHeaderKeys = this.getSignHeaderKeys(headers, signHeaders)
    headers['x-ca-signature-headers'] = signHeaderKeys.join(';')
    var signedHeadersStr = this.getSignedHeadersString(signHeaderKeys, headers)

    var stringToSign = this.buildStringToSign(method, headers, signedHeadersStr, url, data)
    // console.log('url:', url)
    // console.log('stringToSign: \r\n', stringToSign)
    var signature = this.sign(stringToSign, appSecret)
    headers['x-ca-signature'] = signature
    // console.log('signature:', signature)

    for (let k in headers) {
      headers[k] = headers[k] + ''
    }

    if (saveStringToSign) saveStringToSign(stringToSign, headers)

    return headers
  }
}
