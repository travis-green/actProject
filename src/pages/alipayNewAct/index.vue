<style lang='less' scoped>
img {
    width: 100%;
    float: left;
}

.rulesmodel {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    max-width: 750px;
    margin: 0 auto;
    z-index: 999;
    .modelbg {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        background: rgba(0,0,0,0.6);
        top: 0;
        max-width: 750px;
    }
    .modelcont {
        position: fixed;
        z-index: 1000;
        max-width: 750px;
        width: 3.5rem;
        left: 50%;
        top: 50%;
        margin-left: -1.75rem;
        margin-top: -2.2rem;
        z-index: 9999;
        .closemodel {
            width: 0.3rem;
            float: left;
            margin-left: 88%;
            margin-top: -143%;
            height: 0.3rem;
            opacity: 0;
        }
    }
}
.cardModel {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    max-width: 750px;
    margin: 0 auto;
    .modelbg {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        background: rgba(0,0,0,0.6);
        top: 0;
        max-width: 750px;
    }
    .modelcont {
        position: fixed;
        max-width: 750px;
        width: 2.5rem;
        left: 50%;
        top: 50%;
        margin-left: -1.25rem;
        margin-top: -1rem;
        z-index: 9999;
        overflow: hidden;
        .dayscard {
            width: 117%;
            position: relative;
            float: left;
            color: #FFF;
            font-size: 0.25rem;
            margin-top: -45%;
            letter-spacing: 0.1rem;
            text-align: center;
        }
        .dayplay {
            width: 44%;
            float: left;
            margin-left: 28%;
            margin-top: -25%;
        }
        .closemodel {
            width: 0.2rem;
            float: left;
            margin-left: 87%;
            margin-top: -66%;
            height: 0.2rem;
            opacity: 0;
        }
    }
}
.luckyModel {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    max-width: 750px;
    margin: 0 auto;
    z-index: 999;
    .modelbg {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        background: rgba(0,0,0,0.6);
        top: 0;
        max-width: 750px;
    }
    .modelcont {
        position: fixed;
        max-width: 750px;
        width: 3rem;
        left: 50%;
        top: 50%;
        margin-left: -1.5rem;
        margin-top: -1rem;
        z-index: 9999;
        overflow: hidden;
        .modelTips {
            width: 100%;
            text-align: center;
            font-size: 0.2rem;
            float: left;
            margin-top: -40%;
        }
        .modelokbtn {
            width: 44%;
            margin-left: 28%;
            position: relative;
            margin-top: -25%;
        }
        .anotherClose {
            width: 0.25rem;
            float: left;
            margin-left: 88%;
            margin-top: -50%;
            background: #000;
            opacity: 0;
            height: 0.25rem;
        }
        .closemodel {
            width: 0.2rem;
            float: left;
            margin-left: 88%;
            margin-top: -58%;
            height: 0.2rem;
            opacity: 0;
        }
    }
}

.bindModel {
    width: 100%;
    height: 100%;
    position: relative;
    .modelbg {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        background: rgba(0,0,0,0.6);
        top: 0;
        max-width: 750px;
    }
    .bindPhone {
        width: 74%;
        margin-left: 13%;
        position: absolute;
        float: left;
        z-index: 1000;
        margin-top: 60%;
        overflow: hidden;
        input {
            width: 74%;
            height: 0.3rem;
            border: none;
            padding-left: 0.1rem;
            background: #efefef;
            border-radius: 0.04rem;
            margin-top: -45%;
            float: left;
            margin-left: 13%;
            box-shadow: 0 -2px 0 #DDD;
            font-size: 0.13rem;
        }
        .readydraw {
            width: 40%;
            margin-left: 30%;
            position: relative;
            margin-top: -25%;
        }
    }
}
.sleepNum {
    width: 100%;
    color: #FFF;
    font-size: 0.12rem;
    margin-top: -58.5%;
    float: left;
    position: relative;
    text-align: center;
    span {
        font-size: 0.18rem;
        vertical-align: sub;
        padding: 0 0.04rem;
    }
}
.changePhone {
    width: 100%;
    height: 0.3rem;
    float: left;
    margin-top: -10%;
    position: relative;
    text-align: center;
    color: #FFF;
    font-size: 0.12rem;
}
.step1 {
    width: 32%;
    height: 0.3rem;
    float: left;
    margin-left: 60%;
    background: #000;
    opacity: 0;
    margin-top: -14%;
    &.step2 {
        margin-top: -73%;
    }
    &.step3 {
        margin-top: -41%;
    }
}
.supportbtn {
    width: 100%;
    height: 1.7rem;
    position: relative;
    float: left;
    overflow: hidden;
    margin-top: -50%;
    .imagebtn {
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 0.65rem;
        .qtsbeans {
            width: 15%;
            margin-top: 2%;
            margin-left: 10%;
        }
        .startdraw {
            width: 37%;
            margin-left: 6%;
            position: relative;
            margin-top: 2%;
        }
        .qtsrules {
            width: 15%;
            margin-top: 2%;
            margin-left: 6%;
        }
    }
    .messAge {
        width: 100%;
        float: left;
        height: 0.7rem;
        margin-top: 0.05rem;
        .uesrtips {
            width: 100%;
            text-align: center;
            font-size: 0.14rem;
            color: #FFF;
            height: 0.25rem;
            line-height: 0.25rem;
            margin-top: 0.1rem;
        }
        .moneyAnd {
            width: 100%;
            float: left;
            height: 0.3rem;
            line-height: 0.3rem;
            padding: 0 15%;
            color: #FFF;
            .money {
                width: calc(~"50% - 1px");
                float: left;
                font-size: 0.12rem;
                padding-right: 5%;
                text-align: right;
                &.currt {
                    text-align: left;
                    padding-left: 5%;
                }
                span {
                    margin: 0 0.1rem;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
<template>
<div :style="{position: isFixed ? 'fixed' : ''}" style="width:100%;">
  <img src="https://qiniu-image.qtshe.com/20180328_01.jpg" alt="">
  <div class="changePhone">
    <span>{{mobile}}</span>
    <span v-if="userPhone" @click="changeMobile">[???????????????]</span>
  </div>
  <img src="https://qiniu-image.qtshe.com/20180328_05.jpg" alt="">
  <route-frame :run="runStart" :drawn="isDraw" :background="image" :speed="10" :rotateDeg="rotateDeg" :isTranstion="isTranstion"></route-frame>
  <div class="sleepNum">????????????????????????<span>{{remainCount}}</span>???</div>
  <div class="supportbtn">
    <div class="imagebtn">
      <img src="https://qiniu-image.qtshe.com/20180328qtsbeabtn.png" @click="skipQtsBean" class="qtsbeans">
      <img src="https://qiniu-image.qtshe.com/20180328startdraw.png" v-show="!isPress" @click="startDraw" class="startdraw" />
      <img src="https://qiniu-image.qtshe.com/20180328clicked.png" v-show="isPress" style="margin-top:6%;" class="startdraw" />
      <img src="https://qiniu-image.qtshe.com/20180328qtsrulebtn.png" class="qtsrules" @click="showRules">
    </div>
    <div class="messAge">
      <div class="uesrtips">????????????</div>
      <div class="moneyAnd">
        <div class="money">????????????<span>{{money}}</span>???</div>
        <div class="money currt">??????<span>{{score}}</span>??? </div>
      </div>
    </div>
  </div>
  <img src="https://qiniu-image.qtshe.com/20180328_06.png" alt="">
  <div class="step1" @click="showCards"></div>
  <img src="https://qiniu-image.qtshe.com/20180402_01.jpg" alt="">
  <div class="step1 step2" @click="skipJoblist"></div>
  <div class="step1 step3" @click="skipIntrest"></div>
  <div class="bindModel" v-if="!isBind">
    <div class="modelbg"></div>
    <div class="bindPhone">
      <img src="https://qiniu-image.qtshe.com/20180328bindphone.png" alt="">
      <input type="tel" placeholder="??????????????????????????????????????????" v-model="userPhone" maxlength="11">
      <img src="https://qiniu-image.qtshe.com/20180328startbtn.png" class="readydraw" @click="bindPhone">
    </div>
  </div>
  <div class="rulesmodel" v-if="isRules">
    <div class="modelbg"></div>
    <div class="modelcont">
      <img src="https://qiniu-image.qtshe.com/20180328rules.png" alt="">
      <input type="button" class="closemodel" @click="closeRules">
    </div>
  </div>
  <div class="cardModel" v-if="isCard">
    <div class="modelbg"></div>
    <div class="modelcont">
      <img src="https://qiniu-image.qtshe.com/20180108bg.png" alt="">
      <div class="dayscard">{{days}}</div>
      <img src="https://qiniu-image.qtshe.com/20180108btn.png" class="dayplay" v-if="!isPlay" @click="skipdetail">
      <img src="https://qiniu-image.qtshe.com/20180108btn_01.png" class="dayplay" v-else>
      <input type="button" class="closemodel" @click="closeCard">
    </div>
  </div>
  <div class="luckyModel" v-if="isLucky">
    <div class="modelbg"></div>
    <div class="modelcont" v-if="isDraw">
      <img src="https://qiniu-image.qtshe.com/20180328lucked.png" alt="">
      <div class="modelTips" v-if="prizeType === 1">??????{{getScore}}?????????</div>
      <div class="modelTips" v-if="prizeType === 2">??????{{getMoney}}?????????</div>
      <img src="https://qiniu-image.qtshe.com/20180328okbtn.png" class="modelokbtn" @click="closeLuck">
      <input type="button" class="closemodel" @click="closeLuck">
    </div>
    <div class="modelcont" v-else>
      <img src="https://qiniu-image.qtshe.com/20180328notlucky.png" alt="">
      <img src="https://qiniu-image.qtshe.com/20180328okbtn.png" class="modelokbtn" @click="closeLuck">
      <input type="button" class="anotherClose" @click="closeLuck">
    </div>
  </div>
</div>
</template>
<script>
import util from 'util'
import toast from 'toast'
import routeFrame from './tiger'
import {
  Indicator
} from 'mint-ui'
export default {
  components: {
    routeFrame
  },
  data() {
    return {
      runStart: false,
      isDraw: false,
      isFixed: false,
      isTranstion: true,
      image: 'https://qiniu-image.qtshe.com/20180328_tigerback.png',
      token: '',
      rotateDeg: 0,
      interPackage: {},
      mobile: '',
      userPhone: util.getCookie('mobile') ? util.getCookie('mobile') : '', //?????????????????????
      isBind: false,
      isRules: false,
      isPlay: false,
      isLucky: false, //????????????
      isPress: false, //????????????
      isCard: false, // ????????????
      partJobId: 0, // ???????????????????????????id
      hasApply: false, // ???????????????
      days: '00', // ???????????????
      jobId: '',
      remainCount: 0, // ??????????????????
      money: 0, // ??????
      score: 0, // ????????????
      prizeType: 1,
      getMoney: '', //????????????
      getScore: '' //????????????
    }
  },
  methods: {
    bindPhone() {
      if (!this.checkMobile() || !this.userPhone) {
        toast('??????????????????????????????')
        return
      } else {
        toast('????????????')
        this.isBind = true
        this.isFixed = false
        this.mobile = this.userPhone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
        util.setCookie('mobile', this.userPhone)
        this.initData(this.userPhone)
      }
    },
    initData(mobile) {
      let postData = {
        mobile: mobile,
        type: 18
      }
      Indicator.open()
      this.$axios.post('/accountCenter/activity/apply/red/info', postData).then((res) => {
        Indicator.close()
        if (res.success) {
          this.partJobId = res.data.partJobId // ???????????????????????????id
          this.hasApply = res.data.hasApply // ???????????????
          this.days = res.data.days // ???????????????
          this.remainCount = res.data.remainCount // ??????????????????
          this.money = res.data.money // ??????
          this.score = res.data.score // ????????????
          if (this.days < 10) {
            this.days = '0' + this.days
          }
          if (this.remainCount === 0) { //???????????????
            this.canDraw = false
          } else {
            this.canDraw = true
          }
        } else {
          toast(res.msg)
        }
      })
    },
    startDraw() {
      if (this.canDraw) {
        this.canDraw = false
        this.isPress = true
        this.rotateDeg = Math.floor(Math.random() * 50 + 20)
        let postData = {
          mobile: this.userPhone ? this.userPhone : util.getCookie('mobile'),
          type: 18
        }
        this.$axios.post('/accountCenter/activity/apply/red/receive', postData).then((res) => {
          this.isPress = false
          if (res.success) {
            this.isTranstion = true
            this.runStart = true
            this.prizeType = res.data.prizeType // ???????????? 1 ?????? 2??????
            this.isDraw = res.data.hasPrize // ???????????????
            this.remainCount = res.data.remainCount // ??????????????????
            this.getMoney = res.data.money // ????????????
            this.getScore = res.data.score // ??????????????????
            let t = setTimeout(() => {
              this.isLucky = true
              this.initData(this.userPhone)
            }, 10300)
          } else {
            toast(res.msg)
          }
        })
      }
    },
    closeLuck() {
      this.runStart = false
      this.rotateDeg = 0
      this.isTranstion = false
      this.canDraw = true
      this.isLucky = false
    },
    checkMobile() {
      if (!(/^1[0123456789]\d{9}$/.test(this.userPhone))) {
        toast('??????????????????????????????')
        return false
      }
      return true
    },
    showCards() {
      this.isCard = true
      if (this.hasApply) {
        this.isPlay = true
      } else {
        this.isPlay = false
      }
    },
    skipdetail() {
      if (this.partJobId) {
        switch (this.partJobId) {
          case '169415':
            this.jobId = '884117'
            break
          case '169418':
            this.jobId = '884121'
            break
          case '169419':
            this.jobId = '884122'
            break
          case '169421':
            this.jobId = '884124'
            break
          case '169422':
            this.jobId = '884125'
            break
          case '169424':
            this.jobId = '884126'
            break
          case '169426':
            this.jobId = '884127'
            break
          case '169430':
            this.jobId = '884128'
            break
          case '169432':
            this.jobId = '884129'
            break
          case '169433':
            this.jobId = '884130'
            break
          case '169437':
            this.jobId = '884131'
            break
          case '169439':
            this.jobId = '884132'
            break
          case '169441':
            this.jobId = '884133'
            break
          case '169442':
            this.jobId = '884134'
            break
          case '169444':
            this.jobId = '884135'
            break
        }
        window.location.href = `https://render.alipay-eco.com/p/x/aliapp-webonline/detail.html?post_id=${this.jobId}&time=${Date.now()}`
      } else {
        toast('????????????????????????')
      }
    },
    skipJoblist() {
      window.location.href = 'alipays://platformapi/startapp?appId=20000067&url=https%3a%2f%2frender.alipay-eco.com%2fp%2fx%2faliapp-webonline%2findex.html%3fis_alert%3dtrue%26scene%3dXYSHJZ%26channel%3dalipay%26s%3dabs'
    },
    skipQtsBean() {
      window.location.href = 'alipays://platformapi/startapp?appId=20000047&followType=PUBLIC&actionType=gotoPublicDetail&sourceId=FromShare&publicId=2015111300783988&publicBizType=PUBLIC'
    },
    skipIntrest() {
      window.location.href = 'https://render.alipay-eco.com/p/q/j8v2a7dx/index.html'
    },
    showRules() {
      this.isRules = true
    },
    closeRules() {
      this.isRules = false
    },
    closeCard() {
      this.isCard = false
    },
    changeMobile() {
      util.delCookie('mobile')
      window.location.reload()
    }
  },
  mounted() {
    if (util.getCookie('mobile')) {
      this.isBind = true
      this.isFixed = false
      this.mobile = util.getCookie('mobile').replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
      this.initData(util.getCookie('mobile'))
    } else {
      this.isBind = false
      this.isFixed = true
    }
    this.interPackage.initShareInfo({
      title: '??????????????????4?????????????????? ',
      desc: '9000??????????????????????????????????????????????????????'
    })
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
