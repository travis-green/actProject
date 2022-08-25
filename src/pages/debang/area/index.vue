<template>
  <div class="debang-area-main">
    <div class="debang-area-tabs">
      <div
        v-for="(item, index) in list"
        :key="item.name"
        @click="toggleTab(index)"
        :class="{'debang-area-tab': true, 'active': item.active}"
      >{{item.name}}</div>
    </div>
    <div
      v-for="(parent, index) in list"
      v-show="index === currentIndex"
      :key="parent.id"
      class="debang-area-content"
    >
      <div class="debang-area-schoolList clearfix">
        <div
          v-for="item in list[index].children"
          :key="item.name"
          @click="handleGoDetail(item.benefitId)"
          class="debang-area-content-item"
        >
          <div class="debang-area-content-logo" :style=" {'background-image': `url(${item.logo})`}"></div>
          <div class="debang-area-content-name">{{item.name}}</div>
        </div>
      </div>
      <div class="debang-area-list-bottom">
        <!-- <div class="debang-area-list-bottom-line"></div>
        <div class="debang-area-list-bottom-text">更多校园开放，敬请期待</div>
        <div class="debang-area-list-bottom-line"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import util from 'util'
import toast from 'toast'
import setWechatTitle from 'setWechatTitle'
export default {
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.interPackage.initShareInfo({
      title: '旧衣回收挑战赛，等你来战！',
      desc: '为母校助力，等你出击！',
      imgUrl: 'https://qiniu-image.qtshe.com/debang/debang-n-share-v-img.png'
    })
    setWechatTitle('旧衣回收挑战赛')
    this.toggleTab(this.currentIndex)
  },
  data() {
    return {
      currentIndex: 0,
      list: [
        { name: '华东赛区', id: 1, children: [], active: false },
        { name: '华北赛区', id: 2, children: [], active: false },
        { name: '中南赛区', id: 3, children: [], active: false },
        { name: '西南赛区', id: 4, children: [], active: false },
        { name: '东北&西北', id: 5, children: [], active: false }
      ]
    }
  },
  computed: {
    iconStyle() {
      return { 'background-image': `url(${this.item.logo})` }
    }
  },
  methods: {
    getSchoolList(item) {
      this.$axios
        .post('/activityCenter/benefitDivision/school/list', {
          division: item.id
        })
        .then(
          res => {
            if (res.success) {
              if (item.children.length > 0) return
              item.children = res.data
            } else {
              toast(res.msg || '获取学校列表失败，请稍后重试')
            }
          },
          () => {
            toast('获取学校列表失败，请稍后重试')
          }
        )
    },
    toggleTab(index) {
      this.list.forEach(item => {
        item.active = false
      })
      const item = this.list[index]
      if (item) {
        item.active = true
        this.currentIndex = index
        if (item.children.length > 0) return
        this.getSchoolList(item)
      }
    },
    handleGoDetail(id) {
      // this.$router.push(`/debang/detail/${id}`)
      window.location.href = `/act/debang/detail/${id}`
    }
  }
}
</script>
<style lang="less">
@import "./index.less";
</style>
