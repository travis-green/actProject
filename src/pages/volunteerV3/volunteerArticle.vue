/**
* @description: 文件或模块描述
* @author: zengtiansheng
* @update: 2017/10/25
*/
<style lang='less' scoped>
  img{
    width: 100%;
  }
</style>
<template>
  <section>
    <img src="https://qiniu-image.qtshe.com//act/volunteerV3/1508845150/article.png" alt="article">
  </section>
</template>
<script>
  import setWechatTitle from 'setWechatTitle'
  import util from 'util'

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
      setWechatTitle('免费看世界追爱豆')
      this.interPackage.initShareInfo({
        title: '即刻出发，免费看世界追爱豆！',
        desc: '诗和远方你都能有！',
        imgUrl: 'https://qiniu-image.qtshe.com//act/volunteerV3/1508845154/wx_share_img.jpg'
      })
    },
    methods: {}
  }
</script>
