<style lang='less' scoped>
  input{
    border: none;
    -moz-appearance:none;
    -webkit-appearance : none ;/*解决ios上按钮的圆角问题*/
    border-radius: 0;/*解决ios上输入框圆角问题*/
    outline:medium;/*去掉鼠标点击的默认黄色边框*/
    background-color: transparent;
}
.zh-act {
  font-size: 0;
  position: relative;
  img {
    width: 100%;
  }
  .verifyBlock {
    padding-bottom: 10px;
    margin-top:0.2rem;
    width: 2.5rem;
    border-bottom: 1px solid #dcdcdc;
  }
  .verifyCode {
    -webkit-appearance: button;
    float: left;
    line-height: 0.32rem;
    font-size: .13rem;
    width: 1.7rem;
    height: 0.31rem;
  }
  .registCount {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 3.37rem;
    margin: 0 auto;
  }
  .redeemCode {
    width: 2.5rem;
    border: 0;
    height: 0.3rem;
    border-bottom: 1px solid #dcdcdc;
    font-size: 0.13rem;
  }
  .preVerifyText {
    width: 0.76rem;
    margin-left: 0.02rem;
    line-height: 0.31rem;
    float: left;
    border: 1px solid #000;
    border-radius: 0.04rem;
    font-size: 0.13rem;
    color: #000;
    text-align: center;
  }
  .verifyText {
    width: 0.76rem;
    height: 0.31rem;
    line-height: 0.31rem;
    float: left;
    border: 1px solid #dcdcdc;
    border-radius: 0.04rem;
    font-size: 0.13rem;
    color: #939393;
    text-align: center;
  }
}
.drawClick {
  position: absolute;
  top: 4.7rem;
  width: 100%;
  height: .5rem;
}

.drawClickChannel {
  position: absolute;
  top: 4.7rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
  height: .5rem;
  line-height: .5rem;
  border-radius: 80px;
  font-size: 16px;
  text-align: center;
  background-color: #fd8229;
  color: #fff;
}

.toastbg {
  width: 100%;
  .image-toast {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    max-width: 750px;
  }
   .image-contfail {
    position: absolute;
    width: 3rem;
    height: 3.2rem;
    // background: #ffffff;
    background-image: url("https://qiniu-image.qtshe.com/cmb/failed.png");
    background-repeat: no-repeat;
    background-size: 100%;
    top: 50%;
    left: 50%;
    margin-left: -1.5rem;
    margin-top: -0.74rem;
    border-radius: 0.06rem;
    text-align: center;
    z-index: 88;
    .image-title {
      width: calc(~'3rem - 0.32rem');
      height: 0.37rem;
      padding-top: 0.2rem;
      margin-left: 0.16rem;
      margin-right: 0.16rem;
      position: relative;
      overflow: hidden;
      // border-bottom: 1px solid #dddddd;
      .image-value {
        width: 1.5rem;
        height: 0.4rem;
        outline: none;
        border: none;
        float: left;
        text-align: center;
        font-size: 0.15rem;
      }
    }
    .choose-sure {
      width: 1.3rem;
      height: 0.38rem;
      line-height: 0.38rem;
      margin-left: 0.85rem;
      margin-top: 0.2rem;
      position: relative;
      top: 1.3rem;
      // background: #b4edbd;
      color: #ffffff;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
      &.active {
        background: #49c65d;
      }
    }
    .closeButton {
      width: .5rem;
      height: .5rem;
      line-height: 0.38rem;
      margin: 0 auto;
      position: relative;
      top: 1.8rem;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
    }
  }

   .image-contfailnone {
    position: absolute;
    width: 3rem;
    height: 3.2rem;
    // background: #ffffff;
    background-image: url("https://qiniu-image.qtshe.com/cmb/failednone.png");
    background-repeat: no-repeat;
    background-size: 100%;
    top: 50%;
    left: 50%;
    margin-left: -1.5rem;
    margin-top: -0.74rem;
    border-radius: 0.06rem;
    text-align: center;
    z-index: 88;
    .image-title {
      width: calc(~'3rem - 0.32rem');
      height: 0.37rem;
      padding-top: 0.2rem;
      margin-left: 0.16rem;
      margin-right: 0.16rem;
      position: relative;
      overflow: hidden;
      // border-bottom: 1px solid #dddddd;
      .image-value {
        width: 1.5rem;
        height: 0.4rem;
        outline: none;
        border: none;
        float: left;
        text-align: center;
        font-size: 0.15rem;
      }
    }
    .choose-sure {
      width: 1.3rem;
      height: 0.38rem;
      line-height: 0.38rem;
      margin-left: 0.85rem;
      margin-top: 0.2rem;
      position: relative;
      top: 1.3rem;
      // background: #b4edbd;
      color: #ffffff;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
      &.active {
        background: #49c65d;
      }
    }
    .closeButton {
      width: .5rem;
      height: .5rem;
      line-height: 0.38rem;
      margin: 0 auto;
      position: relative;
      top: 1.8rem;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
    }
  }

  .image-gotCount {
    position: absolute;
    width: 3rem;
    height: 3.2rem;
    // background: #ffffff;
    background-image: url("https://qiniu-image.qtshe.com/zh/1563270861/closeBtn.png");
    background-repeat: no-repeat;
    background-size: 100%;
    top: 50%;
    left: 50%;
    margin-left: -1.5rem;
    margin-top: -0.74rem;
    border-radius: 0.06rem;
    text-align: center;
    z-index: 88;
    .image-title {
      width: calc(~'3rem - 0.32rem');
      height: 0.37rem;
      padding-top: 0.2rem;
      margin-left: 0.16rem;
      margin-right: 0.16rem;
      position: relative;
      overflow: hidden;
      // border-bottom: 1px solid #dddddd;
      .image-value {
        width: 1.5rem;
        height: 0.4rem;
        outline: none;
        border: none;
        float: left;
        text-align: center;
        font-size: 0.15rem;
      }
    }
    .choose-sure {
      width: 1.3rem;
      height: 0.38rem;
      line-height: 0.38rem;
      margin-left: 0.85rem;
      margin-top: 0.2rem;
      position: relative;
      top: 1.3rem;
      // background: #b4edbd;
      color: #ffffff;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
      &.active {
        background: #49c65d;
      }
    }
    .closeButton {
      width: .5rem;
      height: .5rem;
      line-height: 0.38rem;
      margin: 0 auto;
      position: relative;
      top: 1.8rem;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
    }
  }

  .image-gotCountnone {
    position: absolute;
    width: 3rem;
    height: 3.2rem;
    // background: #ffffff;
    background-image: url("https://qiniu-image.qtshe.com/cmb/closeBtnnone.png");
    background-repeat: no-repeat;
    background-size: 100%;
    top: 50%;
    left: 50%;
    margin-left: -1.5rem;
    margin-top: -0.74rem;
    border-radius: 0.06rem;
    text-align: center;
    z-index: 88;
    .image-title {
      width: calc(~'3rem - 0.32rem');
      height: 0.37rem;
      padding-top: 0.2rem;
      margin-left: 0.16rem;
      margin-right: 0.16rem;
      position: relative;
      overflow: hidden;
      // border-bottom: 1px solid #dddddd;
      .image-value {
        width: 1.5rem;
        height: 0.4rem;
        outline: none;
        border: none;
        float: left;
        text-align: center;
        font-size: 0.15rem;
      }
    }
    .choose-sure {
      width: 1.3rem;
      height: 0.38rem;
      line-height: 0.38rem;
      margin-left: 0.85rem;
      margin-top: 0.2rem;
      position: relative;
      top: 1.3rem;
      // background: #b4edbd;
      color: #ffffff;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
      &.active {
        background: #49c65d;
      }
    }
    .closeButton {
      width: .5rem;
      height: .5rem;
      line-height: 0.38rem;
      margin: 0 auto;
      position: relative;
      top: 1.8rem;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
    }
  }
  .image-cont {
    position: absolute;
    width: 3rem;
    height: 3.2rem;
    // background: #ffffff;
    background-image: url("https://qiniu-image.qtshe.com/cmb/success.png");
    background-repeat: no-repeat;
    background-size: 100%;
    top: 50%;
    left: 50%;
    margin-left: -1.5rem;
    margin-top: -0.74rem;
    border-radius: 0.06rem;
    text-align: center;
    z-index: 88;
    .image-title {
      width: calc(~'3rem - 0.32rem');
      height: 0.37rem;
      padding-top: 0.2rem;
      margin-left: 0.16rem;
      margin-right: 0.16rem;
      position: relative;
      overflow: hidden;
      // border-bottom: 1px solid #dddddd;
      .image-value {
        width: 1.5rem;
        height: 0.4rem;
        outline: none;
        border: none;
        float: left;
        text-align: center;
        font-size: 0.15rem;
      }
    }
    .choose-sure {
      width: 1.3rem;
      height: 0.38rem;
      line-height: 0.38rem;
      margin-left: 0.85rem;
      margin-top: 0.2rem;
      position: relative;
      top: 1.3rem;
      // background: #b4edbd;
      color: #ffffff;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
      &.active {
        background: #49c65d;
      }
    }
    .closeButton {
      width: .5rem;
      height: .5rem;
      line-height: 0.38rem;
      margin: 0 auto;
      position: relative;
      top: 1.8rem;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
    }
  }

   .image-contnone {
    position: absolute;
    width: 3rem;
    height: 3.2rem;
    // background: #ffffff;
    background-image: url("https://qiniu-image.qtshe.com/cmb/successnone.png");
    background-repeat: no-repeat;
    background-size: 100%;
    top: 50%;
    left: 50%;
    margin-left: -1.5rem;
    margin-top: -0.74rem;
    border-radius: 0.06rem;
    text-align: center;
    z-index: 88;
    .image-title {
      width: calc(~'3rem - 0.32rem');
      height: 0.37rem;
      padding-top: 0.2rem;
      margin-left: 0.16rem;
      margin-right: 0.16rem;
      position: relative;
      overflow: hidden;
      // border-bottom: 1px solid #dddddd;
      .image-value {
        width: 1.5rem;
        height: 0.4rem;
        outline: none;
        border: none;
        float: left;
        text-align: center;
        font-size: 0.15rem;
      }
    }
    .choose-sure {
      width: 1.3rem;
      height: 0.38rem;
      line-height: 0.38rem;
      margin-left: 0.85rem;
      margin-top: 0.2rem;
      position: relative;
      top: 1.3rem;
      // background: #b4edbd;
      color: #ffffff;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
      &.active {
        background: #49c65d;
      }
    }
    .closeButton {
      width: .5rem;
      height: .5rem;
      line-height: 0.38rem;
      margin: 0 auto;
      position: relative;
      top: 1.8rem;
      border: none;
      font-size: 0.14rem;
      border-radius: 0.2rem;
    }
  }
}
</style>
<style>
.mint-msgbox-btn {
  font-size: 0.18rem !important;
}
</style>
<template>
  <div class='zh-act'>
     <div v-if="!hidenImg" class='drawClick' @click="immediately"></div>
     <div v-else class='drawClickChannel' @click="immediately">立即领取</div>
    <img v-if="!hidenImg" src='https://qiniu-image.qtshe.com/zh/1563270861/bg.png' alt />
    <div class='registCount'>
      <input type='tel' class='redeemCode' placeholder='请填写手机号' maxlength='11' v-model='mobile' />
      <div class='verifyBlock'>
        <!-- <input type='number' class='verifyCode' v-if="canInput"  placeholder='请输入验证码' maxlength='6' v-model='verifyCode' /> -->
        <input type='tel' class='verifyCode' placeholder='请输入验证码' maxlength='6' v-model='verifyCode' />
        <div :class="preSend?'preVerifyText copyBtn':'verifyText copyBtn'" @click='showPicCode' data-clipboard-text="＆https://t.cmbchina.com/qmMn6r?chl=h5&merchId=001001＆">{{verifyText}}</div>
      </div>
      <!-- <img src='https://qiniu-image.qtshe.com/20180727btn.png' class='submitForm' @click='payCoupons'> -->
    </div>
    <div class='toastbg' v-show='showResult'>
      <div class='image-toast' @click="closeBtn"></div>
      <div v-if="hidenImg" :class="oldUser?'image-contfailnone':(imageSuccess?'image-contnone':'image-gotCountnone')">
        <div class='image-title'>
          <!-- <img src='https://qiniu-image.qtshe.com/zh/1563270861/failed.png' style='float: right;margin-top: 0.08rem; width: 0.8rem;' /> -->
        </div>
        <div class='choose-sure' @click="goCmb"></div>
        <div class='closeButton' @click="closeBtn"></div>
      </div>
      <div v-else :class="oldUser?'image-contfail':(imageSuccess?'image-cont':'image-gotCount')">
        <div class='image-title'>
          <!-- <img src='https://qiniu-image.qtshe.com/zh/1563270861/failed.png' style='float: right;margin-top: 0.08rem; width: 0.8rem;' /> -->
        </div>
        <div class='choose-sure' @click="goCmb"></div>
        <div class='closeButton' @click="closeBtn"></div>
      </div>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import Clipboard from 'clipboard'
import { Indicator, Toast, MessageBox } from 'mint-ui'

export default {
  data() {
    return {
      verifyText: '获取验证码',
      showResult: false,
      oldUser: false, //是否为老用户 false 新用户
      imageSuccess: false, //是否有权限领取青豆false 为无权限
      canInput: false,
      drawStatus: false, //立即领取按钮状态 false 为没点过
      mobile: '',
      verifySMCode: true,
      preSend: true, //获取验证码
      verifyCode: '',
      hidenImg: false, //false 为正常 true 为渠道链接
      alreadyGetSM: false
    }
  },
  beforeMount() {
    if (this.$route.query.channel <= 500) {
      this.hidenImg = true
    } else {
      this.hidenImg = false
    }
  },
  mounted() {},
  methods: {
    showAlert() {
      if (this.hidenImg) {
        MessageBox('恭喜您', '请前往下载！')
      } else {
        MessageBox('恭喜您', '小手一抖，青豆到手，即刻前往应用市场，使用该手机号下载注册招商银行App并绑定银行卡，即可获得800青豆奖励！')
      }
    },
    copy() {
      // 复制
      try {
        let clipboard = new Clipboard('.copyBtn')
        clipboard.on('success', e => {
            // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', e => {
            // 粘贴失败
        })
      } catch (error) {
        console.log(error)
      }
    },
    immediately() {
      var self = this
      if (!/^1[3456789]\d{9}$/.test(this.mobile)) {
        toast('请输入正确的手机号码')
        return
      }
      if (this.verifyCode === '') {
        toast('请输入短信验证码')
        return
      }
      if (this.drawStatus) {
        toast('请勿重复领取')
        return
      }
      this.$axios
        .post('/activityCenter/cmb/check/register', {
          mobile: this.mobile,
          channel: this.$route.query.channel || 0, //渠道 0-青团社
          code: this.verifyCode
        }).then(
          res => {
            if (res.success) {
              if (res.data.newUser === '0' && res.data.hasRights === '1') {
                //新用户有领取权限
                this.showResult = true
                this.drawStatus = true
                this.oldUser = true
                // this.imageSuccess = true
              } else if (res.data.newUser === '1' && res.data.hasRights === '1') {
                //新用户且有领取权限
                if (this.iswechat() || this.isAliPay()) {
                  this.copy()
                  this.showAlert()
                } else {
                  this.showResult = true
                  this.drawStatus = true
                  this.oldUser = false
                  this.imageSuccess = true
                }
              } else if (res.data.newUser === '1' && res.data.hasRights === '0') {
                // 新用户且领取过了
                this.showResult = true
                this.drawStatus = true
                this.oldUser = false
                this.imageSuccess = false
              } else {
                //老用户注册无权限
                this.showResult = true
                this.drawStatus = true
                this.oldUser = true
              }
            } else {
              toast(res.msg || '服务器错误，请稍后重试')
            }
          },
          () => {
            toast('服务器错误，请稍后重试')
            this.verifyText = `获取验证码`
            this.preSend = true
          }
        ).catch(
          error => {
            this.preSend = true
            console.log(error)
          },
          () => {
            toast('服务器错误，请稍后重试')
            this.verifyText = `获取验证码`
            this.preSend = true
          }
        )
    },
    showPicCode() {
      this.copy()
      let mobile = this.mobile
      if (!this.mobile === '') {
        this.canInput = true
      }
      this.sendVerifyode()
    },
    sendVerifyode() {
      if (!this.verifySMCode) {
        return
      }
      if (!/^1[3456789]\d{9}$/.test(this.mobile)) {
        toast('请输入正确的手机号码')
        return
      }
      this.preSend = false
      // if (this.verifyCode === '') {
      //   toast('请输入短信验证码')
      //   return
      // }
      this.verifyText = '获取中...'
      // Indicator.open()
      this.$axios
        .post('/activityCenter/cmb/sms/verify/code', {
          mobile: this.mobile,
          channel: this.$route.query.channel || 0 //渠道 0-青团社
        }).then(
          res => {
            // Indicator.close()
            if (res.success) {
              this.canInput = true
              //倒计时
              Toast({
                message: res.msg || '短信发送成功，请注意查收',
                position: 'bottom',
                duration: 2000
              })
              let time = 60
              let s = setInterval(() => {
                time--
                if (time === 0) {
                  clearInterval(s)
                  this.verifyText = `获取验证码`
                  this.verifySMCode = true
                } else {
                  this.verifyText = `${time}s后重发`
                  this.verifySMCode = false
                }
              }, 1000)
              return
            } else {
              toast(res.msg || '获取失败，请稍后重试')
              this.verifyText = `获取验证码`
              this.preSend = true
            }
          },
          () => {
            toast('服务器错误，请稍后重试')
            this.verifyText = `获取验证码`
            this.preSend = true
          }
        ).catch(
          error => {
            console.log(error)
          },
          () => {
            toast('服务器错误，请稍后重试')
            this.verifyText = `获取验证码`
          }
        )
    },
    closeBtn() {
      //关闭按钮
      this.showResult = false
    },
    goCmb() {
      //跳转招商银行
      if (!this.oldUser) {
        this.copy()
        window.location.href = 'https://t.cmbchina.com/qmMn6r?chl=h5&merchId=001001'
      } else {
        if (this.iswechat()) {
          //是微信浏览器
          wx.closeWindow()
        } else {
          window.close()
        }
        this.showResult = false
      }
    },
    isAliPay() {
      //判断ua 匹配 micromessenger即为微信浏览器
      var ua = navigator.userAgent.toLowerCase()
      if (ua.indexOf('Alipayclient') > 0) {
        return true
      } else {
        return false
      }
    },
    iswechat() {
      //判断ua 匹配 micromessenger即为微信浏览器
      var ua = navigator.userAgent.toLowerCase()
      if (/micromessenger/.test(ua)) {
        return true
      } else {
        return false
      }
    },
    apply() {
      if (!/^1\d{10}$/.test(this.mobile)) {
        toast('请输入正确的手机号码')
        return
      }
      if (this.verifyCode === '') {
        toast('请输入短信验证码')
        return
      }
      this.verifyText = '获取中...'
      Indicator.open()
      this.$axios
        .post('/activityCenter/ticket/send/verifyCode', {
          mobile: this.mobile
        }).then(
          res => {
            Indicator.close()
            if (res.success) {
            }
          },
          () => {
            toast('服务器错误，请稍后重试')
          }
        )
    }
  }
}
</script>
