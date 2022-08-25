<template>
  <div class="container">
    <img class="banner" src="https://qiniu-image.qtshe.com/schoolSeason/partjob.png" alt="">
    <qtsTab @indexChange="indexChange" :titleList="titleList" />
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="container0">
        <div class="partlist" v-if="partJobList.length !== 0">
          <ul
            v-infinite-scroll="getDataMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
          >
            <li
              v-for="(item, index) in partJobList"
              :key="index"
              @click="showJobDetail(item.partJobId, index)"
              v-clickEvents="{
                businessId: item.partJobId,
                businessType: 1,
                index: index,
                position: 'onlineList'
              }"
            >
              <div class="item-header">
                <div class="jobtitles">{{ item.title }}</div>
                <div class="moneytiker">{{ item.salary }}</div>
              </div>
              <div class="place_places">
                <span v-if="item.distance">距我{{ item.distance }} |</span>
                {{ item.addressDetail }}
              </div>
              <div class="tag-list">
                  <div :class="tag.colourType === 2 ? 'tag-item orange' : 'tag-item'" v-for="(tag, tagIndex) in item.jobTagFormList" :key="tagIndex">{{tag.value}}</div>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="container1">
        <cardList :list="applyList" position="experience" />
      </mt-tab-container-item>
      <mt-tab-container-item id="container2">
        <cardList :list="novalsList" position="novals" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Vue from 'vue'
import toast from 'toast'
import util from 'util'
import { Indicator, InfiniteScroll } from 'mint-ui'
import './mint-ui'
import qtsTab from './components/qtsTab'
import cardList from './components/cardList'
Vue.use(InfiniteScroll)

export default {
  components: {
    qtsTab,
    cardList
  },
  data() {
    return {
      interPackage: {},
      lon: '', //经度
      lat: '', //维度
      townId: 87,
      active: 'container0',
      titleList: ['线上兼职', '体验测评', '新奇兼职'],
      partJobList: [],
      applyList: [],
      novalsList: [],
      loading: false,
      postData: {
        pageNum: 1,
        pageSize: 20,
        classId: 10139,
        classLevel: 1,
        clearingForms: '',
        areaIds: '',
        sexRequire: '',
        workTime: '',
        excludePCIds: util.getQueryString('excludePCIds') || ''
      } //初始化页面入参
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    this.getAppInfo()
    this.initShareInfo()
  },
  methods: {
    initShareInfo() {
      this.interPackage.initShareInfo({
        title: `线上兼职季`,
        desc: '高薪线上兼职合集，在家也能轻松赚钱👉',
        link: window.location.href,
        imgUrl: 'https://qiniu-image.qtshe.com/schoolSeason2/partJob.png',
        showBtn: true,
        showCopyUrl: false
      })
    },
    getDataMore() {
      this.postData.pageNum += 1
      Indicator.open()
      this.$axios.post('/jobCenter/userWeb/partJob/list', Object.assign(this.postData, {
        lon: this.lon,
        lat: this.lat,
        townId: this.townId
      })).then((res) => {
        Indicator.close()
        const { data = {}, success } = res
        //是否获取数据成功
        if (success) {
          const { results, pageNum } = data
          if (results) {
            this.partJobList = this.partJobList.concat(results.filter(item => item.objectType === 1))
            // 数据已经获取完毕 不在触发无限滚动
            if (results.length < this.postData.pageSize) {
              this.loading = true
            }
          }
          this.postData.pageNum = pageNum
        } else {
          //提示取数据失败原因
          toast(res.msg)
        }
      })
    },
    showJobDetail(partJobId, index) { //兼职跳转
      const obj = {
        positionId: 'onlineList-' + (index + 1),
        positionIdFir: window.location.pathname,
        positionIdSec: 'onlineList',
        positionIdThi: index + 1,
        businessId: partJobId,
        businessType: 1,
        partJobId: partJobId,
        currentId: window.location.href
      }
      this.interPackage.evokeNormalPartJobDetailPage(obj)
    },
    indexChange(index) {
      this.active = `container${index}`
    },
    getAppInfo() {
      if (util.isAndroidApp() || util.isIosApp()) {
        Indicator.open()
        this.interPackage.getAppInfo().then(res => {
          util.setCookie('longitude', res.longitude)
          util.setCookie('latitude', res.latitude)
          util.setCookie('townId', res.townId)
          this.lon = res.longitude
          this.lat = res.latitude
          this.townId = res.townId || 87
          this.initPartJobList()
          this.getEvaluation()
          this.getNovals()
        })
      } else {
        this.lon = util.getCookie('longitude')
        this.lat = util.getCookie('latitude')
        this.townId = util.getCookie('townId') || 87
        this.initPartJobList()
        this.getEvaluation()
        this.getNovals()
      }
    },
    initPartJobList() {
      this.postData.pageNum = 1
      this.$axios.post('/jobCenter/userWeb/partJob/list', Object.assign(this.postData, {
        lon: this.lon,
        lat: this.lat,
        townId: this.townId
      })).then(res => {
        if (res.success) {
          const { results = [] } = res.data
          this.partJobList = results.filter(item => item.objectType === 1)
        } else {
          toast(res.msg || '团团开小差啦，请稍后再试')
        }
      }, () => {
        toast('团团开小差啦，请稍后再试')
      })
    },
    getNovals() {
      let postData = {
        lon: this.lon,
        lat: this.lat,
        townId: this.townId
      }
      this.$axios.post('/resourceCenter/userApp/resource/business/native/noval', postData).then(res => {
        const { novals = {} } = res.data
        if (res.success) {
          this.novalsList = novals.resources || []
        } else {
          toast(res.msg || '团团开小差啦，请稍后再试')
        }
        Indicator.close()
      }).catch(err => {
        Indicator.close()
        toast('服务器错误，请稍后再试')
      })
    },
    getEvaluation() {
      let postData = {
        townId: this.townId
      }
      this.$axios.post('/resourceCenter/userApp/resource/business/h5/experience', postData).then(res => {
        Indicator.close()
        if (res.success) {
          const { experience = {} } = res.data
          this.applyList = experience.resources || []
        } else {
          toast(res.msg || '团团开小差啦，请稍后再试')
        }
      }).catch(e => {
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

  .partlist {
    width: 3.55rem;
    left: 50%;
    margin-left: -1.775rem;
    overflow: hidden;
    position: fixed;
    max-width: 750px;
    ul {
      width: 100%;
      height: calc(~'100vh - 2.505rem');
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;

      li {
        padding: 0.12rem;
        background: #FFFFFF;
        border-bottom: 1px solid #EEE;
        position: relative;
        overflow: hidden;

        &.active {
          background: #FAFAFA;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
        }

        .jobtitles {
          width: 68%;
          font-size: 0.16rem;
          color: #333333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-right: 0.07rem;
        }

        .time_times {
          width: 100%;
          margin-top: 0.05rem;
          font-size: 0.12rem;
          color: #666666;
          display: flex;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .time_times_item{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 1.75rem;
          padding: 0.06rem 0.08rem;
          border: 1px solid #E5E5E5;
          border-radius: 0.04rem;
          line-height: 1;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          margin-top: 0.04rem;
        }

        .tag-item {
          font-size: 0.12rem;
          line-height: 1;
          color: #666666;
          padding: 0.06rem 0.05rem;
          border: 1px solid #E5E5E5;
          border-radius: 0.04rem;
          margin: 0.04rem 0.04rem 0 0;
        }

        .orange {
          background: #FF8000;
          color: #fff;
          border: 1px solid #FF8000;
        }

        .place_places {
          margin-top: 0.05rem;
          font-size: 0.12rem;
          color: #666666;
          background-size: 0.15rem 0.15rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .kilometers {
          font-size: 0.13rem;
          color: #888888;
          margin-top: 0.05rem;
          font-size: 0.12rem;
        }
        .moneytiker {
          width: 32%;
          text-align: right;
          color: rgb(255, 128, 0);
          font-size: 0.15rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
</style>
