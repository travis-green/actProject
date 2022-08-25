<template>
  <ul class="card-list">
    <li class="card-item" v-for="(item, index) in list" :key="index" @click="goToJobDetail(item.jumpKey, item.param, index)" v-clickEvents="{businessId:item.businessId, businessType:item.businessType, index: index, position: position, contentId: item.contentId}">
      <div class="pic" :style="{backgroundImage: 'url(' + item.image + ')'}"></div>
      <p class="title ellipsis">{{item.title}}</p>
      <p class="subtitle ellipsis">{{item.subTitle}}</p>
    </li>
  </ul>
</template>
<script>
import util from 'util'
export default {
  data() {
    return {
      interPackage: {}
    }
  },
  props: {
    list: {
      type: Array,
      default: []
    },
    position: {
      type: String,
      default: ''
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  methods: {
    // 万能跳转详情
    goToJobDetail(jumpKey, param, index) {
      let position = this.position
      param = JSON.parse(param)
      if (jumpKey === 'USER_SHARE_PAGE') {
        window.location.href = param[0].value
      }
      if (jumpKey === 'USER_PART_JOB_DETAIL_PAGE') {
        const obj = {
          positionId: position + '-' + (index + 1),
          positionIdFir: window.location.pathname,
          positionIdSec: position,
          positionIdThi: index + 1,
          businessId: param[0].value,
          businessType: 1,
          partJobId: param[0].value,
          currentId: window.location.href
        }
        this.interPackage.evokePerfectPartJobDetailPage(obj)
      }
      if (jumpKey === 'USER_PRACTICE_DETAIL_PAGE') {
        this.interPackage.evokeInterViewPracticePage(param[0].value)
      }
      if (jumpKey === 'USER_STATIC_PAGE') {
        window.location.href = param[0].value
      }
      if (jumpKey === 'USER_TASK_LIST_PAGE') {
        this.interPackage.evokeLightTaskDetailPage()
      }
      if (jumpKey === 'USER_TASK_DETAIL_PAGE') {
        this.interPackage.evokeLightTaskDetailPage(param[0].value)
      }
      if (jumpKey === 'USER_TASK_LIST_PAGE') {
        this.interPackage.evokeLightTaskListPage()
      }
      if (jumpKey === 'USER_CLIENT_OPEN_MINI_APP') {
        this.interPackage.evokeSkipToWechatMiniApp(param[1].value)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .card-list {
    padding: 0 0.14rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card-item {
      width: 1.67rem;
      font-family: HYQiHei;
      padding-bottom: 0.16rem;
      .pic {
        width: 100%;
        height: 0.88rem;
        border-radius: 0.06rem;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .title {
        font-size: 0.13rem;
        line-height: 0.13rem;
        color: #363636;
        width: 100%;
        font-weight: bold;
        padding: 0.09rem 0 0.08rem 0;
      }
      .subtitle {
        font-size: 0.11rem;
        line-height: 0.11rem;
        color: #9A9A9A;
        width: 100%;
      }
    }
  }

  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
