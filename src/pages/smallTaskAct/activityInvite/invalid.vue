<style lang='less' scoped>
.containerInvite {
  min-height:100vh;
  background:#fff;
}
.gobackIcon {
  position:absolute;
  left: .17rem;
  top: .17rem;
  width: .17rem;
  height: .17rem;
}
.bottomBoxInvite {
  background:#fff;
  position: relative;
  top: -0.19rem;
  border-radius:.16rem .16rem 0 0;
  min-height: .2rem;
}
.invalid {
  position: absolute;
  font-size: .14rem;
  top: 0.25rem;
  right:0.16rem;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
}
.bottomBox ul {
	height: .5rem;
	line-height: .5rem;
	width: 100%;
	background-color: #fff;
  display: flex;
  justify-content: space-around;
}
.bottomBox ul li {
	display: inline-block;
	padding:0 .01rem;
}
.bottomBox .active {
  border-bottom: .03rem solid #FF8000;
}
.tabCon {
  padding: 0 0.16rem;
}

.phoneNum {
  font-size:.14rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(60,60,60,1);
}

.textDes {
  font-size: .12rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(156,156,156,1);
}

.textDesWarning {
  font-size: .12rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,128,0,1);
}

.textRight {
  text-align: right;
}
.textLeft {
  text-align: left;
}
.invalidTitle {
  font-size: .16rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  margin-top: 0.21rem;
  display:flex;
  align-items:center;
}

.rewardCount {
  font-size: .16rem;
  font-family:PingFangSC-Semibold,PingFang SC;
  font-weight:600;
  color:rgba(255,128,0,1);
}

.tabContentBox {
  display: flex;
  align-items: center;
  height: .65rem;
  border-bottom: .01rem solid #F3F4F5;
}

.textEllipsis{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.flexColumn {
  display: flex;
  flex-direction: column;
}

.tabContentLeft {
  width: 70%;
}

.tabContentRight {
  width: 50%;
}

.topBoxInvalid {
  color:#fff;
  text-align:center;
  padding-top:0.14rem;
  background: #838D99;
  height: 1.9rem;
}
.titleText {
  font-size:0.18rem;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
}
.rewardBoxInvite {
  margin-top: 0.29rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 .44rem 0 .16rem;
}
.DividingLine {
  width:.01rem;
  height:0.32rem;
  background:rgba(255,255,255,0.2);
}
.inviteCount {
  display:flex;
  flex-direction:column;
  font-size:.16rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  span {
    font-size:.24rem;
    font-family:Bebas;
    color:rgba(255,255,255,1);
  }
}
.underLine {
  width:.36rem;
  height:.03rem;
  background:rgba(255,128,0,1);
  border-radius: .02rem;
}
.invalidIcon {
  width: .31rem;
  height: .31rem;
}
.invalidIconImage {
  width: 15%;
}
</style>
<style>
.el-tabs__nav-next {
   display:none !important;
}
.el-tabs__nav-prev {
  display:none !important;
}
.el-tabs__active-bar {
  min-width:0.28rem !important;
  left: 0.58rem;
}
.el-tabs__nav {
  display:flex;
  width: 100%;
  justify-content:space-around !important;
  padding: 0 .48rem;
}
.el-tabs__nav-wrap::after {
  display:none !important;
}
</style>
<template>
<div class="containerInvite">
  <img class="gobackIcon" src='https://qiniu-image.qtshe.com/activityXrw/arrowLeft.png' alt='' @click="goBack"/>
  <div class="topBoxInvalid">
    <div class="titleText">已失效</div>
    <block>
      <div class="invalidTitle">
        <div class="invalidIconImage"><img class="invalidIcon" src='https://qiniu-image.qtshe.com/xrwInvited/warningIcon.png' alt=''/></div>
        <div class='textLeft' style="width:85%;">以下用户30天内未完成通过审核的截图类任务， 系统已取消和您的邀请关系，且不可再被邀请</div></div>
    </block>
  </div>

<div class="bottomBoxInvite">
    <div class="tabCon">
        <div v-for='(item,index) in tabContents' class="tabContentBox">
          <div class="flexColumn tabContentLeft">
            <div class="phoneNum">{{item.invitedMobile}}</div>
          </div>
          <div class="flexColumn tabContentRight">
            <div class="textLeft textDes">绑定时间：{{item.creatTime}}</div>
            <div class="textLeft textDes">失效时间：{{item.expireTime}}</div>
          </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
function visibilitychangeHandaler() {
  if (document.visibilityState === 'visible') {
    location.reload(true)
    // if (window.location.pathname !== '/act/smallTaskAct/activityInvite') {
    //   window.location.replace('/act/smallTaskAct/activityInvite')
    // }
  }
}
function webkitvisibilitychangeHandaler() {
  if (document.webkitVisibilityState === 'visible') {
    location.reload(true)
    // if (window.location.pathname !== '/act/smallTaskAct/activityInvite') {
    //   window.location.replace('/act/smallTaskAct/activityInvite')
    // }
  }
}
function mozvisibilitychangeHandaler() {
  if (document.mozVisibilityState === 'visible') {
    location.reload(true)
    // if (window.location.pathname !== '/act/smallTaskAct/activityInvite') {
    //   window.location.replace('/act/smallTaskAct/activityInvite')
    // }
  }
}
function msvisibilitychangeHandaler() {
  if (document.msVisibilityState === 'visible') {
    location.reload(true)
    // if (window.location.pathname !== '/act/smallTaskAct/activityInvite') {
    //   window.location.replace('/act/smallTaskAct/activityInvite')
    // }
  }
}
export default {
  data() {
    return {
      inviteCode: '232123',
      tabs: ['全部', '邀请奖励', '分成奖励'],
      tabContents: [
        {
          subTitle: ' 注册并完成1单',
          rewardNum: '2020-05-14 13:34',
          rewardDate: '2020-05-14 13:34',
          telPhone: '15151515093'
        },
        {
          subTitle: '完成任务洒店',
          rewardNum: '2020-05-14 13:34',
          rewardDate: '2020-05-14 13:34',
          telPhone: '15223232323'
        },
        {
          subTitle: '完成任务完成任务完成任务完成任务完成任务完成任务',
          rewardNum: '2020-05-14 13:34',
          rewardDate: '2020-05-14 13:34',
          telPhone: '15223232323'
        }
      ],
      num: 0,
      drawer: false,
      noticeBoxData: [
        {
          subTitle: '好友注册并完成一个截图任务',
          ruleCondition: 5,
          money: 1
        },
        {
          subTitle: '好友继续做任务得20%分成',
          ruleCondition: 10,
          money: 1888
        }
      ]
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
    goBack() {
      try {
        this.$router.back(-1)
      } catch (error) {
        window.location.replace('/act/smallTaskAct/activityInvite')
      }
    },
    getInvalidData() {
      this.$axios.post('/taskThird/invite/list', {
        appKey: 'QTSHE_ANDROID_MJ_TRIBE',
        status: 1
      }).then(res => {
        if (res.success) {
          this.tabContents = res.data
          console.log(res)
        } else {
          toast(res.msg || '服务器错误，请稍后重试')
        }
      }
      ).catch(
          error => {
            console.log(error)
          }
        )
    },
    handleClick(index) {
      this.num = index
    },
    jumpToInvalid() {
      console.log(123123)
    }
  },
  mounted() {
    this.initPageShowEvent()
    this.getInvalidData()
  },
  created() {
  }
}
</script>
