import util from 'util'
export const commonJumpConfig = {
    USER_PART_JOB_DETAIL_PAGE: 'USER_PART_JOB_DETAIL_PAGE', //兼职详情页
    USER_PRACTICE_DETAIL_PAGE: 'USER_PRACTICE_DETAIL_PAGE', //实习详情页
    USER_COMPANY_HOME_PAGE: 'USER_COMPANY_HOME_PAGE', //公司主页
    USER_PART_JOB_TAG_PAGE: 'USER_PART_JOB_TAG_PAGE', //兼职标签页
    USER_MANY_STORE_PART_JOB_DETAIL: 'USER_MANY_STORE_PART_JOB_DETAIL', //多门店兼职详情页
    USER_TASK_DETAIL_PAGE: 'USER_TASK_DETAIL_PAGE', //小任务详情页
    USER_TASK_LIST_PAGE: 'USER_TASK_LIST_PAGE', //小任务列表
    USER_PART_JOB_SORT_PAGE: 'USER_PART_JOB_SORT_PAGE', //兼职排序页
    USER_PART_JOB_FIRST_CLASS_PAGE: 'USER_PART_JOB_FIRST_CLASS_PAGE', //兼职一级类目页
    USER_PART_JOB_SECOND_CLASS_PAGE: 'USER_PART_JOB_SECOND_CLASS_PAGE', //兼职二级类目页
    USER_ZHONGCAO_GOODS_DETAIL_PAGE: 'USER_ZHONGCAO_GOODS_DETAIL_PAGE', //种草团商品详情页
    USER_ZHONGCAO_PAGE: 'USER_ZHONGCAO_PAGE', //种草团商品列表页
    USER_DUIBA_GOODS_DETAIL_PAGE: 'USER_DUIBA_GOODS_DETAIL_PAGE', //兑吧商品详情页
    USER_SELECT_TAB: 'USER_SELECT_TAB', //APP切换TAB
    USER_VOTE_LIST_PAGE: 'USER_VOTE_LIST_PAGE', //以少胜多，投注页面
    USER_INTEGRAL_MALL_PAGE: 'USER_INTEGRAL_MALL_PAGE', //积分商场，青豆商城
    USER_REAL_NAME_AUTHENTICATION_PAGE: 'USER_REAL_NAME_AUTHENTICATION_PAGE', //实名认证页
    USER_PERSONAL_RESUME_PAGE: 'USER_PERSONAL_RESUME_PAGE', //学生端个人简历页面（新4.9.0以后）
    COMPANY_UPLOAD_LICENSE: 'COMPANY_UPLOAD_LICENSE', //商家端上传营业执照
    USER_TASK_AUDIT_LIST_PAGE: 'USER_TASK_AUDIT_LIST_PAGE', //普通截图小任务页面
    USER_INTEGRAL_MALL_GOODS_PAGE: 'USER_INTEGRAL_MALL_GOODS_PAGE' //普通截图小任务页面
}

export const commonJump = (type, params = {}, callBack) => {
    const { classificationId = '', classificationName = '', secondClassId = '', partJobId = '', activityId = '', taskBaseId = '' } = params
    let postData = ''
    switch (type) {
        case 'USER_PART_JOB_DETAIL_PAGE': //兼职详情页
            postData = [
                {
                    key: 'partJobId',
                    name: '兼职id',
                    type: 'String',
                    value: partJobId
                },
                {
                    key: 'activityId',
                    name: '活动id',
                    type: 'String',
                    value: activityId
                }
            ]
            break
        case 'USER_PRACTICE_DETAIL_PAGE': //实习详情页
            postData = [
                {
                    key: 'practiceId',
                    name: '实习id',
                    type: 'String',
                    value: params
                }
            ]
            break
        case 'USER_COMPANY_HOME_PAGE': //公司主页
            postData = [
                {
                    key: 'companyId',
                    name: '公司id',
                    type: 'String',
                    value: params
                }
            ]
            break
        case 'USER_PART_JOB_TAG_PAGE': //兼职标签页
            postData = [
                { key: 'tagId', name: '标签id', type: 'String', value: params }
            ]
            break
        case 'USER_MANY_STORE_PART_JOB_DETAIL': //多门店兼职详情页
            postData = [
                {
                    key: 'partJobTypeId',
                    name: '兼职种类id',
                    type: 'String',
                    value: params
                }
            ]
            break
        case 'USER_TASK_DETAIL_PAGE': //小任务详情页
            postData = [
                {
                    key: 'taskBaseId',
                    name: '小任务id',
                    type: 'String',
                    value: taskBaseId
                },
                {
                    key: 'activityId',
                    name: '活动id',
                    type: 'String',
                    value: activityId
                }
            ]
            break
        case 'USER_PART_JOB_SORT_PAGE': //兼职排序页
            postData = [
                {
                    key: 'sortRule',
                    name:
                        '标签排序(全部兼职＝1|附近兼职=2|最新发布=3|热门兼职=4|薪资最高=5)',
                    value: params
                }
            ]
            break
        case 'USER_PART_JOB_FIRST_CLASS_PAGE': //兼职一级类目页
            // const {classId = '', className = ''} = params
            postData = [
                {
                    key: 'classificationId',
                    name: '兼职分类的一级id',
                    type: 'String',
                    value: classificationId
                },
                {
                    key: 'classificationName',
                    name: '兼职分类的一级名称',
                    type: 'String',
                    value: classificationName
                }
            ]
            break
        case 'USER_PART_JOB_SECOND_CLASS_PAGE': //兼职二级类目页
            // const {classId = '', className = '', secondClassId = ''} = params
            postData = [
                {
                    key: 'classificationId',
                    name: '兼职分类的一级id',
                    type: 'String',
                    value: classificationId
                },
                {
                    key: 'classificationName',
                    name: '兼职分类的一级名称',
                    type: 'String',
                    value: classificationName
                },
                {
                    key: 'secondClassId',
                    name: '兼职分类的二级级id',
                    type: 'String',
                    value: secondClassId
                }
            ]
            break
        case 'USER_ZHONGCAO_GOODS_DETAIL_PAGE': //种草团商品详情页
            postData = [
                { key: 'itemId', name: '商品id', type: 'String', value: params }
            ]
            break
        case 'USER_INTEGRAL_MALL_GOODS_PAGE': //种草团商品详情页
            postData = [
                { key: 'goodsId', name: '商品id', type: 'String', value: params }
            ]
            break
        case 'USER_DUIBA_GOODS_DETAIL_PAGE': //兑吧商品详情页
            const { targetUrl = '', shareContent = '', title = '' } = params
            postData = [
                {
                    key: 'targetUrl',
                    name: '跳转链接',
                    type: 'String',
                    value: targetUrl
                },
                {
                    key: 'shareContent',
                    name: '分享内容',
                    type: 'String',
                    value: shareContent
                },
                { key: 'title', name: '分享标题', type: 'String', value: title }
            ]
            break
        case 'USER_SELECT_TAB':
            //兼职岗位列表页（全部） tabIndex:0:首页 1:岗位 2:消息 3:我的
            // index----0 :推荐 1: 在本地 2:宅家赚 3:趣兼职 4:玩精品
            const { tabIndex = 0, index = 0 } = params
            postData = [
                {
                    key: 'tabIndex',
                    name: 'Main页面显示哪个页面',
                    value: tabIndex
                },
                { key: 'index', name: '首页显示哪个页面', value: index }
            ]
            break
        default:
            postData = ''
    }
    if (util.isAndroidApp() || util.isAndroidCompanyApp()) {
        window.connectWebViewJavascriptBridge(bridge => {
            bridge.callHandler(
                'callNative',
                {
                    fnName: 'commonJump',
                    params: {
                        jumpKey: type,
                        param: (postData && JSON.stringify(postData)) || ''
                    }
                },
                res => {
                    callBack && callBack(JSON.parse(res))
                }
            )
        })
    } else {
        window.connectWebViewJavascriptBridge(bridge => {
            bridge.callHandler(
                'callNative',
                {
                    fnName: 'openNativePage',
                    params: {
                        jumpKey: type,
                        param: (postData && JSON.stringify(postData)) || ''
                    }
                },
                res => {
                    callBack && callBack(JSON.parse(res))
                }
            )
        })
    }
}
