module.exports = function(title) {
  if (title === undefined) {
    return
  }
  document.title = title
  var mobile = navigator.userAgent.toLowerCase()
    // 解决IOS微信更改title无效的问题
    // https://www.deboy.cn/set-wechat-title-in-vuejs-spa.html
  if (/iphone|ipad|ipod/.test(mobile)) {
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
      // 替换成站标favicon路径或者任意存在的较小的图片即可
      // iframe.setAttribute('src', '/assets/logo.png')
    var iframeCallback = function() {
      setTimeout(function() {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}
