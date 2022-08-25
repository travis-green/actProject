<style lang='less' scoped>
.a1511867711-wrapper {
    width: 100%;
    height: 100%;
    .start-div {
      width: 100%;
      height: 100%;
      text-align: center;
      .first-screen {
        font-size: 28px;
        color: #666;
        position: absolute;
        top: 45%;
        left: 45%;
        margin-left: -1rem;
        outline: 0;
        border-radius: .3rem;
        color: #666;
        background-color: #fff;
      }
      .btn {
        animation: 1s scale infinite;
        position: absolute;
        top: 45%;
        left: 50%;
        margin-left: -1rem;
        font-size: 28px;
        font-weight: bolder;
        width: 2rem;
        outline: 0;
        -webkit-appearance: none;
        -webkit-box-sizing: content-box;
        border-radius: .3rem;
        color: #666;
        background-color: #fff;
        border: 1px solid #666;
        box-sizing: border-box;
      }
      @keyframes scale {
        30% {
          opacity: .3;
        }
        60% {
          opacity: .6;
        }
        100% {
          opacity: 1;
        }
      }
    }
}
</style>
<template>
<section class="a1511867711-wrapper">
  <div class="start-div" v-show="showFirstScreen" @click="onFirstScreenClick">
    <div class="first-screen">深夜，前任突然{{firstScreenText}}</div>
  </div>
  <div class="start-div" v-show="showBtnDiv">
    <div class="btn" @click="play">{{text}}</div>
  </div>
  <video v-show="showVedio" id="video" webkit-playsinline="true" playsinline="true" :style="{width: w + 'px', height: h + 'px'}" type="video/mp4" preload="auto" x5-video-player-type="h5" src="https://omwar1yo9.qnssl.com//vedio/1511864948.mp4"></video>
</section>
</template>
<script>
import util from 'util'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      firstScreenText: '.',
      text: '开始',
      w: 1,
      h: 1,
      vedio: {},
      showFirstScreen: true,
      showBtnDiv: false,
      showVedio: false,
      interPackage: {}
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    setWechatTitle('深夜，前男友发来好友申请')
    this.w = innerWidth
    this.h = innerHeight
    this.sharebanner()
    this.vedio = document.getElementById('video')
    this.vedio.addEventListener('ended', this.onended)
    let time = 0
    let intervalId = setInterval(() => {
      if (time >= 6) {
        clearInterval(intervalId)
      } else {
        time++
        this.firstScreenText = this.firstScreenText + '.'
      }
    }, 100)

    setTimeout(() => {
      if (this.showFirstScreen) {
        this.onFirstScreenClick()
      }
    }, 3000)
  },
  methods: {
    onFirstScreenClick() {
      this.showFirstScreen = false
      this.showBtnDiv = true
    },
    play() {
      this.showBtnDiv = false
      this.showVedio = true
      this.vedio.play()
    },
    // 播放结束事件
    onended() {
      this.text = '重新播放'
      this.showBtnDiv = true
      this.showVedio = false
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '深夜，前男友发来好友申请',
        desc: '心情，五味杂陈',
        imgUrl: 'https://qiniu-image.qtshe.com/1512025009.jpg'
      })
    }
  }
}
</script>
