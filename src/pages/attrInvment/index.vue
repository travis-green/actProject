<style lang="less">
#app {
    max-width: 1440px;
    background: #201d56;
}
img {
    width: 100%;
    float: left;
    margin-top: -1px;
}
.isPcs {
    .sendBtn {
        width: 100%;
        height: 50px;
        float: left;
        position: relative;
        overflow: hidden;
        margin-top: -12%;
        .sendPay {
            background: #e4ad44;
            width: 180px;
            height: 40px;
            color: #FFF;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            cursor: pointer;
            margin-left: 61%;
        }
    }
    .sendTel {
        width: 150px;
        height: 30px;
        float: left;
        position: relative;
        overflow: hidden;
        margin-top: -17%;
        margin-left: 20%;
        .sendPhone {
            width: 150px;
            background: #5bc88d;
            height: 30px;
            color: #FFF;
            text-align: center;
            line-height: 30px;
            font-size: 15px;
            cursor: pointer;
        }
    }
    input {
        background: #FFF;
        width: 30%;
        margin-left: 35%;
        height: 40px;
        float: left;
        font-size: 15px;
        border: none;
        padding-left: 12px;
        border-radius: 0;
        -webkit-appearance: none;
        &::placeholder {
            color: #999;
        }
        &:nth-of-type(1) {
            margin-top: -32%;
        }
        &:nth-of-type(2) {
            margin-top: -24.5%;
        }
        &:nth-of-type(3) {
            margin-top: -17%;
        }
        &:nth-of-type(4) {
            margin-top: -10%;
            color: #FFF;
            background: #e4ad44;
            cursor: pointer;
            padding-left: 0;
            font-size: 16px;
        }
    }
}
.isMobile {
    .sendNpc {
        width: 100%;
        float: left;
        position: relative;
        overflow: hidden;
        margin-top: -15%;
        text-align: center;
        .sendMobile {
            background: #e4ad44;
            width: 35%;
            height: 0.25rem;
            color: #FFF;
            text-align: center;
            line-height: 0.25rem;
            font-size: 0.13rem;
            margin: 0 auto;
            cursor: pointer;
        }
        .sendMobiles {
            color: #FFF;
            line-height: 0.3rem;
            font-size: 0.1rem;
            cursor: pointer;
        }
    }
    .showPcit {
        width: 100%;
        float: left;
        position: relative;
        overflow: hidden;
        margin-top: -92%;
        text-align: center;
        .showMobile {
            color: #FFF;
            font-size: 0.1rem;
        }
    }

    .sendTel {
        width: 100%;
        height: 0.3rem;
        float: left;
        position: relative;
        overflow: hidden;
        margin-top: -98%;
        .sendPick {
            background: #e4ad44;
            width: 30%;
            height: 0.3rem;
            color: #FFF;
            text-align: center;
            line-height: 0.3rem;
            font-size: 0.12rem;
            margin-left: 20%;
            cursor: pointer;
        }
    }
    input {
        background: #FFF;
        width: 74%;
        margin-left: 13%;
        height: 0.35rem;
        float: left;
        font-size: 0.13rem;
        border: none;
        padding-left: 2%;
        appearance: none;
        -webkit-appearance: none;
        border-radius: 0;
        &::placeholder {
            color: #999;
        }
        &:nth-of-type(1) {
            margin-top: -107%;
        }
        &:nth-of-type(2) {
            margin-top: -82%;
        }
        &:nth-of-type(3) {
            margin-top: -57%;
        }
        &:nth-of-type(4) {
            margin-top: -35%;
            color: #FFF;
            background: #e4ad44;
            cursor: pointer;
        }
    }
}
.lastpageimg {
  position: relative;
  width: 100%;
  float: left;
  margin-top: -46%;
  text-align: center;
}
.qrcode {
  width: 200px;
  height: 200px;
  float: none;
}
.downloadApp {
    text-align: center;
    color: #FFF;
    font-size: 0.13rem;
    width: 74%;
    height: 0.34rem;
    line-height: 0.35rem;
    margin-left: 13%;
    background: #e4ad44;
    margin-top: -55%;
    float: left;
    position: relative;
}
</style>
<template>
<div>
  <!-- PC??? -->
  <div class="isPcs" v-if="isPc">
    <img src="https://qiniu-image.qtshe.com/20180108pc_00.png" alt="">
    <a class="sendBtn" href="#sendMes">
      <div class="sendPay">????????????</div>
    </a>
    <img src="https://qiniu-image.qtshe.com/20180108pc_02.png" alt="">
    <img src="https://qiniu-image.qtshe.com/20180108pc_03.png" alt="">
    <img src="https://qiniu-image.qtshe.com/20180108pc_04.png" alt="">
    <img src="https://qiniu-image.qtshe.com/20180108pc_05.png" id="sendMes">
    <a class="sendTel" href="tel:0571-56076688">
      <div class="sendPhone">0571-56076688</div>
    </a>
    <img src="https://qiniu-image.qtshe.com/20180108pc_06.png" alt="">
    <input type="text" placeholder="?????????????????????" v-model="companyName" />
    <input type="text" placeholder="????????????????????????" v-model="userName" />
    <input type="tel" placeholder="??????????????????" maxlength="11" v-model="userMobile" @keyup="openKeyup" />
    <input type="button" value="????????????" @click="coopeRation">
    <img src="https://qiniu-image.qtshe.com/lastpage_01.jpg" alt="">
    <div class="lastpageimg">
        <img src="https://qiniu-image.qtshe.com/qrcode.png" class="qrcode">
    </div>
  </div>
  <!-- ????????? -->
  <div class="isMobile" v-else>
    <img src="https://qiniu-image.qtshe.com/20180103mb_01.png" alt="">
    <a class="sendNpc" href="#sendMes">
      <div class="sendMobile">????????????</div>
      <a class="sendMobiles" href="tel:0571-56076688">?????????0571-56076688</a>
    </a>
    <img src="https://qiniu-image.qtshe.com/20180103mb_02.png" alt="">
    <img src="https://qiniu-image.qtshe.com/20180103mb_03.png" alt="">
    <img src="https://qiniu-image.qtshe.com/20180103mb_04.png" alt="">
    <a class="sendTel" href="tel:0571-56076688">
      <div class="sendPick">0571-56076688</div>
    </a>
    <img src="https://qiniu-image.qtshe.com/20180103mb_05.png" id="sendMes">
    <input type="text" placeholder="?????????????????????" v-model="companyName" />
    <input type="text" placeholder="????????????????????????" v-model="userName" />
    <input type="tel" placeholder="??????????????????" maxlength="11" v-model="userMobile" @keyup="openKeyup" />
    <input type="button" value="????????????" @click="coopeRation">
    <img src="https://qiniu-image.qtshe.com/lastpage_02.jpg" alt="">
    <div class="downloadApp" @click="donwLoad">?????????????????????APP</div>
  </div>
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import {
  Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      interPackage: {},
      companyName: '',
      userName: '',
      userMobile: '',
      source: '',
      isPc: false,
      type: util.getQueryString('type')
    }
  },
  methods: {
    openKeyup() {
      this.userMobile = this.userMobile.replace(/\D/g, '')
    },
    checkMobile() {
      if (!(/^1[0123456789]\d{9}$/.test(this.userMobile))) {
        toast('??????????????????????????????')
        this.status = false
        return false
      }
      return true
    },
    donwLoad() {
      window.location.href = 'http://e.qtshe.com'
    },
    coopeRation() {
      if (!this.userName) {
        toast('????????????????????????')
      } else if (!this.userMobile) {
        toast('?????????????????????')
      } else {
        if (!this.checkMobile()) {
          toast('??????????????????????????????')
          return
        }
        let postData = {
          mobile: this.userMobile, //(??????)
          name: this.userName, //(??????)?????????
          companyName: this.companyName, //(??????type???) 1,3???????????????,????????????
          type: this.type ? this.type : 3, //(??????) 1:???????????? 2:???????????? 3:?????????
          source: this.source ? this.source : 1, //(3??????) 1:?????? 2:pc
          channel: util.getQueryString('channel') //(3??????) ????????????id ?????????
        }
        this.$axios.post('/accountCenter/activity/company/record', postData).then((res) => {
          if (res.success) {
            toast('???????????????')
            this.userName = ''
            this.companyName = ''
            this.userMobile = ''
          } else {
            toast(res.msg)
          }
        })
      }
    }
  },
  mounted() {
    this.interPackage.initShareInfo({
      title: '??????????????????????????????',
      desc: '??????????????????????????????'
    })
    if (!util.isMobile()) { //PC
      this.source = 2
      this.isPc = true
      return !util.isMobile()
    } else {
      this.source = 1 //?????????
      this.isPc = false
      return util.isMobile()
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
