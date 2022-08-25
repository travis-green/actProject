<template>
  <div class="container">
    <img class="banner" src="https://qiniu-image.qtshe.com/schoolSeason/welfare.png" alt="">
    <qtsTab @indexChange="indexChange" :titleList="titleList" />
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="container0">
        <cardList :list="workersList" position="workers" />
      </mt-tab-container-item>
      <mt-tab-container-item id="container1">
        <cardList :list="travelList" position="travel" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import { Indicator } from 'mint-ui'
import './mint-ui'
import qtsTab from './components/qtsTab'
import cardList from './components/cardList'

export default {
  components: {
    qtsTab,
    cardList
  },
  data() {
    return {
      interPackage: {},
      townId: '',
      active: 'container0',
      titleList: ['志愿者招募', '义工旅行'],
      workersList: [],
      travelList: []
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    this.getAppTownId()
    this.initShareInfo()
  },
  methods: {
    initShareInfo() {
      this.interPackage.initShareInfo({
        title: `线上开学季`,
        desc: '百强公益组织活动，限量名额招募中👉',
        link: window.location.href,
        imgUrl: 'https://qiniu-image.qtshe.com/schoolSeason2/welfare.png',
        showBtn: true,
        showCopyUrl: false
      })
    },
    indexChange(index) {
      this.active = `container${index}`
    },
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
    getVolunteer() {
      Indicator.open()
      this.$axios.post('/resourceCenter/userApp/resource/business/h5/travel', {
        townId: this.townId
      }).then(res => {
        Indicator.close()
        if (res.success) {
          let { workers, travel } = res.data
          this.workersList = workers.resources || []
          this.travelList = travel.resources.filter(item => item.jumpKey !== 'USER_CLIENT_OPEN_MINI_APP')
        } else {
          toast(res.msg || '团团开小差啦，请稍后再试')
        }
      }).catch(err => {
        Indicator.close()
        toast('团团开小差啦，请稍后再试')
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
    min-height: 100%;
    .banner {
      display: block;
      width: 100%;
      height: 1.885rem;
    }
  }
</style>
