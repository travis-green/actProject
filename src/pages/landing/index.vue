<style lang='less' scoped>
.container {
  background: #ff4d24;
  padding-bottom: 0.95rem;
  position: relative;
  min-height: 100vh;
}

.swiper-wrap {
  position: absolute;
  left: 0;
  top: 0.06rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.swiper-item-0 {
  margin-left: 3.5rem;
}

.swiper-item {
  width: 1.89rem;
  height: 0.24rem;
  border-radius: 0.12rem;
  background: rgba(143,50,14,0.57);
  display: inline-block;
  padding-left: 0.025rem;
  margin-right: 0.075rem;
  vertical-align: baseline;
  animation: 50s rowup linear infinite normal;
}

.swiper-icon {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  border: 1px solid #e39232;
  margin-right: 0.025rem;
  margin-top: 0.015rem;
}

.swiper-text {
  color: #fce772;
  font-size: 0.12rem;
  line-height: 0.24rem;
  vertical-align: top;
  white-space: nowrap;
}

.header {
  display: block;
  width: 100%;
  height: 2.5rem;
}

.header2 {
  display: block;
  width: 100%;
  height: 2.55rem;
}

.progress {
  width: 2.83rem;
  height: 0.24rem;
  border-radius: 0.12rem;
  margin: 0 auto;
  background: url(https://qiniu-image.qtshe.com/20200709_progress.png) no-repeat center top;
  background-size: 100% 0.24rem;
  padding-top: 0.03rem;
  position: relative;
}

.progress-point {
  position: absolute;
  display: block;
  top: -0.28rem;
  width: 0.335rem;
  height: 0.755rem;
  left: 0;
  z-index: 3;
}

.progress-main {
  width: 2.76rem;
  height: 0.17rem;
  margin-left: 0.04rem;
  border-radius: 0.085rem;
  overflow: hidden;
}

.progress-content {
  width: 2.76rem;
  height: 0.17rem;
  background: url(https://qiniu-image.qtshe.com/20200709_progressActive.png) no-repeat center top;
  background-size: 100% 0.17rem;
  border-radius: 0.085rem;
}

.progress-text {
  color: #fcea86;
  font-size: 0.12rem;
  text-align: center;
  margin-top: 0.04rem;
}

.button {
   background: url(https://qiniu-image.qtshe.com/20200714_button.png) no-repeat center top;
  background-size: 100% 0.765rem;
  width: 3.65rem;
  height: 0.765rem;
  margin: 0.09rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  line-height: normal;
  padding-bottom: 0.05rem;
}

.button2 {
  background: url(https://qiniu-image.qtshe.com/20200714_button.png) no-repeat center top;
  background-size: 100% 0.765rem;
  width: 3.65rem;
  height: 0.765rem;
  margin: 0.09rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  line-height: normal;
  padding-bottom: 0.05rem;
}

.button2-icon {
  display: block;
  width: 0.235rem;
  height: 0.245rem;
  margin-left: 0.115rem;
}

.button-text {
  color: #b24801;
  font-size: 0.2rem;
  font-weight: bold;
}

.button-time {
  color: #e33a14;
  font-size: 0.115rem;
}

.login-button {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.pic {
  display: block;
  width: 3.42rem;
  height: 2rem;
  margin: 0 auto;
}

.pic2 {
  display: block;
  width: 3.42rem;
  height: 1.35rem;
  margin: 0 auto;
}

.mask {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
}

.mask-content {
  position: absolute;
  width: 3.02rem;
  height: 2.47rem;
  margin-left: -1.51rem;
  left: 50%;
  top: 50%;
  margin-top: -1.485rem;
  background: url(https://qiniu-image.qtshe.com/20200709_maskcontent1.png) no-repeat center top;
  background-size: 100% 2.47rem;
  padding-top: 0.79rem;
  overflow: visible;
}

.mask-content2 {
  background: url(https://qiniu-image.qtshe.com/20200709_maskcontent2.png) no-repeat center top;
  background-size: 100% 2.47rem;
}

.mask-content3 {
  position: absolute;
  width: 3.015rem;
  height: 2.47rem;
  margin-left: -1.51rem;
  left: 50%;
  top: 50%;
  margin-top: -1.485rem;
  background: url(https://qiniu-image.qtshe.com/20200713_loginBg.png) no-repeat center top;
  background-size: 100% 2.47rem;
  padding-top: 0.61rem;
  overflow: visible;
}

.mask-content4 {
    background: #fff;
    padding-top: 0.31rem;
    width: 2.99rem;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -1.495rem;
    margin-top: -1.48rem;
    border-radius: 0.1rem;
    padding-bottom: 0.18rem;
}

.mask-main {
  display: flex;
  justify-content: flex-start;
  height: 0.61rem;
  width: 2.55rem;
  margin: 0 auto;
}

.mask-icon {
  width: 0.61rem;
  height: 0.61rem;
  border-radius: 50%;
  background: #fff1cf url(https://qiniu-image.qtshe.com/20200709_kefu.png) no-repeat center center;
  background-size: 0.38rem 0.4rem;
  margin-right: 0.12rem;
}

.mask-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #535353;
  font-size: 0.13rem;
}

.contact-button {
  background: url(https://qiniu-image.qtshe.com/20200709_contactButton.png) no-repeat center top;
  width: 2.65rem;
  height: 0.595rem;
  margin: 0.3rem auto 0;
  background-size: 100% 0.595rem;
}

.mask-tel {
    border: 0 none;
    outline: 0 none;
    display: block;
    border-bottom: 1px solid #d5d5d5;
    height: 0.35rem;
    line-height: 0.35rem;
    color: #5a5a5a;
    font-size: 0.15rem;
    margin: 0 auto;
    width: 2.55rem;
}

.login-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.34rem;
    margin: 0.08rem auto 0;
    width: 2.55rem;
    border-bottom: 1px solid #d5d5d5;
}

.login-code {
    display: block;
    border: 0 none;
    outline: 0 none;
    color: #b8b8b8;
    font-size: 0.13rem;
    height: 0.3rem;
    line-height: 0.3rem;
    width: 1.25rem;
}

.code-button {
    width: 0.8rem;
    height: 0.25rem;
    border-radius: 0.04rem;
    background: #c5c5c5;
    font-size: 0.13rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.code-button-active {
    width: 0.8rem;
    height: 0.25rem;
    border-radius: 0.04rem;
    border: 1px solid #ff6b22;
    font-size: 0.13rem;
    color: #ff6b22;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mask-login-button {
    display: block;
    width: 2.65rem;
    height: 0.595rem;
    margin: 0.3rem auto 0;
}

.picCode-wrap {
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d5d5d5;
    width: 2.55rem;
    margin: 0 auto;
}

.picCode-input {
    height: 0.36rem;
    line-height: 0.36rem;
    color: #b8b8b8;
    font-size: 0.13rem;
    width: 1.55rem;
    display: block;
    border: 0 none;
    outline: 0 none;
}

.picCode-pic {
    display: block;
    width: 0.8rem;
    height: 0.31rem;
}

.picCode-button {
    width: 1.33rem;
    height: 0.4rem;
    margin: 0.18rem auto 0;
    background: #ff731f;
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.19rem;
}

.mask-close {
  position: absolute;
  top: -0.6rem;
  right: 0;
  display: block;
  width: 0.315rem;
  height: 0.315rem;
}

.margin-top-0 {
  margin-top: 0;
}

.margin-bottom-20 {
  margin-bottom: 0.1rem;
}

.yellow {
  color: #ff6e21;
}

@keyframes rowup {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(-43.05rem, 0, 0);
        transform: translate3d(-43.05rem, 0, 0);
    }
}
</style>
<template>
    <div class="container" v-if="hasLoaded">
        <img src="https://qiniu-image.qtshe.com/20200709_header.png" class="header" v-if="!headerSwitch"/>
        <img src="https://qiniu-image.qtshe.com/20200715_header.png" class="header" v-else/>
        <div class="swiper-wrap" v-if="list.length>0">
            <div class="swiper-item" v-for="(item, i) in list" :key="i">
                <img :src="item.logo" class="swiper-icon"/>
                <span class="swiper-text">{{city[i]}} {{item.mobile}}刚刚报名</span>
            </div>
        </div>
        <div class="progress" v-if="!status"> 
            <div class="progress-main" :style="{'width': (1-(presentList[hour]/100)) * 2.27+'rem'}">
                <div class="progress-content"></div>
            </div>
            <img  :style="{'left': (1-(presentList[hour]/100)) * 2.27 - 0.14+ 'rem'}" src="https://qiniu-image.qtshe.com/20200710_point.png" class="progress-point"/>
        </div>
        <div class="progress-text" v-if="!status">限时报名 剩余名额{{presentList[hour]}}%</div>
        <div class="button" v-if="!isLogin" @click="loginHadnle" v-clickEvents="{ businessId: 0, businessType: 0, position: 'login'}">
            <div class="button-text">马上报名</div>
            <div class="button-time">00:{{time}}后报名截止</div>
        </div>
        <div v-else>
            <div class="button2" @click="openDialog" v-if="status" v-clickEvents="{ businessId: 0, businessType: 0, position: 'contact'}">
                <div class="button-text">联系客服</div>
                <img mode="scaleToFill" src="https://qiniu-image.qtshe.com/20200709_buttonIcon.png" class="button2-icon"/>
            </div>
            <div class="button" @click="applyValidate" v-else v-clickEvents="{ businessId: 0, businessType: 0, position: 'apply'}">
                <div class="button-text">马上报名</div>
                <div class="button-time">00:{{time}}后报名截止</div>
            </div>
        </div>
        <img src="https://qiniu-image.qtshe.com/20200709_pic1.png" class="pic"/>
        <img src="https://qiniu-image.qtshe.com/20200709_pic2.png" class="pic2"/>
        <div class="button margin-top-0" @click="jumpToIndex" v-clickEvents="{ businessId: 0, businessType: 0, position: 'more'}">
            <div class="button-text">更多赚钱机会</div>
        </div>
        <div class="mask" v-if="visible">
            <div :class="{'mask-content': true, 'mask-content2': type !== 1}">
                <img src="https://qiniu-image.qtshe.com/20200709_close.png" class="mask-close" @click="visible = false"/>
                <div class="mask-main">
                <div class="mask-icon"></div>
                <div class="mask-text">
                    <div class="margin-bottom-20">
                    请尽快添加<span class="yellow">客服QQ好友</span>
                    </div>
                    <div>我们将为您优先派单~</div>
                </div>
                </div>
                <div class="contact-button" id="copy" :data-clipboard-text="contactNo" download="" @click="copyHandle"></div>
            </div>
        </div>
        <div class="mask" v-if="loginVisible">
            <div class="mask-content3">
               <img src="https://qiniu-image.qtshe.com/20200709_close.png" class="mask-close" @click="loginVisible=false"/>
               <input type="tel" placeholder="请输入手机号" maxlength="11" v-model="form.mobile" class="mask-tel"/>
               <div class="login-content">
                   <input type="tel" placeholder="请输入验证码" maxlength="6" v-model="form.verifyCode" class="login-code"/>
                   <div :class="{'code-button': buttonText !== '获取验证码', 'code-button-active': buttonText === '获取验证码'}" @click="getPicCode">{{buttonText}}</div>
               </div>
               <img src="https://qiniu-image.qtshe.com/20200713_loginButton2.png" class="mask-login-button" @click="submit"/>
            </div>
        </div>
        <div class="mask" v-if="picVisible">
           <div class="mask-content4">
               <div class="picCode-wrap">
                   <input type="tel" placeholder="请输入图片验证码" maxlength="4" v-model="form.imageCode" class="picCode-input"/>
                   <img :src="codeUrl" class="picCode-pic" alt="图片验证码" @click='changeCode'/>
               </div>
               <div class="picCode-button" @click="sendvericode">确定</div>
           </div>
        </div>
    </div>
</template>
<script>
import toast from 'toast'
import Clipboard from 'clipboard'
import {
    mapActions
} from 'vuex'
import util from 'util'
import {
    Toast,
    Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      isLogin: false,
      visible: false,
      status: 1, // 0 未报名 1 已报名
      list: [],
      time: '',
      city: [],
      hour: 0,
      presentList: [29, 27, 25, 23, 21, 17, 29, 27, 25, 23, 21, 17, 29, 27, 25, 23, 21, 17, 29, 27, 25, 23, 21, 17],
      type: 1,
      timer: null,
      buttonText: '获取验证码', // 倒计时按钮文案
      form: {
        mobile: '',
        imageCode: '',
        verifyCode: '',
        deviceIdCode: Math.random()
      },
      codeUrl: '',
      isWait: false,
      picVisible: false,
      loginWait: false,
      loginVisible: false,
      intervalId: null,
      sec: 0, // 进度条倒计时秒数
      contactNo: '',
      partJobId: '',
      headerSwitch: false,
      hasLoaded: false
    }
  },
  methods: {
    ...mapActions(['SIGNIN', 'SIGNOUT']),
    initTime() {
      let min = parseInt(Math.random() * 30) + 30
      this.sec = (min * 60) + parseInt(Math.random() * 59)
    },
    countTime() {
      this.sec = this.sec - 1
      let time = this.sec
      let sec = time % 60 >= 10 ? time % 60 : '0' + (time % 60)
      let min = parseInt(time / 60) >= 10 ? parseInt(time / 60) : '0' + parseInt(time / 60)
      this.time = `${min}:${sec}`
      if (time === 0) {
        clearTimeout(this.timer)
        return
      }
      this.timer = setTimeout(() => {
        this.countTime()
      }, 1000)
    },
    changeCode() {
      this.form.imageCode = ''
      this.codeUrl = `${window.g_info.qts_api}/accountCenter/account/image/code?deviceId=${Math.random()}&appKey=QTSHE_WECHAT&deviceIdCode=${this.form.deviceIdCode}`
    },
    getPicCode() {
      if (!(/^1[0123456789]\d{9}$/.test(this.form.mobile))) {
        toast('请输入正确的手机号码')
        return
      }
      this.changeCode()
      this.picVisible = true
    },
    sendvericode() {
      let postData = {
        mobile: this.form.mobile,
        imageCode: this.form.imageCode,
        deviceIdCode: this.form.deviceIdCode
      }
      if (this.isWait) {
        return
      } else {
        this.wait = true
        Indicator.open()
        this.$axios.post('/accountCenter/account/fast/login/verifyCode', postData).then((res) => {
          Indicator.close()
          if (res.success) {
            //倒计时
            Toast({
              message: '发送成功',
              position: 'bottom',
              duration: 3000
            })
            let time = 60
            this.intervalId = setInterval(() => {
              time--
              if (time === 0) {
                clearInterval(this.intervalId)
                this.buttonText = `获取验证码`
                this.wait = false
              } else {
                this.buttonText = `(${time})重新获取`
              }
            }, 1000)
            this.picVisible = false
            return
          } else {
            toast(res.msg)
            this.buttonText = `获取验证码`
            this.wait = false
          }
        }, () => {
          toast('网络异常')
          this.buttonText = `获取验证码`
          this.wait = false
        })
      }
    },
    //验证码登录
    submit() {
      if (this.loginWait) {
        return
      }
      this.loginWait = true
      let postData = {
        mobile: this.form.mobile,
        password: this.form.verifyCode
      }
      if (this.form.mobile && this.form.verifyCode) {
        Indicator.open()
        this.$axios.post('/accountCenter/account/fast/login', postData).then((data) => {
          Indicator.close()
          if (data.success) {
            this.SIGNIN(data.data.token)
            util.setCookie('mobile', data.data.mobile)
            util.setCookie('jwttoken', data.data.jwtToken)
            this.initData()
            this.loginVisible = false
            this.isLogin = true
          } else {
            toast(data.msg)
          }
          this.loginWait = false
        }, () => {
          this.loginWait = false
          toast('登录失败')
        })
      } else {
        toast('请输入手机号以及验证码')
        this.loginWait = false
      }
    },
    checkToken() {
      let postData = {
        appKey: util.getAppkey() || 'QTSHE_WECHAT'
      }
      this.$axios.post('/accountCenter/account/miniApp/validation/token', postData).then(res => {
        if (res.success) {
          this.isLogin = true
        } else {
          this.isLogin = false
          this.SIGNOUT()
          util.delCookie('mobile')
          util.delCookie('jwttoken')
        }
        this.initData()
      }).catch(e => {
        this.isLogin = false
        this.initData()
      })
    },
    getAppToken() {
      if (util.isIosApp() || util.isAndroidApp()) {
        this.interPackage.getAppInfo().then((data) => {
          util.setCookie('longitude', data.longitude || '')
          util.setCookie('latitude', data.latitude || '')
          util.setCookie('townId', data.townId || '')
          if (data.token) {
            util.setCookie('token', data.token)
          }
          if (data.jwtToken) {
            util.setCookie('jwttoken', data.jwtToken)
          }
          this.checkToken()
        })
      } else {
        this.checkToken()
      }
    },
    initData() {
      let postData = {
        townId: util.getCookie('townId'),
        lon: util.getCookie('longitude'),
        lat: util.getCookie('latitude')
      }
      this.$axios.post('/jobCenter/userActivity/partJob/majia/h5', postData).then(res => {
        if (res.success) {
          if (this.list.length === 0) {
            this.list = res.data.userList && res.data.userList.splice(0, 20) || []
          }
          this.status = res.data.status
          this.partJobId = res.data.partJobId
          this.contactNo = res.data.contactNo
          clearTimeout(this.timer)
          if (!res.data.status) {
            this.countTime()
          }
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
          clearTimeout(this.timer)
          this.countTime()
        }
      }).catch(e => {
        toast('服务器错误，请稍后再试')
        clearTimeout(this.timer)
        this.countTime()
      })
    },
    openDialog() {
      this.type = 2
      this.visible = true
    },
    applyValidate() {
      let postData = {
        partJobIds: this.partJobId,
        townId: util.getCookie('townId') || 87,
        lon: util.getCookie('longitude'),
        lat: util.getCookie('latitude')
      }
      Indicator.open()
      this.$axios.post('/jobApplyCenter/applyUserApp/jobApplyValidate', postData).then(res => {
        if (res.success) {
          this.applyHandle()
        } else {
          Indicator.close()
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(e => {
        Indicator.close()
        toast('服务器错误，请稍后再试')
      })
      this.ttCallBack()
    },
    loginHadnle() {
      if (util.isIosApp() || util.isAndroidApp()) {
        this.interPackage.loginHandler(data => {
          if (data.token) {
            util.setCookie('token', data.token)
            this.isLogin = true
            this.initData()
          }
          if (data.jwtToken) {
            util.setCookie('jwttoken', data.jwtToken)
          }
        })
      } else {
        this.loginVisible = true
      }
      this.ttCallBack()
    },
    copyHandle() {
      if (util.isIosApp() || util.isAndroidApp()) {
        this.interPackage.copyToClipboard(this.contactNo)
        toast('客服QQ复制成功，快打开QQ联系她吧')
      } else {
        const clipboard = new Clipboard('#copy')
        clipboard.on('success', (e) => {
          toast('客服QQ复制成功，快打开QQ联系她吧')
        })
        clipboard.on('error', (error) => {
          console.log(error)
          toast('复制失败，请稍后再试')
        })
      }
    },
    jumpToIndex() {
      if (util.isIosApp() || util.isAndroidApp()) {
        this.interPackage.evokeTabPage(0)
      } else {
        window.location.href = '/app/index'
      }
    },
    applyHandle() {
      let postData = {
        partJobIds: this.partJobId,
        modifyUserInfo: false,
        townId: util.getCookie('townId') || 87,
        lon: util.getCookie('longitude'),
        lat: util.getCookie('latitude')
      }
      this.$axios.post('/jobApplyCenter/applyUserApp/jobApply', postData).then(res => {
        Indicator.close()
        if (res.success) {
          this.contactNo = res.data.partJobList[0].contactNo
          this.visible = true
          this.status = 1
          clearTimeout(this.timer)
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(e => {
        Indicator.close()
        toast('服务器错误，请稍后再试')
      })
    },
    ttCallBack() {
      // 回调头条这边的数据
      if (util.getQueryString('adid')) {
        let postData = {
          params: {
            aid: util.getQueryString('adid'),
            clickid: util.getQueryString('clickid'),
            creativeid: util.getQueryString('creativeid'),
            creativetype: util.getQueryString('creativetype')
          }
        }
        this.$axios.get(window.g_info.qts_api + '/droplet/toutiao/report', postData)
      }
    },
    initAcm() {
      let postData = {
        key: 'product',
        dataId: 'landing',
        group: 'H5'
      }
      this.$axios.post('https://acm.qtshe.com/acm/getConfig', postData).then(res => {
        this.hasLoaded = true
        if (res.success) {
          const data = JSON.parse(res.data)
          this.headerSwitch = data.switch
        }
      }).catch(e => {
        this.hasLoaded = true
      })
    }
  },
  mounted() {
    this.getAppToken()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    const city = ['河北省', '山西省', '辽宁省', '吉林省', '黑龙江', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古', '广西', '西藏', '宁夏', '新疆', '北京市', '天津市', '上海市', '重庆市', '香港', '澳门']
    let randowCity = []
    for (let i = 0; i < 20; i++) {
      let num = parseInt(Math.random() * 34)
      randowCity.push(city[num])
    }
    this.hour = new Date().getHours()
    this.city = randowCity
    this.initTime()
    this.initAcm()
  },
  destroyed() {
    clearTimeout(this.timer)
    clearInterval(this.intervalId)
  }
}
</script>
