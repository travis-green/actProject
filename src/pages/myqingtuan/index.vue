<style lang='less' scoped>
.qingtuan-container{
    position: relative;
    padding-top: 0.32rem;
    background: #0b73ca;
    z-index: 1;
    padding-bottom: 0.28rem;
    overflow: hidden;
    width: 100%;
    .order-container{
      position: relative;
      width: 3.44rem;
      height: 2.22rem;
      margin: 0 auto;
      background: #fff;
      border: 1px solid #000;
      border-radius: 0.08rem;
      z-index: 1;
      padding-top: 0.51rem;
      .rule-button{
        position: absolute;
        width: 96px;
        height: 26px;
        top: 11px;
        right: 8px;
      }
      .order-tag{
        position: absolute;
        width: 1.2rem;
        height: 0.42rem;
        left: -0.07rem;
        top: 0.1rem;
        z-index: 2;
      }
      .order-title{
        text-align: center;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.14rem;
        color: #000;
      }
      .order-num{
        margin-top: 0.09rem;
        text-align: center;
        font-size: 0.6rem;
        font-weight: bold;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      .order-button{
        width: 1.87rem;
        height: 0.44rem;
        margin: 0.15rem auto 0;
        cursor: pointer;
        display: block;
      }
    }
    .rank-container{
        position: relative;
        width: 3.44rem;
        height: 3.34rem;
        margin: 0.19rem auto 0;
        .qingtuan-img{
          position: absolute;
          right: -0.19rem;
          bottom: -0.45rem;
          z-index: 2;
          width: 0.94rem;
          height: 0.78rem;
      }
    }
    .rank-list{
      width: 3.44rem;
      height: 3.34rem;
      top: 0;
      left: 0;
      background: #fff;
      border: 1px solid #000;
      border-radius: 0.08rem;
      position: absolute;
      z-index: 3;
      padding-top: 0.54rem;
      padding-bottom: 0.21rem;
      .rank-tag{
        position: absolute;
        z-index: 4;
        left: -0.07rem;
        top: 0.1rem;
        width: 1.54rem;
        height: 0.42rem;
      }
      .list-warpper{
         height: 2.59rem;
         overflow-y: scroll;
      }
      .list-item{
        width: 2.94rem;
        margin: 0 auto;
        height: 0.5rem;
        border-bottom: 1px solid #f4f4f4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item-left{
          display: flex;
          align-items: center;
        }
        .item-index{
          font-size: 0.14rem;
          color: #6c6c6c;
          font-weight: bold;
        }
        .item-img{
          width: 0.28rem;
          height: 0.28rem;
          border-radius: 50%;
          margin-left: 0.1rem;
        }
        .item-name{
          font-size: 0.12rem;
          color: #6c6c6c;
          margin-left: 0.12rem;
        }
        .item-time{
          margin-left: 0.08rem;
          font-size: 0.1rem;
          color: #b6b3b3;
        }
        .item-right{
          font-size: 0.12rem;
          color: #484848;
          width: 0.86rem;
          height: 0.22rem;
          text-align: right;
          line-height: 0.22rem;
          padding-right: 0.15rem;
        }
      }
      .list-item-top{
        .item-index{
          color: #fc2fad;
        }
      .item-right{
        color: #484848;
        width: 0.86rem;
        height: 0.22rem;
        background: #fdf844;
        border-radius: 0.11rem;
      }
    }
  }
  .qingtuan-rule {
    width: 3.444rem;
    margin: 0.18rem auto 0;
    .rule-text {
      line-height: 0.16rem;
      .rule-tag {
        border: 1px solid #000;
        border-radius: 2px;
        background: #fff;
        padding: 0 0.05rem;
        height: 0.2rem;
        text-align: center;
        line-height: 0.2rem;
        font-size: 0.11rem;
        color: #000;
      }
    }
  }
  .qingtuan-bottom{
    height: 0.22rem;
    line-height: 0.22rem;
    text-align: center;
    font-size: 0.1rem;
    color: #034073;
    margin-top: 0.28rem;
  } 
  .mask{
    position: fixed;
    background: rgba(0, 0, 0, 0.65);
    z-index: 9999;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .mask-pic{
      position: absolute;
      width: 3.55rem;
      height: 4.29rem;
      top: 0.5rem;
      left: 50%;
      margin-left: -1.775rem;
    }
    .mask-close{
      position: absolute;
      width: 0.34rem;
      height: 0.34rem;
      left: 50%;
      margin-left: -0.17rem;
      top: 5rem;
    }
  }
}
</style>
<template>
<div class="qingtuan-container">
    <div class="order-container">
      <img src="https://qiniu-image.qtshe.com/20180731_qingtuanbutton.png" class="rule-button" @click="dialogSwitch"/>
      <img src="https://qiniu-image.qtshe.com/20180724_qingtuantag1.png" class="order-tag"/>
      <div class="order-title">订单数量</div>
      <div class="order-num">{{num}}</div>
      <img src="https://qiniu-image.qtshe.com/20180724_qingtuanbutton.png" class="order-button" @click="promote"/>
    </div>
    <div class="rank-container">
       <img src="https://qiniu-image.qtshe.com/20180731_qingtuanhand.png" class="qingtuan-img"/>
     <div class="rank-list">
        <img src="https://qiniu-image.qtshe.com/20180724_qingtuantag2.png" class="rank-tag"/>
        <ul class="list-warpper">
          <li v-for="(item, index) in list" :key="index" v-bind:class="{'list-item': true, 'list-item-top': index < 3 }">
            <div class="item-left">
              <div class="item-index">{{index+1}}</div>
              <img :src='item.userImg' class="item-img"/>
              <div class="item-name">{{item.userName || item.userId}}</div>
              <div class="item-time">{{item.lastOrderTimeShow}}</div>
            </div>
            <div class="item-right">
              {{item.orderNum}}订单
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="qingtuan-rule">
      <div class="rule-text">
        <span class="rule-tag">活动时间</span>
        2018/8/2-2018/8/26
      </div>
      <div class="rule-text" style="margin-top:0.1rem;">
        <span class="rule-tag">结算时间</span>
        2018/8/26活动截止，2018/9/25进行统一结算，如在此结算周期内退单，订单数会相应减少。2018/9/25结算后，最后确定用户下单数量，进行奖金发放。其余佣金返还流程不变。
      </div>
    </div>
    <div class="qingtuan-bottom">
      *本活动最终解释权归杭州弧途科技有限公司所有*
    </div>
    <div class="mask" v-if="visible">
      <img src="https://qiniu-image.qtshe.com/20180731_qingtuanrule.png" class="mask-pic"/>
      <img src="https://qiniu-image.qtshe.com/20180731_qingtuanclose.png" class="mask-close" @click="dialogSwitch"/>
    </div>
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      interPackage: {},
      list: [],
      num: 0,
      visible: false
    }
  },
  methods: {
     //获取app用户信息
    getAppinfo() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
            util.setCookie('token', data.token)
            this.getUserInfo()
          } else {
            this.interPackage.evokeLoginPage(obj => {
              this.token = obj.token
              util.setCookie('token', obj.token)
              this.getUserInfo()
            })
          }
        })
      }
    },
    //获取订单信息
    getUserInfo() {
      this.$axios.post('/zhongcao/activity/myordernum').then((res) => {
        const { data = {} } = res
        const { orderNum } = data
        if (res.success) {
          this.num = orderNum
        } else {
          toast(res.msg || '服务错误，请稍后再试')
        }
      })
    },
    //推广，唤起种草团列表页
    promote() {
      util.onBuriedPoint('C8020001')
      this.interPackage.evokeGrassClusterListPage()
    },
    //获取排行榜信息
    getRankList() {
      this.$axios.post('/zhongcao/activity/orderrankings').then((res) => {
        const { data = [] } = res
        if (res.success) {
          this.list = data
        } else {
          toast(res.msg || '服务错误，请稍后再试')
        }
      })
    },
    dialogSwitch() {
      this.visible = !this.visible
    }
  },
  mounted() {
    this.interPackage.setNavTitle('我的订单')
    this.getAppinfo()
    this.getRankList()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
