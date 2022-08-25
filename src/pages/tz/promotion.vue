<template>
  <section class="section">
    <header class="header">
      <img class="img-bg" src="https://dn-qtshe.qbox.me/tz/2018/0730/tz-promotion-hbg.png" alt=""/>
    </header>
    <div class="content">
      <div class="red-close" v-if="!isRedOpen">
        <h2 class="title">最高10<span>元</span>可提现</h2>
        <div class="input-phone">
          <span class="span-text">+86</span>
          <input class="input" type="tel" v-model="mobile" maxlength="11" placeholder="请输入手机号领取" onkeypress="return (event.which>=48&&event.which<=57||(event.which === 8))">
        </div>
        <div class="btn-content" @click="postData">领取红包</div>
      </div>
      <div class="red-open" v-else>
        <div class="text">
          <p>已放入您的账户中</p>
          <p>24小时后将过期，请尽快领取</p>
        </div>
        <div class="count-down">
          <span class="span-num">{{countDownTime.hour}}</span><span class="span-dot">:</span>
          <span class="span-num">{{countDownTime.min}}</span><span class="span-dot">:</span>
          <span class="span-num">{{countDownTime.s}}</span><span class="span-dot">:</span>
          <span class="span-num">{{countDownMilli}}</span>
        </div>
        <!-- <div class="btn-content" @click="goDownLoad('_ANDROID')" v-if="isAndroid">去APP提取现金</div> -->
        <div class="btn-content" @click="goDownLoad">去青团社APP提取现金</div>
      </div>
    </div>
    <footer class="content-footer">
      <img class="img-bg" src="https://dn-qtshe.qbox.me/tz/2018/0730/tz-promotion-fbg.png" alt="">
    </footer>
  </section>
</template>
<script>
  import toast from 'toast'
  import util from 'util'
  import setWechatTitle from 'setWechatTitle'
  import API from './API.js'
  import {Indicator} from 'mint-ui'

  export default {
    data() {
      return {
        token: '',
        isRedOpen: false,
        countDownTime: {
          hour: 23,
          min: 59,
          s: 59},
        countDownMilli: '9',
        secondDown: '',
        milliscondDown: '',
        mobile: ''
      }
    },
    created() {
      this.interPackage = util.getCurrentVersionInteractivePackage()
    },
    mounted() {
      setWechatTitle('请你免费拿红包，一起宅家赚')
      util.onBuriedPoint('P8010001')
      this.initShareInfo()
    },
    methods: {
      async postData() {
        util.onBuriedPoint('C8010003')
        const {headId} = util.searchParam(location.href)
        if (!headId) {
          toast('您的分享链接有误')
          return
        }
        if (!this.mobile) {
          toast('请输入手机号')
          return
        }
        if (!(/^1\d{10}$/.test(this.mobile))) {
          toast('手机号码有误，请重填')
          return
        }
        const sendData = {headId: headId, mobile: this.mobile, token: ''}
        try {
          Indicator.open()
          const res = await this.$axios.post(API.insertMember, sendData)
          Indicator.close()
          if (res.success) {
            this.isRedOpen = true
            util.onBuriedPoint('P8010002')
            this.countDown()
          } else {
            if (res.code === 4001) {
              toast('您的分享链接有误')
              // window.location.href = window.location.origin + '/app/index'
              return
            }
            toast(res.msg || '服务器错误，请稍后重试')
            if (res.code === 14000) {
              setTimeout(() => {
                this.goDownLoad()
              }, 1500)
            }
          }
        } catch (error) {
          console.log(error)
          Indicator.close()
          toast('网络异常')
        }
      },
      goDownLoad() {
        if (util.isAndroid()) {
          if (util.isQQ()) {
            window.location.href = 'http://d.qtshe.com/'
          } else {
            util.downLoadFile('https://dn-qtshe.qbox.me/QtsCustomer_signedApk_4.10.0_0/1/%E9%9D%92%E5%9B%A2%E7%A4%BEAPP.apk')
          }
          util.onBuriedPoint('C8010004')
          return
        }
        util.onBuriedPoint('C8010004')
        if (util.isWeiXin()) {
          window.location.href = 'http://d.qtshe.com/'
          return
        }
        if (util.isIos()) {
          window.location.href = 'https://itunes.apple.com/us/app/%E9%9D%92%E5%9B%A2%E7%A4%BE-%E6%89%BE%E5%85%BC%E8%81%8C%E6%89%BE%E5%AE%9E%E4%B9%A0%E6%89%BE%E5%B7%A5%E4%BD%9C%E4%B8%8A%E9%9D%92%E5%9B%A2%E7%A4%BE/id1367142140?l=zh&ls=1&mt=8'
          return
        }
        window.location.href = 'http://d.qtshe.com/'
      },
      countDown() {
        let seconds = 3600 * 24 // 24 hours
        let milliscond = 10 // 毫秒
        this.secondDown = () => {
          seconds--
          this.countDownTime = util.timestampFor24(seconds)
          if (seconds <= 0) {
            clearInterval(this.secondDown)
          }
        }
        this.milliscondDown = () => {
          milliscond--
          this.countDownMilli = milliscond
          if (milliscond <= 0) {
            milliscond = 10
          }
          if (seconds <= 0) {
            clearInterval(this.milliscondDown)
          }
        }
        setInterval(this.secondDown, 1000)
        setInterval(this.milliscondDown, 100)
      },
      initShareInfo() {
        this.interPackage.initShareInfo({
          title: '请你免费拿礼包，一起宅家赚',
          desc: '最高10元大礼包，24小时内可领',
          imgUrl: 'https://dn-qtshe.qbox.me/tz/2018/0611/tz-share-img.png'
        })
      }
    },
    beforeDestroy() {
      clearInterval(this.secondDown)
      clearInterval(this.milliscondDown)
    }
  }
</script>
<style lang='less' scoped>
@dd: 300rem;
.section{
  width: 100%;
  height: 100%;
}
.header{
  margin-bottom: -7px;
}
.img-bg{
  width: 100%;
}
.content{
  width: 100%;
  height: 1036/@dd;
  margin-bottom: -1px;
  background: url('https://dn-qtshe.qbox.me/tz/2018/0730/tz-promotion-cbg.png') no-repeat center;
  background-size: 100%;
  .red-close{
    width: 964/@dd;
    height: 100%;
    margin: 0 auto;
    background: url('https://qiniu-image.qtshe.com/act/tz/0608/tz-red.png') no-repeat center;
    background-size: 100%;
    .title{
      padding-top: 70/@dd;
      color: #ffffff;
      font-size: 70/@dd;
      text-align: center;
    }
    .input-phone{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 784/@dd;
      height: 150/@dd;
      margin: 370/@dd auto 0;
      border-radius: 10/@dd;
      background: #ffffff;
      .span-text{
        padding: 0 50/@dd;
        color: #ec5858;
        border-right: 1px solid #bfbfbf;
        font-size: 46/@dd;
      }
      .input{
        width: 540/@dd;
        padding-left: 50/@dd;
        border: none;
        font-size: 46/@dd;
      }
    }
  }
  .red-open{
    width: 964/@dd;
    height: 100%;
    margin: 0 auto;
    background: url('https://qiniu-image.qtshe.com/act/tz/0608/tz-red-open.png') no-repeat center;
    background-size: 100%;
    .text{
      padding-top: 455/@dd;
      text-align: center;
      font-size: 46/@dd;
      color: #ffffff;
    }
    .count-down{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30/@dd;
      font-size: 60/@dd;
      .span-num{
        width: 125/@dd;
        height: 125/@dd;
        border-radius: 10/@dd;
        background: #ffffff;
        text-align: center;
        line-height: 125/@dd;
      }
      .span-dot{
        color: #ffffff;
        padding: 25/@dd;
      }
    }
    .btn-content{
      margin: 30/@dd auto 0;
    }
  }
  .btn-content{
    width: 784/@dd;
    height: 150/@dd;
    margin: 70/@dd auto 0;
    color: #ec5565;
    font-size: 70/@dd;
    line-height: 150/@dd;
    text-align: center;
    background: url('https://qiniu-image.qtshe.com/act/tz/0608/tz-btn-bg.png') no-repeat center;
    background-size: 100%;
    } 
}
.content-footer{
  width: 100%;
  font-size: 0;
}
</style>
