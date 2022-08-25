<style lang="less" scoped>
  img{
    width: 100%;
    vertical-align: middle;
  }
</style>
<template>
   <section>
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751title_img.png">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job1.png" @click="toJobDetailPage(128276)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job2.png" @click="toJobDetailPage(131157)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job3.png" @click="toJobDetailPage(131160)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job4.png" @click="toJobDetailPage(130196)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job5.png" @click="toJobDetailPage(128998)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job6.png" @click="toJobDetailPage(131171)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job7.png" @click="toJobDetailPage(131162)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job8.png" @click="toJobDetailPage(126018)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job9.png" @click="toJobDetailPage(131166)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job10.png" @click="toJobDetailPage(130161)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job11.png" @click="toJobDetailPage(131167)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job12.png" @click="toJobDetailPage(131159)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job13.png" @click="toJobDetailPage(131173)">
     <img src="https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751job14.png" @click="jumplabel">
   </section>
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
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    setWechatTitle('万圣节撩人夜')
    this.sharemodel()
  },
  methods: {
    // 跳兼职详情
    toJobDetailPage(partJobId) {
      window.MtaH5.clickStat(partJobId)
      this.interPackage.evokeNormalPartJobDetailPage(partJobId)
    },
    // 更多兼职
    jumplabel() {
      this.interPackage.newEvokePartJobListSortedPage('4')
//      if (util.isIosApp()) {
//        this.interPackage.evokePartJobListSortedPage('POPULAR_JOB')
//      } else {
//        this.interPackage.newEvokePartJobListSortedPage(4)
//      }
    },
    // 点击分享按钮回调
    sharemodel() {
      this.interPackage.initShareInfo({
        title: '万圣高薪玩“赚”兼职',
        desc: 'Happy Halloween~万圣节主题兼职带你玩“赚”撩人夜！~',
        imgUrl: 'https://ojlf2aayk.qnssl.com//act/hallowmas/1508729348751shareImg.jpeg'
      })
    }
  }
}
</script>
