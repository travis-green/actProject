<style lang='less'>
.body {
  padding-bottom: 0.16rem;
  position: relative;
  .join-container {
    position: absolute;
    width: 0.88rem;
    height: 0.36rem;
    background: #47cd88;
    border-radius: 0.05rem;
    right: 0.16rem;
    top: 0.16rem;
    box-sizing: content-box;
    z-index: 2;
    padding-top: 0.04rem;
    .join-text {
      font-size: 0.14rem;
      height: 0.2rem;
      line-height: 0.2rem;
      text-align: center;
      color: #fff;
      font-weight: bold;
    }
    .join-text-small {
      font-size: 0.1rem;
      opacity: 0.8;
      line-height: 0.14rem;
      text-align: center;
      color: #fff;
    }
  }
  .header {
    width: 100%;
    position: relative;
    z-index: 1;
    img {
      display: block;
      width: 100%;
    }
    .header-mask {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0.3rem;
      background: #fff;
      border-radius: 0.16rem 0.16rem 0 0;
      width: 100%;
    }
  }
  .partjob-main {
    width: 3.43rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    .part-title {
      font-size: 0.2rem;
      color: #3c3c3c;
    }
    .part-content {
      overflow: hidden;
      white-space: pre-line;
      font-size: 0.14rem;
      color: #6c6c6c;
      line-height: 0.2rem;
      margin-top: 0.1rem;
      margin-bottom: 0.24rem;
    }
    .green-line {
      width: 0.32rem;
      height: 0.06rem;
      background: #00cc88;
      border-radius: 0.03rem;
    }
    textarea {
      width: 100%;
      padding: 0.13rem 0.16rem;
      background: #f5f6fa;
      height: 1.1rem;
      font-size: 0.14rem;
      border-radius: 0.08rem;
      color: #3c3c3c;
      border: 0 none;
      margin-top: 0.16rem;
      resize: none;
    }
    .input-content {
      width: 100%;
      padding: 0.13rem 0.16rem;
      background: #f5f6fa;
      font-size: 0.14rem;
      border-radius: 0.08rem;
      color: #3c3c3c;
      border: 0 none;
      margin-top: 0.16rem;
    }
    textarea::placeholder {
      color: #9c9c9c;
    }
    .joincont {
      width: 100%;
      height: 0.48rem;
      line-height: 0.48rem;
      background: #47cc88;
      text-align: center;
      border-radius: 0.04rem;
      font-size: 0.16rem;
      color: #fff;
      font-weight: bold;
      margin-top: 0.24rem;
    }
    .joingray {
      width: 100%;
      height: 0.48rem;
      line-height: 0.48rem;
      background: #cccccc;
      text-align: center;
      border-radius: 0.04rem;
      font-size: 0.16rem;
      color: #fff;
      font-weight: bold;
      margin-top: 0.24rem;
    }
  }
  .options-container {
    width: 3.43rem;
    margin: 0 auto;
    padding-top: 0.32rem;
    .options-title {
      color: #3c3c3c;
      font-size: 0.16rem;
      font-weight: bold;
    }
    .options-item {
      width: 100%;
      padding: 0.16rem;
      background: #f5f6fa;
      margin-top: 0.16rem;
      border-radius: 0.08rem;
    }
    .options-item-active {
      .item-label {
        color: #00cc88;
        font-weight: bold;
      }
    }
    .item-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .item-icon {
      width: 0.16rem;
      height: 0.16rem;
      margin-right: 0.24rem;
    }
    .item-label {
      color: #3c3c3c;
      font-size: 0.14rem;
      word-break: break-all;
      max-width: 2.64rem;
    }
    .mt-progress {
      height: 0.1rem;
      line-height: 0.1rem;
      margin-top: 0.16rem;
      color: #3c3c3c;
      font-size: 0.12rem;
      font-weight: bold;
      .mt-progress-runway {
        border-radius: 0.05rem;
        background: #fff;
      }
      .mt-progress-progress {
        border-radius: 0.05rem;
        background: #00cc88;
      }
    }
  }
  .padding-top-24 {
    padding-top: 0.24rem;
  }
}
</style>
<template>
<div class="body">
  <div class="join-container" v-if="turnout>0">
    <div class="join-text">{{turnout}}</div>
    <div class="join-text-small">人参与</div>
  </div>
  <div class="header">
     <img :src="jobPhoto" alt="">
     <div class="header-mask"></div>
  </div>
  <div class="partjob-main">
    <div class="part-title">{{title}}</div>
    <div class="part-content">{{introduce}}</div>
    <div class="green-line"></div>
    <div v-for="(item, index) in questions" :key="index" v-bind:class="{'options-container': true, 'padding-top-24': index === 0 }">
      <div v-if="item.type === 3">
        <div class="options-title">{{item.content}}</div>
        <textarea v-if="!participate" placeholder="请输入…" v-model.trim="item.userRemark" @input="inputHandle(index)"></textarea>
        <div class="input-content" v-else>{{item.userRemark}}</div>
      </div>
      <div v-if="item.type === 1 || item.type === 4">
        <div class="options-title">{{item.content}}（单选）</div>
        <div v-bind:class="{'options-item': true, 'options-item-active': n.num === item.numOrders }" v-for="(n, m) in item.optionVO" :key="m" @click="selectRadio(index, n.num)">
          <div class="item-content">
            <img src="https://qiniu-image.qtshe.com/20190531_checkboxActiveIcon.png" class="item-icon" v-if="n.num === item.numOrders" />
            <img src="https://qiniu-image.qtshe.com/20190531_checkboxIcon.png" class="item-icon" v-else/>
            <div class="item-label">{{n.content}}</div>
          </div>
          <mt-progress :value="n.percentage" :bar-height="8" v-if="participate && showPercentage">
            <div slot="end" style="margin-left:0.18rem;width:0.32rem">{{n.percentage}}%</div>
          </mt-progress>
        </div>
      </div>
      <div v-if="item.type === 2 || item.type === 5">
        <div class="options-title">{{item.content}}（多选）</div>
          <div v-bind:class="{'options-item': true, 'options-item-active': n.show}" v-for="(n, m) in item.optionVO" :key="m" @click="selectCheckBox(index, n.num)">
          <div class="item-content">
            <img src="https://qiniu-image.qtshe.com/20190531_checkboxActiveIcon.png" class="item-icon" v-if="n.show"/>
            <img src="https://qiniu-image.qtshe.com/20190531_checkboxIcon.png" class="item-icon" v-else/>
            <div class="item-label">{{n.content}}</div>
          </div>
          <mt-progress :value="n.percentage" :bar-height="8" v-if="participate && showPercentage">
            <div slot="end" style="margin-left:0.18rem;width:0.32rem">{{n.percentage}}%</div>
          </mt-progress>
        </div>
      </div>
    </div>
    <div :class="{'joincont':true, 'joingray': !btnStatus}" v-if="!participate" @click="applyJob" v-clickEvents="{ businessId: id, businessType: 10, position: 'topicApply'}">提交</div>
    <div class="joingray" v-else>已提交</div>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import toast from 'toast'
import util from 'util'
import setWechatTitle from 'setWechatTitle'
import {
  Indicator,
  Progress
} from 'mint-ui'
Vue.component(Progress.name, Progress)
export default {
  data() {
    return {
      interPackage: {},
      jobPhoto: '',
      introduce: '',
      title: '',
      questions: [],
      token: '',
      participate: false,
      turnout: 0,
      btnStatus: false,
      shareUrl: '',
      id: util.getQueryString('id'),
      category: '',
      shareUserId: util.getQueryString('shareUserId'),
      appKey: util.getAppkey(),
      showPercentage: false // 是否展示百分比
    }
  },
  methods: {
    getAppToken() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
          }
          this.initData()
        })
      } else {
        if (util.getToken()) {
          this.token = util.getToken()
        }
        this.initData()
      }
    },
    initData() {
      let postData = {
        token: this.token,
        id: this.id,
        appKey: this.appKey
      }
      Indicator.open()
      this.$axios.post('/activityCenter/answer/activity/details', postData).then((res) => {
        Indicator.close()
        if (res.success) {
          const {
            data = {}
          } = res
          const {
            introduce,
            jobPhoto = 'https://qiniu-image.qtshe.com/1125620.jpg',
            title,
            turnout,
            participate,
            userId,
            category = 0,
            questions = [],
            showPercentage = false
          } = data
          this.jobPhoto = jobPhoto || 'https://qiniu-image.qtshe.com/1125620.jpg'
          this.introduce = introduce
          this.title = title
          this.category = category
          this.shareUrl = userId ? `${window.location.href}&shareUserId=${userId}` : window.location.href
          this.turnout = turnout
          this.participate = participate
          this.showPercentage = showPercentage
          questions.forEach(item => {
            if (item.type === 3) {
              item.userRemark = item.userRemark || ''
            } else if (item.type === 1 || item.type === 4) {
              item.numOrders = ''
              item.optionVO.forEach(i => {
                if (i.show) {
                  item.numOrders = i.num
                }
              })
            } else {
              item.numOrders = ''
            }
          })
          this.questions = questions || []
          this.interPackage.setNavTitle(title || '你好，2020！')
          setWechatTitle(title || '你好，2020！')
        } else {
          toast(res.msg)
        }
      })
    },
    applyJob() {
      if (!this.btnStatus) {
        return
      }
      if (!this.token) {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.eventEmitter()
          this.interPackage.loginHandler(data => {
            this.token = data.token
            if (data.jwtToken) {
              util.setCookie('jwttoken', data.jwtToken)
            }
            this.initData()
          })
        } else {
          util.goLogin()
        }
      } else {
        let arr = JSON.parse(JSON.stringify(this.questions))
        let answerJson = []
        arr.forEach(item => {
          if (item.type === 3) {
            answerJson.push({ answerArticleId: item.answerArticleId, userRemark: item.userRemark, type: item.type })
          } else {
            answerJson.push({ answerArticleId: item.answerArticleId, numOrders: item.numOrders, type: item.type })
          }
        })
        let postData = {
          token: this.token,
          id: this.id,
          shareUserId: this.shareUserId ? this.shareUserId : '',
          appKey: this.appKey,
          answerJson: JSON.stringify(answerJson)
        }
        Indicator.open()
        this.$axios.post('/activityCenter/answer/activity/v2/submission', postData).then((res) => {
          Indicator.close()
          if (res.success) {
            if (this.category === 1) {
              this.$router.push({
                path: `/smalltopic/smallthird?category=1&id=${res.data.applyId}&score=${res.data.score}`
              })
            } else {
              this.$router.push({
                path: `/smalltopic/smallthird?&id=${res.data.applyId}&score=${res.data.score}`
              })
            }
          } else {
            toast(res.msg || '服务器错误，请稍后再试')
          }
        }).catch(e => {
          Indicator.close()
          toast('提交讨论失败，请重新再试')
        })
      }
    },
    // 点击分享按钮回调
    shareModel() {
      this.interPackage.evokeSharePanel({
        title: this.title,
        desc: '看看年轻人都怎么说：',
        link: this.shareUrl,
        imgUrl: 'https://qiniu-image.qtshe.com/20181016WechatIMG1611%20%281%29.png'
      })
    },
    selectRadio(index, optionIndex) {
      if (this.participate) {
        return
      }
      this.questions[index].numOrders = optionIndex
      this.btnCheck()
    },
    selectCheckBox(index, optionIndex) {
      if (this.participate) {
        return
      }
      let arr = this.questions[index].numOrders === '' ? [] : JSON.parse(JSON.stringify(this.questions[index].numOrders.split(',')))
      let checkIndex = arr.indexOf(optionIndex.toString())
      if (checkIndex > -1) {
        arr.splice(checkIndex, 1)
      } else {
        arr.push(optionIndex.toString())
      }
      this.questions[index].numOrders = arr.join(',')
      this.questions[index].optionVO[optionIndex - 1].show = !this.questions[index].optionVO[optionIndex - 1].show
      this.btnCheck()
    },
    inputHandle(index) {
      let val = this.questions[index].userRemark
      if (val.length === 0) {
        this.btnStatus = false
        return
      }
      this.btnCheck()
    },
    btnCheck() {
      let status = true
      this.questions.forEach(item => {
        if (item.type === 3 && item.userRemark === '') {
          status = false
          return
        }
        if ((item.type === 1 || item.type === 2 || item.type === 4 || item.type === 5) && item.numOrders === '') {
          status = false
          return
        }
      })
      this.btnStatus = status
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: this.title,
        desc: '看看年轻人都怎么说：',
        link: this.shareUrl,
        imgUrl: 'https://qiniu-image.qtshe.com/20181016WechatIMG1611%20%281%29.png'
      })
    }
  },
  mounted() {
    this.getAppToken()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
