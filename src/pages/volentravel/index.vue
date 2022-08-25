<style lang="less">
@import './index.less';
</style>

<template>
<div class="volunteerContainer" v-if="loaded">
    <div class="bannerImgs" v-if="topImgSrc.length > 0">
        <mt-swipe :auto="3000" class="topImg">
            <mt-swipe-item v-for="(item, index) in topImgSrc" :key="index">
                <img :src="item.image" @click="goToJobDetail(item.jumpKey, item.param)" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- <img class="topImg" :src="topImgSrc" alt="" /> -->
    <div class="tab">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">演唱会/志愿者</mt-tab-item>
            <mt-tab-item id="2">义工旅行</mt-tab-item>
            <mt-tab-item id="3">义工精选</mt-tab-item>
        </mt-navbar>
    </div>
    <div class="tabContent">
        <div v-if="contentData.length>0">
            <div class="contentItem" v-for="(item, index) in contentData" v-bind:key="index">
                <div style="padding-bottom: 0.16rem;" @click="goToJobDetail(item.jumpKey, item.param)">
                    <img class="itemImg" :src="item.image" alt="" />
                    <div class="title">{{item.title}}</div>
                    <div class="specialDes">{{item.subTitle}}</div>
                </div>
            </div>
        </div>
        <div class="blank" v-else>
            <img src="https://qiniu-image.qtshe.com/20180914_reviewblank.png" class="blank-pic" />
            <div class="blank-text">
                暂无内容哦～
            </div>
        </div>
        <!-- <div class="button-review" @click="jumpToReview">
            <span>往期回顾</span>
            <img src="https://qiniu-image.qtshe.com/20180907_buttonIcon.png" class="button-icon" />
        </div> -->
        <div v-if="selected === '2' && journalData.length >= 2" class="journalContainer">
            <div class="headTitle">
                旅行日志</div>
            <div class="dataBox">
                <div v-for="(item, index) in journalData" v-bind:key="index" class="journalData" @click="goToJobDetail(item.jumpKey, item.param)">
                    <img class="mainImg" :src="item.image" alt="">
                    <!-- <div class="info">
                <div class="title">{{item.title}}</div>
                <div class="extra">{{item.subTitle}}</div>
              </div> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import util from 'util'
import {
    Navbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Swipe,
    SwipeItem
} from 'mint-ui'

Vue.component(Navbar.name, Navbar)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
export default {
  data() {
    return {
      interPackage: {},
      townId: '',
      topImgSrc: [],
      selected: '1',
      contentData: [],
      workersList: [],
      travelList: [],
      qualityList: [],
      journalData: [],
      journalIndex: -1,
      loaded: false
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    this.interPackage.setNavTitle('青团义工')
    this.getAppTownId()
  },
  watch: {
    selected: function() {
      this.initTabData()
    }
  },
  methods: {
    getAppTownId() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then(res => {
          util.setCookie('townId', res.townId)
          this.townId = res.townId
          this.getVolunteer()
        })
      } else {
        this.townId = util.getCookie('townId') || 87
        this.getVolunteer()
      }
    },
    initTabData() {
      switch (this.selected) {
        case '1':
          this.contentData = this.workersList
          break
        case '2':
          this.contentData = this.travelList
          break
        case '3':
          this.contentData = this.qualityList
          break
        default:
          this.contentData = this.workersList
          break
      }
    },
    getVolunteer() {
      let postData = {
        townId: this.townId
      }
      this.$axios
                .post('/resourceCenter/userApp/resource/business/h5/travel', postData)
                .then(res => {
                  if (res.success) {
                    this.loaded = true
                    this.topImgSrc = res.data.fouces
                    this.workersList = res.data.workers.resources
                    res.data.travel.resources.map((item, index) => {
                      if (item.jumpKey !== 'USER_CLIENT_OPEN_MINI_APP') {
                        this.travelList.push(item)
                      }
                    })
                    this.journalData = res.data.travel.subResources || []
                    this.journalIndex =
                            this.travelList.length >= 10 ? 10 : this.travelList.length
                    this.qualityList = res.data.quality.resources
                    this.initTabData()
                  }
                })
                .catch(err => {
                  this.loaded = true
                  console.log(err)
                })
    },
        // 万能跳转详情
    goToJobDetail(jumpKey, param) {
      param = JSON.parse(param)
      switch (jumpKey) {
        case 'USER_SHARE_PAGE':
          window.location.href = param[0].value
          break
        case 'USER_STATIC_PAGE':
          window.location.href = param[0].value
          break
        case 'USER_PART_JOB_DETAIL_PAGE':
          this.interPackage.evokeNormalPartJobDetailPage(param[0].value)
          break
        case 'USER_PRACTICE_DETAIL_PAGE':
          this.interPackage.evokeInterViewPracticePage(param[0].value)
          break
        case 'USER_TASK_DETAIL_PAGE':
          this.interPackage.evokeLightTaskDetailPage(param[0].value)
          break
        case 'USER_TASK_LIST_PAGE':
          this.interPackage.evokeLightTaskListPage()
          break
      }
    },
        //跳转到往期回顾
    jumpToReview() {
      let type = '36'
      if (this.selected === '1') {
        type = '36'
      }
      if (this.selected === '2') {
        type = '37'
      }
      if (this.selected === '3') {
        type = '38'
      }
      this.$router.push(`/volunteerReview?type=${type}`)
    }
  }
}
</script>
