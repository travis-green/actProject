/**
 * 高德地图获取定位信息
 */
import axios from '../plugins/ajax/ajax.js'
import util from './util'

class GetLocation {
  constructor() {
    //加载地图，调用浏览器定位服务
    this.latitude = ''
    this.longitude = ''
    this.map = new AMap.Map('iCenter', {
      resizeEnable: true
    })
  }
  geolocation() {
    const _this = this
    return new Promise((resolve, reject) => {
      _this.map.plugin('AMap.Geolocation', () => {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          buttonPosition: 'RB'
        })
        _this.map.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', function(result) {
          if (result && result.position) {
            _this.latitude = result.position.getLat()
            _this.longitude = result.position.getLng()
            resolve(true)
          } else {
            resolve(false)
          }
        }) //返回定位信息
        AMap.event.addListener(geolocation, 'error', async function(result) { //失败则调用IP定位
          console.log('浏览器定位失败', result)
          resolve(false)
        })
      })
    })
  }
  citySearch() {
    const _this = this
    return new Promise((resolve, reject) => {
      _this.map.plugin(['AMap.CitySearch'], function() {
        //实例化城市查询类
        const citysearch = new AMap.CitySearch()
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity()
        AMap.event.addListener(citysearch, 'complete', function(result) {
          if (result && result.bounds && result.bounds.southwest) {
            _this.latitude = result.bounds.southwest.lat
            _this.longitude = result.bounds.southwest.lng
            resolve(true)
          } else {
            reject(false)
          }
        })
        AMap.event.addListener(citysearch, 'error', function(result) {
          console.log('IP定位失败', result)
          reject(false)
        })
      })
    })
  }
  async getTownName() {
    const res = await axios.post(`misc/town/find`, {
      lat: this.latitude,
      lng: this.longitude
    })
    if (res.success) {
      util.setCookie('townId', res.data.townId, 30)
      util.setCookie('townName', res.data.townName, 30)
      return {
        latitude: this.latitude,
        longitude: this.longitude,
        townId: res.data.townId,
        townName: res.data.townName
      }
    }
  }
  /**
   * 默认IP定位，IP定位用户无感知，浏览器定位会弹个窗让用户确认是否定位
   * @param {String} type '_IP' 或 ’_BROWER‘
   */
  async init(type = '_IP') {
    try {
      if (type === '_IP') {
        await this.citySearch()
      } else {
        const resFlag = await this.geolocation()
        if (!resFlag) {
          await this.citySearch()
        }
      }
    } catch (error) {
    }
    try {
      const res = await this.getTownName()
      return res
    } catch (error) {
      console.log(error)
    }
  }
}
export default new GetLocation()
