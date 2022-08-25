<style lang='less' scoped>
.food-selection {
  background: #fff;
  min-height: 100vh;
  .head-img {
    position: fixed;
    width: 100%;
    z-index: 9999;
    font-size: 0;
   max-width: 750px;
    img {
      width: 100%;
    }
  }
  .top-distance {
    padding-top: 2.1rem;
  }
  .empty-block {
    margin: 0 auto;
    padding-top: 1.5rem;
    .back-img {
      text-align: center;
      img {
        display: inline-block;
        width: 1.3rem;
      }
    }
  }
}
</style>
<template>
  <div class="food-selection">
    <div class="head-img">
      <img src="https://qiniu-image.qtshe.com/miaomiaoactivity/1511330902264/nighlife.png" alt="">
    </div>
    <joblist :interPackage="interPackage" :infoList="infoList" :backgroundColor="'#fff'" class="top-distance"></joblist>
    <div class="empty-block" v-show="infoList.length===0">
      <div class="back-img">
        <img src="https://qiniu-image.qtshe.com/20161007search@3x.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import util from 'util'
import toast from 'toast'
import {
  Indicator
} from 'mint-ui'
import joblist from './joblist'
export default {
  data () {
    return {
      interPackage: {},
      infoList: []
    }
  },
  methods: {
    handleInitList () {
      let sendData = {
        labelId: 806,
        townId: 0
      }
      Indicator.open()
      this.$axios.post('/user/partJob/list/byFilter', sendData).then(res => {
        Indicator.close()
        if (res.success) {
          if (res.data.totalCount === 0) return
          this.infoList = res.data.partJobs
        } else {
          toast(res.errMsg)
        }
      })
    }
  },
  created () {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted () {
    this.handleInitList()
    this.interPackage.initShareInfo({
      title: '大学生夜生活大调查',
      desc: '原来你这么浪',
      imgUrl: 'https://qiniu-image.qtshe.com/miaomiaoactivity/1511330902263/night_life_logo.jpeg',
      showShareBtn: false
    })
  },
  components: {
    joblist
  }
}
</script>
