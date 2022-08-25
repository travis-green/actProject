import jsBridge from 'jsBridge'
import axios from '../plugins/ajax/ajax.js'
let util = {
  //万能跳转解析
  universalJump(config) {
    let {
        title = '', jumpKey = '', param = ''
    } = config
    try {
      if (param !== '') {
        param = JSON.parse(param)
      }
    } catch (error) {
      console.log('param参数非json字符串')
    }
    // 从万能跳转参数中寻找相关的字段值
    let findParamValue = (arr = [], key = 'targetUrl') => {
      let value = ''
      arr.map(item => {
        if (item.key === key) {
          value = item.value
        }
      })
      return value
    }
    switch (jumpKey) {
        // 静态页面
      case 'USER_STATIC_PAGE':
        var targetUrl = findParamValue(param, 'targetUrl')
        window.location.href = targetUrl
        break
            // 分享页面
      case 'USER_SHARE_PAGE':
        var targetUrl = findParamValue(param, 'targetUrl')
        window.location.href = targetUrl
        break
            // 兼职详情页
      case 'USER_PART_JOB_DETAIL_PAGE':
        var partJobId = findParamValue(param, 'partJobId')
        jsBridge.evokeNormalPartJobDetailPage(partJobId)
            //window.location.href = `/app/partdetails?partJobId=${partJobId}`
        break
            // 兼职标签页
      case 'USER_PART_JOB_TAG_PAGE':
        var tagId = findParamValue(param, 'tagId')
        window.location.href = `/app/tabpage?labelId=${tagId}`
        break
            // 小任务详情页
      case 'USER_TASK_DETAIL_PAGE':
        var taskBaseId = findParamValue(param, 'taskBaseId')
        window.location.href = `/app/lightask/taskdetail?taskBaseId=${taskBaseId}`
        break
            // 小任务列表页
      case 'USER_TASK_LIST_PAGE':
        window.location.href = `/app/lightask/tasklist`
        break
            // 以少胜多往期话题页
      case 'USER_VOTE_HISTORY_LIST_PAGE':
        window.location.href = `/app/topicBetPast`
        break
            // 以少胜多列表页
      case 'USER_VOTE_LIST_PAGE':
        window.location.href = `/app/topicBet`
        break
    }
  },
  // 跳转到登录页
  goLogin: function(redirect = window.location.href) {
    if (this.isWeiXin()) {
      let appid = window.g_info.wx_appid
      let redirect_domain = encodeURIComponent(window.g_info.qts_api)
      let rdu = encodeURIComponent(encodeURIComponent(`${window.location.origin}/app/loading?redirect_uri=${redirect}`))

      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_domain}/qtsWeChat/weixin/oauth2/web?rdu=${rdu}&response_type=code&scope=snsapi_userinfo&state=state#wechat_redirect`
      window.location.href = url
    } else {
      if (window.location.pathname === '/act/RpoNewPersonWelfare/home') {
        // 特判，不重定向登陆
        console.log(redirect)
        return
      } else {
        window.location.href = `/app/login?redirect_uri=${encodeURIComponent(redirect)}`
      }
    }
  },
  getAppkey() {
    if (this.isAndroidApp()) {
      return 'QTSHE_ANDROID_USER'
    } else if (this.isIosApp()) {
      return 'QTSHE_IOS_USER'
    } else if (window.__wxjs_environment === 'miniprogram') {
      return 'QTSHE_MINI_APP'
    } else {
      return 'QTSHE_WECHAT'
    }
  },
  // 获取环境
  getEnv() {
    if (this.isAndroidApp()) {
      return 'QTSHE_ANDROID_USER'
    } else if (this.isIosApp()) {
      return 'QTSHE_IOS_USER'
    } else if (window.__wxjs_environment === 'miniprogram' || window.sessionStorage.getItem('env') === 'wx') {
      return 'QTSHE_MINI_APP'
    } else if (window.sessionStorage.getItem('env') === 'ali') {
      return 'QTSHE_ZFB_MINI_APP'
    } else {
      return 'QTSHE_WECHAT'
    }
  },
  /**
   * 获取登录token
   */
  getToken: function() {
    var token = this.getCookie('token')
    if (token == null) {
      return ''
    }
    return token
  },
  checkToken() {
    return axios.post('/accountCenter/account/miniApp/validation/token', {
      token: util.getToken() || ''
    }).then((res) => {
      if (!res.success) {
        throw res
      }
    })
  },
  /**
   * $.extend方法原型
   */
  extend: function() {
    var target = arguments[0] || {} //目标对象
    var e = false //是否进行深拷贝
    var h = 1 //参数个数
    var n = arguments.length //实际传入的参数个数
    var temp // 临时保存源参数
    if (typeof target === 'boolean') {
      e = arguments[0]
      target = arguments[1] || {}
      //skip the boolean and target
      h = 2
    }
    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && typeof target !== 'function') {
      target = {}
    }
    // extend object itself if only one argument is passed
    if (n === h) {
      target = this
      --h
    }
    for (; h < n; h++) {
      temp = arguments[h]
      if (typeof temp !== undefined) {
        for (var t in temp) {
          var src = target[t]
          var copy = temp[t]
          if (target === copy) {
            continue
          }
          if (e && temp[t] && typeof temp[t] === 'object' && !temp[t].nodeType) {
            //进行深拷贝
            target[t] = this.extend(e, (src || {}), temp[t])
          } else {
            //浅拷贝
            if (temp[t] !== undefined) {
              target[t] = temp[t]
            }
          }
        }
      }
    }
    return target
  },
  /**
   * 获取过去多少天
   * @param  {Number} n 过去多少天
   * @return {Object}   Date对象
   */
  getPassDate(n) {
    return new Date(new Date() - n * 24 * 60 * 60 * 1000)
  },
  /**
   * 获取某一天时间戳
   * @param  {time} 支持时间戳、date对象、yyyy-MM-dd hh:mm:ss 三种格式
   * @return {Object}     zeroTimestamp 零点时间戳，currentTimestamp 当前时间戳，endTimestamp 当天结束之前的最后一秒 23:59:59
   */
  getOtherDayTimestamp(d) {
    var now = new Date()
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)
    now.setMilliseconds(0)

    // 当前时间零点时间戳
    let currentZeroTimestamp = now.getTime() / 1000 | 0
    // 当前时间戳
    let currentTimestamp = new Date().getTime() / 1000 | 0

    // 当前时间和零点的差值
    let currentZeroDifference = currentTimestamp - currentZeroTimestamp

    // 获取某一天零点的时间戳
    let otherDayZeroTimestamp = (new Date(this.dateFormat(d, 'yyyy/MM/dd') +
      ' 00:00:00').getTime() / 1000 | 0)

    // 获取某一天零点的时间戳
    let otherDayEndTimestamp = (new Date(this.dateFormat(d, 'yyyy/MM/dd') +
      ' 23:59:59').getTime() / 1000 | 0)

    // 获取某一天的当前时间戳
    let otherDayCurrentTimestamp = otherDayZeroTimestamp +
      currentZeroDifference

    return {
      zeroTimestamp: otherDayZeroTimestamp,
      currentTimestamp: otherDayCurrentTimestamp,
      endTimestamp: otherDayEndTimestamp
    }
  },
  /**
   * @desc 删除字符串首尾空
   * @param  {string} str 要处理的字符串
   * @return {string} 删除收尾空之后的字符串
   */
  trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  },
  /**
   * @desc 获取链接参数的值
   * @param  {string} name 参数名字
   * @param  {string} [url] 链接url，为空的时候取location.href
   * @return {string} 参数
   */
  getQueryString(name, url) {
    url = (url == null) ? window.location.href : url
    url = url.split('#')[0]

    var reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i')
    return reg.test(url) ? RegExp.$2.replace(/\+/g, ' ') : ''
  },
  /**
   * url 参数转 object 对象
   * @param  {String} params 如果不传，则取当前 url 的参数
   * @return {Object}
   * 例如： urlParamToJson('name=heyhey&page=2')
   *     返回： {name: 'heyhey', page: '2'}
   */
  urlToJson(params) {
    var search = params || window.location.search.substring(1) || window.location
      .hash.substring(1).split('?')[1]
    return search ? JSON.parse('{"' + search.replace(/&/g, '","').replace(
      /=/g, '":"') + '"}', function(key, value) {
      return key === '' ? value : decodeURIComponent(value)
    }) : {}
  },

  param(obj = {}) { // 序列化对象
    let arr = []
    Object.keys(obj).map(function(key) {
      let item = [key, obj[key]].join('=')
      arr.push(item)
    })

    return arr.join('&')
  },
  setCookie(name, value) {
    let Days = 30
    let exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' +
      exp.toGMTString() + ';path=/'
    return true
  },
  getCookie(name) {
    var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (arr = document.cookie.match(reg)) {
      return decodeURIComponent(arr[2])
    } else {
      return null
    }
  },
  delCookie(name) {
    var exp = new Date()
    exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000))
    var cval = this.getCookie(name)
    document.cookie = name + '=' + cval + '; expires=' + exp.toGMTString() +
      ';path=/'
  },
  unique(array) {
    array.sort()
    var re = [array[0]]
    for (var i = 1; i < array.length; i++) {
      if (array[i] !== re[re.length - 1]) {
        re.push(array[i])
      }
    }
    return re
  },
  setHistory(array) { //存localStorage数组
    array = util.unique(array)
    if (array.length >= 5) {
      array = array.slice(0, 4)
      array.reverse()
    }
    window.localStorage.history = array.join(',')
  },

  getHistory() { //取出数组
    return window.localStorage.history
  },
  setLocalStorage(name, obj) {
    if (!(name && typeof name === 'string')) {
      console.error('setLocalStorage name 为字符串')
      return
    }
    if (!(obj instanceof Object)) {
      console.error('请检查储存数据是否有误')
      return
    }
    window.localStorage[name] = JSON.stringify(obj)
  },
  getLocalStorage(name) {
    if (window.localStorage[name]) {
      return JSON.parse(window.localStorage[name])
    }
    return {}
  },
  //数字转中文数字
  convertToChinese(num) {
    if (!/^\d*(\.\d*)?$/.test(num)) {
      alert('Number is wrong!')
      return 'Number is wrong!'
    }
    var AA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九')
    var BB = new Array('', '十', '百', '千', '万', '亿', '点', '')
    var a = ('' + num).replace(/(^0*)/g, '').split('.'),
      k = 0,
      re = ''
    for (var i = a[0].length - 1; i >= 0; i--) {
      switch (k) {
        case 0:
          re = BB[7] + re
          break
        case 4:
          if (!new RegExp('0{4}\\d{' + (a[0].length - i - 1) + '}$').test(a[0])) { re = BB[4] + re }
          break
        case 8:
          re = BB[5] + re
          BB[7] = BB[5]
          k = 0
          break
      }
      if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) {
        re =
        AA[0] + re
      }
      if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re
      k++
    }

    if (a.length > 1) //加上小数部分(如果有小数部分)
    {
      re += BB[6]
      for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)]
    }
    re = re.replace('一十', '十')
    return re
  },
  spaceReplaceHollowString(content) {
    try {
      content = content.replace(/ /g, '')
    } catch (e) {
      throw e
    }
    return content
  },
  /*** @param {Object} datesStr */
  sprDay(datesStr) {
    datesStr = util.spaceReplaceHollowString(datesStr)
    var dataAllList = []
    var dataAllListIndex = 0
    var dateList = datesStr.split(',')
    dateList = dateList.sort()
    var year = null
    for (var dIndex = 0; dIndex < dateList.length; dIndex++) {
      var dataStr = dateList[dIndex]
      var dateSplit = dataStr.split('-')
      if (dateSplit[0] !== year) {
        dataAllList[dataAllListIndex] = {
          year: dateSplit[0]
        }
        year = dateSplit[0]
        var mouthAllList = new Array()
        var mouthAllListIndex = 0
        var mouth = null
        for (var yearIndex = 0; yearIndex < dateList.length; yearIndex++) {
          var yearDataStr = dateList[yearIndex]
          yearDataStr = yearDataStr.split('-')
          if (yearDataStr[0] === year) {
            if (mouth !== yearDataStr[1]) {
              mouthAllList[mouthAllListIndex] = {
                mouth: yearDataStr[1]
              }
              mouth = yearDataStr[1]
              dataAllList[dataAllListIndex].mouth = mouthAllList
              var dayAllList = new Array()
              var dayAllListIndex = 0
              var day = null
              var dayYear = 0
              for (var dayIndex = 0; dayIndex < dateList.length; dayIndex++) {
                var dayDataStr = dateList[dayIndex]
                dayYear++
                dayDataStr = dayDataStr.split('-')
                if (dayDataStr[0] === year && dayDataStr[1] === mouth) {
                  dayAllList[dayAllListIndex] = dayDataStr[2]
                  dayAllListIndex++
                  day = dayDataStr[2]
                }
                dataAllList[dataAllListIndex].mouth[mouthAllListIndex].days =
                  dayAllList
              }
              mouthAllListIndex++
            }
          }
        }
        dataAllListIndex++
      }
    }
    return dataAllList
  },
  timestamp(time) {
    let day = Math.floor(time / 86400)
    let hour = Math.floor((time / 3600) % 24)
    let min = Math.floor((time / 60) % 60)
    hour = hour < 10 ? '0' + hour : hour
    min = min < 10 ? '0' + min : min
    if (day > 0) {
      time = `${day}天${hour}小时${min}`
    }
    if (day <= 0 && hour > 0) {
      time = `${hour}小时${min}分`
    }
    if (day <= 0 && hour <= 0) {
      time = `${min}分`
    }
    return time
  },
  /**
   * 秒转 时分秒格式   3661s => 01小时01分01秒
   * @param {} second
   */
  timestampFor24(second) {
    let time = ''
    let hour = Math.floor(second / 3600)
    let min = Math.floor((second / 60) % 60)
    let s = second % 60
    hour = hour < 10 ? '0' + hour : hour
    min = min < 10 ? '0' + min : min
    if (hour > 0) {
      time = `${hour}小时${min}分${s}秒`
    }
    if (hour <= 0) {
      time = `00小时${min}分${s}秒`
    }
    return {time, hour, min, s}
  },
  dateFormat(d, fmt) { // 时间格式化
    let date = ''
    if (!d) {
      return
    }
    try {
      if (Number.isInteger(d)) {
        date = new Date(d)
      } else if (typeof d === 'string') { // safari使用yyyy-MM-dd hh:mm格式会出错
        let ua = window.navigator.userAgent.toLowerCase()

        if (ua.match(/.*version\/([\w.]+).*(safari).*/)) {
          d = d.replace(/-/g, '/')
          date = new Date(d)
        }
      } else if (typeof d === 'object') {
        date = d
      } else {
        throw new Error('日期转化错误')
      }
    } catch (e) {
      console.warn(e)
      return
    }
    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'H+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      'S': date.getMilliseconds() //毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 -
        RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((
          '00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  },
  searchParam(par) { //获取地址栏参数
    var param = {}
    if (util.isEmpty(par)) {
      return param
    } else {
      if (par.indexOf('?') != -1) {
        par = par.substring(par.indexOf('?') + 1, par.length)
      }
      var array = par.split('&')
      for (var i = 0; i < array.length; i++) {
        var array2 = new Array()
        var ss = array[i].toString()
        array2[0] = ss.substring(0, array[i].indexOf('='))
        array2[1] = array[i].substring(array[i].indexOf('=') + 1, array[i].length)
        param[array2[0]] = array2[1]
      }
      return param
    }
  },
  //判空
  isEmpty(value) {
    if (value == null || value == undefined || value == '' || value == 'null' ||
      value == 'undefined') {
      return true
    }
    return false
  },
  /**
   * 判断是否为移动端设备
   * @return boolean  是否为移动端设备
   */
  isMiniApp() {
    if (window.__wxjs_environment === 'miniprogram') {
      return true
    }
  },
  isMobile() {
    var sUserAgent = navigator.userAgent.toLowerCase()
    var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
    var bIsMidp = sUserAgent.match(/midp/i) == 'midp'
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
    var bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
    var bIsAndroid = sUserAgent.match(/android/i) == 'android'
    var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
    var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
    return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)
  },
  isIos() { //判断IOS
    var u = navigator.userAgent,
      app = navigator.appVersion
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    return isiOS
  },
  isAndroid() { //判断安卓
    var u = navigator.userAgent,
      app = navigator.appVersion
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    return isAndroid
  },
  //青团社App ios终端
  isIosApp() {
    var u = navigator.userAgent,
      app = navigator.appVersion
    var isiOS = u.indexOf('qtsapp-student-ios') >= 0
    return isiOS
  },
  //青团社App Android终端
  isAndroidApp() {
    var u = navigator.userAgent,
      app = navigator.appVersion
    var isAndroid = u.indexOf('qtsapp-student-android') >= 0 || u.indexOf('qtsapp-jianzhiman-android') >= 0
    return isAndroid
  },
  isAliMiniApp() {
    return new Promise((resolve, reject) => {
      if (window.my) {
        my.getEnv((res) => {
          console.log(3, res)
          resolve(res.miniprogram || res.miniProgram)
        })
      } else {
        resolve()
      }
    })
  },
  isIphoneX() {
    return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
  },
  // 不在青团社App打开
  isWebPage() {
    return !(this.isIosApp() || this.isAndroidApp())
  },
  testEmoji(str, replaceSign) { // 检测是否输入了emoji
    let regExp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
    if (typeof replaceSign !== 'undefined') {
      return str.replace(regExp, replaceSign)
    }
    return regExp.test(str)
  },
  isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  },
  isIosCompanyApp() {
    var u = navigator.userAgent,
      app = navigator.appVersion
    var isiOS = u.indexOf('qtsapp-company-ios') >= 0
    return isiOS
  },

  isAndroidCompanyApp() {
    var u = navigator.userAgent,
      app = navigator.appVersion
    var isAndroid = u.indexOf('qtsapp-business-android') >= 0
    return isAndroid
  },
  isQQ() {
    var u = navigator.userAgent,
      app = navigator.appVersion
    if (u.indexOf('MQQBrowser') > -1) {
      return true
    } else {
      return false
    }
  },
  /**
   * 封装埋点
   * util.onBuriedPoint('CA010001')
   * @param pointObj 埋点对象
   */
  async onBuriedPoint(id) {
    try {
      let obj = await jsBridge.getAppInfo()
      let list = []
      list.push({
        eventId: id
      })
      var postData = {
        token: obj.token,
        version: '4.9.1', //版本号
        appKey: 5, //设备标示
        cityId: util.getCookie('townId'),
        eventList: JSON.stringify(list)
      }
      // axios.set('/ptp/savePtp', postData)
    } catch (error) {
      console.log('onBuriedPoint err', error)
    }
  },
  compareVersion() {
    if (arguments[0] && arguments[1]) {
      let arr0 = arguments[0].split('.')
      let arr1 = arguments[1].split('.')
      for (var i = 0; i < arr0.length; i++) {
        if (Number(arr0[i]) > Number(arr1[i])) {
          return true
        } else if (Number(arr0[i]) === Number(arr1[i])) {
          if (i === arr0.length - 1) {
            return true
          } else {
            continue
          }
        } else {
          return false
        }
      }
    } else {
      return false
    }
  },
  getAppVersion() {
    let u = navigator.userAgent
    let str = u.substring(u.indexOf('-{') + 1)
    try {
      return JSON.parse(str).qtsVersion
    } catch (e) {
      if (u.indexOf('qtsapp-student') > -1) {
        return '<4.6.3'
      } else {
        return 'H5'
      }
    }
  },
  getCurrentVersionInteractivePackage() {
    return jsBridge
  },
  downLoadQtsQpp() {
    if (this.isAndroid()) {
      if (this.isQQ()) {
        window.location.href = 'http://d.qtshe.com/'
      } else {
        this.downLoadFile('https://dn-qtshe.qbox.me/QtsCustomer_signedApk_4.10.0_0/1/%E9%9D%92%E5%9B%A2%E7%A4%BEAPP.apk')
      }
      this.onBuriedPoint('C8010004')
      return
    }
    this.onBuriedPoint('C8010004')
    if (this.isWeiXin()) {
      window.location.href = 'http://d.qtshe.com/'
      return
    }
    if (this.isIos()) {
      window.location.href = 'https://itunes.apple.com/us/app/%E9%9D%92%E5%9B%A2%E7%A4%BE-%E6%89%BE%E5%85%BC%E8%81%8C%E6%89%BE%E5%AE%9E%E4%B9%A0%E6%89%BE%E5%B7%A5%E4%BD%9C%E4%B8%8A%E9%9D%92%E5%9B%A2%E7%A4%BE/id1367142140?l=zh&ls=1&mt=8'
      return
    }
    window.location.href = 'http://d.qtshe.com/'
  },
  /**
   * 表单提交
   * @param {*} data
   * @param {*} isOpen
   */
  formSubmit(data, isOpen = true) {
    if (!data.url) {
      console.error('缺少url')
      return false
    } else {
      const form = document.createElement('form')
      form.method = 'post'
      form.action = data.url
      if (isOpen) {
        form.target = '_blank'
      } else {
        form.target = '_self'
      }
      Object.keys(data).forEach(key => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = data[key]
        form.appendChild(input)
      })
      document.body.appendChild(form)
      form.submit()
      return true
    }
  },
  /**
 * 下载文件
 * @param url
 */
  downLoadFile(url) {
    let iframe = document.getElementById('downLoadIframe')
    if (iframe) {
      iframe.src = url
    } else {
      iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = url
      iframe.id = 'downLoadIframe'
      document.body.appendChild(iframe)
    }
  },
  login() {
    return new Promise((resolve) => {
      const interPackage = util.getCurrentVersionInteractivePackage()
      if (util.isAndroidApp() || util.isIosApp()) {
        interPackage.eventEmitter()
        interPackage.loginHandler((token) => {
          util.setCookie('token', token)
          resolve()
        })
      } else {
        util.goLogin()
      }
    })
  },
  // 获取客户端版本信息
  getAppVersionNum() {
    let index = 0
    let appVersion = ''
    let appVersionNum = 0
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
    if (this.isAndroidApp() || this.isAndroidCompanyApp()) {
      index = navigator.appVersion.indexOf('-android-')
      appVersion = navigator.appVersion.slice(index + 9)
      appVersionNum = parseInt(toNum(appVersion))
    } else if (this.isIosApp() || this.isIosCompanyApp()) {
      index = navigator.appVersion.indexOf('-ios-')
      appVersion = navigator.appVersion.slice(index + 5)
      appVersionNum = parseInt(toNum(appVersion))
    }
    return appVersionNum
  }
}
let arr = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Object']
arr.forEach(function(name) {
  util['is' + name] = function(obj) {
    return toString.call(obj) === '[object ' + name + ']'
  }
})
export default util
