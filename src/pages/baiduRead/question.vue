<template>
  <section class="section">
    <img class="content-img" src="https://qiniu-image.qtshe.com/act/baiduread/20180905/question_bg.png" alt=""/>
    <div class="content">
      <div class="content-title">
        <span class="span-title">{{questionData.questionDesc}}</span>
        <img class="ct2_icon2" src="https://qiniu-image.qtshe.com/act/baiduread/20180830/ct2_icon2.png" alt=""/>
        <img class="ct2_icon3" src="https://qiniu-image.qtshe.com/act/baiduread/20180830/ct2_icon3.png" alt=""/>
      </div>
      <ul class="ul-items">
        <li class="li-item" v-for="(item, index) in questionData.answer" :key="index" @click="itemClick(item)">
          <div class="li-item-text">{{item.key}}.{{item.value}}</div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import {mapState} from 'vuex'
import { Toast, Indicator } from 'mint-ui'
import setWechatTitle from 'setWechatTitle'
import util from 'util'

export default {
  data() {
    return {
      flagId: '',
      isQtsFlag: false,
      questionIndex: 0,
      answerList: [],
      questionData: {
        answer: [],
        correct: '',
        questionDesc: ''
      },
      resListData: []
    }
  },
  computed: {
    ...(mapState('temporary', {
      $name: function (state) {
        return state.readData.name || ''
      }
    }))
  },
  created() {
    this.isQtsFlag = this.$route.query.isQtsFlag
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.initShareInfo()
    this.flagId = this.$route.query.flagId || ''
    if (!this.$name || !this.flagId) {
      this.$router.replace({path: '/read', query: Object.assign({}, this.$route.query)})
    }
  },
  mounted() {
    setWechatTitle('百度阅读 Flag诊所')
    this.getData()
  },
  methods: {
    async getData() {
      try {
        Indicator.open({ spinnerType: 'fading-circle' })
        const res = await this.$axios.post('/activityCenter/baidu/read/get/question/list', {flagId: this.flagId}) // 获取题目列表
        Indicator.close()
        if (res.success) {
          this.resListData = res.data || []
          this.questionData = this.resListData[this.questionIndex] || {}
        } else {
          Toast(res.msg || '服务器错误，请稍后重试')
        }
      } catch (error) {
        console.log(error)
        Toast('网络错误，请稍后重试')
        Indicator.close()
      }
    },
    itemClick(item) {
      this.answerList.push(item.key)
      if (this.answerList.length >= this.resListData.length) {
        this.submit()
        return
      }
      this.questionIndex += 1
      this.questionData = this.resListData[this.questionIndex] || {}
    },
    async submit() {
      try {
        Indicator.open({ spinnerType: 'fading-circle' })
        const submitData = {
          flagId: this.flagId,
          name: this.$name,
          answer: this.answerList.join(',')
        }
        const res = await this.$axios.post('/activityCenter/baidu/read/commit/answer', submitData) // 提交答案
        Indicator.close()
        if (res.success) {
          this.$router.replace({path: '/read/share', query: Object.assign(this.$route.query, { recordId: res.data.recordId })})
        } else {
          Toast(res.msg || '服务器错误，请稍后重试')
        }
      } catch (error) {
        console.log(error)
        Toast('网络错误，请稍后重试')
        Indicator.close()
      }
    },
    initShareInfo() {
      this.interPackage.initShareInfo({
        title: '百度阅读Flag诊所',
        desc: '要想flag立得好，日常检查不能少',
        imgUrl: 'http://qiniu-qts-app.qtshe.com/act/20180903/baiduread/read_share_img.png'
      })
    }
  }
}
</script>
<style lang="less" scoped>
@dd: 300rem;
.section{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
  // background-image:url(https://qiniu-image.qtshe.com/act/baiduread/20180830/ct2_bg.png);
  // background-size: 100%;
  // background-repeat: repeat-y;
}
.content-img{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.content{
  width: 100%;
  height: 100%;
  padding-top: 183/@dd;
  overflow: auto;
}
.content-title{
  position: relative;
  top: 0;
  left: 0;
  width: 924/@dd;
  margin: 0 auto;
  padding: 70/@dd;
  background: #ffffff;
  border: 2px solid #000000;
  .span-title{
    font-size: 60/@dd;
    font-weight: 600;
  }
  .ct2_icon2{
    position: absolute;
    top: -90/@dd;
    left: -60/@dd;
    width: 155/@dd;
    height: 188/@dd;
  }
  .ct2_icon3{
    position: absolute;
    bottom: -30/@dd;
    right: -30/@dd;
    width: 171/@dd;
    height: 178/@dd;
  }
}
.ul-items{
  margin-top: 100/@dd;
  // background-image:url(https://qiniu-image.qtshe.com/act/baiduread/20180830/ct2_bg.png);
  // background-size: 100%;
  // background-repeat: repeat-y;
  .li-item{
    width: 880/@dd;
    margin:0 auto 70/@dd;
    padding: 2px;
    font-size: 40/@dd;
    background:#000000;
    background:linear-gradient(225deg,transparent 33/@dd,#000000 0);
    .li-item-text{
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 35/@dd 56/@dd;
      background:#ffffff;
      background:linear-gradient(225deg,transparent 33/@dd,#ffffff 0);
      &::before{
        content:'';
        position:absolute;
        top:0;
        right:0;
        background:linear-gradient(to left bottom,transparent 50%, #ffffff 0,#ffffff) 100% 0 no-repeat;
        width:45/@dd;
        height:45/@dd;
        transform-origin:bottom right;
        border-left: 2px solid #000000;
        border-bottom: 2px solid #000000;
      }
    }
  }
}
.ct2_icon1{
  position: absolute;
  top: 843/@dd;
  left: 0/@dd;
  width: 93/@dd;
  height: 133/@dd;
}
.ct2_bottom{
  font-size: 0;
  background-image:url(https://qiniu-image.qtshe.com/act/baiduread/20180830/ct2_bg.png);
  background-size: 100%;
  background-repeat: repeat-y;
}
.ct2_bottom_bg{
  font-size: 0;
  width: 100%;
}
</style>
/**
* @desc: 百度阅读活动
* @author: zengtiansheng
*/
