<style lang="less" scoped>
body {
    font-size: 0;
    img {
        width: 100%;
        float: left;
    }
    .applys {
        width: 30%;
        margin-left: 35%;
        margin-top: -18%;
        position: relative;
    }
    .applybtn {
        width: 30%;
        float: left;
        margin: -15% 35% 0;
    }
    .applyList {
        width: 100%;
        float: left;
        position: relative;
        height: 0.4rem;
        margin-top: -58%;
        font-size: 0.13rem;
        color: #FFF;
        overflow: hidden;
        .applyNum {
            width: 35%;
            height: 0.4rem;
            line-height: 0.4rem;
            float: left;
            text-align: center;
        }
        .applyMoney {
            width: 30%;
            float: right;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
        }
    }
    .peopledo {
        width: 100%;
        float: left;
        padding: 0 14%;
        position: relative;
        margin-top: -35%;
        .progress {
            background: #ffdc00;
            height: 0.12rem;
            border-radius: 1rem;
            margin-top: 0.225rem;
        }
        .peoplefo {
            width: 20%;
            margin-top: -8.5%;
            margin-left: -15%;
            img {
                width: 100%;
            }
            .precent {
                font-size: 0.05rem;
                margin-left: 73%;
                margin-top: -32%;
                float: left;
            }
        }
    }
    .showmodel {
        width: 100%;
        height: 100%;
        .modelback {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            background: rgba(0,0,0,0.6);
            z-index: 1100;
            max-width: 750px;
        }
        .modelcont {
            width: 2.5rem;
            position: fixed;
            z-index: 1999;
            left: 50%;
            top: 50%;
            margin-left: -1rem;
            margin-top: -1.5rem;
            max-width: 750px;
            img {
                width: 100%;
                float: left;
            }
            .sendmoney {
                float: left;
                margin-top: -53%;
                font-size: 0.17rem;
                color: #a51a16;
                margin-left: 20%;
                -ms-transform: rotate(-5deg);
                transform: rotate(-2deg);
            }
            .closeModel {
                width: 0.3rem;
                height: 0.3rem;
                float: right;
                margin-top: -80%;
                opacity: 0;
            }
        }
    }
}
</style>
<template>
<div>
  <img src="https://ojlf2aayk.qnssl.com/20171221multilist_01.jpg" alt="">
  <div class="applyList">
    <div class="applyNum">{{applyCount}}</div>
    <div class="applyMoney">{{money}}</div>
  </div>
  <div class="peopledo">
    <div class="progress" :style="{width: progressRate}"></div>
    <div class="peoplefo" :style="{marginLeft: progress}">
      <img src="https://ojlf2aayk.qnssl.com/20171221people.png">
      <span class="precent">{{progressRate}}</span>
    </div>
  </div>

  <img src="https://ojlf2aayk.qnssl.com/20171221applybtn.png" class="applybtn" v-if="isApply" @click="apply">
  <div v-else>
    <img src="https://ojlf2aayk.qnssl.com/20171221notime.png" v-if="!notime" class="applybtn" alt="">
    <img src="https://ojlf2aayk.qnssl.com/20171221openred.png" v-else class="applybtn" @click="luckdraw">
    <img src="https://ojlf2aayk.qnssl.com/getmoneyed.png" v-if="!hasRaffle && progressRate === '100%'" class="applybtn">
  </div>
  <img src="https://ojlf2aayk.qnssl.com/20171221multilist_02.jpg" alt="">
  <div class="showmodel" v-if="isModel">
    <div class="modelback"></div>
    <div class="modelcont">
      <div v-if="isLucky">
        <img src="https://ojlf2aayk.qnssl.com/20171221drawed.png" alt="">
        <div class="sendmoney">?????????{{getMoney}}????????????</div>
      </div>
      <img src="https://ojlf2aayk.qnssl.com/20171221nodraw.png" v-else alt="">
      <div class="closeModel" @click="closeModel"></div>
    </div>
  </div>
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
      isApply: true,
      token: '',
      getMoney: '', //????????????
      money: '0.00', //????????????
      isModel: false,
      isLucky: false,
      notime: false, //?????????????????????
      applyCount: '0',
      hasJoin: '', //????????????
      hasPrize: '', //????????????
      hasRaffle: '', //?????????????????????
      progress: '', //?????????????????????
      progressRate: '0%' //??????????????????
    }
  },
  methods: {
    getAppStatus() {
      let postData = {
        token: this.token,
        type: 8
      }
      this.$axios.post('/accountCenter/integral/new/getApplyStatus', postData).then((res) => {
        if (res.success) {
          if (res.data) {
            this.isApply = false
          } else {
            this.isApply = true
          }
        } else {
          toast(res.msg)
        }
      })
    },
    checkToken() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
            this.getAppStatus()
          }
        })
      } else {
        if (util.getToken()) {
          this.token = util.getToken()
          this.getAppStatus()
        }
      }
    },
    initData() {
      let postData = {
        token: this.token,
        type: 8
      }
      this.$axios.post('/accountCenter/integral/millionApply/info', postData).then((res) => {
        if (res.success) {
          this.applyCount = res.data.applyCount
          this.hasJoin = res.data.hasJoin
          this.hasPrize = res.data.hasPrize
          this.hasRaffle = res.data.hasRaffle
          this.money = res.data.money
          this.progressRate = res.data.progressRate
          if (this.progressRate === '100%') {
            this.notime = true //???????????????????????????
            this.progress = '81%'
          } else if (this.progressRate === '0.00%') {
            this.progress = '-15%'
          } else {
            this.progress = this.progressRate.replace(/%/, '') - 16 + '%'
            this.notime = false //??????????????????????????????
          }
        } else {
          toast(res.msg)
        }
      }, () => {
        toast('?????????????????????????????????')
      })
    },
    apply() {
      if (this.token) {
        Indicator.open()
        let postData = {
          token: this.token,
          type: 8
        }
        this.$axios.post('/accountCenter/integral/saveAccountActivityIntegral', postData).then((res) => {
          Indicator.close()
          if (res.success) {
            toast('????????????')
            this.isApply = false
          } else {
            if (res.code === 4004) {
              if (util.isAndroidApp() || util.isIosApp()) {
                this.interPackage.eventEmitter()
                this.interPackage.loginHandler((token) => {
                  this.token = token
                  this.initData()
                })
              } else {
                util.goLogin()
              }
            } else {
              toast(res.msg)
            }
          }
        })
      } else {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.getAppInfo().then((data) => {
            this.token = data.token
            if (!this.token) {
              this.interPackage.eventEmitter()
              this.interPackage.loginHandler((token) => {
                this.token = token
                this.initData()
              })
            }
          })
        } else {
          util.goLogin()
        }
      }
    },
    //????????????
    luckdraw() {
      let postData = {
        token: this.token,
        type: 8
      }
      this.$axios.post('/accountCenter/integral/millionApply/receive/red', postData).then((res) => {
        if (res.success) {
          this.isModel = true
          this.isLucky = true
          this.getMoney = res.data.money
        } else {
          this.isModel = true
          this.isLucky = false
        }
      })
    },
    closeModel() {
      this.isModel = false
    }
  },
  mounted() {
    this.checkToken()
    this.initData()
    // ??????????????????????????????
    this.interPackage.initShareInfo({
      title: '????????????1000W?????????????????????????????????......',
      desc: '?????????????????????????????????????????????1000?????????????????????????????????'
    })
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
