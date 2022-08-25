<style lang='less' scoped>
.food-selection {
    background: #fff;
    min-height: 100vh;
    .head-img {
        position: fixed;
        width: 100%;
        z-index: 9999;
        img {
            width: 100%;
        }
    }
    .slide {
        top: 2.1rem;
        z-index: 9999;
    }
    .top-distance {
        padding-top: 3.1rem;
    }
    .top-dis {
        padding-top: 0.75rem;
    }
}
</style>
<template>
<div class="food-selection">
  <div class="head-img">
    <img src="https://qiniu-image.qtshe.com/user/h5/food-head.jpg" alt="">
  </div>
  <slide-categories :imgList="imgList" :underlineColor="'#b19e87'" class="slide" @getCategories="handleCategories"></slide-categories>
  <job-list :interPackage="interPackage" :loadMore="loadMore" :infoList="infoList" :backgroundColor="'#fcfaf7'" class="top-distance"></job-list>
  <empty-block :interPackage="interPackage" :classifyId="10135" :classifyName="'餐饮服务'" v-if="isEmpty" class="top-dis" :hintTitle="'更多美食咖啡厅岗位'"></empty-block>
</div>
</template>
<script>
import util from 'util'
import jobList from '../components/jobList'
import slideCategories from '../components/slideCategories'
import toast from 'toast'
import emptyBlock from '../components/emptyBlock'
export default {
  components: {
    emptyBlock,
    slideCategories,
    jobList
  },
  data() {
    return {
      isEmpty: false,
      townId: 87,
      imgLabel: 1,
      interPackage: {},
      imgList: [{
        label: 1,
        src: 'https://qiniu-image.qtshe.com/m/H5/coffee.png',
        activeSrc: 'https://qiniu-image.qtshe.com/m/H5/coffee_active.png',
        pageNum: 0
      },
      {
        label: 2,
        src: 'https://qiniu-image.qtshe.com/m/H5/restaurant.png',
        activeSrc: 'https://qiniu-image.qtshe.com/m/H5/restaurant_active.png',
        pageNum: 0
      },
      {
        label: 3,
        src: 'https://qiniu-image.qtshe.com/m/H5/take_out.png',
        activeSrc: 'https://qiniu-image.qtshe.com/m/H5/take_out_active.png',
        pageNum: 0
      }
      ],
      infoList: [],
      pageNum: 0
    }
  },
  methods: {
    handleCategories(typeId) {
      this.imgLabel = typeId
      this.infoList = []
      this.isEmpty = false
      this.imgList.map(item => {
        if (item.label === typeId) {
          item.pageNum = 0
          return
        }
      })
      this.getList(this.imgLabel)
    },
    getList(typeId) {
      let type = typeId
      let townId = this.townId
      this.imgList.map(item => {
        if (item.label === typeId) {
          this.pageNum = item.pageNum
          return
        }
      })
      let pageNum = this.pageNum
      let postData = {
        type,
        townId,
        pageNum
      }
      this.$axios.post('/activity/partJob/payActivity', postData).then(res => {
        this.handleList(typeId, res)
      })
    },
    loadMore() {
      this.getList(this.imgLabel)
    },
    //定位当前城市
    getData() {
      this.getList(this.imgLabel)
    },
    handleList(typeId, res) {
      this.imgList.map(item => {
        if (item.label === typeId) {
          item.pageNum = this.pageNum + 1
          return
        }
      })
      if (res.data.partJobs) {
        let list = res.data.partJobs
        if (!this.infoList.length && !list.length) {
          this.isEmpty = true
        }
        list.map(item => {
          this.infoList.push(item)
        })
      } else {
        if (!this.infoList.length) {
          this.isEmpty = true
        } else {
          this.isEmpty = false
        }
      }
      console.log(this.isEmpty)
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    // 初始化自定义分享内容
    this.townId = this.$route.params.townId || 87
    util.setCookie('townId', this.townId, 30)
    this.getData()
    this.interPackage.initShareInfo({
      title: '快到碗里来',
      desc: '我希望你，面对美食才花心',
      imgUrl: 'https://qiniu-image.qtshe.com/m/H5/food_service.jpg',
      showShareBtn: false
    })
  }
}
</script>
