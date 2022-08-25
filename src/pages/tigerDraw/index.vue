<style lang='less' scoped>
body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    max-width: 750px;
    -webkit-transform: transition3d(0, 0, 0);
    -webkit-transform: translateZ(0);
    img {
        width: 100%;
        float: left;
    }
    .isornodo {
        width: 40%;
        float: left;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-left: 30%;
        text-align: center;
        margin-top: -72%;
        font-size: 0.16rem;
        color: #FFF;
        position: relative;
        .circlc {
            float: left;
        }
        .circle {
            background: #6508a0;
            width: 0.23rem;
            height: 0.23rem;
            border-radius: 50%;
            text-align: center;
            line-height: 0.23rem;
            float: left;
            margin: 0.03rem;
        }
    }
    .applybtn {
        width: 40%;
        margin-left: 30%;
        margin-top: -22%;
    }
    .num {
        width: 68.5%;
        height: 1.02rem;
        margin-top: -59%;
        float: left;
        margin-left: 16%;
        border-radius: 0.1rem;
        position: relative;
        overflow: hidden;
        .one {
            width: 32%;
<<<<<<< HEAD:src/pages/tigerDraw/index.vue
            height: 3rem;
            background: url("https://ojlf2aayk.qnssl.com/background_01.png") center center repeat-y;
=======
            height: 1rem;
            background: url("https://qiniu-image.qtshe.com/20180116_bg.png") center center repeat-y;
>>>>>>> 8ba637ad7892fe88610b4a864002fadaf9c335c9:src/pages/20180115/index.vue
            background-size: 100% 100%;
            float: left;
            margin-right: 1.2%;
            background-attachment: scroll;
            -webkit-transform: transition3d(0, 0, 0);
            -webkit-transform: translateZ(0);
            position: relative;
            overflow: hidden;
<<<<<<< HEAD:src/pages/tigerDraw/index.vue
=======
            .second {
                width: 100%;
                height: 3rem;
                background: url("https://qiniu-image.qtshe.com/20180116_tg.png") center center repeat-y;
                background-size: 100% 100%;
                position: relative;
                overflow: hidden;
            }
>>>>>>> 8ba637ad7892fe88610b4a864002fadaf9c335c9:src/pages/20180115/index.vue
            &:nth-child(2) {
                width: 33.5%;
            }
            &:nth-child(3) {
                width: 32%;
                margin: 0;
            }
        }
    }
    .playcard {
        width: 25%;
        margin-left: 20%;
        margin-top: -24%;
        position: relative;
    }
    .luckybtn {
        width: 25%;
        margin-left: 55%;
        margin-top: -24%;
        position: relative;
    }
    .giftmodel {
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
            position: absolute;
            z-index: 1000;
            max-width: 750px;
            width: 3rem;
            left: 50%;
            top: 50%;
            margin-left: -1.5rem;
            margin-top: -1.2rem;
            .contip {
                width: 100%;
                float: left;
                margin-top: -60%;
                color: #FFF;
                font-size: 0.25rem;
                text-align: center;
            }
            .contap {
                width: 100%;
                float: left;
                margin-top: -45%;
                color: #FFF;
                font-size: 0.2rem;
                text-align: center;
            }
            .closethis {
                width: 0.4rem;
                margin-left: 86.5%;
                height: 0.4rem;
                position: relative;
                z-index: 999;
            }
            .closemodel {
                width: 0.4rem;
                margin-left: 86.5%;
                margin-top: -66.5%;
                height: 0.4rem;
                position: relative;
                z-index: 999;
            }
        }
    }
}
</style>
<template>
<div>
<<<<<<< HEAD:src/pages/tigerDraw/index.vue
  <img src="https://ojlf2aayk.qnssl.com/tigerdraw_01.png" alt="">
=======
  <img src="https://qiniu-image.qtshe.com/20180116_01.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/20180116_02.jpg" alt="">
>>>>>>> 8ba637ad7892fe88610b4a864002fadaf9c335c9:src/pages/20180115/index.vue
  <div class="isornodo">
    <div class="circlc">今日抽奖机会:</div>
    <div class="circle">{{raffleNum}}</div>
    <div class="circlc">次</div>
  </div>
<<<<<<< HEAD:src/pages/tigerDraw/index.vue
  <ul class="num">
    <li class="one" :style="{backgroundPositionY: numone + 'rem'}"></li>
    <li class="one" :style="{backgroundPositionY: numtwo + 'rem'}"></li>
    <li class="one" :style="{backgroundPositionY: numthe + 'rem'}"></li>
  </ul>
  <img src="https://ojlf2aayk.qnssl.com/playcardbtn.png" v-if="!hasSign" class="playcard" @click="jumpPlayCard">
  <img src="https://ojlf2aayk.qnssl.com/grayplay.png" v-else class="playcard">

  <img src="https://ojlf2aayk.qnssl.com/luckydrawbtn.png" v-if="!hasRaffle && hasSign" class="luckybtn" @click="startDraw">
  <img src="https://ojlf2aayk.qnssl.com/drawgraybtn.png" v-else class="luckybtn">
  <img src="https://ojlf2aayk.qnssl.com/tigerdraw_02.png" alt="">
=======
  <div class="num">
    <ul class="one">
      <li class="second" :style="{backgroundPositionY: numone + 'rem'}"></li>
    </ul>
    <ul class="one">
      <li class="second" :style="{backgroundPositionY: numtwo + 'rem'}"></li>
    </ul>
    <ul class="one">
      <li class="second" :style="{backgroundPositionY: numthe + 'rem'}"></li>
    </ul>
  </div>
  <img src="https://qiniu-image.qtshe.com/20180116_04.png" v-if="!hasSign" class="playcard" @click="jumpPlayCard">
  <img src="https://qiniu-image.qtshe.com/20180116_05.png" v-else class="playcard">

  <img src="https://qiniu-image.qtshe.com/20180116_06.png" v-if="!hasRaffle && hasSign" class="luckybtn" @click="startDraw">
  <img src="https://qiniu-image.qtshe.com/20180116_07.png" v-else class="luckybtn">
  <img src="https://qiniu-image.qtshe.com/20180116_03.jpg" alt="">
>>>>>>> 8ba637ad7892fe88610b4a864002fadaf9c335c9:src/pages/20180115/index.vue
  <!-- 中奖弹层 -->
  <div class="giftmodel" v-if="isGift">
    <div class="modelbg"></div>
    <div class="modelcont">
<<<<<<< HEAD:src/pages/tigerDraw/index.vue
      <img src="https://ojlf2aayk.qnssl.com/%E5%BC%B9%E7%AA%97.png" alt="">
=======
      <img src="https://qiniu-image.qtshe.com/20180116_10.png" alt="">
>>>>>>> 8ba637ad7892fe88610b4a864002fadaf9c335c9:src/pages/20180115/index.vue
      <div class="closethis" @click="closemodel"></div>
    </div>
  </div>
  <!-- 没中奖弹层 -->
  <div class="giftmodel" v-if="noGift">
    <div class="modelbg"></div>
    <div class="modelcont">
      <img src="https://qiniu-image.qtshe.com/tiger_backs.png" alt="">
      <img src="https://qiniu-image.qtshe.com/tiger_closed.png" class="closemodel" @click="closeNomodel">
      <div class="contip">未中奖</div>
      <div class="contap">您今天没中奖哦</div>
    </div>
  </div>
</div>
</template>
<script>
import util from 'util'
import toast from 'toast'
import {
  Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      hasPrize: '', //是否中奖
      hasRaffle: '', // 是否抽奖
      hasSign: '', // 是否签到
      raffleNum: '', // 剩余抽奖次数
      isGift: false,
      noGift: false,
      token: '',
      interPackage: {},
      isShowLoading: true,
      numone: 0,
      numtwo: 0,
      numthe: 0,
      money: '1.5',
      version: '', //版本号
      textone: Math.floor(Math.random() * 11) + 20,
      texttwo: Math.floor(Math.random() * 11) + 20,
      textthe: Math.floor(Math.random() * 11) + 20
    }
  },
  methods: {
    getAppToken() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
            this.initData()
          } else {
            this.interPackage.eventEmitter()
            this.interPackage.loginHandler((token) => {
              this.token = token
              this.getAppToken()
              this.initData()
            })
          }
          this.version = data.version
          if (data.version < '4.8.5') {
            toast('点击签到更新到最新版本')
          }
        })
      } else {
        if (util.getToken()) {
          this.token = util.getToken()
          this.initData()
        } else {
          util.goLogin()
        }
      }
    },
    initData() {
      let postData = {
        token: this.token
      }
      if (this.isShowLoading) {
        Indicator.open()
      }
      this.$axios.post('/integralCenter/signShare/raffle/info', postData).then((res) => {
        Indicator.close()
        if (res.success) {
          this.hasPrize = res.data.hasPrize //是否中奖
          this.hasRaffle = res.data.hasRaffle // 是否抽奖
          this.hasSign = res.data.hasSign // 是否签到
          this.raffleNum = res.data.raffleNum // 剩余抽奖次数
        } else {
          toast(res.msg)
        }
      })
    },
    startDraw() {
      this.isShowLoading = false
      let postData = {
        token: this.token
      }
      this.$axios.post('/integralCenter/signShare/raffle/receive', postData).then((res) => {
        if (res.success) {
          this.hasPrize = res.data.hasPrize //是否中奖
          this.raffleNum = res.data.raffleNum // 剩余抽奖次数
          if (this.hasPrize) { //中奖了
            this.drawed()
          } else { //没中奖
            this.noDraw()
          }
        } else {
          toast(res.msg)
        }
      })
    },
    drawed() {
      this.textone = Math.floor(Math.random() * 10) + 30
      this.texttwo = this.textone + 3
      this.textthe = this.texttwo + 3
      this.timeone(0)
      setTimeout(() => {
        this.timetwo(0)
      }, 500)
      setTimeout(() => {
        this.timethe(0)
      }, 1000)
    },
    noDraw() {
      this.textone = Math.floor(Math.random() * 10) + 20
      this.texttwo = Math.floor(Math.random() * 2) + this.textone
      if (this.texttwo === this.textone) {
        this.textthe = Math.floor(Math.random() * 2) + this.texttwo + 1
      } else {
        this.textthe = Math.floor(Math.random() * 2) + this.textone + 3
      }
      this.timeone(0)
      setTimeout(() => {
        this.timetwo(0)
      }, 500)
      setTimeout(() => {
        this.timefor(0)
      }, 1000)
    },
    timeone(num) {
      var t = setInterval(() => {
        if (num <= this.textone) {
          num += 0.5
          this.numone = num
        } else {
          clearInterval(t)
          this.numone = this.textone
        }
      }, 100)
    },
    timetwo(num) {
      var t = setInterval(() => {
        if (num <= this.texttwo) {
          num += 0.5
          this.numtwo = num
        } else {
          clearInterval(t)
          this.numtwo = this.texttwo
        }
      }, 100)
    },
    timethe(num) {
      var t = setInterval(() => {
        if (num <= this.textthe) {
          num += 0.5
          this.numthe = num
        } else {
          clearInterval(t)
          this.isGift = true
          this.numthe = this.textthe
          this.initData()
        }
      }, 100)
    },
    timefor(num) {
      var t = setInterval(() => {
        if (num <= this.textthe) {
          num += 0.5
          this.numthe = num
        } else {
          clearInterval(t)
          this.noGift = true
          this.numthe = this.textthe
          this.initData()
        }
      }, 100)
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '打卡即可抽大奖!',
        desc: '最高可抢88元！'
      })
    },
    closemodel() {
      this.isGift = false
    },
    closeNomodel() {
      this.noGift = false
    },
    jumpPlayCard() {
      if (this.version < '4.8.5') {
        window.location.href = 'https://d.qtshe.com'
      } else {
        this.interPackage.evokeQtsBeanStorePage()
      }
    }
  },
  mounted() {
    this.sharebanner()
    this.getAppToken()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
