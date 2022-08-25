<template>
  <div class="container" :style="preventScroll?'overflow:hidden;':'overflow:auto;'">
    <div class="header">
        <img class="contactIcon" src="https://qiniu-image.qtshe.com/newPersonWelfare/contactService.png" @click="contact"/>
        <img src="https://qiniu-image.qtshe.com/newPersonWelfare/newPersonWelfareTopTitle.png" class="header-title"/>
        <div class="topDes">额外最高可多赚<span>{{defaultAmount}}元</span></div>
        <div class="taskBox" :style="pageFlagStatus===0?'padding-bottom:0.45rem;':(pageFlagStatus===1?'padding-bottom:0.45rem;':'')">
          <div class="taskBoxTopItem" v-if="pageFlagStatus>0">
            <block class="countTextArea" v-if="pageFlagStatus===1">请在<span>{{countdownh}}</span>时<span>{{countdownm}}</span>分<span>{{countdowns}}</span>秒内完成挑战</block>
            <block class="countTextArea" v-if="pageFlagStatus===2&&rewardType===1">恭喜你！已达成加薪1.3倍</block>
            <block class="countTextArea" v-if="pageFlagStatus===2&&rewardType===2">恭喜你！已完成最高加薪</block>
            <block class="countTextArea" v-if="pageFlagStatus===2&&rewardType===0">很遗憾！未达成活动要求</block>
          </div>
          <div class="taskBoxTitle">当前完成任务数：<span>{{finishedCount}}</span>个</div>
          <block v-if="pageFlagStatus<2||pageFlagStatus===null">
            <div class="taskBoxDes">再做{{needTaskCount}}个，达成加薪{{rewardType===0||!isLogin?'1.3':'1.5'}}倍</div>
            <div class="taskProgressBk">
              <div class="taskProgress" :style="finishedCount===0?'width:3%':rewardType===2?'width:100%':(rewardType===1&&finishedCount!==5?'width:'+(finishedCount*10+14)+'%':'width:'+(finishedCount*10)+'%')">
                <div class="treasureBox"><img :src="rewardType===1||rewardType===2?'https://qiniu-image.qtshe.com/newPersonWelfare/treasureedIcon.png':'https://qiniu-image.qtshe.com/newPersonWelfare/treasureIcon.png'"><span>加薪1.3倍</span></div>
                <div class="treasureBoxRight"><img :src="rewardType===2?'https://qiniu-image.qtshe.com/newPersonWelfare/treasureedIcon.png':'https://qiniu-image.qtshe.com/newPersonWelfare/treasureIcon.png'"><span>加薪1.5倍</span></div>
              </div>
            </div>
          </block>
          <block v-else-if="pageFlagStatus===2&&rewardType===1">
              <div class="alreadyGetAward">
                <img src="https://qiniu-image.qtshe.com/newPersonWelfare/treasureedIconBig.png" class="header-title"/>
                  已达成加薪1.3倍
              </div>
          </block>
          <block v-else-if="pageFlagStatus===2&&rewardType===2">
              <div class="alreadyGetAward">
                <img src="https://qiniu-image.qtshe.com/newPersonWelfare/treasureedIconBig.png" class="header-title"/>
                  已达成加薪1.5倍
              </div>
          </block>
          <block v-else-if="pageFlagStatus===2&&rewardType===0">
              <div class="alreadyGetAward">
                <img src="https://qiniu-image.qtshe.com/newPersonWelfare/noneIcon.png" class="header-title"/>
                  未达成加薪
              </div>
          </block>
        </div>
        <div class="ticketCard" v-if="pageFlagStatus===2?reward13!==null&&rewardType!==2:reward13!==null">
          <div class="mask-item" v-if="(rewardType===1&&pageFlagStatus>=1)||(rewardType===2&&pageFlagStatus>=1)"></div>
          <div class="ticketLeft">
            <div class="leftCount"><span>1.3</span>倍<div class="countDes">额外加薪</div></div></div>
          <div class="ticketRight">
            <div class="rightTitle textBorder">最高可多赚 <span>{{reward13.moreRewardAmount}}</span>元</div>
            <div class="rightTitle">需完成任务 {{reward13.taskCount}}个</div>
            <div :class="rewardType===1||rewardType===2?'rightTopTag':'rightTopTagFail'" v-if="pageFlagStatus===2||(pageFlagStatus===1&&rewardType===1)||(pageFlagStatus===1&&rewardType===2)">{{rewardType===1||rewardType===2?'已达成':'未达成'}}</div>
          </div>
        </div>
        <div class="ticketCard" v-if="pageFlagStatus===2?(reward15!==null&&rewardType!==1):reward15!==null">
          <div class="mask-item" v-if="rewardType===2&&pageFlagStatus>=1"></div>
          <div class="ticketLeft">
            <div class="leftCount"><span>1.5</span>倍<div class="countDes">额外加薪</div></div></div>
          <div class="ticketRight">
            <div class="rightTitle textBorderBottom">最高可多赚 <span>{{reward15.moreRewardAmount}}</span>元</div>
            <div class="rightTitle">需完成任务 {{reward15.taskCount}}个</div>
            <div :class="rewardType===2?'rightTopTag':'rightTopTagFail'" v-if="pageFlagStatus===2||(pageFlagStatus===1&&rewardType===2)">{{rewardType===2?'已达成':'未达成'}}</div>
          </div>
        </div>
    </div>
    <div class="activity_ruleDefault">
        <div class="rulesTitle">
          <div class="ruleLine"></div>
          <span>规则说明</span>
          <div class="ruleLine"></div>
        </div>
        <div class="rulesDes">
          <h5>1、参与活动的任务类型为：赚钱必做简单任务和高薪任务（青豆任务及青团社官方任务除外）</h5>
          <h5>2、用户在规定时间内完成任务数5个，但小于8个，可获得所做任务的1.3倍额外加薪；完成任务数8个及以上，可获得最多8个任务的1.5倍额外加薪</h5>
          <h5>3、额外加薪的任务金额=任务原奖励*（奖励倍数-1）</h5>
          <h5>4、提交任务时使用了新人、定向等加薪券的任务以及未通过审核的任务不予额外加薪</h5>
          <h5>5、额外的加薪奖励在所有任务通过审核后，一次性统一发放。可在“余额”-“工资明细”中查看活动奖励明细</h5>
          <h5>6、本次活动最终解释权归青团社所有，如有疑问请咨询客服</h5>
        </div>
    </div>
    <div class="drawer" v-if="display">
    <div :class="maskClass" @click="closeActionSheet"></div>
      <div :class="mainClass" :style="mainStyle" class="main">
        <div class="drawer-head">
          <img class="coin" src="https://qiniu-image.qtshe.com/newPersonWelfare/drawCoin.png" />
          <div class="titleBox"><div class="titleBoxTop">已加薪任务</div><span>{{finishedCountDetail}}个</span></div>
          <div class="titleBox"><div class="titleBoxTop">已额外奖励</div><span>{{totalRewardAmount}}元</span></div>
          <span class="close-btn" @click="closeActionSheet"></span>
        </div>
        <div class="drawer-body">
          <div class="detailBox" v-for="(item,index) in taskItems" :key="index">
            {{item.taskNo}}：{{item.taskName}}
            <div class="detailTextBtm">原奖励： {{item.taskAmount}}元   <span>额外奖励：{{item.rewardAmount}}</span><span v-if="item.useTicket===true">({{item.desc}})</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomArea" v-if="pageFlagStatus!==2||rewardType!==0">
      <div class="more-button" @click="jumpToGetMoney" v-if="pageFlagStatus<=1">
          做任务
      </div>
      <div class="more-button" @click="showDraw" v-else-if="pageFlagStatus===2">
          加薪明细
      </div>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import jsBridge from 'jsBridge'

export default {
  data() {
    return {
      maskAnimation: false,
      token: '',
      needTaskCount: 5,
      reward13: {
        moreRewardAmount: 60,
        taskCount: 5
      },
      reward15: {
        moreRewardAmount: 100,
        taskCount: 8
      },
      rightTopTagStatus: 2,
      pageFlagStatus: 0, //页面状态，0-未开始页面 1-进行中页面 2-结束页面
      defaultAmount: 100,
      interPackage: {},
      finishedCount: 0,
      countdownh: 0,
      countdownm: 0,
      countdowns: 0,
      isLogin: false,
      display: false, //抽屉显示隐藏
      drawerWidth: '500px'
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    this.getAppToken()
    if (util.getQueryString('pageFlag')) {
      this.pageFlagStatus = Number(util.getQueryString('pageFlag'))
    }
    if (util.getQueryString('token')) {
      util.setCookie('token', util.getQueryString('token'))
      this.isLogin = true
      this.token = util.getQueryString('token')
    }
  },
  computed: {
    maskClass: function () {
      return {
        'mask-show': this.display,
        'mask-hide': !this.display
      }
    },
    mainClass: function () {
      return {
        'main-show': this.display,
        'main-hide': !this.display
      }
    },
    mainStyle: function () {
      return {
        bottom: this.display ? '0' : `-${this.width}`
      }
    }
  },
  methods: {
    mainClass () {
      return {
        'main-show': this.display,
        'main-hide': !this.display
      }
    },
    mainStyle () {
      return {
        bottom: this.display ? '0' : `-${this.width}`
      }
    },
    countDown(item) {
      const timer = setInterval(() => {
        if (item === 0) {
          clearInterval(timer)
        } else {
          item -= 1
          this.timestamp(item)
        }
      }, 1000)
    },
    timestamp(time) {
      let countdownh = Math.floor(time / 3600)
      let countdownm = Math.floor((time / 60) % 60)
      let countdowns = Math.floor(time % 60)
      this.countdownh = countdownh < 10 ? '0' + countdownh : countdownh
      this.countdownm = countdownm < 10 ? '0' + countdownm : countdownm
      this.countdowns = countdowns < 10 ? '0' + countdowns : countdowns
    },
    jumpToGetMoney() {
    //跳转投注列表页
      this.interPackage.appButtonCloseWebview()
    },
    closeActionSheet () {
      /* 关闭弹窗 */
      this.display = false
      document.body.style.overflow = 'scroll'
      document.body.style.position = 'unset'
      /* 兼容部分手机 */
      this.preventScroll = false
    },
    showDraw() {
      /* 展示弹窗 */
      this.display = true
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      this.preventScroll = true
    },
    getAppToken() {
      if (util.isIosApp() || util.isAndroidApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.jwtToken) {
            util.setCookie('jwttoken', data.jwtToken)
          }
          this.actResource()
          if (data.token) {
            this.isLogin = true
            this.version = data.version
            util.setCookie('token', data.token)
          }
          if (this.pageFlagStatus === 2) {
            this.getTaskReawrdDetail()
          }
        })
      } else {
        this.actResource()
        if (this.pageFlagStatus === 2) {
          this.getTaskReawrdDetail()
        }
      }
    },
    getTaskReawrdDetail() {
      let postData = {
        token: util.getToken()
      }
      this.$axios.post(`/taskCenter/taskApplyUserApp/taskChallenge/taskRewardDetail`, postData).then((res) => {
        if (res.success) {
          const {
            finishedCount,
            taskItems,
            totalRewardAmount
          } = res.data
          this.taskItems = taskItems //明细列表
          this.finishedCountDetail = finishedCount //明细已完成个数
          this.totalRewardAmount = totalRewardAmount //额外奖励总金额
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(() => {
      })
    },
    actResource() {
      let postData = {
        token: util.getToken(),
        pageFlag: this.pageFlagStatus
      }
      this.$axios.post(`/taskCenter/taskApplyUserApp/taskChallenge/detail`, postData).then((res) => {
        if (res.success) {
          const {
            defaultAmount,
            remainingTime,
            finishedCount,
            needTaskCount,
            rewardType,
            reward13,
            reward15
          } = res.data
          this.rewardType = rewardType//奖励类型
          this.finishedCount = finishedCount//当前已完成
          this.defaultAmount = defaultAmount //最多可赚
          this.remainingTime = remainingTime //截止时间
          this.needTaskCount = needTaskCount //再做几个到下一步
          this.reward13 = reward13 //1.3倍券
          this.reward15 = reward15 //1.5倍券
          if (this.remainingTime) {
            this.countDown(remainingTime)
          }
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(() => {
        toast('服务器错误，请稍后再试')
      })
    },
    contact() {
      //联系客服
      this.interPackage.contactService()
    }
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
@import './draw.less';
</style>
