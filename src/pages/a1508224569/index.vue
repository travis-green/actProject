<style lang='less' scoped>
.a1508224569-wrapper {
  width: 100%;
  font-size: 0;
  .header {
    img {
      width: 100%;
    }
    .button {
      margin: 0.15rem auto;
      width: 1.4rem;
      height: .33rem;
      background-color: #fff100;
      color: #000;
      font-size: .16rem;
      line-height: .33rem;
      text-align: center;
      border-radius: .33rem;
      border: 1px solid #000;
    }
  }
}
</style>
<template>
<div class='a1508224569-wrapper'>
  <div class="header">
    <img src='https://qiniu-image.qtshe.com/1508208755.jpg' alt='' />
    <img src='https://qiniu-image.qtshe.com/1508208756.jpg' alt='' />
    <img src='https://qiniu-image.qtshe.com/15082087557.jpg' alt='' />
  </div>
  <div class="header">
    <div class="button" @click="gotoPartJob(123293)">立即报名</div>
  </div>
  <div class="header">
    <img src='https://qiniu-image.qtshe.com/15082087559.jpg' alt='' />
  </div>
</div>
</template>
<script>
import util from 'util'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      interPackage: {}
    }
  },
  methods: {
    // 跳转到精品兼职详情页
    gotoPartJob(partJobId) {
      this.interPackage.evokePerfectPartJobDetailPage(partJobId)
    }
  },
  mounted() {
    setWechatTitle('手机评测')
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    // 初始化自定义分享内容
    this.interPackage.initShareInfo({
      title: '史上最奢华的iPhone X体验官招募',
      desc: '还拿888元测评工资',
      imgUrl: 'https://qiniu-image.qtshe.com/15082087560.jpeg'
    })
  }
}
</script>
