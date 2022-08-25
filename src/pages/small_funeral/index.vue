<template>
  <div class="small_funeral">
    <div class="images_box1"></div>
    <div class="images_box2"></div>
    <div class="images_box3"></div>
    <div class="images_box4"></div>
    <div class="images_box5"></div>
    <div class="images_box6">
      <div class="button6" @click='goSmallTask'></div>
    </div>
    <div class="images_box7"></div>
    <div class="images_box8">
      <div class="button8" @click='goNormalSignUP'></div>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import wx from 'wx'
import setWechatTitle from 'setWechatTitle'
export default {
  methods: {
    goSmallTask() {
      this.appInterActive.evokeLightTaskDetailPage(683)
    },
    goNormalSignUP() {
      this.appInterActive.evokeNormalPartJobDetailPage(123747)
    },
    shareInitInfo() {
      this.appInterActive.initShareInfo({
        title: '“再见吧，小确丧”',
        desc: '何以解忧，唯有吐槽，吐槽不够，那就来和我们一起嗨吧!',
        imgUrl: 'https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/shareIcon.jpg'
      })
    }
  },
  created() {
    this.appInterActive = util.getCurrentVersionInteractivePackage()
    this.appInterActive.setNavTitle('再见吧，小确丧')
  },
  mounted() {
    setWechatTitle('再见吧，小确丧')
    this.shareInitInfo()
  }
}
</script>
<style lang="less" scoped>
.small_funeral {
  background-color: #e8e8e8;
  .images_box1 {
    width: 100%;
    height: 2.106667rem;
    background: url('https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/top.png') no-repeat center center;
    background-size: cover;
  }
  .images_box2 {
    width: 100%;
    height: 2.766667rem;
    background: url('https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/top2.png') no-repeat center center;
    background-size: cover;
  }
  .images_box3 {
    width: 100%;
    height: 3.423333rem;
    background: url('https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/top3.png') no-repeat center center;
    background-size: cover;
  }
  .images_box4 {
    width: 100%;
    height: 1.996667rem;
    background: url('https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/top4.png') no-repeat center center;
    background-size: cover;
  }
  .images_box5 {
    width: 100%;
    height: 1.673333rem;
    background: url('https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/top5.png') no-repeat center center;
    background-size: cover;
  }
  .images_box6 {
    position: relative;
    width: 100%;
    height: .216667rem;
    background: url('https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/top6.png') no-repeat center center;
    background-size: cover;
    .button6 {
      position: absolute;
      left: .593333rem;
      width: 1.106667rem;
      height: .216667rem;
    }
  }
  .images_box7 {
    width: 100%;
    height: 2.756667rem;
    background: url('https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/top7.png') no-repeat center center;
    background-size: cover;
  }
  .images_box8 {
    position: relative;
    width: 100%;
    height: .993333rem;
    background: url('https://qiniu-image.qtshe.com/small_funeral/1505896079662yy/top8.png') no-repeat center center;
    background-size: cover;
    .button8 {
      position: absolute;
      top: .076667rem;
      left: 1.35rem;
      width: 1.116667rem;
      height: .236667rem;
    }
  }
}
</style>
