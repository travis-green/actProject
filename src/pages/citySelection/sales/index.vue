<style lang='less' scoped>
.sales-selection {
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
<div class="sales-selection">
  <div class="head-img">
    <img src="https://qiniu-image.qtshe.com/m/H5/sales-head.jpg" alt="">
  </div>
  <slide-categories :imgList="imgList" :underlineColor="'#32424c'" class="slide" @getCategories="handleCategories"></slide-categories>
  <job-list :interPackage="interPackage" :loadMore="loadMore" :infoList="infoList" :backgroundColor="'#f3f2f0'" class="top-distance"></job-list>
  <empty-block :interPackage="interPackage" :classifyId="10133" :classifyName="'营销推广'" v-if="isEmpty" class="top-dis" :hintTitle="'更多促销推广岗位'"></empty-block>
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
      imgLabel: 4,
      interPackage: {},
      imgList: [{
        label: 4,
        src: 'https://qiniu-image.qtshe.com/m/H5/topspeed.png',
        activeSrc: 'https://qiniu-image.qtshe.com/m/H5/topspeed_active.png',
        pageNum: 0
      },
      {
        label: 5,
        src: 'https://qiniu-image.qtshe.com/m/H5/daily.png',
        activeSrc: 'https://qiniu-image.qtshe.com/m/H5/daily_active.png',
        pageNum: 0
      },
      {
        label: 6,
        src: 'https://qiniu-image.qtshe.com/m/H5/high_salary.png',
        activeSrc: 'https://qiniu-image.qtshe.com/m/H5/high_salary_active.png',
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
      let promise = this.$axios.post('/activity/partJob/payActivity', postData).then(res => {
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
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    this.townId = this.$route.params.townId || 87
    util.setCookie('townId', this.townId, 30)
    this.getData()
    // 初始化自定义分享内容
    this.interPackage.initShareInfo({
      title: '见不一样的人，过不一样的生活',
      desc: '去开启不一样的人生',
      imgUrl: 'https://qiniu-image.qtshe.com/m/H5/sales_service.jpg',
      showShareBtn: false
    })
  }
}
</script>
