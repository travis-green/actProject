<style lang='less' scoped>
.body {
  width: 100%;
  margin: 0 auto;
  padding: 0.16rem 0 0 0;
  .header-container {
    position: relative;
    .header {
      width: 100%;
      height: 1.99rem;
      display: block;
    }
    .imgage-cover {
      width:100%;
      height:0.16rem;
      background:rgba(255,255,255,1);
      border-radius:0.16rem 0.16rem 0 0;
      position: absolute;
      bottom: 0;
      left: 0;
    }

  }
  .toptips {
    width: 100%;
    float: left;
    .parttips {
      width: 70%;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      background: #ffc704;
      color: #fff;
      margin: 0.2rem auto;
      border-radius: 0.2rem;
      font-size: 0.12rem;
    }
  }
  .partlist {
    width: 3.43rem;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    .list-item {
      width: 100%;
      min-height: 0.88rem;
      padding: 0.18rem 0;
      border-bottom: 1px solid #f5f5f5;
    }
    .item-title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: #3c3c3c;
      font-size: 0.16rem;
      margin-bottom: 0.08rem;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
      font-family:PingFangSC-Medium,PingFang SC;
    }
    .item-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .item-left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .item-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .item-tag {
      padding: 0.01rem 0.04rem;
      font-size: 0.1rem;
      border-radius: 0.03rem;
      margin-right: 0.04rem;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(255,246,228,1);
      line-height:0.14rem;
      overflow: hidden;

    }
    .top-tag {
      background:rgba(254,168,0,1);
    }
    .new-tag {
      background:rgba(254,168,0,1);
    }
    .discuss-tag {
      background:rgba(0,204,136,1);
    }
    .vote-tag {
      background:rgba(0,204,136,1);
    }
    .finish-tag {
      background:rgba(204,204,204,1);
    }
    .item-salary {
      font-size:0.12rem;
      color:rgba(255,128,0,1);
      line-height:0.18rem;
      letter-spacing:0.005rem
    }
    .item-num {
      font-size:0.16rem;
      font-weight:600;
      font-family:PingFangSC-Semibold,PingFang SC;
      margin-right: 0.01rem;
    }
    .time {
    background:rgba(204,204,204,1);
    font-size: 0.12rem;
  }
  }
  .loading {
    text-align: center;
    background: #fff;

    .flexcenter {
      width: 1.2rem;
      margin: 0 auto;
      text-align: center;
      line-height: 0.35rem;

      img {
        width: 0.18rem;
        height: 0.18rem;
        float: left;
        margin-top: 0.08rem;
      }
    }

    .loadtips {
      font-size: 0.11rem;
      color: #999;
      float: left;
      margin-left: 0.1rem;
    }
  }
}
</style>
<template>
  <div class="body">
    <div class="header-container">
      <img :src="banner || 'https://qiniu-image.qtshe.com/smallTopicBanner.png'" alt="" class="header" />
      <div class="imgage-cover"></div>
    </div>

    <ul class="partlist">
      <li v-for="(item, index) in list" :key="index" @click="showAction(item.id, item.type)" class="list-item" v-clickEvents="{ businessId: item.id, businessType: 10, index: index, position: 'topicList'}">
        <div class="item-title">
          {{item.title}}
        </div>
        <div class="item-content">
          <div class="item-left">
            <div class="item-tag top-tag" v-if="index===0">置顶</div>
            <div class="item-tag new-tag" v-if="index>0&&index<3">最新</div>
            <div class="item-tag finish-tag" v-if="item.participate">已参与</div>
            <div class="item-tag discuss-tag" v-if="!item.participate && item.type===3">讨论</div>
            <div class="item-tag discuss-tag" v-if="!item.participate && item.type===4">调研</div>
            <div class="item-tag vote-tag" v-if="!item.participate && (item.type === 1 || item.type === 2)">投票</div>
          </div>
          <div class="item-right">
            <div class="item-salary" v-if="item.salary"><span class="item-num">+{{item.num}}</span>{{item.unit}}</div>
          </div>
        </div>

      </li>
    </ul>
    <div class="loading" v-if="loading">
      <div class="flexcenter">
        <img v-if="imgshow" src="https://qiniu-image.qtshe.com/qtsloading.gif" />
        <div class="loadtips">{{bottomtext}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import {
  Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      interPackage: {},
      list: [],
      color: util.getQueryString('color') ? util.getQueryString('color') : 'ffc704',
      form: {
        portStatus: 3,
        pageNum: 1,
        pageSize: 10,
        townId: util.getCookie('townId') || 87,
        appKey: util.getAppkey()
      },
      stop: true,
      loading: false,
      bottomtext: '上拉加载更多',
      imgshow: true,
      getDataLoading: false,
      moreData: true,
      appKey: util.getAppkey()
    }
  },
  methods: {
    getAppToken() {
      if (util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            util.setCookie('token', data.token)
          }
          if (data.jwtToken) {
            util.setCookie('jwttoken', data.jwtToken)
          }
          this.form.portStatus = 1
          this.initData()
        })
      } else if (util.isAndroidApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            util.setCookie('token', data.token)
          }
          if (data.jwtToken) {
            util.setCookie('jwttoken', data.jwtToken)
          }
          this.form.portStatus = 2
          this.initData()
        })
      } else {
        this.initData()
      }
    },
    initImage() {
      this.$axios.post('/tagCenter/coreTag/getById', { tagId: 815, appKey: this.appKey }).then((res) => {
        if (res.success) {
          this.banner = res.data.image
          this.interPackage.setNavTitle('你好，2020！')
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      })
    },
    initData() {
      Indicator.open()
      this.stop = false
      this.$axios.post('/activityCenter/answer/activity/list', this.form).then((res) => {
        Indicator.close()
        if (res.success) {
          const { data = {} } = res
          const { results = [], totalCount } = data
          results.forEach(item => {
            item.num = item.salary.replace(/[^0-9]/ig, '')
            item.unit = item.salary.slice(item.num.length)
          })
          this.list = results
          if (this.list.length < totalCount) {
            this.moreData = true
            window.addEventListener('scroll', this.checksroll)
          } else {
            this.moreData = false
          }
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
        this.stop = true
      })
    },
    checksroll() {
      if (document.body.scrollTop + window.screen.height >= document.body.scrollHeight || document.documentElement.scrollTop + window.screen.height >= document.body.scrollHeight) {
        if (this.moreData) {
          this.loading = true
          this.getDataMore()
        } else {
          return
        }
        this.loading = true
      }
    },
    getDataMore() {
      if (this.stop) {
        this.form.pageNum++
        this.stop = false
        this.$axios.post('/activityCenter/answer/activity/list', this.form).then((res) => {
          if (res.success) {
            const { data = {} } = res
            const { results = [], totalCount } = data
            results.forEach(item => {
              item.num = item.salary.replace(/[^0-9]/ig, '')
              item.unit = item.salary.slice(item.num.length)
            })
            this.list = this.list.concat(results)
            if (this.list.length < totalCount) {
              this.moreData = true
              this.bottomtext = '上拉加载更多'
              this.loading = true
            } else {
              this.moreData = false
              this.bottomtext = '暂无更多数据'
              this.imgshow = false
              setTimeout(() => {
                this.loading = false
              }, 2000)
            }
          } else {
            toast(res.msg || '服务器错误，请稍后再试')
          }
          this.stop = true
        })
      }
    },
    showAction(id, type) {
      window.MtaH5 && window.MtaH5.clickStat('smalltopic_' + id)
      window.location.href = `smallsecond?id=${id}`
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '每日热点话题等你讨论',
        desc: '看看年轻人都怎么说：',
        imgUrl: 'https://qiniu-image.qtshe.com/20181016WechatIMG1611%20%281%29.png'
      })
    }
  },
  mounted() {
    this.sharebanner()
    this.initImage()
    if (util.getQueryString('token')) {
      util.setCookie('token', util.getQueryString('token'))
    }
    this.getAppToken()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  destroyed() {
    window.removeEventListener('scroll', this.checksroll)
  }
}
</script>
