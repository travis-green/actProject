<style lang='less' scoped>
.container {
    height:100vh;
    background:linear-gradient(122deg,rgba(255,235,180,1) 0%,rgba(255,204,109,1) 100%);
    padding: .2rem 0;
}

.gobackIcon {
  position:absolute;
  left: .17rem;
  top: .17rem;
  width: .25rem;
  height: .25rem;
}

.noticeBox {
    display:flex;
    justify-content:space-between;
    background: url('https://qiniu-image.qtshe.com/xrwInvited/backgroundImageIndex.png') no-repeat;
    padding:2.19rem 0.16rem 0rem;
    background-size: cover;
}

.itemPd {
    padding: 0 .16rem;
}

.noticeItem {
    height:1.70rem;
    width:1.67rem;
    background:rgba(255,242,229,1);
    border-radius:.08rem;
    background-size: cover;
}

.boxTop {
    width:1.67rem;
    height:1.17rem;
    background:rgba(255,255,255,1);
    border-radius:.08rem;
    display: flex;
    padding: 0 .25rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    img {
      width: 0.4rem;
      height: 0.4rem;
      margin-bottom: .1rem;
    }
}

.bottomText {
    font-size:.2rem;
    font-family:PingFangSC-Semibold,PingFang;
    font-weight:600;
    color:rgba(255,128,0,1);
    height: 0.53rem;
}

.inviteNotice {
  width:1.16rem;
  height:.30rem;
  background:rgba(255,128,0,1);
  border-radius:.3rem 0 1rem 0;
  font-size:.13rem;
  font-family:HYQiHei-GES,HYQiHei;
  font-weight:bold;
  color:rgba(255,255,255,1);
  display: flex;
  padding-left: 0.05rem;
  align-items: center;
  img {
    width: 0.22rem;
    height: 0.22rem;
  }
}

.flexCenter {
    display: flex;
    justify-content:center;
    align-items:center;
}

.inviteButton {
  width:3.43rem;
  height:0.48rem;
  background:linear-gradient(90deg,rgba(255,76,0,1) 0%,rgba(255,151,0,1) 100%);
  box-shadow:0 0.08rem 0.12rem 0 rgba(255,86,0,0.34);
  border-radius:0.24rem;
  margin: 0.34rem auto 0;
  font-size:0.18rem;
  font-family:PingFangSC-Semibold,PingFang SC;
  font-weight:600;
  color:rgba(255,255,255,1);
}

.codeBox {
  font-size:0.14rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(140,100,60,1);
  margin:0.2rem auto 0;
}

.copyBtn {
  width:0.71rem;
  height:0.24rem;
  line-height:0.24rem;
  text-align:center;
  background:#ffad32;
  border-radius:0.12rem;
  margin-left: 0.16rem;
  font-size: .14rem;
  color:#FFFFFF;
  img {
    width: .16rem;
    height: .16rem;
    margin-left: .02rem;
  }
}

.recordBox {
  width:3.43rem;
  height:1.28rem;
  background:rgba(255,255,255,1);
  border-radius:0.08rem;
  margin: 0.32rem auto 0;
}

.recordBoxTop {
  width:3.43rem;
  height:0.42rem;
  background:rgba(255,242,229,1);
  border-radius:0.08rem 0.08rem 0 0;
  padding: 0 .2rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.recordBottomText {
  font-size:0.01rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,128,0,1);
}

.recordBoxBottom {
  display:flex;
  justify-content:space-around;
  height: 0.86rem;
  align-items:center;
}

.recordItem {
  display:flex;
  flex-direction:column;
  span {
    text-align:center;
    font-size:0.24rem;
    font-family:Bebas;
    color:rgba(34,34,34,1);
  }
}

.moneyIcon {
  position:relative;
  bottom: 0.1rem;
  font-size:0.24rem;
  font-family:Bebas;
  color:rgba(204,204,204,1);
}

.drawTips {
  width:3.27rem;
  height:1.74rem;
  background:rgba(255,236,229,1);
  border-radius: 0.1rem;
  margin: 0 auto;
}

.tipsTitle {
  text-align:center;
  font-size:.16rem;
  font-family:PingFangSC-Semibold,PingFang SC;
  font-weight:600;
  color:rgba(34,34,34,1);
  padding-bottom: 0.32rem;
}

.iconBox {
  display:flex;
  justify-content:space-around;
  padding: 0 0.24rem 0.3rem;
}

.iconBoxItem {
  display:flex;
  flex-direction:column;
  img {
    width:0.54rem;
    height:0.54rem;
    margin-bottom: 0.04rem;
  }
}

.mask{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
}
.mask-content{
    width: 3.12rem;
    min-height: 2.44rem;
    position: absolute;
    left: 50%;
    margin-left: -1.56rem;
    margin-top: -1.22rem;
    top: 50%;
    background: #ffffff;
    border-radius: 0.05rem;
    padding: 0.24rem 0 0.16rem;
}

.mask-content-qrcode{
    width: 3.12rem;
    min-height: 2.44rem;
    position: absolute;
    left: 50%;
    margin-left: -1.56rem;
    margin-top: -1.22rem;
    top: 50%;
    background: #ffffff;
    border-radius: 0.05rem;
    padding: 0.24rem 0.6rem 0.16rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
}

.mask-title{
    text-align: center;
    height: 0.21rem;
    line-height: 0.21rem;
    margin: 0 auto;
    font-size: 0.15rem;
    color: #282828;
    font-weight: bold;
}
.mask-title-qrcode {
    text-align: center;
    font-size:.20rem;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color:rgba(60,60,60,1);
    margin: 0 auto;
}

.mask-tips{
    width:2.79rem;
    min-height:.92rem;
    background:rgba(243,244,245,1);
    border-radius:.08rem;
    margin: 0.24rem auto 0;
    padding: 0.12rem;
    display: flex;
    align-items: center;
    color: #282828;
    font-size: 0.1rem;
}
.mask-tips-qrcode {
  font-size:.14rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(108,108,108,1);
  text-align:center;
}
.qrcode {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.2rem;
}
.mask-button{
    width:2.79rem;
    height:.44rem;
    line-height: 0.44rem;
    background:rgba(97,208,89,1);
    border-radius:.22rem;
    margin: 0.24rem auto 0;
    text-align: center;
    font-size: 0.16rem;
    color: #ffffff;
    display:flex;
    justify-content: center;
    align-items:center;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
}

.mask-buttonQQ{
    width:2.79rem;
    height:.44rem;
    line-height: 0.44rem;
    background:#33BBFF;
    border-radius:.22rem;
    margin: 0.24rem auto 0;
    text-align: center;
    font-size: 0.16rem;
    color: #ffffff;
    display:flex;
    justify-content: center;
    align-items:center;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
}


.contentTitle {
  color:#222222;
}
.contentDes {
  color:#9C9C9C;
}
.inviteNoticeContent {
  margin-top: 0.12rem;
  padding: 0 .16rem;
  font-size: .12rem;
}

.qrcode-bottomtext {
  font-size:.12rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(174,178,187,1);
  margin-top: .21rem;
}
.closeMask {
  width:.24rem;
  height:.24rem;
  position:absolute;
  top:-.56rem;
  right: 0;
}
.rulesDes {
  span {
    display:block;
    font-weight: bold;
    font-size: .15rem;
    margin-top: .2rem;
  }
}

.rulesBox {
  padding: .3rem .35rem 0;
  color:#FF9733;
}
.rulesline {
  width: .99rem;
  height:.01rem;
  background: #FF9733;
}
.rulesTitle {
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom: .16rem;
  font-weight: bold;
  font-size: .17rem;
}
.alreadyInviteNum {
  height:inherit;
  display:flex;
  align-items:center;
}
.boldFont {
  font-weight: bold;
  font-size: .13rem;
}
.margin2 {
  margin-top: .2rem;
}
.moreInfo {
  margin-top: .1rem;
}
</style>
<style>

.el-drawer.btt {
  border-radius:.16rem .16rem 0 0;
}

.el-drawer__header {
  margin-bottom: 0 !important;
}
</style>
<template>
<div class="container">
  <img class="gobackIcon" src='https://qiniu-image.qtshe.com/iconFont/cc-arrow-leftNew.png' alt='' @click="goBack"/>
  <div class="rulesBox">
    <!--<div class="rulesTitle"><div class="rulesline"></div>规则说明<div class="rulesline"></div></div> -->
    <div class="rulesDes">
      <span>1. 您邀请的好友自邀请成功之日算起，30天内完成一个通过审核的截图任务后，即成为你的有效好友。超过30天内未完成通过审核的截图任务的好友，系统会取消和您的邀请关系。</span>
      <span>2. 每个新用户只能被成功邀请一次，同一个登录账号、同一个手机号、同一个设备或同一提现账户，都视为同一个用户</span>
      <span>3. 每成功邀请一个有效好友，您可获得1元的现金奖励。同时，您还享有有效好友的截图类任务奖励的20%分成，分成周期：30天，即从邀请成功之日算起的30天内，他所完成的所有通过审核的截图类任务奖励，您都享有20%的分成奖励（不影响您的好友的奖励，分成奖励为额外的奖励），分成奖励上限为：1888元 </span>
      <span>4. 严禁模拟器或虚拟机注册、网络攻击、虚假注册等行为，一旦发现，赚钱团将取消用户的推广资格，并有权收回用户的推广奖励</span>
      <span>5. 活动最终解释权归赚钱团所有</span>
    </div>
  </div>
</div>
</template>
<script>
function visibilitychangeHandaler() {
  if (document.visibilityState === 'visible') {
    if (!util.getCookie('jwttoken')) {
      window.location.replace('/act/smallTaskAct/activityInvite')
    }
  }
}
function webkitvisibilitychangeHandaler() {
  if (document.webkitVisibilityState === 'visible') {
    if (!util.getCookie('jwttoken')) {
      window.location.replace('/act/smallTaskAct/activityInvite')
    }
  }
}
function mozvisibilitychangeHandaler() {
  if (document.mozVisibilityState === 'visible') {
    if (!util.getCookie('jwttoken')) {
      window.location.replace('/act/smallTaskAct/activityInvite')
    }
  }
}
function msvisibilitychangeHandaler() {
  if (document.msVisibilityState === 'visible') {
    if (!util.getCookie('jwttoken')) {
      window.location.replace('/act/smallTaskAct/activityInvite')
    }
  }
}
import toast from 'toast'
import util from 'util'
import Clipboard from 'clipboard'
import wx from 'wx'
import {
  Indicator
} from 'mint-ui'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      inviteCode: 0,
      drawer: false,
      visible: false, //弹窗mask
      visibleType: 0, //弹窗样式类型 0微信，1QQ 2qrcode
      persentNum: 20, //分成比例
      inviteDataCount: {}, //邀请奖励
      inviteRewardAmount: 0, //邀请奖励金额
      noticeBoxData: [
        {
          subTitle: '好友注册并完成一个截图任务',
          bkImage: 'https://qiniu-image.qtshe.com/xrwInvited/noticeLeftIcon.png',
          ruleCondition: 5,
          money: 1
        },
        {
          subTitle: '好友继续做任务得20%分成',
          bkImage: 'https://qiniu-image.qtshe.com/xrwInvited/noticeRightIcon.png',
          ruleCondition: 10,
          money: 1888
        }
      ],
      iconData: [
        {
          image: 'https://qiniu-image.qtshe.com/xrwInvited/wechatIcon.png',
          text: '微信邀请'
        },
        {
          image: 'https://qiniu-image.qtshe.com/xrwInvited/QQicon.png',
          text: 'QQ邀请'
        },
        {
          image: 'https://qiniu-image.qtshe.com/xrwInvited/qrcodeIcon.png',
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
    moreRules() {
      // 更多规则
      window.location.href = `/smallTaskAct/rules`
    },
    copyInviteCode() {
      const clipboard = new Clipboard('#inviteCode')
      clipboard.on('success', (e) => {
        toast('复制成功，粘贴给好友吧~')
      })
      clipboard.on('error', (error) => {
        console.log(error)
        toast('复制失败，请稍后再试')
      })
    },
    showVisible(num) {
      this.drawer = false //关闭抽屉
      this.visible = true //打开弹窗
      this.visibleType = num //弹窗类型
    },
    redirectLogin() {
      if (!util.getCookie('jwttoken')) {
        // 未登录  不用util里的login
        window.location.href = `/app/login?redirect_uri=${encodeURIComponent(window.location.href)}`
        return
      }
    },
    jumpToInviteDetail() {
      window.location.href = `/smallTaskAct/inviteDetail`
    },
    goApp(jumpType) {
      //跳转到app暂时先不做，先touast
      toast('复制成功，粘贴给好友吧~')
    },
    getInviteData() {
      this.$axios
        .post('/taskThird/invite/home', {
          appKey: 'QTSHE_ANDROID_MJ_TRIBE'
        }).then(
          res => {
            if (res.success) {
              this.noticeBoxData[0].money = res.data.inviteRewardAmount //顶部卡片的邀请金额
              this.inviteCode = res.data.inviteCode //邀请码
              this.persentNum = res.data.inviteShareRatio * 100 //分成比例
              this.inviteDataCount = res.data.inviteCountVO //邀请的奖励
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
    this.getInviteData() //邀请首页信息
    this.initPageShowEvent()
  },
  created() {
  }
}
</script>
