// version < 4.6.3
import wxs from 'wx'
import util from 'util'

let interFunc = {
    /**
     * 得到用户信息
     */
  getAppInfo: function() {
    return new Promise((resolve, reject) => {
      if (util.isAndroidApp() || util.isAndroidCompanyApp()) {
        window.android.getAppData('')
        window.setAppData = function(json) {
          resolve(json)
        }
      } else if (util.isIosApp() || util.isIosCompanyApp()) {
        window.connectWebViewJavascriptBridge(function(bridge) {
          bridge.callHandler('getUserInfo', {}, function(data) {
            resolve(JSON.parse(data))
          })
        })
      } else {
        resolve({
          token: util.getToken()
        })
      }
    })
  },
    /**
   * 拷贝页面文案方法
   @param: content: 需要复制到剪切板的文案
   */
  copyToClipboard: function(content, message) {
    if (util.isAndroidApp()) {
      window.android.copyToClipboard(content, message)
    } else if (util.isIosApp()) {
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'copyToClipboard',
          {
            content: content,
            message: message
          },
                    function(response) {
                      console.log(response)
                    }
                )
      })
    } else {
    }
  },
    /**
     * 唤起种草团商品列表页面
     */
  evokeGrassClusterListPage: function() {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl =
                    'com.qts.customer.taobaoguest.TaoBaoGuestActivity'
        json.param = []
        let a = {}
        a.type = 'long'
        a.key = ''
        a.portType = 2
        a.value = ''
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSSeedGrassGroupListViewController'
      json.value = []
      let a = {}
      a.type = 'long'
      a.key = ''
      a.value = ''
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      console.log('nothing to find page')
    }
  },
    /**
     * 唤起种草团商品详情页面
     */
  evokeGrassClusterDetailPage: function(goodsId) {
    if (!goodsId) {
      console.error('goodsId is undefined')
      return
    }
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl =
                'com.qts.customer.taobaoguest.detail.TaoBaoGuestDetailActivity'
        json.param = []
        let a = {}
        a.type = 'string'
        a.key = 'goodsId'
        a.portType = 2
        a.value = goodsId
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSGrassGroupGoodsDetailViewController'
      json.value = []
      let a = {}
      a.type = 'long'
      a.key = 'itemId'
      a.value = goodsId
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                'generalView', {
                  param: JSON.stringify(json)
                },
                function(response) {}
              )
      })
    } else {
      console.log('nothing to find page')
    }
  },
  initRightJump: function(innerText, innerUrl) {
    if (util.isAndroidApp()) {
      try {
        window.android.rightSkip(innerText, innerUrl)
      } catch (e) {}
    } else if (util.isIosApp()) {
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'appZctRightJump',
          {
            innerText,
            innerUrl
          },
                    function(data, responseCallback) {}
                )
      })
    }
  },
    //跳转投注列表页
  initVoteListPage() {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl =
                    'com.qts.customer.vote.votedown.VoteDownActivity'
        json.param = []
        let a = {}
        a.type = 'long'
        a.key = ''
        a.portType = 2
        a.value = ''
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSBetCountVictoryViewController'
      json.value = []
      let a = {}
      a.type = 'long'
      a.key = ''
      a.value = ''
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = '/app/topicBet'
    }
  },
    /**
   * 页面返回刷新
   @param true: 刷新
   */
  initRefreshInfo: function() {
    if (util.isAndroidApp()) {
      try {
        window.android.refresh(true)
      } catch (e) {}
    } else if (util.isIosApp()) {
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'refresh',
          {
            refresh: true
          },
                    function(data, responseCallback) {}
                )
      })
    }
  },
    /**
     * 初始化分享信息
     */
  initShareInfo: function(obj) {
    let title = obj.title || '青团社兼职,记录你的每一次成长'
    let desc = obj.desc || '大学生做兼职首选平台'
    let link = obj.link || window.location.href
    let imgUrl =
            obj.imgUrl || 'https://qiniu-image.qtshe.com/20170615logo.jpeg'
    if (util.isAndroidApp()) {
      try {
        window.android.setShareInfo(title, desc, link, imgUrl)
      } catch (e) {}
    } else if (util.isIosApp()) {
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'shareParameters',
          {
            title,
            shareContent: desc,
            targetUrl: link,
            logo: imgUrl
          },
                    function(response) {
                      console.log(response)
                    }
                )
      })
    } else {
      wxs.initWXShare({
        title,
        desc,
        link,
        imgUrl
      })
    }
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      })
    })
  },
    /**
     * 初始化native头部上的返回键功能，直接关闭webview
     */
  appButtonCloseWebview() {
    if (util.isAndroidApp()) {
      window.android.close('')
    } else if (util.isIosApp()) {
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('backClickOnIos', {}, function(response) {
          console.log(response)
        })
      })
    } else {
    }
  },
    /**
     * h5页面上的返回键功能，直接关闭webview
     */
  h5ButtonCloseWebview() {
    if (util.isAndroidApp() || util.isAndroidCompanyApp()) {
      window.android.close('')
    } else if (util.isIosApp() || util.isIosCompanyApp()) {
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('backClickOnIos', {}, function(response) {
          console.log(response)
        })
      })
    } else {
      window.history.go(-1)
    }
  },
    /**
     * 是否展示native头部
     */
  displayAppHead(isShow) {
    if (util.isAndroidApp()) {
      window.android.displayHead(isShow)
    } else if (util.isIosApp()) {
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'displayHead',
          {
            display: !isShow
          },
                    function(response) {
                      console.log(response)
                    }
                )
      })
    } else {
    }
  },
    /**
     * 唤起分享操作板
     */
  evokeSharePanel: function(obj) {
    let title = obj.title || '青团社兼职,记录你的每一次成长'
    let desc = obj.desc || '大学生做兼职首选平台'
    let link = obj.link || window.location.href
    let imgUrl =
            obj.imgUrl || 'https://qiniu-image.qtshe.com/20170615logo.jpeg'
    if (util.isAndroidApp()) {
      try {
        window.android.shareBanner(title, desc, link, imgUrl)
        window.android.showShareBanner('')
      } catch (e) {}
    } else if (util.isIosApp()) {
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'shareBanner',
          {
            title,
            shareContent: desc,
            targetUrl: link,
            logo: imgUrl
          },
                    function(response) {
                      console.log(response)
                    }
                )
      })
    } else {
    }
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      })
    })
  },
    /**
     * 打开设置app上的标题
     */
  setNavTitle: function(title) {
    if (util.isWeiXin()) {
      return false
    } else {
      if (util.isAndroid()) {
        try {
          window.android.displayHead('false')
          window.android.setTitle(title)
        } catch (e) {}
      } else if (util.isIos()) {
        window.connectWebViewJavascriptBridge(function(bridge) {
          bridge.callHandler(
                        'displayHead',
            {
              display: false
            },
                        function(response) {}
                    )
        })
        window.connectWebViewJavascriptBridge(function(bridge) {
          bridge.callHandler('setupNavTitle', title, function(
                        responseCallback
                    ) {
            responseCallback({})
          })
        })
      }
    }
  },
    /**
     * 唤起登录页面
     */
  evokeLoginPage: function(callback) {
    return new Promise((resolve, reject) => {
      if (util.isWeiXin()) {
        let paramObj = util.urlToJson()
        let paramStr = util.param(paramObj)
        util.goLogin(
                    `${window.location.origin}${
                        window.location.pathname
                    }?${paramStr}`
                )
      } else {
        let json = {}
        if (util.isAndroidApp()) {
          try {
            json.targetUrl = 'com.qts.customer.LoginActivity'
            json.param = []
            let a = {}
            a.type = ''
            a.key = ''
            a.portType = ''
            a.value = ''
            json.param.push(a)
            window.android.generalView(JSON.stringify(json))
          } catch (e) {}
          window.loginCallback = function(json) {
            resolve(json)
            callback(json)
          }
        } else if (util.isIosApp()) {
          json.jump = 'present'
          json.vc = 'QTSLoginViewController'
          window.connectWebViewJavascriptBridge(function(bridge) {
            bridge.callHandler(
                            'generalView',
              {
                param: JSON.stringify(json)
              },
                            function(data) {
                              resolve(JSON.parse(data))
                              callback(JSON.parse(data))
                            }
                        )
          })
        } else {
          util.goLogin()
        }
      }
    })
  },
    /**
     * 唤起上传营业执照页面
     */
  evokeUpLoadBusinessLicense: function() {
    let json = {}
    if (util.isAndroidCompanyApp()) {
      try {
        json.targetUrl = '/user/main/auth/uploadBizLicense'
        json.param = [{
          type: 'int',
          key: '',
          portType: 2,
          value: ''
        }]
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosCompanyApp()) {
      json.jump = 'push'
      json.vc = 'QTSBusinessLicenseViewController'
      json.value = []
      let a = {}
      a.type = 'long'
      a.key = ''
      a.value = ''
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('generalView', {
          param: JSON.stringify(json)
        }, function(response) {})
      })
    } else {
      console.log('nothing to find page')
    }
  },
    /**
     * 唤起公司主页
     */
  evokeCompanyHomePage: function(companyId) {
    if (!companyId) {
      console.error('companyId is undefined')
      return
    }
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.CompanyHomeActivity'
        json.param = []
        let a = {}
        a.type = 'long'
        a.key = 'companyId'
        a.portType = 2
        a.value = companyId
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSCompanyHomeViewController'
      json.value = []
      let a = {}
      a.type = 'long'
      a.key = 'companyId'
      a.value = companyId
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = `/app/company?companyId=${companyId}`
    }
  },
    /**
     *唤起兼职标签页面
     **/
  evokeLabelListPage(labelId) {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.HomeJianZhiActivity'
        json.param = []
        let a = {}
        let b = {}
        let c = {}
        a.type = 'long'
        a.key = 'labelId'
        a.portType = 2
        a.value = labelId
        json.param.push(a)

        b.type = 'String'
        b.key = 'from'
        b.portType = 2
        b.value = 'label'
        json.param.push(b)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSPartJobListSexViewController'
      json.value = []
      let a = {}
      a.type = 'long'
      a.key = 'labelId'
      a.value = labelId
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      if (util.isMiniApp()) {
        wx.miniProgram.navigateTo({
          url: `../labelPage/labelPage?tagId=${labelId}`
        })
      } else {
        window.location.href = `/app/tabpage?labelId=${labelId}`
      }
    }
  },

    /**
     * 唤起普通兼职详情页面
     * @param {Object} config 包含所需的所有参加 || 仅传递一个partJobId
     * 其中partJobId必传，其他选传，常见的有
     * shareUserId 分享人ID
     * activityId 活动页面ID
     */
  evokeNormalPartJobDetailPage: function(config) {
    if (!config) {
      return 'param is error!'
    }
    let json = {}
    let options = []
    let paramObj = {}
    if (util.getQueryString('activityId')) {
      let activityId = parseInt(util.getQueryString('activityId'), 10)
      paramObj.activityId = activityId
      options.push({
        type: 'long',
        key: 'activityId',
        portType: 2, // 安卓客户端要求固定写死参数
        value: activityId
      })
    }
    if (
            util.isNumber(config) ||
            (util.isString(config) && !isNaN(parseInt(config, 10)))
        ) {
      let partJobId = parseInt(config, 10)
      paramObj.partJobId = partJobId
      options.push({
        type: 'long',
        key: 'partJobId',
        portType: 2, // 安卓客户端要求固定写死参数
        value: partJobId
      })
    } else if (util.isObject(config)) {
      paramObj = Object.assign({}, paramObj, config)
      options = []
      for (let key in config) {
        options.push({
          type: 'long',
          key,
          portType: 2, // 安卓客户端要求固定写死参数
          value: config[key]
        })
      }
    } else {
      return 'param is error!'
    }
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.WorkDetailActivity'
        json.param = options
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSJobDetailViewController'
      json.value = options
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      if (util.isMiniApp()) {
        wx.miniProgram.navigateTo({
          url: `../partdetails/partdetails?${util.param(paramObj)}`
        })
      } else {
        delete paramObj.positionId
        delete paramObj.positionIdFir
        delete paramObj.positionIdSec
        delete paramObj.positionIdThi
        delete paramObj.businessId
        delete paramObj.businessType
        delete paramObj.currentId
        window.location.href = `/app/partdetails?${util.param(
                    paramObj
                )}`
      }
    }
  },
    /**
     * 唤起精品兼职详情页面
     * @param {Object} config 包含所需的所有参加 || 仅传递一个partJobId
     * 其中partJobId必传，其他选传，常见的有
     * shareUserId 分享人ID
     * activityId 活动页面ID
     */
  evokePerfectPartJobDetailPage: function(config) {
    if (!config) {
      return 'param is error!'
    }
    let json = {}
    let options = []
    let paramObj = {}
    if (util.getQueryString('activityId')) {
      let activityId = parseInt(util.getQueryString('activityId'), 10)
      paramObj.activityId = activityId
      options.push({
        type: 'long',
        key: 'activityId',
        portType: 2, // 安卓客户端要求固定写死参数
        value: activityId
      })
    }
    if (
            util.isNumber(config) ||
            (util.isString(config) && !isNaN(parseInt(config, 10)))
        ) {
      let partJobId = parseInt(config, 10)
      paramObj.partJobId = partJobId
      options.push({
        type: 'long',
        key: 'partJobId',
        portType: 2, // 安卓客户端要求固定写死参数
        value: partJobId
      })
    } else if (util.isObject(config)) {
      paramObj = Object.assign({}, paramObj, config)
      options = []
      for (let key in config) {
        options.push({
          type: 'long',
          key,
          portType: 2, // 安卓客户端要求固定写死参数
          value: config[key]
        })
      }
    } else {
      return 'param is error!'
    }
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.PerfectWorkDetailActivity'
        json.param = options
        console.log(JSON.stringify(options))
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSBoutiquePartTimeViewController'
      json.value = options
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      if (util.isMiniApp()) {
        wx.miniProgram.navigateTo({
          url: `../partdetails/partdetails?${util.param(paramObj)}`
        })
      } else {
        delete paramObj.positionId
        delete paramObj.positionIdFir
        delete paramObj.positionIdSec
        delete paramObj.positionIdThi
        delete paramObj.businessId
        delete paramObj.businessType
        delete paramObj.currentId
        window.location.href = `/app/partdetails?${util.param(
                    paramObj
                )}`
      }
    }
  },
    /**
     * 唤起小任务详情页面
     * @param {Object} config 包含所需的所有参加 || 仅传递一个taskBaseId, 小任务ID
     * 其中taskBaseId必传，其他选传，常见的有
     * shareUserId 分享人ID
     * activityId 活动页面ID
     */
  evokeLightTaskDetailPage: function(config) {
    if (!config) {
      return 'param is error!'
    }
    let json = {}
    let options = []
    let paramObj = {}
    if (util.getQueryString('activityId')) {
      let activityId = parseInt(util.getQueryString('activityId'), 10)
      paramObj.activityId = activityId
      options.push({
        type: 'long',
        key: 'activityId',
        portType: 2, // 安卓客户端要求固定写死参数
        value: activityId
      })
    }
    if (
            util.isNumber(config) ||
            (util.isString(config) && !isNaN(parseInt(config, 10)))
        ) {
      let taskBaseId = parseInt(config, 10)
      paramObj.taskBaseId = taskBaseId
      options.push({
        type: 'long',
        key: 'taskBaseId',
        portType: 2, // 安卓客户端要求固定写死参数
        value: taskBaseId
      })
    } else if (util.isObject(config)) {
      paramObj = Object.assign({}, paramObj, config)
      options = []
      for (let key in config) {
        options.push({
          type: 'long',
          key,
          portType: 2, // 安卓客户端要求固定写死参数
          value: config[key]
        })
      }
    } else {
      return 'param is error!'
    }
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.TaskDetailActivity'
        json.param = options
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSEasyTaskDetailViewController'
      json.value = options
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      if (util.isMiniApp()) {
        wx.miniProgram.navigateTo({
          url: `../taskdetail/taskdetail?${util.param(paramObj)}`
        })
      } else {
        window.location.href = `/app/lightask/taskdetail?${util.param(
                    paramObj
                )}`
      }
    }
  },
    /**
     *唤起实习详情页
     */
  evokeInterViewPracticePage: function(practiceId) {
    var json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.InternDetailActivity'
        json.param = []
        var a = {}
        a.type = 'long'
        a.portType = 2
        a.key = 'practiceId'
        a.value = practiceId
        json.param.push(a)

        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSPracticeDeatilController'
      json.value = []
      var b = {}
      b.type = 'long'
      b.key = 'practiceId'
      b.value = practiceId
      json.value.push(b)

      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = `/app/interview?practiceId=${practiceId}`
    }
  },
    /**
     * 唤起青豆商城页面
     */
  evokeQtsBeanStorePage: function() {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl =
                    'com.qts.customer.exchange.ExchangeMallActivity'
        json.param = []
        let a = {}
        a.type = ''
        a.key = ''
        a.portType = ''
        a.value = ''
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSGreanSoybeanStoreController'
      json.value = []
      let a = {}
      a.type = ''
      a.key = ''
      a.value = ''
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = '/app/punchday'
    }
  },
    /**
     * 唤起轻任务列表页面
     */
  evokeLightTaskListPage: function() {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.TaskListActivity'
        json.param = []
        let a = {}
        a.type = ''
        a.key = ''
        a.portType = ''
        a.value = ''
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSEasyTaskListViewController'
      json.value = []
      let a = {}
      a.type = ''
      a.key = ''
      a.value = ''
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      if (util.isMiniApp()) {
        wx.miniProgram.navigateTo({
          url: `../tasklist/tasklist`
        })
      } else {
        window.location.href = '/app/lightask/tasklist'
      }
    }
  },
    /**
     * 唤起实名认证页面
     */
  evokeRealNameAuthPage: function() {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.UserVerifyActivity'
        json.param = []
        let a = {}
        a.type = ''
        a.key = ''
        a.portType = ''
        a.value = ''
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSRealNameViewController'
      json.value = []
      let a = {}
      a.type = ''
      a.key = ''
      a.value = ''
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = `http://auth.qtshe.com?token=${util.getToken()}`
    }
  },
    /**
     * 唤起兼职简历页面
     */
  evokePersonalPartJobResumePage: function() {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.UserResumeStepOneActivity'
        json.param = []
        let a = {}
        a.type = ''
        a.key = ''
        a.portType = ''
        a.value = ''
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSUserResumeViewController'
      json.value = []
      let a = {}
      a.type = ''
      a.key = ''
      a.value = ''
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = '/app/myresume'
    }
  },
    /**
     * 唤起兼职列表排序页面
     * (全部兼职＝INTELLIGENCE
     * 最新发布=LATEST_RELEASE
     * 附近兼职=NEAREST
     * 热门兼职=POPULAR_JOB
     * 薪资最高=HIGH_SALARY)
     */
  evokePartJobListSortedPage: function(sortRules) {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.HomeJianZhiActivity'
        json.param = []
        let a = {}
        a.type = 'String'
        a.key = 'sortRules'
        a.portType = 2
        a.value = sortRules
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSPartJobListSexViewController'
      json.value = []
      let a = {}
      a.type = 'String'
      a.key = 'sortRules'
      a.value = sortRules
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = '/app/findjob?sortRules=' + sortRules
    }
  },
    /**
     * 4.9.1新版APP 唤起兼职列表排序页面
     * (全部兼职＝  1
     * 最新发布=   2
     * 附近兼职=   3
     * 热门兼职=   4
     * 薪资最高=)  5
     */
  newEvokePartJobListSortedPage: function(sortRules) {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.HomeJianZhiActivity'
        json.param = []
        let a = {}
        a.type = 'String'
        a.key = 'sortRule'
        a.portType = 2
        a.value = sortRules
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSPartJobListSexViewController'
      json.value = []
      let a = {}
      a.type = 'String'
      a.key = 'sortRule'
      a.value = sortRules
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = '/app/findjob?sortRules=' + sortRules
    }
  },
    /**
     * 兼职列表分类页
     * classifyObj: {classificationId: 0, classificationName: ''}
     */
  evokePartJobListClassifiedPage: function(
        classificationId,
        classificationName
    ) {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl =
                    'com.qts.customer.SubClassPartJobArchiveActivity'
        json.param = []
        let a = {}
        a.type = 'long'
        a.key = 'classificationId'
        a.portType = 2
        a.value = classificationId
        json.param.push(a)
        let b = {}
        b.type = 'String'
        b.key = 'classificationName'
        b.portType = 2
        b.value = classificationName
        json.param.push(b)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'push'
      json.vc = 'QTSPartJobSublistViewController'
      json.value = []
      let a = {}
      a.type = 'Number'
      a.key = 'classificationId'
      a.value = classificationId
      json.value.push(a)
      let b = {}
      b.type = 'String'
      b.key = 'classificationName'
      b.value = classificationName
      json.value.push(b)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = `/app/partclass?classificationId=${classificationId}&classificationName=${classificationName}`
    }
  },
    /**
     * 唤起tab页面; 0,1,2,3代表四个tab
     */
  evokeTabPage: function(tabId = 0) {
    let json = {}
    if (util.isAndroidApp()) {
      try {
        json.targetUrl = 'com.qts.customer.MainFragmentActivity'
        json.param = []
        let a = {}
        a.type = 'String'
        a.key = 'selectIndex'
        a.portType = 2
        a.value = tabId
        json.param.push(a)
        window.android.generalView(JSON.stringify(json))
      } catch (e) {}
    } else if (util.isIosApp()) {
      json.jump = 'selectTabBar'
      json.vc = `${tabId}`
      json.value = []
      let a = {}
      a.type = ''
      a.key = ''
      a.value = ''
      json.value.push(a)
      window.connectWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(
                    'generalView',
          {
            param: JSON.stringify(json)
          },
                    function(response) {}
                )
      })
    } else {
      window.location.href = '/app/tabpage'
    }
  },
    /**
     * 判断当前用户是否登录，如果没有登录，弹出登录界面，如果登录了，执行业务逻辑
     */
  loginHandler: function(callback) {
    this.getAppInfo().then(obj => {
      if (util.isEmpty(obj.token)) {
        window.emitter.emit('loaded')
        this.evokeLoginPage(callback)
      } else {
        callback(obj)
      }
    })
  },
    /**
     * 全局事件触发器
     */
  eventEmitter: function() {
    let Emitter = function() {
      this._listeners = {}
    }
    Emitter.prototype.on = function(eventName, callback) {
      let listeners = this._listeners[eventName] || []
      listeners.push(callback)
      this._listeners[eventName] = listeners
    }
    Emitter.prototype.emit = function(eventName) {
      let args = Array.prototype.slice.apply(arguments).slice(1)
      let listeners = this._listeners[eventName]
      let self = this
      if (!Array.isArray(listeners)) return
      listeners.forEach(function(callback) {
        try {
          callback.apply(this, args)
        } catch (e) {
          console.error(e)
        }
      })
    }
    if (!window.emitter) {
      window.emitter = new Emitter()
    }
  }
}

export default interFunc
