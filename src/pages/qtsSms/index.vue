<style lang="less">
.container {
    width: 100%;
    min-height: 100vh;
    background: #FFF;
    font-size: 0.14rem;
    padding: 0.12rem;
}
</style>
<template>
<div>
  <div class="container">{{msg}}</div>
</div>
</template>
<script>
import util from 'util'
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    if (util.getQueryString('sms')) {
      this.msg = decodeURIComponent(util.getQueryString('sms'))
    } else {
      let contactWay = Number(util.getQueryString('contactWay'))
      let partJobTitle = decodeURIComponent(util.getQueryString('partJobTitle'))
      let contactNo = decodeURIComponent(util.getQueryString('contactNo'))
      if (contactWay === 1) {
        contactWay = 'QQ'
      } else if (contactWay === 2) {
        contactWay = '微信'
      } else if (contactWay === 3) {
        contactWay = 'QQ群'
      } else if (contactWay === 4) {
        contactWay = '公众号'
      }
      this.msg = `您好，您已成功报名<${partJobTitle}>，尽快添加${contactWay}: ${contactNo}，与商家及时沟通~`
    }
  }
}
</script>
