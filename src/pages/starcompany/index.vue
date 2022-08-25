<style scoped lang="less">
.container {
    width: 100vw;
    background-color: #000841;
    height: 100vh;
    overflow: hidden;

    & > img {
        display: block;
        width: 100%;
    }
}
.headertit {
    position: fixed;
    top: 0;
    height: 0.5rem;
    line-height: 0.5rem;
    background: transparent;
    max-width: 750px;
    z-index: 666;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.status-bar {
    top: 0.1rem;
}
.back-btn {
    display: block;
    width: 0.095rem;
    height: 0.17rem;
    margin: auto 0.17rem;
}
.headcenter {
    color: white;
    margin: auto;
    font-size: 0.18rem;
}
.share-btn {
    display: block;
    width: 0.17rem;
    height: 0.17rem;
    margin: auto 0.17rem;
}
.list-container {
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    overflow-x: hidden;
    flex: 1;
    height: 78vh;

    &::-webkit-scrollbar {
        display: none;
        background-color: transparent;
    }
}
.job-list {
    margin: 0 auto;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;

    &::-webkit-scrollbar {
        display: none;
        background-color: transparent;
    }
}
.job-list-app {
    height: 5.4rem;
}
.job-item {
    flex: 1;
    border-bottom: 1px solid #eee;
    display: flex;
}
.job-link {
    margin: 0.12rem;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.item-head {
    display: flex;
    margin-bottom: 0.1rem;
    align-items: center;
    justify-content: space-between;
    &:last-of-type {
        margin-bottom: 0;
    }
}

.position {
    color: #333;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.16rem;
}

.salary {
    color: #FA5A5A;
    font-size: 0.14rem;
}

.item-time {
    font-size: 0.12rem;
    color: #999;
    flex: 1;
}

.item-hot {
    font-size: 0.12rem;
    color: #999;
    position: relative;
    &:before {
        display: block;
        content: '';
        background: url('https://qiniu-image.qtshe.com/hot-20170708.png') no-repeat;
        background-size: contain;
        width: 0.15rem;
        height: 0.15rem;
        position: absolute;
        left: -.15rem;
    }
}

.location {
    font-size: 0.12rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: justify;
    color: #999;
    flex: 1;
}

.company {
    display: flex;
    align-items: center;

    .company-logo {
        color: #999;
        width: 0.15rem;
        height: 0.15rem;
    }

    .company-name {
        font-size: 0.1rem;
        color: #999;
        margin-left: 0.05rem;
    }
}

.content-container {
    position: relative;
    top: -.54rem;
    margin: 0 0.13rem;
    background-color: white;
    transition: top 0.3s;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    -webkit-overflow-scrolling: scroll;
    display: flex;
    flex-direction: column;
}
.navHoldBar {
    flex: 1;
    height: 0.44rem;
    z-index: 100;
    background: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.navBar {
    display: flex;
    justify-content: space-around;
    flex: 1;
    font-size: 0.15rem;
    color: #666;
    border-bottom: 1px solid #eee;
    position: relative;
    z-index: 200;
    height: 0.44rem;
    padding: 0.1rem 0;

    .nav-item-active {
        position: relative;
        &:after {
            content: '';
            display: block;
            position: absolute;
            height: 0.02rem;
            width: 100%;
            transform: translateX(-50%);
            left: 50%;
            background-color: #00CC88;
            bottom: -.1rem;
        }
    }

    .nav-item {
        position: relative;
        &:after {
            display: none;
        }
    }
}
.scroll-loading {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.1rem;

    img {
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.1rem;
        display: block;
    }

    span {
        font-size: 0.12rem;
        color: #999;
        display: inline-block;
        height: 0.2rem;
        line-height: 0.2rem;
    }
}
</style>
<template>
<div class="container">
  <img src="https://qiniu-image.qtshe.com/sc_bg20170714.png">
  <div :class="'headertit ' + statusBarClass" v-if="showHeader">
    <img class="back-btn" @click="back" src="https://qiniu-image.qtshe.com/sc_back.png">
    <span class="headcenter">上海·明星雇主</span>
    <img class="share-btn" @click="share" src="https://qiniu-image.qtshe.com/sc_share.png">
  </div>
  <div class="content-container">
    <div class="navHoldBar">
      <ul class="navBar">
        <li v-for="tab in tabs" :class="currentActiveTab === tab.id ? 'nav-item-active' : 'nav-item'" @click="jumpPanel(tab.id)">{{tab.name}}</li>
      </ul>
    </div>
    <div class="list-container">
      <ul class="job-list">
        <li class="job-item" v-if="type === 1" v-for="partJob in foodPartJobs">
          <a class="job-link" @click="jumpToPartJobDetail(partJob.partJobId, partJob.category)">
            <div class="item-head">
              <span class="position">{{partJob.partJobTitle || ''}}</span>
              <span class="salary">{{partJob.salary || ''}}</span>
            </div>
            <div class="item-head">
              <span class="item-time">{{partJob.newJobStandTime || ''}}</span>
              <span class="item-hot">{{partJob.hotScore || 0}}</span>
            </div>
            <div class="item-head">
              <span class="location">{{partJob.addressBuilding || ''}}</span>
              <div class="company">
                <img class="company-logo" :src="partJob.partJobLogo || 'https://qiniu-image.qtshe.com/20170615logo.jpeg'">
                <span class="company-name">{{partJob.brandName ? partJob.brandName.substring(0, 6) : ''}}</span>
              </div>
            </div>
          </a>
        </li>
        <li class="job-item" v-if="type === 2" v-for="partJob in realtyPartJobs">
          <a class="job-link" @click="jumpToPartJobDetail(partJob.partJobId, partJob.category)">
            <div class="item-head">
              <span class="position">{{partJob.partJobTitle || ''}}</span>
              <span class="salary">{{partJob.salary || ''}}</span>
            </div>
            <div class="item-head">
              <span class="item-time">{{partJob.newJobStandTime || ''}}</span>
              <span class="item-hot">{{partJob.hotScore || ''}}</span>
            </div>
            <div class="item-head">
              <span class="location">{{partJob.addressBuilding || ''}}</span>
              <div class="company">
                <img class="company-logo" :src="partJob.partJobLogo || 'https://qiniu-image.qtshe.com/20170615logo.jpeg'">
                <span class="company-name">{{partJob.brandName ? partJob.brandName.substring(0, 6) : ''}}</span>
              </div>
            </div>
          </a>
        </li>
        <li class="scroll-loading" v-show="scrollLoading">
          <img v-show="bottomImgShow" src="https://qiniu-image.qtshe.com/20160409-weixinload.gif" />
          <span>{{bottomtext}}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import util from 'util'
import toast from 'toast'
import setWechatTitle from 'setWechatTitle'

export default {
  data() {
    return {
      showHeader: true,
      interPackage: {},
      tabs: [{
        id: 0,
        name: '餐饮'
      },
      {
        id: 1,
        name: '房地产'
      }
      ],
      currentActiveTab: 0,
      foodPartJobs: [],
      realtyPartJobs: [],
      pageNum: 0,
      pageSize: 10,
      scrollLock: false,
      scrollLoading: false,
      bottomImgShow: false,
      bottomtext: '上拉加载更多',
      type: 1,
      statusBarClass: ''
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    if (util.isIosApp()) {
      this.statusBarClass = 'status-bar'
    }
    if (util.isAndroidApp() || util.isIosApp()) {
      this.showHeader = true
      this.interPackage.displayAppHead(false)
    } else {
      this.showHeader = false
    }
  },
  mounted() {
    setWechatTitle('上海·明星雇主')
    window.MtaH5 && window.MtaH5.clickStat(`starcompany_visitBy${util.getAppVersion()}`)
    // 初始化自定义分享内容
    this.interPackage.initShareInfo({
      title: '上海兼职·明星雇主',
      desc: '完备的培训体系、富有竞争力的薪酬、超nice的同事伙伴',
      imgUrl: 'https://qiniu-image.qtshe.com/20170615logo.jpeg'
    })
    this.getPartJobs()
    this.$nextTick(function() {
      let startX, startY, endX, endY
      let stage = 0
      document.addEventListener('touchstart', (ev) => {
        startX = ev.touches[0].pageX
        startY = ev.touches[0].pageY
      }, false)
      document.addEventListener('touchend', (ev) => {
        endX = ev.changedTouches[0].pageX
        endY = ev.changedTouches[0].pageY
        let direction = this.getSlideDirection(startX, startY, endX, endY)
        if (direction === 'up') {
          let container = document.querySelector('.content-container')
          container.style.top = '-2.1rem'
        } else {}
      }, false)
      this.scroll(function(direction, currentOffset) {})
    })
  },
  methods: {
    jumpToPartJobDetail(partJobId, category) {
      if (category === 'COMMON_PART_JOB') {
        this.interPackage.evokeNormalPartJobDetailPage(partJobId)
      } else {
        this.interPackage.evokePerfectPartJobDetailPage(partJobId)
      }
    },
    getSlideDirection(startX, startY, endX, endY) {
      let dy = startY - endY
      let result = ''
      if (dy > 0) {
        result = 'up'
      } else {
        result = 'down'
      }
      return result
    },
    jumpPanel(tabId) {
      if (tabId === 0) {
        this.currentActiveTab = 0
        this.pageNum = 0
        this.type = 1
        this.getPartJobs()
      } else {
        this.currentActiveTab = 1
        this.pageNum = 0
        this.type = 2
        this.getPartJobs()
      }
    },
    getPartJobs() {
      this.$axios.post('/activity/partJob/listByCompanyType', {
        type: this.type,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then((data) => {
        if (data.success) {
          if (data.data) {
            if (this.type === 1) {
              this.foodPartJobs = data.data.partJobs
            } else {
              this.realtyPartJobs = data.data.partJobs
            }
          }
        } else {
          toast(data.errMsg, 3000)
        }
      })
    },
    getMorePartJobs() {
      this.$axios.post('/activity/partJob/listByCompanyType', {
        type: this.type,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then((data) => {
        if (data.success) {
          if (data.data) {
            if (this.type === 1) {
              this.foodPartJobs = this.foodPartJobs.concat(data.data.partJobs)
              if (!data.data.foodPartJobs || data.data.foodPartJobs.length === 0) {
                this.scrollLoading = true
                this.bottomtext = '暂无更多数据'
                this.bottomImgShow = false
                this.scrollLock = true
              } else {
                this.foodPartJobs = this.foodPartJobs.concat(data.data.foodPartJobs ? data.data.foodPartJobs : [])
                this.scrollLoading = false
                this.bottomtext = '上拉加载更多'
                this.bottomImgShow = false
                this.scrollLock = false
              }
            } else {
              this.realtyPartJobs = this.realtyPartJobs.concat(data.data.partJobs)
              if (!data.data.realtyPartJobs || data.data.realtyPartJobs.length === 0) {
                this.scrollLoading = true
                this.bottomtext = '暂无更多数据'
                this.bottomImgShow = false
                this.scrollLock = true
              } else {
                this.realtyPartJobs = this.realtyPartJobs.concat(data.data.realtyPartJobs ? data.data.realtyPartJobs : [])
                this.scrollLoading = false
                this.bottomtext = '上拉加载更多'
                this.bottomImgShow = false
                this.scrollLock = false
              }
            }
          }
        } else {
          toast(data.errMsg, 3000)
        }
      })
    },
    // 点击返回按钮
    back() {
      this.interPackage.appButtonCloseWebview()
    },
    // 点击分享按钮
    share() {
      this.interPackage.evokeSharePanel({
        title: '上海兼职·明星雇主',
        desc: '完备的培训体系、富有竞争力的薪酬、超nice的同事伙伴',
        imgUrl: 'https://qiniu-image.qtshe.com/20170615logo.jpeg'
      })
    },
    scroll(fn) {
      let that = this
      let listDom = document.querySelector('.list-container')
      let beforeScrollTop = listDom.scrollTop
      let func = fn || function() {}
      listDom.addEventListener('scroll', function() {
        that.judgeIsBottom()
        let afterScrollTop = listDom.scrollTop
        let delta = afterScrollTop - beforeScrollTop
        if (delta === 0) return
        func(delta > 0 ? 'down' : 'up', afterScrollTop)
        beforeScrollTop = afterScrollTop
      }, false)
    },
    judgeIsBottom() {
      if (!this.scrollLock) {
        let listDom = document.querySelector('.list-container')
        if (listDom.scrollTop + listDom.clientHeight > listDom.scrollHeight - 10) {
          this.scrollLoading = true
          this.bottomImgShow = true
          this.scrollLock = true
          this.pageNum += 1
          this.getMorePartJobs()
        }
      }
    }
  }
}
</script>
