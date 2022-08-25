import jsAppInteractiveOld from './jsAppInteractiveOld'
import jsAppInteractiveNew from './jsAppInteractive'
let jsAppInteractive = ''
let index = 0
let appVersion = ''
let appVersionNum = 0
//青团社App Android终端
const isAndroidApp = () => {
  var u = navigator.userAgent
  var isAndroid = u.indexOf('qtsapp-student-android') >= 0 || u.indexOf('qtsapp-jianzhiman-android') >= 0
  return isAndroid
}
//青团社App ios终端
const isIosApp = () => {
  var u = navigator.userAgent
  var isiOS = u.indexOf('qtsapp-student-ios') >= 0
  return isiOS
}
// ios商家端
const isIosCompanyApp = () => {
  var u = navigator.userAgent
  var isiOS = u.indexOf('qtsapp-company-ios') >= 0
  return isiOS
}
// 安卓商家端
const isAndroidCompanyApp = () => {
  var u = navigator.userAgent
  var isAndroid = u.indexOf('qtsapp-business-android') >= 0
  return isAndroid
}
const toNum = version => {
  let versionArr = version.split('.')
  let length = versionArr.length
  if (length < 4) {
    for (let i = 0; i <= 4 - length; i++) {
      versionArr.push(0)
    }
  }
  for (let i = 0; i < versionArr.length; i++) {
    let len = versionArr[i].length
    if (len === 1) {
      versionArr[i] = '0' + versionArr[i]
    }
  }
  let res = versionArr.join('')
  return res
}
if (isAndroidApp() || isAndroidCompanyApp()) {
  index = navigator.appVersion.indexOf('-android-')
  appVersion = navigator.appVersion.slice(index + 9)
  appVersionNum = parseInt(toNum(appVersion))
} else if (isIosApp() || isIosCompanyApp()) {
  index = navigator.appVersion.indexOf('-ios-')
  appVersion = navigator.appVersion.slice(index + 5)
  appVersionNum = parseInt(toNum(appVersion))
}
// 计算版本号 期望输入格式为 *.**.** 后面都是2位的格式
const connect = () => {
  window.connectWebViewJavascriptBridge = callback => {
    if (isAndroidApp() || isIosApp() || isIosCompanyApp() || isAndroidCompanyApp()) {
      if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge)
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
      }
      window.WVJBCallbacks = [callback]
      let WVJBIframe = document.createElement('iframe')
      WVJBIframe.style.display = 'none'
      WVJBIframe.src = 'https://__bridge_loaded__'
      document.documentElement.appendChild(WVJBIframe)
      setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe)
      }, 0)
    }
  }
}

if (
    (isAndroidApp()) ||
    (appVersionNum >= 5070000 && isAndroidCompanyApp())
) {
    // 4120000 为jsBridge改造后的4.12.0
  let flag = true
  window.connectWebViewJavascriptBridge = callback => {
    if (window.WebViewJavascriptBridge) {
      if (flag) {
        flag = false
        window.WebViewJavascriptBridge.init()
        console.log('init完成', window.WebViewJavascriptBridge)
      }
      callback(WebViewJavascriptBridge)
    } else {
      document.addEventListener(
                'WebViewJavascriptBridgeReady',
                function() {
                  console.log('ready', window.WebViewJavascriptBridge)
                  if (flag) {
                    flag = false
                    window.WebViewJavascriptBridge.init()
                    console.log('init完成', window.WebViewJavascriptBridge)
                  }
                  callback(WebViewJavascriptBridge)
                },
                false
            )
    }
  }
} else {
  connect()
}

if (isAndroidApp() || isIosApp()) {
    // 4120000 为jsBridge改造后的4.12.0
    // if (appVersionNum >= 4120000) {
    jsAppInteractive = jsAppInteractiveNew
    // } else {
    //     jsAppInteractive = jsAppInteractiveOld
    // }
} else if (isIosCompanyApp() || isAndroidCompanyApp()) {
  if (appVersionNum >= 5070000) {
    jsAppInteractive = jsAppInteractiveNew
  } else {
    jsAppInteractive = jsAppInteractiveOld
  }
} else {
  jsAppInteractive = jsAppInteractiveOld
}
export default jsAppInteractive
