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
  <div class="invalid" @click="jumpToInvalid">?????????</div>
  <div class="topBoxInvite">
    <div class="titleText">????????????</div>
    <div class="rewardBoxInvite">
      <div class="inviteCount">?????????(???)<span>{{inviteTotalCount}}</span></div>
      <block>
        <div class="alreadyInviteCouunt">?????????????????????????????????{{completeNum}}???</div>
        <div class="alreadyInviteCouunt">?????????????????????????????????{{uncompleteNum}}???</div>
      </block>
    </div>
  </div>

<div class="bottomBoxInvite">
    <div class="tabCon">
        <div v-for='(item,index) in tabContents' class="tabContentBox">
          <div class="flexColumn tabContentLeft">
            <div class="textEllipsis phoneNum">{{item.invitedMobile}}</div>
            <div class="textEllipsis textDesWarning" v-if="item.status===0">????????????????????????????????????</div>
            <div class="textEllipsis textDes" v-else>{{item.name}}</div>
          </div>
          <div class="flexColumn tabContentRight">
            <div class="textRight textEllipsis rewardCount" v-if="item.status===0">??????{{item.expireText}}????????????</div>
            <div class="textRight textEllipsis rewardCount" v-else>+{{item.rewardAmount}}???</div>
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
      inviteTotalCount: 0, //????????????
      completeNum: 0, //???????????????
      uncompleteNum: 0, //???????????????
      num: 0,
      drawer: false,
      noticeBoxData: [
        {
          subTitle: '???????????????????????????????????????',
          ruleCondition: 5,
          money: 1
        },
        {
          subTitle: '????????????????????????20%??????',
          ruleCondition: 10,
          money: 1888
        }
      ],
      iconData: [
        {
          image: 'https://qiniu-image.qtshe.com/1508208755.jpg',
          text: '????????????'
        },
        {
          image: 'https://qiniu-image.qtshe.com/1508208755.jpg',
          text: 'QQ??????'
        },
        {
          image: 'https://qiniu-image.qtshe.com/1508208755.jpg',
          text: '???????????????'
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
          this.completeNum = res.data.completeInviteNum //?????????????????????????????????
          this.uncompleteNum = res.data.invitingNum //?????????????????????????????????
          this.inviteTotalCount = res.data.completeInviteNum + res.data.invitingNum
        } else {
          toast(res.msg || '?????????????????????????????????')
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
              let date1 = new Date(util.dateFormat(Date.now(), 'yyyy-MM-dd HH:mm')).getTime()//?????????????????????
              let date2 = new Date(item.expireTime).getTime() //????????????
              let total = (date2 - date1) / 1000 //ms
              let day = parseInt(total / (24 * 60 * 60))//??????????????????
              // console.log(util.dateFormat(Date.now(), 'yyyy-MM-dd'))
              // console.log(util.dateFormat(item.expireTime, 'yyyy-MM-dd'))
              item.expireText = `${day + 1}`
              if (util.dateFormat(Date.now(), 'yyyy-MM-dd') === util.dateFormat(item.expireTime, 'yyyy-MM-dd')) {
                //??????
                item.expireText = `0`
              } else {
                item.expireText = `${day + 1}`
              }
            }
          })
          this.tabContents = res.data
          console.log(this.tabContents)
        } else {
          toast(res.msg || '?????????????????????????????????')
        }
      }
      ).catch(
          error => {
            console.log(error)
          }
        )
    },
    jumpToInvalid() {
      //??????????????????
      console.log(`${window.g_info.qts_bean}/smallTaskAct/invalid`)
      // todo
      window.location.href = `${window.g_info.qts_bean}/act/smallTaskAct/invalid`
      // window.location.href = `http://localhost:6790/smallTaskAct/invalid`
    }
  },
  mounted() {
    this.initPageShowEvent()
    this.getInviteList()//????????????????????????
    this.getInviteData() //??????home?????????
  },
  created() {
  }
}
</script>
