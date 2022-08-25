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
  min-height: .2rem;
  border-radius:.16rem .16rem 0 0;
}
.invalid {
  position: absolute;
  font-size:.14rem;
  top: 0.18rem;
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
	padding:0 .1rem;
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

.textDesWarning {
  font-size:.12rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,128,0,1);
}

.textRight {
  text-align: right;
}
.alreadyInviteCouunt {
  font-size: .16rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
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

.topBoxInvite {
  color:#fff;
  text-align:center;
  padding-top:0.14rem;
  background: #FC7802;
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
  justify-content:space-around;
  align-items:center;
  padding: 0;
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
<div class="containerInvite">
  <img class="gobackIcon" src='https://qiniu-image.qtshe.com/activityXrw/arrowLeft.png' alt='' @click="goBack"/>
  <div class="invalid" @click="jumpToInvalid">已失效</div>
  <div class="topBoxInvite">
    <div class="titleText">邀请明细</div>
    <div class="rewardBoxInvite">
      <div class="inviteCount">已邀请(人)<span>{{inviteTotalCount}}</span></div>
      <block>
        <div class="alreadyInviteCouunt">已注册并完成截图任务：{{completeNum}}人</div>
        <div class="alreadyInviteCouunt">已注册，尚未完成任务：{{uncompleteNum}}人</div>
      </block>
    </div>
  </div>

<div class="bottomBoxInvite">
    <div class="tabCon">
        <div v-for='(item,index) in tabContents' class="tabContentBox">
          <div class="flexColumn tabContentLeft">
            <div class="textEllipsis phoneNum">{{item.invitedMobile}}</div>
            <div class="textEllipsis textDesWarning" v-if="item.status===0">尚未完成任务，快去提醒他</div>
            <div class="textEllipsis textDes" v-else>{{item.name}}</div>
          </div>
          <div class="flexColumn tabContentRight">
            <div class="textRight textEllipsis rewardCount" v-if="item.status===0">将于{{item.expireText}}天后失效</div>
            <div class="textRight textEllipsis rewardCount" v-else>+{{item.rewardAmount}}元</div>
            <div class="textRight textEllipsis textDes">{{item.creatTime}}</div>
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
      tabContents: [],
      inviteTotalCount: 0, //总邀请人
      completeNum: 0, //邀请总人数
      uncompleteNum: 0, //邀请中人数
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
    },
    getInviteData() {
      this.$axios.post('/taskThird/invite/count', {
        appKey: 'QTSHE_ANDROID_MJ_TRIBE'
      }).then(res => {
        if (res.success) {
          this.completeNum = res.data.completeInviteNum //已注册并完成任务的人数
          this.uncompleteNum = res.data.invitingNum //已注册未完成任务的人数
          this.inviteTotalCount = res.data.completeInviteNum + res.data.invitingNum
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
    getInviteList() {
      this.$axios.post('/taskThird/invite/list', {
        appKey: 'QTSHE_ANDROID_MJ_TRIBE'
      }).then(res => {
        if (res.success) {
          res.data.filter((item) => {
            if (item.expireTime) {
              let date1 = new Date(util.dateFormat(Date.now(), 'yyyy-MM-dd HH:mm')).getTime()//当前时间格式化
              let date2 = new Date(item.expireTime).getTime() //截止时间
              let total = (date2 - date1) / 1000 //ms
              let day = parseInt(total / (24 * 60 * 60))//计算整数天数
              // console.log(util.dateFormat(Date.now(), 'yyyy-MM-dd'))
              // console.log(util.dateFormat(item.expireTime, 'yyyy-MM-dd'))
              item.expireText = `${day + 1}`
              if (util.dateFormat(Date.now(), 'yyyy-MM-dd') === util.dateFormat(item.expireTime, 'yyyy-MM-dd')) {
                //当日
                item.expireText = `0`
              } else {
                item.expireText = `${day + 1}`
              }
            }
          })
          this.tabContents = res.data
          console.log(this.tabContents)
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
    jumpToInvalid() {
      //跳转到失效页
      console.log(`${window.g_info.qts_bean}/smallTaskAct/invalid`)
      // todo
      window.location.href = `${window.g_info.qts_bean}/act/smallTaskAct/invalid`
      // window.location.href = `http://localhost:6790/smallTaskAct/invalid`
    }
  },
  mounted() {
    this.initPageShowEvent()
    this.getInviteList()//获取邀请列表数据
    this.getInviteData() //获取home数据，
  },
  created() {
  }
}
</script>
