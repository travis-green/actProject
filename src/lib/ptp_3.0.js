/* eslint-disable */
import axios from '../plugins/ajax/ajax.js'
import util from 'util'
import jsBridge from 'jsBridge'
const uploadTime = {} // 存储次数
// 点击埋点
export function clickEvents(options) {
    upload(options, { eventType: 2 })
}

// 曝光埋点
export function exposureEvents(options) {
    // 延迟1秒曝光，避免jsbridge还未加载完
    if (!window.sessionStorage.getItem('deviceId')) {
        setTimeout(() => {
            upload(options, { eventType: 1 })
        }, 1000)
    } else {
        upload(options, { eventType: 1 })
    }
}

// 页面打开
export function pageLoadEvents() {
    if (!window.sessionStorage.getItem('deviceId')) {
        setTimeout(() => {
            upload({ position: window.sessionStorage.getItem('position') || '', index: window.sessionStorage.getItem('index') ? Number(window.sessionStorage.getItem('index')) : '', businessId: window.sessionStorage.getItem('businessId') || '', businessType: window.sessionStorage.getItem('businessType') || '', contentId: window.sessionStorage.getItem('contentId') || '' }, { eventType: 5 })
        }, 1000)
    } else {
        upload({ position: window.sessionStorage.getItem('position') || '', index: window.sessionStorage.getItem('index') ? Number(window.sessionStorage.getItem('index')) : '', businessId: window.sessionStorage.getItem('businessId') || '', businessType: window.sessionStorage.getItem('businessType') || '', contentId: window.sessionStorage.getItem('contentId') || '' }, { eventType: 5 })
    }
}

// 数据上报
const upload = (options, config) => {
    const { businessId = '' } = options
    if (businessId === '' && config.eventType !== 5) {
        return
    }
    // APP、小程序内实现上报
    if (util.isIosApp() || util.isAndroidApp() || (util.getAppkey() === 'QTSHE_MINI_APP')) {
        formate(options, config)
    } else {
        util.isAliMiniApp().then(res => {
            if (res) {
                formate(options, config)
            }
        })
    }
}

const formate = (options, config) => {
    const { businessId = '', index = '', position = '', businessType = '', contentId = '' } = options
    const path = window.location.href
    const positionId = typeof index === 'number' ? position + '-' + (index + 1) : position
    // 连续上报10次失败，则取消
    if (!window.sessionStorage.getItem('deviceId')) {
        uploadTime[positionId] = uploadTime[positionId] ? uploadTime[positionId] + 1 : 1
        if (uploadTime[positionId] < 10) {
            return formate(options, config)
        } else {
            return
        }
    }
    axios.track({
        referId: document.referrer || window.sessionStorage.getItem('referId') || '',
        currentId: path,
        positionId,
        positionIdFir: window.location.pathname,
        positionIdSec: position,
        positionIdThi: typeof index === 'number' ? index + 1 : '',
        businessType,
        businessId,
        contentId,
        eventType: 1,
        ...config
    })
    if (config.eventType === 2) {
        sessionStorage.removeItem('position')
        sessionStorage.removeItem('businessId')
        sessionStorage.removeItem('businessType')
        sessionStorage.removeItem('contentId')
        sessionStorage.removeItem('index')
        window.sessionStorage.setItem('position', position || '')
        window.sessionStorage.setItem('businessId', businessId || '')
        window.sessionStorage.setItem('businessType', businessType || '')
        window.sessionStorage.setItem('contentId', contentId || '')
        typeof index === 'number' && window.sessionStorage.setItem('index', index)
        if (util.isAndroidApp() || util.isIosApp()) {
            jsBridge.postTrackInfoToNav && jsBridge.postTrackInfoToNav({
                referId: document.referrer || window.sessionStorage.getItem('referId') || '',
                currentId: path,
                positionId,
                positionIdFir: window.location.pathname,
                positionIdSec: position,
                positionIdThi: typeof index === 'number' ? index + 1 : '',
                businessType,
                businessId,
                contentId,
                eventType: 1,
                ...config
            })
        }
    }
}
