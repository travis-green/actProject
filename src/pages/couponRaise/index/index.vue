<style lang='less' scoped>
img {
    width: 100%;
    float: left;
}
.registCount {
    width: 100%;
    height: 4.5rem;
    margin-top: -4.5rem;
    float: left;
    padding-top: 0.3rem;
}
.redeemCode {
    width: 2.8rem;
    height: 0.42rem;
    float: left;
    margin-left: 0.475rem;
    border: none;
    border-radius: 1rem;
    font-size: 0.16rem;
    padding-left: 0.3rem;
    margin-bottom: 0.16rem;
}
.verifyBlock {
    width: 100%;
    float: left;
    position: relative;
    overflow: hidden;
}
.verifyText {
    width: 1.6rem;
    height: 0.42rem;
    float: left;
    margin-left: 0.475rem;
    border: none;
    border-radius: 1rem;
    font-size: 0.16rem;
    padding-left: 0.3rem;
}
.verifyCode {
    width: 1.1rem;
    height: 0.42rem;
    float: left;
    margin-left: 0.1rem;
    border: none;
    border-radius: 1rem;
    font-size: 0.16rem;
    background: #EEE;
    text-align: center;
    line-height: 0.42rem;
    color: #f75648;
    &.active {
        background: #ffe32b;
    }
}
.submitForm {
    width: 75%;
    height: 0.42rem;
    float: left;
    margin-left: 12.5%;
    margin-top: 0.32rem;
}
.toastbg {
    width: 100%;
    .image-toast {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 1;
        background: rgba(0,0,0,0.5);
        max-width: 750px;
    }
    .image-cont {
        position: absolute;
        width: 3rem;
        height: 1.48rem;
        background: #FFFFFF;
        top: 50%;
        left: 50%;
        margin-left: -1.5rem;
        margin-top: -.74rem;
        border-radius: 0.06rem;
        text-align: center;
        z-index: 88;
        .image-title {
            width: calc(~"3rem - 0.32rem");
            height: 0.65rem;
            padding-top: 0.2rem;
            margin-left: 0.16rem;
            margin-right: 0.16rem;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid #DDDDDD;
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
            background: #B4EDBD;
            color: #FFFFFF;
            border: none;
            font-size: 0.14rem;
            border-radius: 0.2rem;
            &.active {
                background: #49C65D;
            }
        }
    }
}
</style>
<template>
<div>
  <img src="https://qiniu-image.qtshe.com/20180727_01.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/20180727_02.jpg" alt="">
  <div class="registCount">
    <input type="text" class="redeemCode" placeholder="??????????????????" v-model="ticketKey">
    <input type="text" class="redeemCode" placeholder="??????????????????" maxlength="11" v-model="mobile" @input="getMobile">
    <div class="verifyBlock">
      <input type="tel" class="verifyText" placeholder="??????????????????" maxlength="6" v-model="verifyCode">
      <div class="verifyCode" :class="{active: isColor}" @click="showPicCode">{{verifyText}}</div>
    </div>
    <img src="https://qiniu-image.qtshe.com/20180727btn.png" class="submitForm" @click="payCoupons">
  </div>

  <div class="toastbg" v-show="imageVerifyCode">
    <div class="image-toast" @click="hidePicCode"></div>
    <div class="image-cont">
      <div class="image-title">
        <input type="tel" v-model='imageCode' placeholder="????????????????????????" maxlength="4" class="image-value" @input="getImageCode" />
        <img :src='codeUrl' alt="???????????????" @click='changeCode' style="float: right;margin-top: 0.08rem; width: 0.8rem;">
      </div>
      <div class="choose-sure" @click="sendVerifyode" :class="{active: color}">??????</div>
    </div>
  </div>
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import {
  Indicator,
  Toast
} from 'mint-ui'
export default {
  data() {
    return {
      imageVerifyCode: false,
      verifyText: '???????????????',
      verifySMCode: false,
      mobile: '',
      imageCode: '',
      verifyCode: '',
      isColor: false,
      ticketKey: '',
      codeUrl: '',
      color: false,
      isVerify: false,
      deviceIdCode: Math.random()
    }
  },
  methods: {
    payCoupons() {
      if (!this.ticketKey) {
        toast('??????????????????')
      } else if (!this.mobile) {
        toast('??????????????????')
      } else if (!this.verifyCode) {
        toast('??????????????????')
      } else {
        let postData = {
          activityId: 111,
          ticketKey: this.ticketKey,
          mobile: this.mobile,
          verifyCode: this.verifyCode
        }
        this.$axios.post('/activityCenter/ticket/exchange', postData).then((res) => {
          if (res.success) {
            this.$router.push({
              path: `../couponSecond?ticketStatus=${res.data[0].increase}`
            })
          } else {
            toast(res.msg)
          }
        })
      }
    },
    getMobile() {
      if (this.mobile.length === 11) {
        this.isVerify = true
        this.isColor = true
        util.setCookie('mobile', this.mobile)
      } else {
        this.isVerify = false
        this.isColor = false
      }
    },
    getImageCode() {
      if (this.imageCode.length === 4) {
        this.color = true
        this.verifySMCode = true
      } else {
        this.color = false
        this.verifySMCode = false
      }
    },
    //?????????????????????
    showPicCode() {
      if (!this.ticketKey) {
        toast('??????????????????')
      } else {
        if (this.isVerify) {
          this.imageVerifyCode = true
          this.changeCode()
        }
      }
    },
    hidePicCode() {
      this.imageVerifyCode = false
    },
    changeCode() {
      this.imageCode = ''
      this.codeUrl = `${window.g_info.qts_api}/accountCenter/account/image/code?deviceId=${Math.random()}&appKey=QTSHE_WECHAT&deviceIdCode=${this.deviceIdCode}`
    },
    sendVerifyode() {
      let postData = {
        mobile: this.mobile,
        imageCode: this.imageCode,
        ticketKey: this.ticketKey,
        deviceIdCode: this.deviceIdCode
      }
      if (!this.verifySMCode) {
        return
      } else {
        if (!this.checkMobile()) {
          return
        }
        this.verifyText = '?????????...'
        Indicator.open()
        this.$axios.post('/activityCenter/ticket/send/verifyCode', postData).then((res) => {
          Indicator.close()
          if (res.success) {
            //?????????
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 3000
            })
            this.imageVerifyCode = false
            let time = 60
            let s = setInterval(() => {
              time--
              if (time === 0) {
                clearInterval(s)
                this.verifyText = `???????????????`
                this.verifySMCode = true
                this.isColor = true
                this.isVerify = true
              } else {
                this.verifyText = `${time}s?????????`
                this.verifySMCode = false
                this.isVerify = false
                this.isColor = false
              }
            }, 1000)
            return
          } else {
            toast(res.msg)
            this.verifyText = `???????????????`
            this.verifySMCode = true
          }
        }, () => {
          toast('????????????')
          this.verifyText = `???????????????`
          this.verifySMCode = true
        })
      }
    },
    checkMobile() {
      if (!(/^1[0123456789]\d{9}$/.test(this.mobile))) {
        toast('??????????????????????????????')
        return false
      }
      return true
    }
  }
}
</script>
