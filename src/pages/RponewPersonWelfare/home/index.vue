<template>
  <div class="container" v-show="actAlready">
    <div class="header">
        <div src="" class="headerBk"></div>
        <div class="actText"><strong>额外再赚<span>{{maxRewardMoney}}元</span></strong></div>
        <div class="topDes" v-if="isLogin">
          <block v-if="!activityStart">活动倒计时：未开始，请先提交一个任务</block>
          <!--活动开始-->
          <block v-if="activityStart && !activityEnd">活动倒计时：{{countdownh}}：{{countdownm}}：{{countdowns}}</block>
          <!--活动开始,个人活动已结束-->
          <block v-if="activityStart && activityEnd">活动倒计时：已结束</block>
        </div>
        <div class="taskBox">
          <div class="taskBoxTitle">当前完成任务数：<span>{{completeCount}}</span>个</div>
            <div class="taskBoxDes" v-if="activityComplete && activityEnd">
              <!-- 活动期间内任务已完成 -->
              <block>恭喜你，{{rewardMoney}}元额外奖励已发放</block>
              <!--<block v-else>{{ticketBox[userRuleIndex===0?0:currentLevel+1].ruleValue}}元额外奖励审核中</block>-->
            </div>
            <div class="taskBoxDes" v-else>
              <!-- 活动期间完成中 -->
              <!-- 个人活动开始 -->
              <!-- <block v-if="!activityEnd && userRuleIndex===0">再做{{needTaskCount<=0?'0':needTaskCount}}个，冲击额外{{ticketBox[0].ruleValue}}元奖励</block> -->
              <!--<block v-if="!activityEnd && currentLevel+1<ticketBox.length">再做{{needTaskCount<=0?'0':needTaskCount}}单  额外再得{{ticketBox[userRuleIndex===0?0:currentLevel+1].ruleValue}}元</block>-->
              <block v-if="!activityEnd && currentLevel+1<ticketBox.length">已得{{rewardMoney}}元  再做{{needTaskCount<=0?'0':needTaskCount}}单  再得奖励{{ticketBox[userRuleIndex===0?0:currentLevel+1].ruleValue}}元</block>
              <block v-if="!activityEnd && currentLevel+1>=ticketBox.length">恭喜你，{{rewardMoney}}元额外奖励已发放</block>
              <!-- 个人活动结束 -->
              <block v-if="activityEnd && userRuleIndex===0">很遗憾，未达到额外奖励要求</block>
              <block v-if="activityEnd && userRuleIndex!==0">恭喜你，{{rewardMoney}}元额外奖励已发放</block>
            </div>
          <div class="ticketItem" v-for="(item,index) in ticketBox" :key="index">
            <div class="ticketLeft">
              <div class="ticketLeftTitle">
                <span>{{item.ruleValue}}</span>元
                <div class="extraAward">额外奖励</div>
                </div>
              <div class="ticketDes">需完成{{item.ruleCondition}}个任务</div>
            </div>
            <div class="ticketRight"><img src="https://qiniu-image.qtshe.com/rpoNewPerson/rporpicon.png" alt='' /></div>
          </div>
        </div>
    </div>
    <div class="rpotaskBox" v-if="allTaskList.length" :style="allTaskList.length >= 10? 'height: 7.55rem;':'height: auto;'">
          <!--  rpo任务列表-->
          <!-- <div class="innerBox"> -->
            <div v-for="(item,index) in allTaskList" :key="index" class="rpoItemBox" @click="jumpToRPOTaskDetail(item.taskId)">
                <block class="rpoBoxLeft">
                  <div class="alltaskTitle"><div class="taskListTitle">{{item.taskName}}</div><div class="hotTag" v-if="index<=4">热门推荐</div></div>
                  <div class="alltaskDes">剩余{{item.availableQuantity}}次</div>
                </block>
                <div class="alltaskPrice">领{{item.price}}元</div>
              </div>
            <!--</div>-->
    </div>
    <div class="activity_ruleDefault" :style="allTaskList.length ? 'padding: 0rem 0.4rem 1rem;':'padding: .14rem 0.4rem 1rem;'">
        <div class="rulesTitle">
          <div class="ruleLine"></div>
          <span>规则说明</span>
          <div class="ruleLine"></div>
        </div>
        <div class="rulesDes">
          <h5>1、任务详情页带有“活动浮标”的任务为可参加限时福利的任务</h5>
          <h5>2、以规定时间内提交的任务中通过审核的数量作为是否获得额外奖励的标准</h5>
          <h5>3、所有提交的符合活动要求的任务全部通过审核后，再发放额外奖励</h5>
          <h5>4、额外奖励可在“余额”-“工资明细”里查看</h5>
          <h5>5、本次活动最终解释权归官方所有，如有疑问请咨询客服</h5>
        </div>
    </div>
    <div class="bottomArea">
        <div class="more-button" @click="showDraw">
            我的任务 >
        </div>
    </div>
    <div class="drawer" v-if="display">
    <div :class="maskClass" @click="closeActionSheet"></div>
      <div :class="mainClass" :style="mainStyle" class="main">
        <div class="drawer-head">
          <img class="coin" src="https://qiniu-image.qtshe.com/newPersonWelfare/drawCoin.png" />
          <div class="titleBox"><span>我的任务</span></div>
          <span class="close-btn" @click="closeActionSheet"></span>
        </div>
        <div class="drawer-body">
          <block v-if="myTaskList.length===0">
            <div class="noneTaskList">请先提交任务吧~</div>
          </block>
          <block v-else>
            <div class="detailBox" v-for="(item,index) in myTaskList" :key="index">
              <div class="drawLeft">
                {{item.taskName}}
                <div class="detailTextBtm">原奖励： {{item.taskAmount}}元</div>
              </div>
              <!-- 任务单状态：0-审核中 1-审核通过 2-审核未通过 -->
              <div class="taskItemStatus flexcenter" v-if="item.taskApplyStatus === 0"><img class="drawcoin" src="https://qiniu-image.qtshe.com/rpoNewPerson/icontime.png" />审核中</div>
              <div class="taskItemStatusFailed flexcenter" v-else-if="item.taskApplyStatus === 2"><img class="drawcoin" src="https://qiniu-image.qtshe.com/rpoNewPerson/iconfail.png" /> 审核未通过</div>
              <div class="taskItemStatusSuccess flexcenter" v-else-if="item.taskApplyStatus === 1"><img class="drawcoin" src="https://qiniu-image.qtshe.com/rpoNewPerson/iconsuccess.png"/> 审核通过</div>
            </div>
          </block>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import jsBridge from 'jsBridge'

function visibilitychangeHandaler() {
  if (document.visibilityState === 'visible') {
    location.reload(true)
  }
}
function webkitvisibilitychangeHandaler() {
  if (document.webkitVisibilityState === 'visible') {
    location.reload(true)
  }
}
function mozvisibilitychangeHandaler() {
  if (document.mozVisibilityState === 'visible') {
    location.reload(true)
  }
}
function msvisibilitychangeHandaler() {
  if (document.msVisibilityState === 'visible') {
    location.reload(true)
  }
}

export default {
  data() {
    return {
      maskAnimation: false,
      token: '',
      reward13: {
        moreRewardAmount: 60,
        taskCount: 5
      },
      reward15: {
        moreRewardAmount: 100,
        taskCount: 8
      },
      maxRewardMoney: 0, //额外在赚
      rightTopTagStatus: 2,
      rewardMoney: 0, //所有已发放给用户的钱
      actAlready: false,
      currentLevel: 0, //当前用户达到的阶段
      activityId: util.getQueryString('activityId'), //rpo活动id
      pageFlagStatus: 0, //页面状态，0-未开始页面 1-进行中页面 2-结束页面
      activityComplete: false, //任务是否全部完成
      defaultAmount: 100,
      interPackage: {},
      finishedCount: 0,
      allTaskList: [], //rpo任务列表
      rewardStatus: 0, //奖励发放状态
      activityStart: true, //活动是否开始 true 开始 false 未开始
      activityEnd: false, //个体活动状态 true 结束 false 开始
      countdownh: 23,
      countdownm: 59,
      countdowns: 59,
      isLogin: util.getCookie('jwttoken'),
      display: false, //抽屉显示隐藏
      drawerWidth: '500px',
      needTaskCount: 0, //在做多少个达到下个阶段
      ticketBox: [
        {
          ruleIndex: 1,
          ruleCondition: 5,
          ruleValue: 200
        },
        {
          ruleIndex: 2,
          ruleCondition: 10,
          ruleValue: 600
        }
      ], //券
      completeCount: 0, //用户完成多少任务
      userRuleIndex: 0, //用户的任务完成状态
      myTaskList: [] //我的任务列表\
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.initPageShowEvent()
  },
  beforeMount() {
    this.actResource()//活动接口
  },
  mounted() {
    this.activityId = util.getQueryString('activityId') || 1
    this.showTaskList() //获取任务列表
    this.actAlready = true
    if (!util.getCookie('jwttoken')) {
      return
    } else {
      this.getTaskReawrdDetail()//抽屉内容,已登陆再调
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
    initPageShowEvent() {
      document.addEventListener('visibilitychange', visibilitychangeHandaler)
      document.addEventListener(
        'webkitvisibilitychange',
        webkitvisibilitychangeHandaler
      )
      document.addEventListener(
        'mozvisibilitychange',
        mozvisibilitychangeHandaler
      )
      document.addEventListener(
        'msvisibilitychange',
        msvisibilitychangeHandaler
      )
    },
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
          this.countdownh = '00'
          this.countdownm = '00'
          this.countdowns = '00'
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
      if (!util.getCookie('jwttoken')) {
        // 未登录  不用util里的login
        window.location.href = `/app/login?redirect_uri=${encodeURIComponent(window.location.href)}`
        return
      }
      if (!util.getCookie('jwttoken')) {
        //列表为空弹toast
        toast('请先提交任务吧~')
        return
      }
      this.display = true
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      this.preventScroll = true
    },
    showTaskList() {
      let postData = {
        activityId: this.activityId
      }
      this.$axios.post(`/taskCenter/rpoTaskActivity/activity/task/list`, postData).then((res) => {
        if (res.success) {
          //所有的rpo任务列表
          this.allTaskList = res.data
        } else {
          console.log(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(() => {
      })
    },
    jumpToRPOTaskDetail (taskId) {
      //跳转到rpo任务详情
      window.location.href = `/app/lightask/taskdetail?taskBaseId=${taskId}`
    },
    getTaskReawrdDetail() {
      //抽屉mock数据
      // this.myTaskList = this.mockList.data
      let postData = {
        activityId: this.activityId
      }
      this.$axios.post(`/taskCenter/rpoTaskActivity/user/rewardList`, postData).then((res) => {
        if (res.success) {
          this.myTaskList = res.data
        } else {
          console.log(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(() => {
        toast(res.msg || '服务器错误，请稍后再试')
      })
    },
    actResource() {
      //页面活动内容
      let postData = {
        activityId: this.activityId,
        token: this.isLogin ? util.getCookie('token') : ''
      }
      this.$axios.post(`/taskCenter/rpoTaskActivity/user/detail`, postData).then((res) => {
        if (res.success) {
          this.ticketBox = res.data.rewardRule//券详情
          this.maxRewardMoney = res.data.maxRewardMoney //额外再赚多少钱
          if (res.data.activityUserVO) {
            //用户当前达到的阶段的索引
            this.activityStart = true //总活动活动已开始
            this.userRuleIndex = res.data.activityUserVO.ruleIndex //任务达到阶段
            this.completeCount = res.data.activityUserVO.completeCount //用户完成任务数
            this.rewardStatus = res.data.activityUserVO.rewardStatus //用户完成任务数
            this.rewardMoney = res.data.activityUserVO.rewardMoney //所有已发放金额
            if (res.data.activityUserVO.deadlineTime !== 0) {
              // 开始倒计时
              this.countDown(res.data.activityUserVO.deadlineTime)
              this.activityEnd = false //活动未结束
            } else {
              this.activityEnd = true //活动已结束
            }
            // var maxLadder = Math.max(...res.data.rewardRule.map(i => i.ruleIndex)) //最大的阶梯号
            //需完成=当前阶段总数 - 完成数
            res.data.rewardRule.filter((i, j) => {
              if (i.ruleIndex === res.data.activityUserVO.ruleIndex) {
                this.currentLevel = j
              }
            })
            if (this.currentLevel + 1 < res.data.rewardRule.length) {
              //未完成所有任务，额外再做多少个任务
              this.needTaskCount = res.data.rewardRule[res.data.activityUserVO.ruleIndex === 0 ? 0 : this.currentLevel + 1].ruleCondition - res.data.activityUserVO.completeCount
            } else {
              // 活动期间内完成了所有任务
              this.activityComplete = true
            }
          } else {
            //activityUserVO 对象为null活动未开始 false
            this.activityStart = false
            //值取第一个
            this.needTaskCount = res.data.rewardRule[0].ruleCondition
          }
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
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
