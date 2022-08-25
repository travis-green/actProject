<style lang='less' scoped>
.container {
  min-height:100vh;
  background:rgba(252,120,2,1);
}
.gobackIcon {
  position:absolute;
  left: .17rem;
  top: .17rem;
  width: .17rem;
  height: .17rem;
}
.bottomBox {
  background:rgba(255,255,255,1);
  border-radius:.16rem .16rem 0 0;
  margin-top: 0.25rem;
  min-height: 57vh;
}
.bottomBox ul {
	height: .5rem;
	line-height: .5rem;
	width: 100%;
	background-color: #fff;
  display: flex;
  border-top-left-radius: .16rem;
  border-top-right-radius: .16rem;
  justify-content: space-around;
}
.bottomBox ul li {
	display: inline-block;
	padding:0 .03rem;
  font-weight: 900;
  font-size: .16rem;
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
  font-size:.12rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(156,156,156,1);
}

.textRight {
  text-align: right;
}

.rewardCount {
  font-size:.16rem;
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
  width: 60%;
}

.tabContentRight {
  width: 40%;
}

.topBox {
  color:#fff;
  text-align:center;
  padding-top:0.14rem;
  height: 40vh;
}
.totalMoney {
  font-size:0.16rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  margin-top:0.27rem;
}
.titleText {
  font-size:0.18rem;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
}
.totalMoneyCount {
  margin-top:0.16rem;
  font-size:0.48rem;
  line-height:0.48rem;
  font-family:Bebas;
  font-weight:bold;
  color:rgba(255,255,255,1);
  margin-bottom:0.4rem;
}
.rewardBox {
  display:flex;
  justify-content:space-around;
  padding: 0 0.3rem;
  align-items:center;
}
.DividingLine {
  width:.01rem;
  height:0.32rem;
  background:rgba(255,255,255,0.2);
}
.rewardDetail {
  display:flex;
  flex-direction:column;
  font-size: .15rem;
  span {
    font-size:.24rem;
    font-weight:bold;
    font-family:Bebas;
  }
}
.underLine {
  width:.36rem;
  height:.03rem;
  background:rgba(255,128,0,1);
  border-radius:.02rem;
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
<div class="container">
  <img class="gobackIcon" src='https://qiniu-image.qtshe.com/activityXrw/arrowLeft.png' alt='' @click="goBack"/>
  <div class="topBox">
    <div class="titleText">奖励明细</div>
    <div class="totalMoney">总金额（元）</div>
    <div class="totalMoneyCount">{{totalCount}}</div>
    <div class="rewardBox">
      <div class="rewardDetail">邀请奖励(元)<span>{{rewardCount}}</span></div>
      <div class="DividingLine"></div>
      <div class="rewardDetail">分成奖励(元)<span>{{shareCount}}</span></div>
    </div>
  </div>

<div class="bottomBox">
    <ul>
     <li v-for="(item,index) in tabs" :class="{active:index == num}"@click="handleClick(index)">{{item}}</li>
    </ul>
    <div class="tabCon">
        <div v-for='(item,index) in tabContents' class="tabContentBox">
          <div class="flexColumn tabContentLeft">
            <div class="textEllipsis phoneNum">{{item.extra}}</div>
            <div class="textEllipsis textDes">{{item.taskName}}</div>
          </div>
          <div class="flexColumn tabContentRight">
            <div class="textRight textEllipsis rewardCount">+{{item.taskAmount}}元</div>
            <div class="textRight textEllipsis textDes">{{item.createTime}}</div>
          </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
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
import toast from 'toast'
import util from 'util'
export default {
  data() {
    return {
      inviteCode: '',
      tabs: ['全部', '邀请奖励', '分成奖励'],
      totalCount: 0, //金额总数
      rewardCount: 0, //邀请金额
      shareCount: 0, //分层金额
      tabContents: [
        {
          subTitle: ' 注册并完成1单',
          rewardNum: '1',
          rewardDate: '2020-05-14 13:34',
          telPhone: '15151515093'
        },
        {
          subTitle: '完成任务洒店',
          rewardNum: '0.32',
          rewardDate: '2020-05-14 13:34',
          telPhone: '15223232323'
        },
        {
          subTitle: '完成任务完成任务完成任务完成任务完成任务完成任务',
          rewardNum: '0.20',
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
      ],
      iconData: [
        {
          image: 'https://qiniu-image.qtshe.com/1508208755.jpg',
          text: '微信邀请'
        },
        {
          image: 'https://qiniu-image.qtshe.com/1508208755.jpg',
          text: 'QQ邀请'
        },
        {
          image: 'https://qiniu-image.qtshe.com/1508208755.jpg',
          text: '面对面邀请'
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
    handleClick(index) {
      this.num = index
      if (index === 0) {
        this.getRewardDetailList()
      } else {
        this.getRewardDetailList(index)
      }
    },
    getRewardData() {
      this.$axios.post('/taskThird/invite/count', {
        appKey: 'QTSHE_ANDROID_MJ_TRIBE'
      }).then(res => {
        if (res.success) {
          this.totalCount = res.data.inviteAmount + res.data.inviteShareAmount
          this.rewardCount = res.data.inviteAmount
          this.shareCount = res.data.inviteShareAmount
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
    getRewardDetailList(rewardType) {
      this.$axios.post('/taskThird/invite/reward/list', {
        appKey: 'QTSHE_ANDROID_MJ_TRIBE',
        rewardType
      }).then(res => {
        if (res.success) {
          this.tabContents = res.data
        } else {
          toast(res.msg || '服务器错误，请稍后重试')
        }
      }
      ).catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  mounted() {
    this.initPageShowEvent()
    this.getRewardDetailList()
    this.getRewardData()
  },
  created() {
  }
}
</script>
