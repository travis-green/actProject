<style lang="less" scoped>
body {
    width: 100%;
    .container {
        position: relative;
        .bg {
            width: 100%;
            float: left;
        }
        .info {
            float: left;
            font-size: 0.15rem;
            color: #0275b8;
            margin-top: -35%;
            width: 100%;
            text-align: center;
            span {
                color: #ff4462;
            }
        }
        .wheelImg {
            float: left;
            transform: rotate(0);
            transform-origin: center center;
            width: 3.25rem;
            margin-left: 0.25rem;
            margin-top: 0.25rem;
        }
    }
    .resultModel {
        width: 100%;
        height: 100%;
        .resultbg {
            width: 100%;
            height: 100%;
            position: fixed;
            max-width: 750px;
            z-index: 9;
            background: rgba(0,0,0,0.5);
        }
        .lucky {
            width: 3.11rem;
            height: 3.6rem;
            position: fixed;
            left: 50%;
            top: 50%;
            margin-left: -1.555rem;
            margin-top: -1.8rem;
            z-index: 999;
            padding-top: 0.24rem;
            background: #ffffff;
            border-radius: 0.04rem;
            .lucky-title {
              text-align: center;
              color: #3C3C3C;
              font-size: 0.16rem;
              line-height: 1;
              position: relative;
            }
            .lucky-title::after{
              position: absolute;
              content: '';
              background: #00CC88;
              width: 0.18rem;
              height: 0.04rem;
              border-radius: 0.03rem;
              left: 50%;
              margin-left: -0.09rem;
              bottom: -0.2rem;
            }
            .luckyImg {
                width: 2.79rem;
                height: 1.22rem;
                display: block;
                margin: 0.36rem auto 0;
            }
            .lucky-text {
              margin: 0.32rem auto 0;
              text-align: center;
              line-height: 1;
              color: #6C6C6C;
              font-size: 0.14rem;
            }
            .yellow {
              color: #FF8000;
              font-size: 0.18rem;
            }
            .lucky-tips {
              color: #9C9C9C;
              font-size: 0.12rem;
              margin: 0.24rem auto 0;
              line-height: 1;
              text-align: center;
            }
            .btn {
                background: #00CC88;
                width: 2.79rem;
                height: 0.44rem;
                border-radius: 0.22rem;
                line-height: 0.44rem;
                margin: 0.16rem auto 0;
                text-align: center;
                color: #FFFFFF;
                font-size: 0.16rem;
            }
            .lucky-close {
              display: block;
              width: 0.36rem;
              height: 0.36rem;
              position: absolute;
              left: 50%;
              margin-left: -0.18rem;
              bottom: -0.6rem;
            }
        }
    }
}
.turntable-rotate {
    position: absolute;
    transition: all 1s ease-out;
    height: 1.2rem;
    float: left;
    margin-left: 50%;
    top: 18%;
    left: 0;
    .awards-1 {
        transform: translate(-50%, 0) rotate(22.5deg);
    }
    .awards-2 {
        transform: translate(-50%, 0) rotate(68.5deg);
    }
    .awards-3 {
        transform: translate(-50%, 0) rotate(112.5deg);
    }
    .awards-4 {
        transform: translate(-50%, 0) rotate(157.5deg);
    }
    .awards-5 {
        transform: translate(-50%, 0) rotate(202.5deg);
    }
    .awards-6 {
        transform: translate(-50%, 0) rotate(247.5deg);
    }
    .awards-7 {
        transform: translate(-50%, 0) rotate(292.5deg);
    }
    .awards-8 {
        transform: translate(-50%, 0) rotate(338.5deg);
    }
}
.turntable-rotate [class^="awards-"] {
    position: absolute;
    width: 0.7rem;
    height: 100%;
    color: #444;
    text-align: center;
    transform-origin: center bottom;
    font-size: 0.12rem;
    .prizeName {
        width: 100%;
        color: red;
        margin-top: 0.1rem;
    }
    .prizeImage {
        width: 100%;
        img {
            width: 0.15rem;
            margin-top: 0.15rem;
            &.big {
                width: 0.22rem;
                transform: rotate(-120deg);
            }
        }
    }
}
.luckyWheel {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: -115%;
    float: left;
}
.wheelBack {
    width: 3.75rem;
    position: relative;
    overflow: hidden;
    height: 3.75rem;
    margin: 0 auto;
}
.guide {
    position: absolute;
    width: 0.65rem;
    height: 0.75rem;
    left: 50%;
    top: 50%;
    margin-top: -0.375rem;
    margin-left: -0.325rem;
}
</style>

<template>
<div>
  <div class="container">
    <img class="bg" src="https://dn-qtshe.qbox.me/act/wheelBg01.png" alt="">
    <div class="info">抽奖次数：<span>{{remainDayCount}}</span></div>
    <img class="bg" src="https://dn-qtshe.qbox.me/act/wheelBg02.png" alt="">
    <div class="luckyWheel">
      <div class="wheelBack" :style="{transform:rotateDeg, transition: transitionStyle}">
        <img class="wheelImg" src="https://qiniu-image.qtshe.com/luckywheel.png" alt="">
        <ul class="turntable-rotate">
          <li v-for="(item, index) in prizes" :key="index" :class="'awards-'+ (index + 1)">
            <div class="prizeName">{{item.prizeName}}</div>
            <div class="prizeImage"><img :src="item.prizeImage" :class="item.isActive ? 'big' : ''"></div>
          </li>
        </ul>
      </div>
      <img class="guide" @click="handleClick" src="https://dn-qtshe.qbox.me/act/guide.png" alt="">
    </div>
  </div>
  <div class="resultModel" v-if="isModel">
    <div class="resultbg"></div>
    <div class="lucky">
      <div class="lucky-title">恭喜你</div>
      <img class="luckyImg" src="https://qiniu-image.qtshe.com/luckwheelBg.png" alt="">
      <div class="lucky-text" v-if="prizeType === 1">现金奖励：<span class="yellow">{{money}}元</span></div>
      <div class="lucky-text" v-if="prizeType === 2">青豆奖励：<span class="yellow">{{score}}颗</span></div>
      <div class="lucky-tips" v-if="prizeType === 1">（自动存入我的-余额）</div>
      <div class="lucky-tips" v-if="prizeType === 2">注：青豆可在青豆商城免费兑换商品</div>
      <div class="btn" @click="closeModel">知道了</div>
      <img src="https://qiniu-image.qtshe.com/closeShape.png" class="lucky-close" @click="closeModel"/>
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
      token: '',
      isClick: false, //是否可点
      rotateDeg: 0,
      transitionStyle: 'transform 3s ease-out',
      prizeTag: 1, // 1:现金 2:青豆
      extraDeg: [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5], //旋转角度
      degIndex: 0, //奖品的下标
      index: '', //做奖励ID映射
      isModel: false, //中奖弹窗
      interPackage: {},
      remainDayCount: 0, //剩余抽奖次数
      prizes: [], //奖品数组
      prizeType: '', //中奖类型 1:现金 2:青豆
      money: '0.00', //中奖金额
      score: 0, //中奖青豆
      actId: util.getQueryString('actId')
    }
  },
  methods: {
    checkToken() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
            this.initData()
          } else {
            this.initData()
          }
        })
      } else {
        if (util.getCookie('token')) {
          this.token = util.getCookie('token')
          this.initData()
        } else {
          this.initData()
        }
      }
    },
    initData() {
      this.rotateDeg = 'rotate(0deg)'
      this.transitionStyle = 'transform 0s ease-out'
      this.isClick = false
      let postData = {
        token: this.token,
        actId: this.actId
      }
      this.$axios.post('/activityCenter/userApp/raffle/info', postData).then((res) => {
        if (res.success) {
          this.remainDayCount = res.data.remainDayCount
          if (this.remainDayCount === 0) {
            this.isClick = true
          }
          for (var i = 0; i < res.data.prizes.length; i++) {
            if (res.data.prizes[i].prizeName.length > 5) {
              res.data.prizes[i].prizeName = res.data.prizes[i].prizeName.substring(0, 6)
            }
            if (res.data.prizes[i].prizeType === 2) {
              res.data.prizes[i].isActive = false
            } else {
              res.data.prizes[i].isActive = true
            }
          }
          if (res.data.prizes.length > 8) {
            this.prizes = res.data.prizes.slice(0, 8)
          } else {
            this.prizes = res.data.prizes
          }
        } else {
          toast(res.msg)
        }
      })
    },
    handleClick() {
      if (this.token) {
        if (this.isClick) return
        this.transitionStyle = 'transform 3s ease-out'
        let postData = {
          token: this.token,
          actId: this.actId
        }
        this.$axios.post('/activityCenter/userApp/raffle/obtain/prize', postData).then((res) => {
          if (res.success) {
            this.prizeId = res.data.prizeId
            this.prizeType = res.data.prizeType
            this.remainDayCount = res.data.remainDayCount
            this.money = res.data.money
            this.score = res.data.score
            for (var i = 0; i < this.prizes.length; i++) {
              if (this.prizeId === this.prizes[i].prizeId) {
                this.index = i
              }
            }
            this.isClick = false
            switch (this.index) {
              case 0:
                this.degIndex = 7
                break
              case 1:
                this.degIndex = 6
                break
              case 2:
                this.degIndex = 5
                break
              case 3:
                this.degIndex = 4
                break
              case 4:
                this.degIndex = 3
                break
              case 5:
                this.degIndex = 2
                break
              case 6:
                this.degIndex = 1
                break
              case 7:
                this.degIndex = 0
                break
            }
            this.rotateDeg = 'rotate(' + (360 * 8 + parseInt(this.extraDeg[this.degIndex])) + 'deg)'
            setTimeout(() => {
              this.isModel = true
            }, 3500)
          } else {
            if (res.code === 101002) {
              this.remainDayCount -= 1
              toast(res.msg)
            } else {
              toast(res.msg)
            }
          }
        })
      } else {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.eventEmitter()
          this.interPackage.loginHandler(({token}) => {
            this.token = token
            this.checkToken()
          })
        } else {
          util.goLogin()
        }
      }
    },
    // 关闭弹窗
    closeModel() {
      this.isModel = false
      //this.initData()
    }
  },
  mounted() {
    this.checkToken()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
