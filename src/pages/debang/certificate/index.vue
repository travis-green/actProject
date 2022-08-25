<template>
  <div class="debang-detail-certificate">
    <!-- 图片展示保存 -->
    <div class="debang-save-img-contain">
      <img v-if="canvasImg" class="debang-save-img" :src="canvasImg" alt />
      <!-- canvas组件 画分析图 -->
      <CanvasComponent class="CanvasComponentPosition" ref="canvasComponent" />
    </div>
  </div>
</template>
<script>
import util from 'util'
import toast from 'toast'
import setWechatTitle from 'setWechatTitle'
import CanvasComponent from '../components/canvas'
export default {
  components: {
    CanvasComponent
  },
  data() {
    return {
      canvasImg: '' // 最终生成的分享图
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.interPackage.initShareInfo({
      title: '旧衣回收挑战赛，等你来战！',
      desc: '为母校助力，等你出击！',
      imgUrl: 'https://qiniu-image.qtshe.com/debang/debang-n-share-v-img.png'
    })
    setWechatTitle('旧衣回收挑战赛')
  },
  mounted() {
    const { name, schoolName, donateScore, schoolId } = this.$route.query
    this.$refs.canvasComponent.toImage(name, schoolName, donateScore, schoolId).then(url => {
      toast('生成证书完毕请长按保存')
      this.canvasImg = url
    })
  }
}
</script>
<style lang="less">
.debang-save-img-contain {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: #0069cc;
}

.debang-save-img {
  width: 100%;
  height: 6.666rem;
}

.CanvasComponentPosition {
  position: absolute;
  top: 10rem;
  left: 10rem;
}
</style>
