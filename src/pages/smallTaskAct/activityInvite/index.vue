<style lang='less' scoped>
.container {
    min-height:100vh;
    background:linear-gradient(192deg,rgba(255,235,180,1) 0%,rgba(255,204,109,1) 100%);
    padding-bottom: .2rem;
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

.flexRight {  
  display: flex;
  justify-content: flex-end;
  align-items:center;
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

.textEllipsis{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.bottomText {
    font-size: .34rem;
    font-family:PingFangSC-Semibold,PingFang;
    font-weight:900;
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
.flexCenterBase {
    display: flex;
    justify-content:center;
    align-items:baseline;
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
  padding: 0 .20rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.recordBottomText {
  font-size:0.12rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  text-align:center;
  color:rgba(255,128,0,1);
  span {
    width: 85px;
  }
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
    line-height:.32rem;
    height:.32rem;
    font-weight: 900;
    color:rgba(34,34,34,1);
  }
}

.moneyIcon {
  position:relative;
  bottom: 0.11rem;
  font-size:0.24rem;
  font-family:Bebas;
  color:rgba(204,204,204,1);
}

.drawTips {
  width:3.27rem;
  padding-bottom: .18rem;
  background:rgba(255,236,229,1);
  border-radius: 0.1rem;
  margin: 0 auto;
}

.tipsTitle {
  text-align:center;
  font-size: .16rem;
  font-family:PingFangSC-Semibold,PingFang SC;
  font-weight:900;
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
  span {
    text-align: center;
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
    border-radius: 0.12rem;
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
    font-size: 0.18rem;
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
    border-radius: .08rem;
    margin: 0.24rem auto 0;
    padding: 0.05rem;
    color: #282828;
    font-size: 0.14rem;
}
.mask-tipsBold {
    font-weight:bold;
    font-size: .14rem;
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
    border-radius: .22rem;
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
    border-radius: .22rem;
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
  font-size: .12rem;
}
.inviteNoticeContent {
  margin-top: 0.12rem;
  padding: 0 .16rem;
  font-size: .12rem;
}
.heartbeat {
    animation: heartbeat 1.3s ease-in-out 0s infinite alternate;
    animation:heartbeat 3s infinite;
    -webkit-animation:heartbeat 3s infinite;
    animation-direction:alternate;
    animation-timing-function: ease-in-out;
    -webkit-animation:heartbeat 3s infinite;
    -webkit-animation-direction:alternate;
    -webkit-animation-timing-function: ease-in-out;
}
@keyframes heartbeat {
    0%{
      transform: scale(1);
    }
    25%{
      transform: scale(1.05);
    }
    50%{
      transform: scale(1);
    }
      75%{
    transform: scale(1.05);
    }
}
@-webkit-keyframe heartbeat {
    0%{
      transform: scale(1);
    }
    25%{
      transform: scale(1.05);
    }
    50%{
      transform: scale(1);
    }
      75%{
    transform: scale(1.05);
    }
}
.qrcode-bottomtext {
  font-size: .12rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(174,178,187,1);
  margin-top: .21rem;
}
.closeMask {
  width: .24rem;
  height: .24rem;
  position:absolute;
  top:-.56rem;
  right: 0;
}
.rulesDes {
  span {
    display:block;
  }
}
.hideArea {
  display: none !important; 
}
.rulesBox {
  margin-top: .32rem;
  padding: 0 .35rem;
  color:#FF9733;
}
.rulesline {
  width: .99rem;
  height: .01rem;
  background: #FF9733;
}
.rulesTitle {
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom: .16rem;
}
.alreadyInviteNum {
  height:inherit;
  display:flex;
  align-items:center;
  font-size:.12rem;
  color:#926331;
  span {
    color:#401401;
    font-weight:900;
  }
}
.boldFont {
  font-weight: bold;
  font-size: .13rem;
}
.margin2 {
  margin-top: .2rem;
}
.moreInfo {
  color:#fff;
  height: .14rem;
  line-height: .14rem;
  margin-top: .1rem;
  span {
    height: .14rem;
    line-height: .14rem;
  }
}
.topTipsBox {
  background: url('https://qiniu-image.qtshe.com/topTipsIcon.png') no-repeat;
  background-size: contain;
  width: .34rem;
  height: .16rem;
  position: absolute;
  margin-left: .6rem;
  margin-top: .08rem;
}
.arrowRight {
  width: .12rem;
  height: .12rem;
}
.topTips {
  background: url('https://qiniu-image.qtshe.com/topTipsIcon.png') no-repeat;
  background-size: contain;
  width: .34rem;
  height: .16rem;
  position: absolute;
}
.ItemPrice {
  height: inherit;
}
.unit {
  font-size: .14rem;
}
.qr-code-box {
  margin-top:.21rem;
}
.myRecord {
  font-size:.16rem;
  font-family:PingFangSC-Semibold,PingFang SC;
  font-weight:900;
  color:rgba(64,20,1,1);
}
</style>
<style>
.el-drawer.btt {
  border-radius:.16rem .16rem 0 0;
}
.el-drawer__header {
  margin-bottom: 0 !important;
  padding: .15rem .2rem 0 !important;
}
</style>
<template>
<div class="container">
  <div class="noticeBox">
    <block v-for="(item,index) in noticeBoxData" :key="index" class="noticeItem">
        <div class="boxTop"><img :src='item.bkImage' alt=''/>{{index===0?item.subTitle:`好友继续做任务得${persentNum}%分成`}}</div>
        <div class="bottomText flexCenterBase"><span class="unit">+</span><span class="ItemPrice">{{item.money}}</span><span class="unit">元</span>
          <div class="topTipsBox" v-if="index===1">
            <!--<div  class="topTips"></div> -->
          </div>
        </div>
    </block>
  </div>
  <!-- 邀请按钮 -->
  <div class="inviteButton flexCenter heartbeat" @click="showDraw" v-clickEvents="{ businessId: 0, businessType: 0, index: index, position: `inviteButton`}">立即邀请</div>
  <div class="codeBox flexCenter">
    <span>我的邀请码：{{inviteCode}}</span>
    <div class="copyBtn flexCenter" id="inviteCode" :data-clipboard-text="inviteCode" @click="copyInviteCode()">复制<img src="https://qiniu-image.qtshe.com/xrwInvited/copyIcon.png" alt='' /></div>
  </div>
  <!-- 我的战绩 -->
  <div class="recordBox">
    <div class="recordBoxTop">
        <div class="myRecord">我的战绩</div> 
        <div class="alreadyInviteNum" @click="jumpToInviteDetail">已邀请好友：<span>{{totalInviteCount}}</span>人  ></div>
    </div>
    <div class="recordBoxBottom" @click="gorewardDetail">
      <div class="recordItem recordBottomText"><span class="textEllipsis">{{totalCount}}</span>总奖励(元)</div>
      <div class="moneyIcon">=</div>
      <div class="recordItem recordBottomText"><span class="textEllipsis">{{inviteDataCount.inviteAmount || 0}}</span>邀请奖励(元)</div>
      <div class="moneyIcon">+</div>
      <div class="recordItem recordBottomText"><span class="textEllipsis">{{inviteDataCount.inviteShareAmount || 0}}</span>分成奖励(元)</div>
    </div>
  </div>
  <div class="rulesBox">
    <div class="rulesTitle"><div class="rulesline"></div>规则说明<div class="rulesline"></div></div>
    <div class="rulesDes">
      <span class="boldFont">邀请奖励</span>
      <span>每成功邀请一个有效好友，可获得1元现金奖励；邀请越多赚越多，上不封顶</span>
      <span class="boldFont margin2">分成奖励 </span>
      <span>邀请成功的好友每完成一个截图任务，邀请人都可以获得好友收益的20%作为分成；一个好友最高可分得1888元</span>
    </div>
    <!--<div class="moreInfo boldFont flexRight" @click="moreRules">查看更多 <img class="arrowRight" src="https://qiniu-image.qtshe.com/zqtApp/iconArrowRight.png" alt=""/></div> -->
    <div class="moreInfo boldFont" @click="moreRules">查看全部规则 <span>>></span></div>
  </div>
  <!-- 抽屉&弹窗 -->
  <el-drawer :visible="drawer" direction="btt" size="3.98rem" :before-close="handleClose">
    <div class="tipsTitle">邀好友赚现金</div>
    <div class="iconBox">
      <div class="iconBoxItem" v-for="(item,index) in iconData" :key="index" @click="showVisible(index)" v-clickEvents="{ businessId: item.id, businessType: 0, index: index, position: `inviteVisible${index}`}">
          <img :src='item.image' alt=''/>
          <span>{{item.text}}</span>
      </div>
    </div>
    <div class="drawTips">
      <div class="inviteNotice"><img src='https://qiniu-image.qtshe.com/xrwInvited/lightIcon.png' alt='' />邀请小贴士</div>
      <div class="inviteNoticeContent">
        <div class="contentTitle">- 邀请奖励</div> 
        <div class="contentDes">每成功邀请一个有效好友，可获得1元现金奖励；邀请越多赚越多，上不封顶</div>
        <div class="contentTitle" style="margin-top: .06rem;">- 分成奖励</div>
        <div class="contentDes">邀请成功的好友每完成一个截图任务，邀请人都可获得好友收益的20%作为分成；一个好友最高可分得1888元</div>
      </div>
    </div>
  </el-drawer>
    <!-- 弹窗 -->
    <div class="mask" v-show="visible" @click="closeMask">
        <div class="mask-content" v-if="visibleType<=1">
            <img class="closeMask" src='https://qiniu-image.qtshe.com/xrwInvited/closeMaskIcon.png' alt='' @click="closeMask"/>
            <div class="mask-title">邀请链接已复制成功</div>
            <div class="mask-tips">
              <span class="mask-tipsBold">{{inviteBoldText}}</span><span>{{inviteDesText}}</span>
            </div>
            <div :class="visibleType===0?'mask-button':'mask-buttonQQ'" id="inviteCode" :data-clipboard-text="inviteText" @click="copyInviteCode(visibleType)">
                <img :src="visibleType===0?'https://qiniu-image.qtshe.com/xrwInvited/wechatIcon.png':'https://qiniu-image.qtshe.com/xrwInvited/QQicon.png'" alt=''/>
                去{{visibleType===0?'微信':'QQ'}}粘贴给好友
            </div>
        </div>
        <div :class="hideQrcoeArea?'hideArea':'mask-content-qrcode'">
            <img class="closeMask" src='https://qiniu-image.qtshe.com/xrwInvited/closeMaskIcon.png' alt='' @click="closeMask"/>
            <div class="mask-title-qrcode">请扫描我的二维码</div>
            <div class="mask-tips-qrcode">
              我的邀请码：{{inviteCode}}
            </div>
            <div class="qr-code-box" ref="qrCode" xss=removed></div>
            <div class="qrcode-bottomtext">
                让好友用微信/支付宝/QQ/浏览器 
                <div>扫描上面二维码</div>
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

import md5 from 'md5'
import toast from 'toast'
import util from 'util'
import Clipboard from 'clipboard'
import QRCode from 'qrcodejs2'
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
      token: '',
      interPackage: '',
      hideQrcoeArea: false, //qrcode dom先渲染，默认不隐藏
      visible: false, //弹窗mask
      totalInviteCount: 0, //总邀请人
      totalCount: 0, //总邀请金额
      visibleType: 0, //弹窗样式类型 0微信，1QQ 2qrcode
      persentNum: 20, //分成比例
      codeBoldText: '', //邀请码加粗
      inviteDataCount: {}, //邀请奖励
      inviteRewardAmount: 0, //邀请奖励金额
      shotLink: '', //生成的短链接
      inviteText: ``, //邀请文案
      inviteBoldText: '', //邀请文案加粗部分
      inviteDesText: '', //邀请文案加粗部分 合并组成展示的inviteText
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
          id: 0,
          image: 'https://qiniu-image.qtshe.com/xrwInvited/wechatIcon.png',
          text: '微信邀请'
        },
        {
          id: 1,
          image: 'https://qiniu-image.qtshe.com/xrwInvited/QQicon.png',
          text: 'QQ邀请'
        },
        {
          id: 2,
          image: 'https://qiniu-image.qtshe.com/xrwInvited/qrcodeIcon.png',
          text: '面对面邀请'
        }
      ]
    }
  },
  methods: {
    gorewardDetail() {
      this.$router.push({path: '/smallTaskAct/rewardDetail'})
    },
    handleClose() {
      //关闭抽屉
      this.drawer = false
    },
    showDraw() {
      // 展示抽屉
      if (!util.getCookie('token') || !util.getCookie('jwttoken')) {
        this.interPackage.evokeLoginPage(obj => {
          this.token = obj.token
          util.setCookie('token', obj.token)
        })
        return false
      }
      this.drawer = true
    },
    closeMask () {
      //隐藏mask 并充值qrcode弹窗状态
      this.visible = false
      this.hideQrcoeArea = false
    },
    checkToken () {
      if (util.isAndroidApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            util.setCookie('token', data.token)
          }
          if (data.jwtToken) {
            util.setCookie('jwttoken', data.jwtToken)
          }
          if (!data.token || !data.jwtToken) {
            //未登录调客户端方法
            // 未登录
            this.interPackage.evokeLoginPage(obj => {
              this.token = obj.token
              util.setCookie('token', obj.token)
            })
          }
          setTimeout(() => {
            this.getInviteData() //邀请首页信息
          }, 200)
        }).catch(
            // this.interPackage.evokeLoginPage(obj => {
            //   this.token = obj.token
            //   util.setCookie('token', obj.token)
            // })
        )
      } else {
        if (util.getToken()) {
          this.token = util.getToken()
        } else {
          // this.interPackage.evokeLoginPage(obj => {
          //   this.token = obj.token
          //   util.setCookie('token', obj.token)
          // })
          // this.redirectLogin()
        }
        this.getInviteData()
      }
    },
    initQRCode() {
      setTimeout(() => {
        this.qrcode = new QRCode(this.$refs.qrCode, {
          text: `${window.g_info.qts_bean}/act/smallTaskAct/download?inviteCode=${this.inviteCode}`,
          width: 100,
          height: 100,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        })
      }, 600)
    },
    moreRules() {
      // 更多规则
      window.location.href = `/act/smallTaskAct/rules`
    },
    copyInviteCode(clickType) {
      if (clickType) {
        this.$axios.track({
          eventType: 2,
          positionId: `inviteDetail${clickType === 0 ? 'Wechat' : 'QQ'}`,
          currentId: '/act/smallTaskAct/activityInvite'
        })
      }
      const clipboard = new Clipboard('#inviteCode')
      clipboard.on('success', (e) => {
        console.log(e)
        toast('复制成功，粘贴给好友吧~')
      })
      clipboard.on('error', (error) => {
        console.log(error)
        toast('复制失败，请稍后再试')
      })
    },
    showVisible(num) {
      //打开二级弹窗
      this.drawer = false //关闭抽屉
      this.visible = true //打开弹窗
      this.visibleType = num //弹窗类型
      if (num <= 1) {
        this.hideQrcoeArea = true //隐藏qrcode 框
      }
    },
    redirectLogin() {
      if (!util.getCookie('jwttoken')) {
        // 未登录  不用util里的login
        window.location.href = `/app/login?redirect_uri=${encodeURIComponent(window.location.href)}`
        return
      }
    },
    jumpToInviteDetail() {
      window.location.href = `/act/smallTaskAct/inviteDetail`
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
              this.totalInviteCount = res.data.inviteCountVO.completeInviteNum + res.data.inviteCountVO.invitingNum || 0
              this.totalCount = (res.data.inviteCountVO.inviteAmount + res.data.inviteCountVO.inviteShareAmount).toFixed(2) === '0.00' ? '0' : (res.data.inviteCountVO.inviteAmount + res.data.inviteCountVO.inviteShareAmount).toFixed(2)
              this.inviteBoldText = `我的邀请码：${res.data.inviteCode}`
              this.inviteDesText = `，和我一起加入“赚钱团”，玩玩手机轻松赚零花钱。点击加入：http://suo.nz/52yKWL` //拼接元素
              if (util.isAndroidApp() || util.isIosApp()) {
                this.getShotUrl() //生成短链
              } else {
                this.inviteText = `我的邀请码：${res.data.inviteCode}，和我一起加入“赚钱团”，玩玩手机轻松赚零花钱。点击加入：http://suo.nz/52yKWL`
              }
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
    getShotUrl() {
      //md5(时间戳 + "\n" + secret) 转小写  截取10到20位
      let timestamp = Date.now()
      let postData = {
        appKey: 'QTSHE_ANDROID_MJ_TRIBE',
        timestamp,
        sign: md5(timestamp + '\n' + '5Kk2pxbMVjygPl8wsIE1XyCSy5jEzfV3').toLowerCase().substring(10, 20),
        channel: 6,
        sourceUrl: `${window.g_info.qts_bean}/act/smallTaskAct/download?inviteCode=${this.inviteCode}`
      }
      this.$axios
        .post('/taskThird/conversionShortLink', postData).then(
        res => {
          if (res.success) {
            this.inviteDesText = `，和我一起加入“赚钱团”，玩玩手机轻松赚零花钱。点击加入：${res.data}`
            this.inviteText = `我的邀请码：${this.inviteCode}，和我一起加入“赚钱团”，玩玩手机轻松赚零花钱。点击加入：${res.data}` //实际要复制的链接
          } else {
            toast('链接生成失败', res.code)
          }
        }
        ).catch(
          error => {
            console.log(error)
          }
        )
    },
    handleOpenAccount() {
      //曝光触发 2-点击 1曝光 5打开
      this.$axios.track({
        eventType: 1,
        positionId: 'downloadMJApk6',
        currentId: '/act/smallTaskAct/activityInvite'
      })
    },
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
    }
  },
  mounted() {
    // this.handleOpenAccount()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.initPageShowEvent()
    this.checkToken() //检测登陆
    this.$nextTick(() => {
      this.initQRCode()
    })
  }
}
</script>
