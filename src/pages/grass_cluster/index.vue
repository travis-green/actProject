<template>
  <div class="cluster-wrap">
    <img src="https://qiniu-image.qtshe.com//grassCluster/1520579699873/p1.jpg" alt="">
    <img src="https://qiniu-image.qtshe.com//grassCluster/1520579699873/p2.jpg" alt="">
    <img src="https://qiniu-image.qtshe.com//grassCluster/1520579699873/p333.jpg" alt="">
    <div class="cluster-wrap3">
      <div class="share-get-price1">
        <span>分享</span><span class="red">赚{{qtsCommissionTotalToShow1}}</span>
      </div>
      <div class="share-get-price2">
        <span>分享</span><span class="red">赚{{qtsCommissionTotalToShow2}}</span>
      </div>
      <img class="img1" :src="headImg1" alt="">
      <img class="img2" :src="headImg2" alt="">
      <div class="button01" @click="shareProducts1">
        <span class="price-num">￥{{promoPriceToShow1}}</span>
        <span class="cross-num">{{originPriceToShow1}}</span>
      </div>
      <div class="button02" @click="shareProducts2">
        <span class="price-num">￥{{promoPriceToShow2}}</span>
        <span class="cross-num">{{originPriceToShow2}}</span>
      </div>
    </div>
    <div class="share-code" v-show="showShare">
      <span>{{shareCode}}</span>
      <div>请注意：需要复制以上全部内容才能生效！！</div>
    </div>
    <img src="https://qiniu-image.qtshe.com//grassCluster/1520579699873/p4.jpg" alt="">
  </div>
</template>

<script>
import util from 'util'
import toast from 'toast'
import {
  Indicator,
  MessageBox
} from 'mint-ui'

export default {
  data () {
    return {
      interPackage: '',
      token: '',
      showShare: false,
      shareCode: '',
      qtsCommissionTotalToShow1: '', // 分享后赚
      headImg1: '',
      promoPriceToShow1: '', // 折后价
      originPriceToShow1: '', // 原价
      qtsCommissionTotalToShow2: '', // 分享后赚
      headImg2: '',
      promoPriceToShow2: '', // 折后价
      originPriceToShow2: '' // 原价
    }
  },
  methods: {
    //判断是否已有登录信息
    checkToken () {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
          }
        })
      } else {
        if (util.getToken()) {
          this.token = util.getToken()
        }
      }
    },
    getProductInfo1 () {
      let sendData = {
        itemId: 373968
      }
      this.$axios.post('/zhongcao/item/detail', sendData).then(res => {
        if (res.success) {
          this.qtsCommissionTotalToShow1 = (res.data.qtsCommissionTotalToShow * 2).toFixed(2)
          this.headImg1 = res.data.headImg
          this.originPriceToShow1 = res.data.originPriceToShow
          this.promoPriceToShow1 = res.data.promoPriceToShow
        } else {
          toast(res.msg)
        }
      })
    },
    getProductInfo2 () {
      let sendData = {
        itemId: 335450
      }
      this.$axios.post('/zhongcao/item/detail', sendData).then(res => {
        if (res.success) {
          this.qtsCommissionTotalToShow2 = res.data.qtsCommissionTotalToShow * 2
          this.headImg2 = res.data.headImg
          this.originPriceToShow2 = res.data.originPriceToShow
          this.promoPriceToShow2 = res.data.promoPriceToShow
        } else {
          toast(res.msg)
        }
      })
    },
    shareProducts1 () {
      if (this.token) {
        Indicator.open()
        let sendData = {
          itemId: 373968,
          token: this.token
        }
        this.$axios.post('/zhongcao/item/taocode', sendData).then(res => {
          Indicator.close()
          if (res.success) {
            window.MtaH5 && window.MtaH5.clickStat('grass_cluster_373968')
            this.showShare = true
            let code = res.data.taocode.split('￥')[1]
            this.shareCode = `￥${code}￥`
          } else {
            if (res.code === 4004) {
              if (util.isAndroidApp() || util.isIosApp()) {
                this.interPackage.eventEmitter()
                this.interPackage.loginHandler((token) => {
                  this.token = token
                  this.checkToken()
                })
              } else {
                util.goLogin()
              }
            } else {
              toast(res.msg)
            }
          }
        })
      } else {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.getAppInfo().then((data) => {
            if (!data.token) {
              this.interPackage.eventEmitter()
              this.interPackage.loginHandler((token) => {
                this.token = token
                this.checkToken()
              })
            } else {
              this.token = data.token
            }
          })
        } else {
          util.goLogin()
        }
      }
    },
    shareProducts2 () {
      if (this.token) {
        Indicator.open()
        let sendData = {
          itemId: 335450,
          token: this.token
        }
        this.$axios.post('/zhongcao/item/taocode', sendData).then(res => {
          Indicator.close()
          if (res.success) {
            window.MtaH5 && window.MtaH5.clickStat('grass_cluster_335450')
            this.showShare = true
            let code = res.data.taocode.split('￥')[1]
            this.shareCode = `￥${code}￥`
          } else {
            if (res.code === 4004) {
              if (util.isAndroidApp() || util.isIosApp()) {
                this.interPackage.eventEmitter()
                this.interPackage.loginHandler((token) => {
                  this.token = token
                  this.checkToken()
                })
              } else {
                util.goLogin()
              }
            } else {
              toast(res.msg)
            }
          }
        })
      } else {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.getAppInfo().then((data) => {
            if (!data.token) {
              this.interPackage.eventEmitter()
              this.interPackage.loginHandler((token) => {
                this.token = token
                this.checkToken()
              })
            } else {
              this.token = data.token
            }
          })
        } else {
          util.goLogin()
        }
      }
    }
  },
  created () {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted () {
    this.checkToken()
    this.getProductInfo1()
    this.getProductInfo2()
  }
}
</script>

<style lang="less" scoped>
.cluster-wrap {
  width: 100%;
  background-color: #58ba79;
  position: relative;
  img {
    display: block;
    width: 100%;
  }
  .cluster-wrap3 {
    position: absolute;
    top: 5.886667rem;
    .share-get-price1 {
      position: absolute;
      top: 0.913333rem;
      left: 0.28rem;
      width: 0.72rem;
      font-size: 0;
      span {
        font-size: 0.116667rem;
        font-weight: 900;
      }
      .red {
        color: #bf1e09;
        font-size: 0.133333rem;
        font-weight: 900;
      }
    }
    .share-get-price2 {
      position: absolute;
      top: 0.913333rem;
      left: 2.093333rem;
      width: 0.72rem;
      font-size: 0;
      span {
        font-size: 0.116667rem;
        font-weight: 900;
      }
      .red {
        color: #bf1e09;
        font-size: 0.133333rem;
        font-weight: 900;
      }
    }
    .img1 {
      position: absolute;
      top: 1.243333rem;
      width: 1.286667rem;
      height: 1.176667rem;
      left: 0.383333rem;
    }
    .img2 {
      position: absolute;
      top: 1.243333rem;
      width: 1.286667rem;
      height: 1.176667rem;
      left: 2.066667rem;
    }
    .price-num {
      color: #fff;
      font-size: 0.146667rem;
    }
    .cross-num {
      color: #a9debb;
      font-size: 0.126667rem;
      text-decoration: line-through;
    }
    .button01 {
      width: 1.5rem;
      height: 1rem;
      padding-top: 0.366667rem;
      padding-left: 0.2rem;
      position: absolute;
      top: 2.666667rem;
      left: 0.233333rem;
    }
    .button02 {
      width: 1.5rem;
      height: 1rem;
      padding-top: 0.366667rem;
      padding-left: 0.2rem;
      position: absolute;
      top: 2.666667rem;
      left: 1.933333rem;
    }
  }
}
.share-code {
  padding: 0.066667rem;
  text-align: center;
  background-color: #fff;
  position: relative;
  span {
    font-size: 0.183333rem;
  }
  div {
    margin-top: 0.1rem;
    color: #bf1e09;
  }
}
</style>
