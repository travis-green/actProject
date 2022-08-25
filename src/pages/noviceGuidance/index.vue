<style lang='less' scoped>
img {
    width: 100%;
    float: left;
}
</style>
<template>
<div>
  <img src="https://qiniu-image.qtshe.com/1517535616605_844.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/1517535622179_374.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/1517535626417_398.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/1517535631086_757.jpg" alt="">
  <img src="https://qiniu-image.qtshe.com/1517535747862_358.jpg" alt="">
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
      interPackage: {}
    }
  },
  mounted() {
    this.interPackage.initRightJump('常见问题', 'https://m.qtshe.com/activity/v1?activityMark=1adcba477caf87715e03d450c2ee93ea')
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
