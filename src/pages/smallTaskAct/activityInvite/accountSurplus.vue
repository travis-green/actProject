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
        <div class="titleText">????????????</div>
        <div class="totalMoney">???????????????</div>
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
        <div class="getMoneyButton" @click="onePriceGetAward">1?????????</div>
        <div class="tipsBox">??????</div>
        <div class="getMoneyButtonDes">?????????3?????????????????????1??????1?????????????????????<span @click="rulesDetail">??????</span></div>
   </div>
   <div class="greyBack"></div>
   <div class="bottomBox">
        <div class="surplus" v-for="(item,index) in surplusData" :key="index" @click="jumpToDetail(index)">
            <div class="surplusLeft"><div class="surplusLeftIcon" :style="`background: url('${item.iconUrl}') 0% 0% / contain no-repeat`"></div><span>{{item.subTitle}}</span></div>
            <div class="surplusRight"><span v-if="index===0">10?????????</span><span v-if="index===1 && cardNum!==0">{{cardNum}}</span><img src="https://qiniu-image.qtshe.com/zqtApp/iconArrowRight.png" alt='' /></div>
        </div>
   </div>
    <div class="mask" v-if="visible" @click="visible = false">
        <div class="mask-content">
            <img class="closeMask" src='https://qiniu-image.qtshe.com/xrwInvited/closeMaskIcon.png' alt='' @click="visible = false"/>
            <div class="mask-title">{{visibleType===2?'????????????':(visibleType===0?`??????????????????${needCount}???`:'??????????????????????????????')}}</div>
            <div class="mask-tipsRule rulesDes" v-if="visibleType===2">
              <span>1???????????????3???????????????????????????/?????????/??????????????????????????????1????????????????????????0????????? </span>
              <span>2????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? </span>
              <span>3??????????????????????????????????????????????????????????????? </span>
              <span>4????????????????????????????????????????????????</span>
            </div>
            <div class="mask-tipsRule rulesDes" v-else-if="visibleType===1">
              <span style="text-align:center;">??????????????? {{cashNumCount.taskNum}} ????????????????????? {{cashNumCount.num}} ??????????????? {{cashNumCount.finishWithdrawalsNum}} ??????????????? {{cashNumCount.againTaskNum}} ???????????????????????????</span>
            </div>
            <div class="mask-tips" v-else>
              ?????????{{needCount}}?????????????????????
            </div>
            <div class="mask-buttonQQ" @click="visibleType===2? visible = false:jumpToIndex()">
                 {{visibleType===2?'????????????':(visibleType===0?'????????? ?????????':'??????????????????????????????')}}
            </div>
        </div>
        <!--
        <div class="mask-content-qrcode" v-else>
            <img class="closeMask" src='https://qiniu-image.qtshe.com/xrwInvited/closeMaskIcon.png' alt='' @click="visible = false"/>
            <div class="mask-title-qrcode">????????????????????????</div>
            <div class="mask-tips-qrcode">
              ??????????????????1234567
            </div>
            <img class="qrcode" src='https://qiniu-image.qtshe.com/xrwInvited/qrcodeTest.png' alt=''/>
            <div class="qrcode-bottomtext">
                ??????????????????/?????????/QQ/????????? ?????????????????????
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
      isAuthVerified: false, //??????????????????
      withdrawCount: 0, //????????????
      todayComplete: 0, //?????????????????????
      canGetCount: 0, //?????????????????????
      alreadyCount: 0, //?????????????????????
      needTaskCount: 0, //????????????????????????
      cardNum: 0, //???????????????
      visible: false, //??????????????????
      visibleType: 0, //?????????????????? 0-??????1/10??????1-?????????????????????2??????
      cashNumCount: {
        num: 0,
        taskNum: 0,
        finishWithdrawalsNum: 0,
        againTaskNum: 0
      }, //????????????
      surplusData: [
        {
          subTitle: '????????????',
          iconUrl: 'https://qiniu-image.qtshe.com/xrwInvited/card1.png',
          telPhone: '15151515093'
        },
        {
          subTitle: '????????????',
          iconUrl: 'https://qiniu-image.qtshe.com/xrwInvited/card2.png',
          telPhone: '15223232323'
        },
        {
          subTitle: '????????????',
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
              toast(res.msg || '?????????????????????????????????')
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
            this.isAuthVerified = res.data.userAuth //?????????????????????
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
            this.getAccountData() //??????????????????
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
      // ?????????  ??????util??????login
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
          this.withdrawCount = res.data.rewardWalletVO.money || 0  //????????????
          this.cashNumCount = res.data.cashNumVO
          this.cardNum = Number(res.data.bankNum) //?????????
        }
        this.authVerified() //????????????????????????
      })
    },
    jumpToIndex() {
      // ???????????????????????? TODO
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
        //??????????????????
        this.showAlert(1)
        return false
      } else if (this.cardNum === 0 && !this.isAuthVerified) {
        //???????????????
        toast('??????????????????')
        setTimeout(() => {
          window.location.href = window.g_info.qtbao_domain + '/app/qtsVerify?withdraw=1'
        }, 2000) //2???????????????????????????????????????
        return false
      } else if (this.cardNum === 0 && this.isAuthVerified) {
        //??????????????????
        toast('????????????????????????')
        setTimeout(() => {
          window.location.href = window.g_info.qtbao_domain + '/app/salaryCard?withdraw=1'
        }, 2000) //2???????????????????????????????????????
        return false
      }
      window.location.href = window.g_info.qtbao_domain + '/app/?from=smallTaskAct&withdraw=1'
    },
    gorewardDetail() {
      window.location.href = window.g_info.qtbao_domain + '/app/salaryList?withdraw=0'
    },
    rulesDetail() {
      //????????????????????????
      this.visible = true
      this.visibleType = 2
    },
    jumpToQtb() {
      // ??????????????????
      if (this.withdrawCount >= 10) {
        if (!this.isAuthVerified) {
          // ?????????
          toast('??????????????????')
          setTimeout(() => {
            window.location.href = window.g_info.qtbao_domain + '/app/qtsVerify?withdraw=0'
          }, 2000) //2?????????????????????-???????????????
          return false
        } else if (this.cardNum === 0) {
          // ?????????
          toast('?????????????????????')
          this.jumpToQtbSalaryCard()
          return false
        }
      }
      window.location.href = window.g_info.qtbao_domain + '/app/?from=smallTaskAct&withdraw=0'
    },
    jumpToQtbSalaryCard() {
      // ?????????????????????????????????
      window.location.href = window.g_info.qtbao_domain + '/app/salaryCard?withdraw=0'
    },
    jumpToDetail(jumpNum) {
      // ??????????????????
      switch (jumpNum) {
        case 0:
          if (!this.isAuthVerified) {
            toast('??????????????????')
            setTimeout(() => {
              window.location.href = window.g_info.qtbao_domain + '/app/qtsVerify?withdraw=0'
            }, 2000) //2?????????????????????-???????????????
          } else {
            this.jumpToQtb()  //????????????
          }
          break
        case 1:
          if (!this.isAuthVerified) {
            toast('??????????????????')
            setTimeout(() => {
              window.location.href = window.g_info.qtbao_domain + '/app/qtsVerify?withdraw=0'
            }, 2000) //2?????????????????????-???????????????
          } else {
            this.jumpToQtbSalaryCard() //??????????????????
          }
          break
        case 2:
          this.gorewardDetail() //??????????????????
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
