<style lang='less' scoped>
body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    max-width: 750px;
    img {
        width: 100%;
        float: left;
        position: relative;
        z-index: -2;
    }
    .quickbtn {
        width: 34%;
        margin-left: 33%;
        margin-top: -23%;
        position: relative;
        z-index: 999;
    }
    .applybtn {
        width: 30%;
        margin-left: 50%;
        margin-top: -15%;
        position: relative;
        z-index: 999;
    }
    .dingling {
        width: 0.13rem;
        height: 0.17rem;
        position: fixed;
        right: 0.065rem;
        top: 0.04rem;
    }
    .swing-enter-active {
        width: 0.28rem;
        height: 0.28rem;
        border: 1px solid #FFF;
        text-align: center;
        border-radius: 50%;
        position: fixed;
        right: 0.1rem;
        top: 0.1rem;
        z-index: 999;
        -webkit-animation-duration: 0.5;
        animation-duration: 0.5s;
        -webkit-animation-name: ticktock;
        animation-name: ticktock;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-play-state: running;
        animation-play-state: running;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    @keyframes ticktock {
        0% {
            transform: rotate(10deg);
        }
        100% {
            transform: rotate(-10deg);
        }
    }
    .novoice {
        width: 0.28rem;
        height: 0.28rem;
        position: fixed;
        right: 0.1rem;
        top: 0.1rem;
        z-index: 999;
    }
    .skiptoarea {
        width: 34%;
        margin-left: 33%;
        float: left;
        position: relative;
        z-index: 999;
        margin-top: -85%;
    }
    .waitmodel {
        width: 100%;
        height: 100%;
        .waitback {
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
            background: rgba(0,0,0,0.7);
            z-index: 1000;
        }
        .waitcont {
            width: 1.6rem;
            height: 1.35rem;
            position: fixed;
            left: 50%;
            top: 50%;
            margin-left: -0.8rem;
            margin-top: -0.675rem;
            background: #FFF;
            border-radius: 0.06rem;
            z-index: 1000;
            overflow: hidden;
            img {
                width: 2rem;
                height: 2rem;
                float: left;
                border-radius: 0.1rem;
                margin-top: -28%;
                margin-left: -1rem;
                left: 50%;
                position: absolute;
            }
            .waittips {
                width: 100%;
                text-align: center;
                font-size: 0.11rem;
                float: left;
                padding: 0 0.1rem;
                color: #999;
                position: absolute;
                left: 0;
                top: 67%;
            }
        }
    }
}
</style>
<template>
<div>
  <div v-if="isClose">
    <div class="swing-enter-active" v-if="isVoice" @click="closeVoice">
      <img src="https://qiniu-image.qtshe.com/dingling.png" class="dingling">
    </div>
    <div v-else @click="openVoice">
      <img src="https://qiniu-image.qtshe.com/alingdang.png" class="novoice">
    </div>
  </div>
  <img src="https://qiniu-image.qtshe.com/merry_001.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/merry_02.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/merry_03.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/merry_04.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/merry_05.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/merry_06.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/merry_07.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/skiptoarea.png" class="skiptoarea" @click="toastTips">
  <audio id="audios" src="https://dn-qtshe.qbox.me/Jingle%20Bells.mp3" autoplay loop>您的浏览器不支持 audio 标签。</audio>
  <div class="waitmodel" v-if="isModel">
    <div class="waitback" @click="closeToast"></div>
    <div class="waitcont">
      <img src="https://qiniu-image.qtshe.com/merry_wife.gif" alt="">
      <div class="waittips">线下圣诞趴分会场即将开启敬请期期期待！</div>
    </div>
  </div>
</div>
</template>
<script>
import util from 'util'
export default {
  data() {
    return {
      interPackage: {},
      isVoice: true,
      isClose: false,
      isModel: false,
      SCREEN_WIDTH: window.innerWidth,
      SCREEN_HEIGHT: window.innerHeight,
      container: '',
      particle: '', //粒子
      camera: '',
      scene: '',
      renderer: '',
      starSnow: 1,
      particles: [],
      particleImage: new Image(),
      touchStartX: '',
      touchFlag: 0, //储存当前是否滑动的状态;
      touchSensitive: 80 //检测滑动的灵敏度;
    }
  },
  methods: {
    init() {
      this.container = document.createElement('div') //container：画布实例;
      this.container.style.position = 'fixed'
      this.container.style.top = '0'
      this.container.style.left = '0'
      this.container.style.zIndex = '-1'
      document.getElementById('app').appendChild(this.container)
      this.camera = new THREE.PerspectiveCamera(100, this.SCREEN_WIDTH / this.SCREEN_HEIGHT, 1, 10000)
      this.camera.position.z = 1000
      this.scene = new THREE.Scene()
      this.scene.add(this.camera)
      this.renderer = new THREE.CanvasRenderer()
      this.renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT)
      var material = new THREE.ParticleBasicMaterial({
        map: new THREE.Texture(this.particleImage)
      })
      for (var i = 0; i < 50; i++) {
        this.particle = new Particle3D(material)
        this.particle.position.x = Math.random() * 1500 - 1000
        this.particle.position.z = Math.random() * 1500 - 1000
        this.particle.position.y = Math.random() * 1500 - 1000
        this.particle.scale.x = this.particle.scale.y = 0.4
        this.scene.add(this.particle)
        this.particles.push(this.particle)
      }
      this.container.appendChild(this.renderer.domElement)
      document.addEventListener('touchstart', this.onDocumentTouchStart, false)
      document.addEventListener('touchmove', this.onDocumentTouchMove, false)
      document.addEventListener('touchend', this.onDocumentTouchEnd, false)
      setInterval(this.loop, 1000 / 20)
    },
    onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        // event.preventDefault() //取消默认关联动作;
        this.touchStartX = 0
        this.touchStartX = event.touches[0].pageX
      }
    },
    onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        // event.preventDefault()
        var direction = event.touches[0].pageX - this.touchStartX
        if (Math.abs(direction) > this.touchSensitive) {
          if (direction > 0) {
            this.touchFlag = 1
          } else if (direction < 0) {
            this.touchFlag = -1
          }
        }
      }
    },
    onDocumentTouchEnd(event) {
      var direction = event.changedTouches[0].pageX - this.touchStartX
      this.changeAndBack(this.touchFlag)
    },
    changeAndBack(touchFlag) {
      var speedX = 20 * this.touchFlag
      this.touchFlag = 0
      for (var i = 0; i < this.particles.length; i++) {
        this.particles[i].velocity = new THREE.Vector3(speedX, -10, 0)
      }
      var timeOut = setTimeout(() => {}, 800)
      clearTimeout(timeOut)
      var clearI = setInterval(function() {
        if (this.touchFlag) {
          clearInterval(clearI)
          return
        }
        speedX *= 0.8
        if (Math.abs(speedX) <= 1.5) {
          speedX = 0
          clearInterval(clearI)
        }
        if (this.particles) {
          for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].velocity = new THREE.Vector3(speedX, -10, 0)
          }
        }
      }, 100)
    },
    loop() {
      for (var i = 0; i < this.particles.length; i++) {
        var particle = this.particles[i]
        particle.updatePhysics()
        if (particle.position) {
          if ((particle.position.y < -1000) && this.starSnow) {
            particle.position.y += 2000
          }
          if (particle.position.x > 1000) {
            particle.position.x -= 2000
          } else if (particle.position.x < -1000) {
            particle.position.x += 2000
          }
          if (particle.position.z > 1000) {
            particle.position.z -= 2000
          } else if (particle.position.z < -1000) {
            particle.position.z += 2000
          }
        }
      }
      this.camera.lookAt(this.scene.position)
      this.renderer.render(this.scene, this.camera)
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '圣诞节戏精狂欢趴 超大礼包送不停 ',
        desc: '500元礼包等你抢！和青团社一起过一个最可爱的圣诞节！',
        imgUrl: 'https://qiniu-image.qtshe.com/WechatIMG515.jpeg'
      })
    },
    closeVoice() {
      this.isVoice = false
      document.getElementById('audios').pause()
      document.removeEventListener('touchstart', this.openVoice)
    },
    openVoice() {
      this.isVoice = true
      document.getElementById('audios').play()
    },
    handleClick(partJobId) {
      window.MtaH5 && window.MtaH5.clickStat('merryChrismas_' + partJobId)
      this.interPackage.evokePerfectPartJobDetailPage(partJobId)
    },
    handleTask(taskId) {
      window.MtaH5 && window.MtaH5.clickStat('merryChrismas_task_' + taskId)
      this.interPackage.evokeLightTaskDetailPage(taskId)
    },
    toastTips() {
      window.location.href = 'https://m.qtshe.com/activity/v1?activityMark=53dc7b1ef835cbf7fecf6f60d7d0aafb'
      // this.isModel = true
    },
    closeToast() {
      this.isModel = false
    }
  },
  mounted() {
    //创建页面监听，等待微信端页面加载完毕 触发音频播放
    document.addEventListener('WeixinJSBridgeReady', this.openVoice)
    if (util.isAndroidApp()) {
      this.isClose = false
    } else {
      this.isClose = true
      document.addEventListener('touchstart', this.openVoice)
    }
    this.particleImage.src = 'https://qiniu-image.qtshe.com/WechatIMG470.png'
    this.init()
    this.sharebanner()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
