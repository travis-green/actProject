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
    }
}
</style>
<template>
<div>
  <img src="https://qiniu-image.qtshe.com/welfare_01.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/welfare_02.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/welfare_03.jpg" alt="" @click="jumptask(526)">
  <img src="https://qiniu-image.qtshe.com/welfare_04.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/welfare_05.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/welfare_06.jpg" alt="" @click="jumpquality(118043)">
  <img src="https://qiniu-image.qtshe.com/welfare_07.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/welfare_08.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/welfare_09.jpg" @click="outlocation">
  <img src="https://qiniu-image.qtshe.com/welfare_10.jpg">
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import wx from 'wx'
import {
  Indicator
} from 'mint-ui'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      interPackage: {}
    }
  },
  methods: {
    jumpquality(partJobId) {
      this.interPackage.evokePerfectPartJobDetailPage(partJobId)
    },
    jumptask(taskId) {
      this.interPackage.evokeLightTaskDetailPage(taskId)
    },
    outlocation() {
      window.location.href = 'https://ssl.gongyi.qq.com/m/weixin/index2_gzzh.htm?ADTAG=WX.WALLET.INDEX&et=wx_wallet'
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '一张照片，一次公益',
        desc: '想知道公益有多简单吗？',
        imgUrl: 'https://qiniu-image.qtshe.com/share0828.jpeg-100'
      })
    }
  },
  mounted() {
    setWechatTitle('一张照片，一次公益')
    this.sharebanner()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
