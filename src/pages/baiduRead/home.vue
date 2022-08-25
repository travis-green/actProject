<template>
  <section class="section">
    <div class="content-init" v-show="showContentFlag === 1">
      <img class="content-img" src="https://qiniu-image.qtshe.com/act/baiduread/20180905/home_page_bg.png" alt=""/>
      <div class="btn-next" @click="btnNextClick"></div>
    </div>
    <div class="content-list" v-show="showContentFlag === 2">
      <img class="content-img" src="https://qiniu-image.qtshe.com/act/baiduread/20180905/content_tow_qtsbg.png" alt="" v-if="isQtsFlag"/>
      <img class="content-img" src="https://qiniu-image.qtshe.com/act/baiduread/20180905/content_tow_bg2.png" alt="" v-else/>
      <div class="name-input">
        <span class="span-text">患者姓名：</span><input class="input-content" placeholder="请输入您的姓名" v-model="name">
      </div>
      <div class="content-question">
        <div class="question-item" :class="{'question-item-qts':isQtsFlag}" v-for="(item, index) in resListData" :key="index" @click="selectItemClick(item)"></div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import { Toast, Indicator } from 'mint-ui'
import setWechatTitle from 'setWechatTitle'
import util from 'util'

const CONTENT_ONE = 1
const CONTENT_TOW = 2
let FLAG_LIST = [
  {flagId: 1},
  {flagId: 2},
  {flagId: 3},
  {flagId: 4},
  {flagId: 5}
]
export default {
  data() {
    return {
      name: '',
      isQtsFlag: false,
      showContentFlag: 0,
      resListData: []
    }
  },
  computed: {
    ...mapState('temporary', {
      $name: function (state) {
        return state.readData.name || ''
      }
    })
  },
  created() {
    this.isQtsFlag = this.$route.query.isQtsFlag
  },
  mounted() {
    setWechatTitle('百度阅读 Flag诊所')
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.initShareInfo()
    const flagList = [...FLAG_LIST]
    if (this.isQtsFlag) {
      flagList.pop()
    }
    this.resListData = flagList
    if (!this.$name) {
      this.showContentFlag = CONTENT_ONE
    } else {
      this.name = this.$name
      this.showContentFlag = CONTENT_TOW
      //this.getData()
    }
  },
  methods: {
    ...mapActions('temporary', {
      READ_DATA: 'READ_DATA'
    }),
    btnNextClick() {
      this.showContentFlag = CONTENT_TOW
      //this.getData()
    },
    async getData() {
      try {
        Indicator.open({ spinnerType: 'fading-circle' })
        const res = await this.$axios.post('/activityCenter/baidu/read/get/flag/list') // 获取flag列表
        Indicator.close()
        if (res.success) {
          this.resListData = res.data || []
          this.showContentFlag = CONTENT_TOW
        } else {
          Toast(res.msg || '服务器错误，请稍后重试')
        }
      } catch (error) {
        console.log(error)
        Toast('网络错误，请稍后重试')
        Indicator.close()
      }
    },
    selectItemClick(val) {
      if (!this.name) {
        Toast('请输入您的姓名')
        return
      }
      if (this.name.length > 9) {
        Toast('姓名不能超过9个字符')
        return
      }
      this.READ_DATA({ name: this.name })
      this.$router.replace({path: '/read/question', query: Object.assign(this.$route.query, {flagId: val.flagId})})
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
  width: 100%;
  height: 100%;
}
.content-img{
  width: 100%;
  height: 100%;
}
.content-init{
  position: relative;
  top: 0;
  left: 0;
  font-size: 0;
  width: 100%;
  height: 100%;
  .btn-next{
    position: absolute;
    bottom: 260/@dd;
    left: 0;
    right: 0;
    width: 100%;
    height: 200/@dd;
  }
}
.content-list{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 1800/@dd;
  // background-image:url(https://qiniu-image.qtshe.com/act/baiduread/20180830/ct1_bg.png);
  // background-size: 100%;
  // background-repeat: repeat-y;
  font-size: 0;
  .name-input{
    position: absolute;
    top: 0;
    left: 0;
    padding: 148/@dd 0 0 82/@dd;
  }
  .span-text{
    font-size: 44/@dd;
    font-weight: 600;
  }
  .span-text2{
    .span-text;
    margin-left: 82/@dd;
  }
  .input-content {
    width: 456/@dd;
    height: 90/@dd;
    outline: none;
    border: 1px solid #000000;
    font-size: 40/@dd;
    text-align: center;
  }
  .content-question{
    position: absolute;
    top: 400/@dd;
    left: 0;
    width: 100%;
    .question-item{
      width: 100%;
      height: 223/@dd;
      margin-bottom: 50/@dd;
    }
    .question-item-qts{
      height: 235/@dd;
      margin-bottom: 90/@dd;
    }
  }
}
.li-item{
  margin-top: 20/@dd;
}
</style>
/**
* @desc: 百度阅读活动
* @author: zengtiansheng
*/
