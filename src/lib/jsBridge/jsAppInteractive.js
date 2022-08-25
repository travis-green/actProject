// version >= 4.6.3
import util from 'util'
import wxs from 'wx'
import {
  commonJumpConfig,
  commonJump
} from './constant'
import {
  report
} from '../report-sdk'
let interFunc = {
  /**
   * 拉起App
   */
  launchApp: (params) => {
    return new Promise((resolve, reject) => {
      if (util.isAndroidApp()) {
        window.connectWebViewJavascriptBridge(bridge => {
          bridge.callHandler('callNative', {
            fnName: 'launchApp',
            params
          }, res => {
            resolve(res)
          })
        })
      } else {
        resolve({})
      }
    })
  },
  /**
   * 打开浏览器
   */
  jumpToBrowser: (obj) => {
    return new Promise((resolve, reject) => {
      if (util.isAndroidApp()) {
        window.connectWebViewJavascriptBridge(bridge => {
          bridge.callHandler('callNative', {
            fnName: 'jumpToBrowser',
            params: obj
          }, res => {
            resolve(res)
          })
        })
      } else {
        resolve({})
      }
    })
  },
  /**
   * 联系客服
   */
  contactService: () => {
    return new Promise((resolve, reject) => {
      if (util.isAndroidApp() || util.isIosApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
        window.connectWebViewJavascriptBridge(bridge => {
          bridge.callHandler(
            'callNative', {
              fnName: 'contactService'
            },
            res => {
              resolve('')
            }
          )
        })
      } else {
        resolve({
          token: util.getToken()
        })
      }
    })
  },
  /**
   * 得到用户信息
   */
  homeTabSwitch: (config = {
    tabIndex: 0
  }) => {
    return new Promise((resolve, reject) => {
      if (util.isAndroidApp() || util.isIosApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
        window.connectWebViewJavascriptBridge(bridge => {
          bridge.callHandler(
            'callNative', {
              fnName: 'homeTabSwitch',
              params: config
            },
            res => {
              resolve({})
            }
          )
        })
      } else {
        resolve({})
      }
    })
  },
  /**
   * 得到用户信息
   */
  getAppInfo: () => {
    return new Promise((resolve, reject) => {
      if (util.isAndroidApp() || util.isIosApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
        window.connectWebViewJavascriptBridge(bridge => {
          bridge.callHandler(
            'callNative', {
              fnName: 'getAppInfo'
            },
            res => {
              resolve(res && JSON.parse(res).data)
            }
          )
        })
      } else {
        resolve({
          token: util.getToken()
        })
      }
    })
  },
  /**
   * 获取客户端的埋点数据
   */
  getAppTrackInfo: () => {
    return new Promise((resolve, reject) => {
      if (util.isAndroidApp() || util.isIosApp()) {
        window.connectWebViewJavascriptBridge(bridge => {
          bridge.callHandler(
            'callNative', {
              fnName: 'getStartEvent'
            },
            res => {
              try {
                let data = res && JSON.parse(res).data || {}
                if (!data.deviceId) {
                  report({
                    ...data,
                    error: true
                  })
                }
                resolve(data)
              } catch (e) {
                report(e && e.message)
                resolve({})
              }
            }
          )
        })
      } else {
        resolve({})
      }
    })
  },
  /**
   * 把埋点数据同步给客户端
   */
  postTrackInfoToNav: (config = {}) => {
    return new Promise((resolve, reject) => {
      if (util.isAndroidApp() || util.isIosApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
        window.connectWebViewJavascriptBridge(bridge => {
          bridge.callHandler(
            'callNative', {
              fnName: 'setStartEvent',
              params: config
            },
            res => {
              resolve(res && JSON.parse(res).data)
            }
          )
        })
      } else {
        resolve({})
      }
    })
  },
  /**
  * 拷贝页面文案方法
  @param: content: 需要复制到剪切板的文案
   */
  copyToClipboard: content => {
    if (util.isIosApp() || util.isAndroidApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'copyToClipBoard',
            params: {
              content: content && content.toString()
            }
          },
          res => {
            console.log(res)
          }
        )
      })
    }
  },
  /**
 * 隐藏分享按钮
 @param: 1.showBtn: Boolean型 true为展示，默认为true
 */
  displayShareBtn: (showBtn = true) => {
    if (util.isIosApp() || util.isAndroidApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'initShareInfo',
            params: {
              showBtn
            }
          },
          res => {
            console.log(res)
          }
        )
      })
    }
  },
  /**
   * 打开分享面板
   */
  openSharePanel: () => {
    if (util.isAndroidApp() || util.isIosApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'openSharePanel'
          },
          res => {
            console.log(res)
          }
        )
      })
    }
  },
  /**
   * 打开设置app上的标题
   */
  setNavTitle: title => {
    if (util.isIosApp() || util.isAndroidApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'setNavTitle',
            params: {
              title
            }
          },
          res => {
            console.log(res)
          }
        )
      })
    }
  },
  /**
     * 4.45.2版本
    "plateformType" : int类型，微信聊天 = 0,朋友圈 = 1,QQ = 2,QQ空间=3,Sina=4,拷贝链接=5
    "title" : 标题,
    "desc" : 内容,
    "webpageUrl" : 链接,
    "imgUrl" : 图片,
    "miniProgramPath" : 小程序链接，
    "shareType" : int类型，分享类型， 网页 = 0 , 图片 = 1， 小程序 = 2,
     */
  setShareInfo: shareInfoList => {
    window.connectWebViewJavascriptBridge(bridge => {
      bridge.callHandler(
              'callNative', {
                fnName: 'setShareInfo',
                params: shareInfoList
              },
              res => {
                console.log('setShareInfo', JSON.parse(res))
              }
          )
    })
  },
  /**
   * 4.45.2版本 打开分享面板功能
   */
  showSharePanel: () => {
    window.connectWebViewJavascriptBridge(bridge => {
      bridge.callHandler(
              'callNative', {
                fnName: 'showSharePanel'
              },
              res => {
                console.log('showSharePanel', JSON.parse(res))
              }
          )
    })
  },
  /**
   * 唤起种草团商品列表页面
   */
  evokeGrassClusterListPage: () => {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_ZHONGCAO_PAGE'])
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
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(
        commonJumpConfig['USER_ZHONGCAO_GOODS_DETAIL_PAGE'],
        goodsId
      )
    } else {
      console.log('nothing to find page')
    }
  },
  /**
 * 初始化右上角按钮
 @param: 1.innerText: String型 按钮文案
 @param: 2.innerUrl: String型 跳转链接
 @param: 3.showBtn: Boolean型 true为展示，默认为true
 */
  initRightJump: (innerText, innerUrl, showBtn = true) => {
    if (util.isIosApp() || util.isAndroidApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'initRightJump',
            params: {
              showBtn: showBtn,
              text: innerText,
              url: innerUrl
            }
          },
          (res, responseCallback) => {}
        )
      })
    }
  },
  //跳转投注列表页
  initVoteListPage() {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_VOTE_LIST_PAGE'])
    } else {
      window.location.href = '/app/topicBet'
    }
  },
  /**
   * 初始化分享信息
   */
  initShareInfo: obj => {
    const {
      title = '青团社兼职,记录你的每一次成长',
        desc = '大学生做兼职首选平台',
        link = window.location.href,
        imgUrl = 'https://qiniu-image.qtshe.com/20170615logo.jpeg',
        showBtn = true
    } = obj
    if (util.isAndroidApp() || util.isAndroidCompanyApp() || util.isIosApp() || util.isIosCompanyApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'initShareInfo',
            params: {
              title,
              desc,
              link,
              imgUrl,
              showBtn
            }
          },
          res => {
            console.log('initShareInfo', JSON.parse(res))
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
    if (util.isIosApp() || util.isAndroidApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'closeWebView'
          },
          res => {
            console.log(res)
          }
        )
      })
    } else {
      window.history.go(-1)
    }
  },
  /**
   * h5页面上的返回键功能，直接关闭webview
   */
  h5ButtonCloseWebview() {
    if (util.isIosApp() || util.isAndroidApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'closeWebView'
          },
          res => {
            console.log(res)
          }
        )
      })
    } else {
      window.history.go(-1)
    }
  },
  /**
   * 是否展示native头部
  @param: isShow: Boolen型 true 为显示, false隐藏，默认false
   */
  displayAppHead: isShow => {
    if (util.isIosApp() || util.isAndroidApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'displayAppHead',
            params: {
              isShow
            }
          },
          res => {
            console.log(res)
          }
        )
      })
    }
  },
  /**
   * 唤起分享操作板
   */
  evokeSharePanel: obj => {
    const {
      title = '青团社兼职,记录你的每一次成长',
        desc = '大学生做兼职首选平台',
        link = window.location.href,
        imgUrl = 'https://qiniu-image.qtshe.com/20170615logo.jpeg',
        showBtn = true
    } = obj
    if (util.isAndroidApp() || util.isIosApp() || util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
      window.connectWebViewJavascriptBridge(bridge => {
        bridge.callHandler(
          'callNative', {
            fnName: 'initShareInfo',
            params: {
              title,
              desc,
              link,
              imgUrl,
              showBtn
            }
          },
          res => {
            interFunc.openSharePanel()
          }
        )
      })
    }
    return new Promise((resolve, reject) => {
      resolve({
        success: true
      })
    })
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
        let bridgeLogin = () => {
          window.connectWebViewJavascriptBridge(bridge => {
            bridge.callHandler(
              'callNative', {
                fnName: 'showLogin'
              },
              res => {
                let response = JSON.parse(res)
                if (response.code === 4002) {
                  resolve({})
                  callback && callback('')
                } else {
                  resolve(response.data)
                  callback && callback(response.data)
                }
              }
            )
          })
        }
        if (util.isAndroidApp()) {
          bridgeLogin()
        } else if (util.isIosApp()) {
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
          let index = 0
          let appVersion = ''
          let appVersionNum = 0
          index = navigator.appVersion.indexOf('-ios-')
          appVersion = navigator.appVersion.slice(index + 5)
          appVersionNum = parseInt(toNum(appVersion))
          if (appVersionNum === 4140000) {
            util.goLogin()
          } else {
            bridgeLogin()
          }
        } else {
          util.goLogin()
        }
      }
    })
  },
  /**
   * 唤起公司主页
   */
  evokeCompanyHomePage: function(companyId) {
    if (!companyId) {
      console.error('companyId is undefined')
      return
    }
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_COMPANY_HOME_PAGE'], companyId)
    } else {
      window.location.href = `/app/company?companyId=${companyId}`
    }
  },
  /**
   *唤起兼职标签页面
   **/
  evokeLabelListPage(labelId) {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_PART_JOB_TAG_PAGE'], labelId)
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
    let paramObj = {}
    if (util.getQueryString('activityId')) {
      let activityId = parseInt(util.getQueryString('activityId'), 10)
      paramObj.activityId = activityId
    }
    if (
      util.isNumber(config) ||
      (util.isString(config) && !isNaN(parseInt(config, 10)))
    ) {
      let partJobId = parseInt(config, 10)
      paramObj.partJobId = partJobId
    } else if (util.isObject(config)) {
      paramObj = Object.assign({}, paramObj, config)
    } else {
      return 'param is error!'
    }
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(
        commonJumpConfig['USER_PART_JOB_DETAIL_PAGE'], {
          partJobId: paramObj.partJobId,
          activityId: paramObj.activityId
        }
      )
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
        window.location.href =
          `/app/partdetails?${util.param(paramObj)}`
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
  evokePerfectTaskPage: function() {
    commonJump(
      commonJumpConfig['USER_TASK_LIST_PAGE'], {}
    )
  },
  evokePerfectPartJobDetailPage: function(config) {
    if (!config) {
      return 'param is error!'
    }
    let paramObj = {}
    if (util.getQueryString('activityId')) {
      let activityId = parseInt(util.getQueryString('activityId'), 10)
      paramObj.activityId = activityId
    }
    if (
      util.isNumber(config) ||
      (util.isString(config) && !isNaN(parseInt(config, 10)))
    ) {
      let partJobId = parseInt(config, 10)
      paramObj.partJobId = partJobId
    } else if (util.isObject(config)) {
      paramObj = Object.assign({}, paramObj, config)
    } else {
      return 'param is error!'
    }
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(
        commonJumpConfig['USER_PART_JOB_DETAIL_PAGE'], {
          partJobId: paramObj.partJobId,
          activityId: paramObj.activityId
        }
      )
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
        window.location.href = `/app/partdetails?${util.param(paramObj)}`
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
    let paramObj = {}
    if (util.getQueryString('activityId')) {
      let activityId = parseInt(util.getQueryString('activityId'), 10)
      paramObj.activityId = activityId
    }
    if (
      util.isNumber(config) ||
      (util.isString(config) && !isNaN(parseInt(config, 10)))
    ) {
      let taskBaseId = parseInt(config, 10)
      paramObj.taskBaseId = taskBaseId
    } else if (util.isObject(config)) {
      paramObj = Object.assign({}, paramObj, config)
    } else {
      return 'param is error!'
    }
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(
        commonJumpConfig['USER_TASK_DETAIL_PAGE'], {
          taskBaseId: paramObj.taskBaseId,
          activityId: paramObj.activityId
        }
      )
    } else {
      if (util.isMiniApp()) {
        wx.miniProgram.navigateTo({
          url: `../taskdetail/taskdetail?${util.param(paramObj)}`
        })
      } else {
        window.location.href =
          `/app/lightask/taskdetail?${util.param(paramObj)}`
      }
    }
  },
  /**
   *唤起实习详情页
   */
  evokeInterViewPracticePage: function(practiceId) {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(
        commonJumpConfig['USER_PRACTICE_DETAIL_PAGE'],
        practiceId
      )
    } else {
      window.location.href = `/app/interview?practiceId=${practiceId}`
    }
  },
  /**
   *商品详情页
   */
  evokeInterMallGoodsPage: function(goodsId) {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(
        commonJumpConfig['USER_INTEGRAL_MALL_GOODS_PAGE'],
        goodsId
      )
    } else {
      window.location.href = `/`
    }
  },
  /**
   * 唤起青豆商城页面
   */
  evokeQtsBeanStorePage: function() {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_INTEGRAL_MALL_PAGE'])
    } else {
      window.location.href = '/app/punchday'
    }
  },
  /**
   * 唤起小任务列表页面
   */
  evokeLightTaskListPage: function() {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_TASK_LIST_PAGE'])
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
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_REAL_NAME_AUTHENTICATION_PAGE'])
    } else {
      window.location.href = `http://auth.qtshe.com?token=${util.getToken()}`
    }
  },
  /**
   * 唤起兼职简历页面
   */
  evokePersonalPartJobResumePage: function() {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_PERSONAL_RESUME_PAGE'])
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
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_PART_JOB_SORT_PAGE'], sortRules)
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
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_PART_JOB_SORT_PAGE'], sortRules)
    } else {
      window.location.href = '/app/findjob?sortRules=' + sortRules
    }
  },
  /**
   * 兼职列表分类页
   * classifyObj: {classId: 0, className: ''}
   */
  evokePartJobListClassifiedPage: function(classificationId = 0, classificationName = '') {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_PART_JOB_FIRST_CLASS_PAGE'], {
        classificationId,
        classificationName
      })
    } else {
      window.location.href = `/app/partclass?classificationId=${classificationId}&classificationName=${classificationName}`
    }
  },
  /**
   * 二级兼职列表分类页
   * classifyObj: {classId: 0, className: ''}
   */
  evokeSecondPartJobListClassifiedPage: function(classificationId = 0, classificationName = '', secondClassId = 0) {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_PART_JOB_SECOND_CLASS_PAGE'], {
        classificationId,
        classificationName,
        secondClassId
      })
    }
  },
  /**
   * 唤起tab页面; index----0 :推荐 1: 在本地 2:宅家赚 3:趣兼职 4:玩精品
   *  tabIndex:0:首页 1:岗位 2:消息 3:我的
   */
  evokeTabPage: function(tabIndex = 0, index = 0) {
    if (util.isAndroidApp() || util.isIosApp()) {
      commonJump(commonJumpConfig['USER_SELECT_TAB'], {
        tabIndex,
        index
      })
    } else {
      window.location.href = '/app/tabpage'
    }
  },
  /**
   * 唤起上传营业执照页面
   */
  evokeUpLoadBusinessLicense: function() {
    if (util.isIosCompanyApp() || util.isAndroidCompanyApp()) {
      commonJump(commonJumpConfig['COMPANY_UPLOAD_LICENSE'])
    } else {
      console.log('nothing to find page')
    }
  },
  /**
   * 判断当前用户是否登录，如果没有登录，弹出登录界面，如果登录了，执行业务逻辑
   */
  loginHandler: function(callback) {
    this.getAppInfo().then(obj => {
      if (util.isEmpty(obj.token)) {
        window.emitter && window.emitter.emit('loaded')
        this.evokeLoginPage(callback)
      } else {
        callback(obj.token)
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
