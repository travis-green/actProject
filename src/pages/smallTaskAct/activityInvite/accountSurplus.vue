<style lang='less' scoped>
.container {
  min-height:100vh;
  background: #fff;
}

.getMoneyButton {
    width:3.43rem;
    height: .44rem;
    line-height: .44rem;
    background:rgba(255,217,0,1);
    border-radius: .22rem;
    margin: .24rem auto 0;
    font-size: .16rem;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(34,34,34,1);
}

.getMoneyButtonDes {
    margin-top: .15rem;
    font-size:.14rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(156,156,156,1);
    span {
        margin-left: .1rem;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(252,99,2,1);
    }
}
.tipsBox {
    width:.36rem;
    height: .2rem;
    line-height: .2rem;
    background:rgba(242,71,36,1);
    color: #fff;
    border-radius: .09rem 0 .09rem 0;
    position: absolute;
    margin-left: 3.1rem;
    margin-top: -.5rem;
    font-size: .1rem;
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
    position: absolute;
    left: 50%;
    margin-left: -1.56rem;
    margin-top: -1.22rem;
    top: 50%;
    background: #ffffff;
    border-radius: 0.08rem;
    padding: 0.24rem 0 0.24rem;
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
    text-align:center;
    color: #282828;
    font-size: 0.1rem;
    margin-top: .23rem;
}

.mask-tipsRule {
    margin-top: .19rem;
    padding: 0 .16rem;
}

.closeMask {
  width:.24rem;
  height: .24rem;
  position:absolute;
  top:-.56rem;
  right: 0;
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
    background:#FFD900;
    border-radius: .22rem;
    margin: 0.24rem auto 0;
    text-align: center;
    font-size: 0.16rem;
    font-weight: bold;
    color: #000;
    display:flex;
    justify-content: center;
    align-items:center;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
}
.greyBack {
    width:100%;
    height:.08rem;
    background:rgba(246,247,251,1);
}
.bottomBox {
  min-height: 50vh;
}

.tabCon {
  padding: 0 0.16rem;
}

.phoneNum {
  font-size: .14rem;
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

.textRight {
  text-align: right;
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
  width: 60%;
}

.tabContentRight {
  width: 40%;
}

.topBox {
  color: #000;
  text-align:center;
  padding: .14rem 0 .18rem;
}
.totalMoney {
  font-size:0.16rem;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  margin-top:0.4rem;
}
.titleText {
  font-size:0.18rem;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
}
.totalMoneyCount {
  margin-top:0.14rem;
  font-size: .42rem;
  height: .65rem;
  font-family:DINAlternate-Bold,DINAlternate;
  font-weight:bold;
  color:rgba(16,29,55,1);
  flex-direction: column;
}
.rewardBox {
  display:flex;
  justify-content:space-around;
  padding: 0 0.3rem;
  align-items:center;
}
.DividingLine {
  width: .01rem;
  height:0.32rem;
  background:rgba(255,255,255,0.2);
}
.rewardDetail {
  display:flex;
  flex-direction:column;
  span {
    font-size:.24rem;
    font-weight:bold;
    font-family:Bebas;
  }
}
.flexCenter {
    display:flex;
    justify-content:center;
    align-items:center;
}

.surplusLeft {
    display:flex;
    height: inherit;
    align-items:center;
    span {
        margin-left: .13rem;
        color:#101D37;
        font-size: .14rem;
    }
}
.surplusLeftIcon {
    width: .25rem;
    height: .25rem;
}
.surplusRight {
  display: flex;
  align-items: center;
    span {
        color: #838D99;
    }
    img {
        width: .11rem;
        height: .11rem;
        margin-left: .07rem;
    }
}
.totalCount {
    position:absolute;
    margin-top: .03rem;
}
.countLine {
    width:2.8rem;
    height:.01rem;
    background:rgba(234,238,247,1);
    margin-top: .06rem;
}
.surplus {
    display:flex;
    justify-content: space-between;
    padding: 0 .16rem;
    height: .6rem;
    align-items:center;
}
.rulesDes {
  span {
    display:block;
    color:#6C6C6C;
    font-size: .14rem;
  }
}
</style>
<template>
<div class="container">
   <div class="topBox">
        <div class="titleText">账户余额</div>
        <div class="totalMoney">余额（元）</div>
        <div class="totalMoneyCount flexCenter">
            <div class="countLine"></div>
            <div class="countLine"></div>
            <div class="countLine"></div>
            <div class="countLine"></div>
            <div class="totalCount">{{withdrawCount || '0.00'}}</div>
            <div class="countLine"></div>
            <div class="countLine"></div>
            <div class="countLine"></div>
            <div class="countLine"></div>
        </div>
        <div class="getMoneyButton" @click="onePriceGetAward">1元提现</div>
        <div class="tipsBox">活动</div>
        <div class="getMoneyButtonDes">每完成3个任务，可获得1次“1元提现”的机会<span @click="rulesDetail">详情</span></div>
   </div>
   <div class="greyBack"></div>
   <div class="bottomBox">
        <div class="surplus" v-for="(item,index) in surplusData" :key="index" @click="jumpToDetail(index)">
            <div class="surplusLeft"><div class="surplusLeftIcon" :style="`background: url('${item.iconUrl}') 0% 0% / contain no-repeat`"></div><span>{{item.subTitle}}</span></div>
            <div class="surplusRight"><span v-if="index===0">10元起提</span><span v-if="index===1 && cardNum!==0">{{cardNum}}</span><img src="https://qiniu-image.qtshe.com/zqtApp/iconArrowRight.png" alt='' /></div>
        </div>
   </div>
    <div class="mask" v-if="visible" @click="visible = false">
        <div class="mask-content">
            <img class="closeMask" src='https://qiniu-image.qtshe.com/xrwInvited/closeMaskIcon.png' alt='' @click="visible = false"/>
            <div class="mask-title">{{visibleType===2?'提现规则':(visibleType===0?`可提余额不足${needCount}元`:'很遗憾，暂无提现次数')}}</div>
            <div class="mask-tipsRule rulesDes" v-if="visibleType===2">
              <span>1、每日获得3次任务奖励（截图类/游戏类/签到红包）可获得一次1元提现机会，次日0点清零 </span>
              <span>2、截图类任务以实际到账计算完成次数，今天提交的任务如果明日到账，则计算在明日提现次数里 </span>
              <span>3、同一个游戏任务，获得多次奖励，只算作一次 </span>
              <span>4、每日不限制提现次数，提现秒到账</span>
            </div>
            <div class="mask-tipsRule rulesDes" v-else-if="visibleType===1">
              <span style="text-align:center;">今日已完成 {{cashNumCount.taskNum}} 个任务，可提现 {{cashNumCount.num}} 次，已提现 {{cashNumCount.finishWithdrawalsNum}} 次，再完成 {{cashNumCount.againTaskNum}} 个任务，可进行提现</span>
            </div>
            <div class="mask-tips" v-else>
              至少有{{needCount}}元才能够提现哦
            </div>
            <div class="mask-buttonQQ" @click="visibleType===2? visible = false:jumpToIndex()">
                 {{visibleType===2?'我知道了':(visibleType===0?'做任务 提余额':'做任务，得到提现次数')}}
            </div>
        </div>
        <!--
        <div class="mask-content-qrcode" v-else>
            <img class="closeMask" src='https://qiniu-image.qtshe.com/xrwInvited/closeMaskIcon.png' alt='' @click="visible = false"/>
            <div class="mask-title-qrcode">请扫描我的二维码</div>
            <div class="mask-tips-qrcode">
              我的邀请码：1234567
            </div>
            <img class="qrcode" src='https://qiniu-image.qtshe.com/xrwInvited/qrcodeTest.png' alt=''/>
            <div class="qrcode-bottomtext">
                让好友用微信/支付宝/QQ/浏览器 扫描上面二维码
            </div>
        </div> -->
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
      interPackage: '',
      isAuthVerified: false, //实名认证状态
      withdrawCount: 0, //提现金额
      todayComplete: 0, //今日已完成次数
      canGetCount: 0, //今日可提现次数
      alreadyCount: 0, //今日已提现次数
      needTaskCount: 0, //再完成几个可提现
      cardNum: 0, //可提账户数
      visible: false, //是否展示弹窗
      visibleType: 0, //弹窗文案类型 0-不足1/10元，1-很遗憾无次数，2规则
      cashNumCount: {
        num: 0,
        taskNum: 0,
        finishWithdrawalsNum: 0,
        againTaskNum: 0
      }, //可提次数
      surplusData: [
        {
          subTitle: '常规提现',
          iconUrl: 'https://qiniu-image.qtshe.com/xrwInvited/card1.png',
          telPhone: '15151515093'
        },
        {
          subTitle: '提现账户',
          iconUrl: 'https://qiniu-image.qtshe.com/xrwInvited/card2.png',
          telPhone: '15223232323'
        },
        {
          subTitle: '奖励明细',
          iconUrl: 'https://qiniu-image.qtshe.com/xrwInvited/card3.png',
          telPhone: '15223232323'
        }
      ],
      needCount: 1
    }
  },
  methods: {
    getCountData() {
      this.$axios
        .post('/taskThird/cloud/cash/num', {
          appKey: 'QTSHE_ANDROID_MJ_TRIBE',
          userId: 13
        }).then(
          res => {
            if (res.success) {
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
    authVerified() {
      let postData = {
        params: {
          appKey: 'QTSHE_ANDROID_MJ_TRIBE'
        }
      }
      this.$axios.get(window.g_info.qts_api + '/qtbUserCenter/qtb/userBindBank/obtain/authName', postData)
        .then(res => {
          if (res.success) {
            this.isAuthVerified = res.data.userAuth //是否已实名认证
          } else {
            this.isAuthVerified = res.success
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    checkToken () {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            util.setCookie('token', data.token)
            this.token = data.token
          }
          if (data.jwtToken) {
            util.setCookie('jwttoken', data.jwtToken)
            this.jwttoken = data.jwttoken
          }
          setTimeout(() => {
            this.getAccountData() //邀请首页信息
          }, 200)
        })
      } else {
        if (util.getToken()) {
          this.token = util.getToken()
        } else {
          this.redirectLogin()
        }
        this.getAccountData()
      }
    },
    redirectLogin() {
      // 未登录  不用util里的login
      this.interPackage.evokeLoginPage(obj => {
        this.token = obj.token
        util.setCookie('token', obj.token)
      })
      // window.location.href = `/app/login?redirect_uri=${encodeURIComponent(window.location.href)}`
    },
    getAccountData() {
      let postData = {
        params: {
          appKey: 'QTSHE_ANDROID_MJ_TRIBE'
        }
      }
      this.$axios.get(window.g_info.qts_api + `/qtbUserCenter/qtb/userpay/obtain/money`, postData).then(res => {
        if (res.success) {
          this.withdrawCount = res.data.rewardWalletVO.money || 0  //提现次数
          this.cashNumCount = res.data.cashNumVO
          this.cardNum = Number(res.data.bankNum) //账户数
        }
        this.authVerified() //获取实名认证状态
      })
    },
    jumpToIndex() {
      // 跳转到赚钱团首页 TODO
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.homeTabSwitch().then((data) => {
        })
      }
    },
    showAlert(visType) {
      this.visible = true
      this.visibleType = visType
    },
    onePriceGetAward() {
      this.$axios.track({
        eventType: 2,
        positionId: 'onePriceGetAward',
        currentId: '/act/smallTaskAct/accountSurplus'
      })
      if (this.withdrawCount < 1) {
        this.showAlert(0)
        return false
      } else if (this.cashNumCount.num === 0) {
        //无可提现次数
        this.showAlert(1)
        return false
      } else if (this.cardNum === 0 && !this.isAuthVerified) {
        //未实名认证
        toast('请先实名认证')
        setTimeout(() => {
          window.location.href = window.g_info.qtbao_domain + '/app/qtsVerify?withdraw=1'
        }, 2000) //2秒后跳到青团宝实名认证页面
        return false
      } else if (this.cardNum === 0 && this.isAuthVerified) {
        //无可提现账户
        toast('请先添加个账户吧')
        setTimeout(() => {
          window.location.href = window.g_info.qtbao_domain + '/app/salaryCard?withdraw=1'
        }, 2000) //2秒后跳到青团宝实名认证页面
        return false
      }
      window.location.href = window.g_info.qtbao_domain + '/app/?from=smallTaskAct&withdraw=1'
    },
    gorewardDetail() {
      window.location.href = window.g_info.qtbao_domain + '/app/salaryList?withdraw=0'
    },
    rulesDetail() {
      //显示规则详情弹窗
      this.visible = true
      this.visibleType = 2
    },
    jumpToQtb() {
      // 跳转到青团宝
      if (this.withdrawCount >= 10) {
        if (!this.isAuthVerified) {
          // 没认证
          toast('请先实名认证')
          setTimeout(() => {
            window.location.href = window.g_info.qtbao_domain + '/app/qtsVerify?withdraw=0'
          }, 2000) //2秒后跳到青团宝-账户列表页
          return false
        } else if (this.cardNum === 0) {
          // 没有卡
          toast('请先绑定银行卡')
          this.jumpToQtbSalaryCard()
          return false
        }
      }
      window.location.href = window.g_info.qtbao_domain + '/app/?from=smallTaskAct&withdraw=0'
    },
    jumpToQtbSalaryCard() {
      // 跳转到青团宝工资卡页面
      window.location.href = window.g_info.qtbao_domain + '/app/salaryCard?withdraw=0'
    },
    jumpToDetail(jumpNum) {
      // 底部三个跳转
      switch (jumpNum) {
        case 0:
          if (!this.isAuthVerified) {
            toast('请先实名认证')
            setTimeout(() => {
              window.location.href = window.g_info.qtbao_domain + '/app/qtsVerify?withdraw=0'
            }, 2000) //2秒后跳到青团宝-账户列表页
          } else {
            this.jumpToQtb()  //常规提现
          }
          break
        case 1:
          if (!this.isAuthVerified) {
            toast('请先实名认证')
            setTimeout(() => {
              window.location.href = window.g_info.qtbao_domain + '/app/qtsVerify?withdraw=0'
            }, 2000) //2秒后跳到青团宝-账户列表页
          } else {
            this.jumpToQtbSalaryCard() //跳到提现账户
          }
          break
        case 2:
          this.gorewardDetail() //跳到奖励详情
          break
      }
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
    }
  },
  mounted() {
    this.initPageShowEvent() //reload
    this.checkToken()
    this.$axios.track({
      eventType: 1,
      positionId: 'exposureAccount',
      currentId: '/act/smallTaskAct/accountSurplus'
    })
    // this.getCountData()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
