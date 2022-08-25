import axios from 'axios'
(function() {
  let paramData = {
    local_url: window.location.href.split('#')[0],
    version: '4.9.1',
    appKey: 'QTSHE_WECHAT',
    deviceId: Math.random()
  }
  let url = `${window.g_info.qts_api}/qtsWeChat/JsApiSign`
  axios.get(url, {
    params: paramData
  }).then(function(data) {
    window.wx.config({
      debug: false,
      appId: window.g_info.wx_appid,
      timestamp: data.data.timestamp,
      nonceStr: data.data.nonceStr,
      signature: data.data.signature,
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ],
      openTagList: ['wx-open-launch-app', 'wx-open-launch-weapp']
    })
  })
})()

export default {
  // 微信分享
  /*
   * @param data
   * data.title
   * data.desc
   * data.link
   * data.imgUrl
   * */
  initWXShare(data) {
    data = data || {}
    data.title = data.title || '青团社兼职,记录你的每一次成长'
    data.desc = data.desc || '大学生做兼职首选平台'
    data.link = data.link || window.location.href
    data.imgUrl = data.imgUrl || 'https: //ojlf2aayk.qnssl.com/20170615logo.jpeg'
    if (window.wx) {
      window.wx.ready(function() {
        // 发送给微信好友
        window.wx.onMenuShareAppMessage({
          title: data.title,
          desc: data.desc,
          imgUrl: data.imgUrl,
          link: data.link, // 分享链接
          type: data.type, // 分享类型,music、video或link，不填默认为link
          dataUrl: data.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })

        // 分享到朋友圈
        window.wx.onMenuShareTimeline({
          title: data.title,
          imgUrl: data.imgUrl,
          link: data.link, // 分享链接
          type: data.type, // 分享类型,music、video或link，不填默认为link
          dataUrl: data.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })

        // 分享到QQ
        window.wx.onMenuShareQQ({
          title: data.title, // 分享标题
          desc: data.desc, // 分享描述
          link: data.link, // 分享链接
          imgUrl: data.imgUrl, // 分享图标
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })

        // 分享到 QQ空间
        window.wx.onMenuShareQZone({
          title: data.title, // 分享标题
          desc: data.desc, // 分享描述
          link: data.link, // 分享链接
          imgUrl: data.imgUrl, // 分享图标
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })
      })
    }
  },
  // 微信小任务分享
  initTaskShare(data) {
    data = data || {}
    data.title = data.title || '青团社兼职,记录你的每一次成长'
    data.money = data.money
    if (window.wx) {
      window.wx.ready(function() {
        // 发送给微信好友
        window.wx.onMenuShareAppMessage({
          title: data.title + '，报酬' + data.money + '元',
          desc: '看这里看这里，动动手指躺着赚钱',
          imgUrl: 'https: //ojlf2aayk.qnssl.com/20170615logo.jpeg',
          link: window.location.href, // 分享链接
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })

        // 分享到朋友圈
        window.wx.onMenuShareTimeline({
          title: '【青团社兼职】动动手指躺着赚钱' + data.title + '，报酬' + data.money +
            '元',
          imgUrl: 'https: //ojlf2aayk.qnssl.com/20170615logo.jpeg',
          link: window.location.href, // 分享链接
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })

        // 分享到QQ
        window.wx.onMenuShareQQ({
          title: data.title + '，报酬' + data.money + '元', //分享标题
          desc: '看这里看这里，动动手指躺着赚钱', // 分享描述
          link: window.location.href, // 分享链接
          imgUrl: 'https: //ojlf2aayk.qnssl.com/20170615logo.jpeg', // 分享图标
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })

        // 分享到 QQ空间
        window.wx.onMenuShareQZone({
          title: '【青团社兼职】动动手指躺着赚钱' + data.title + '，报酬' + data.money +
            '元', // 分享标题
          desc: '看这里看这里，动动手指躺着赚钱', // 分享描述
          link: window.location.href, // 分享链接
          imgUrl: 'https: //ojlf2aayk.qnssl.com/20170615logo.jpeg', // 分享图标
          success: function() {
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        })
      })
    }
  }
}
