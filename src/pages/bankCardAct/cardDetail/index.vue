<style lang="less" scoped>
  .card-detail {
    width: 100%;
    max-width: 750px;
    .hint {
      width: 100%;
      line-height: .24rem;
      text-align: center;
      font-size: .12rem;
      color: #CCBD66;
      background: #FFF3B3;
    }
    .head-section {
      padding: 0.16rem 0.63rem;
      text-align: center;
      font-size: 0;
      img {
        margin: 0 auto;
        width: 100%;
      }
      .title {
        margin-top: 0.08rem;
        font-size: 0.14rem;
        color: #333333;
      }
    }
    .new-reward {
      width: 100%;
      .head-des {
        display: flex;
        padding-left: 0.16rem;
        margin-bottom: 0.09rem;
        .left {
          align-self: center;
          margin-right: 0.08rem;
          width: 0.04rem;
          height: 0.15rem;
          background: #448aff;
        }
        .text {
          align-self: center;
          height: 0.15rem;
          font-size: 0.12rem;
          color: #333333;
        }
      }
    }
    .swipe {
      padding: 0.09rem 0 0.12rem 0.16rem;
      margin: 0;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
      li {
        display: inline-block;
        white-space: normal;
        padding: 0.06rem 0.08rem;
        margin-right: 0.16rem;
        width: 1.2rem;
        height: 0.48rem;
        background: #fafafa;
        font-size: 0.12rem;
        color: #3c3c3c;
        text-align: center;
        vertical-align: text-top;
        div {
          display: table-cell;
          vertical-align: middle;
          width: 1.04rem;
          height: 0.32rem;
          text-align: center;
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    .content {
      position: relative;
      .content-head {
        position: relative;
        display: flex;
        justify-content: space-around;
        padding: 0 0.16rem;
        box-shadow: 0 0.02rem 0.04rem 0 #cccccc;
        background: #fff;
        z-index: 999;
        li {
          text-align: center;
          width: 1.14rem;
          line-height: 0.46rem;
          font-size: 0.14rem;
          transition: ease all 0.3s;
        }
        .underline {
          position: absolute;
          width: 1.14rem;
          height: 0.02rem;
          left: 0.16rem;
          bottom: 0;
          background: #448aff;
          transition: ease-in-out all 0.25s;
        }
      }
      .content-body {
        position: relative;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        li {
          display: flex;
          font-size: 0.12rem;
          margin-bottom: 0.09rem;
          line-height: .24rem;
          &:last-child {
            margin-bottom: 0;
          }
          .left {
            margin-right: 0.3rem;
            width: 0.65rem;
            color: #9c9c9c;
            text-align: right;
          }
          .right {
            width: 3.35rem;
            color: #3c3c3c;
            text-align: left;
            white-space: pre-line;
          }
          .top {
            font-size: .14rem;
            font-weight: 600;
          }
          .center {
            margin-bottom: .09rem;
            width: 100%;
            white-space: pre-line;
          }
        }
        .special-reward {
          display: block;
        }
      }
    }
    .btn {
      position: fixed;
      max-width: 750px;
      z-index: 1001;
      display: flex;
      bottom: 0;
      width: 100%;
      line-height: 0.48rem;
      text-align: center;
      background: #fff;
      box-shadow: 0 0 0.04rem 0 #cccccc;
      font-size: 0.14rem;
      .left {
        width: 34%;
        color: #448aff;
      }
      .right {
        width: 66%;
        background: #448aff;
        color: #fff;
      }
    }
  }
  .scale-in-enter-active {
    transition: all 0.4s ease;
  }
  .scale-in-leave-active {
    transition: all 0.4s ease;
  }
  .scale-in-enter,
  .scale-in-leave-to {
    opacity: 0;
    transform: scale(0);
  }
</style>

<template>
  <div class="card-detail">
    <div class="hint" v-if="!cardDetail.jumpUrl">即将上线，详情请见官网</div>
    <div class="head-section">
      <img :src="cardDetail.cardPic" alt="">
      <div class="title">{{cardDetail.cardName}}</div>
    </div>
    <div class="new-reward" v-if="cardDetail.cardReward.length">
      <div class="head-des">
        <div class="left"></div>
        <div class="text">开卡礼</div>
      </div>
      <ul class="swipe">
        <li v-for="item, index in cardDetail.cardReward" :key="index" @click="handleRewardClick(item)">
          <div>{{item.title}}</div>
        </li>
      </ul>
    </div>
    <div class="content">
      <ul class="content-head">
        <li :style="categoryIndex === index ? 'color: #448aff' :'color: #6C6C6C'" v-for="item, index in headList" :key="index" @click="handleCategoryClick(index)">{{item}}</li>
        <div :style="`transition: ease-in-out all .25s; transform: translateX(${categoryIndex * 1.14 }rem)`" class="underline"></div>
      </ul>
      <ul class="content-body" v-if="categoryIndex === 0" :style="`padding: ${cardDetail.jumpUrl ? '0.16rem 0.16rem .64rem 0.16rem;'  : '0.16rem;'}`">
        <li v-for="item, index in cardDetail.baseInfo" :key="index" v-if="item.value">
          <div class="left">{{item.key}}</div>
          <div class="right">{{item.value}}</div>
        </li>
      </ul>
      <ul class="content-body" v-if="categoryIndex === 1" :style="`padding: ${cardDetail.jumpUrl ? '0.16rem 0.16rem .64rem 0.16rem;'  : '0.16rem;'}`">
        <li v-for="item, index in cardDetail.feeInfo" :key="index" v-if="item.value">
          <div class="left">{{item.key}}</div>
          <div class="right">{{item.value}}</div>
        </li>
      </ul>
      <ul class="content-body" v-if="categoryIndex === 2" :style="`padding: ${cardDetail.jumpUrl ? '0.16rem 0.16rem .64rem 0.16rem;'  : '0.16rem;'}`">
        <li v-for="item, index in cardDetail.specialReward" :key="index" class="special-reward">
          <div class="center" style="font-size: .13rem; font-weight: 600">{{item.key}}</div>
          <div class="center">{{item.value}}</div>
        </li>
      </ul>
    </div>
    <div class="btn" v-if="cardDetail.jumpUrl">
      <div class="left" @click="handleGuidanceOpen">填写指导</div>
      <div class="right" @click="handleJumpClick">立即申请</div>
    </div>
    <transition name="scale-in">
      <dialog-reward v-if="rewardVisible" :dialogVisible="rewardVisible" :content="rewardContent" @closeRewardDialog="handleCloseRewardDialog"></dialog-reward>
    </transition>
    <transition name="scale-in">
      <dialog-guidance v-if="guidanceVisible" :dialogVisible="guidanceVisible" :content="cardDetail.cardGuidance" @closeRewardDialog="handleCloseGuidanceDialog"></dialog-guidance>
    </transition>
    
  </div>
</template>

<script>
  import dialogGuidance from './components/dialogGuidance'
  import dialogReward from './components/dialogReward'
  import util from 'util'
  import cardDetailData from './config'
  export default {
    components: {
      dialogReward,
      dialogGuidance
    },
    data() {
      return {
        rewardContent: [],
        guidanceVisible: false,
        rewardVisible: false,
        interPackage: {},
        maxHeight: 0,
        categoryIndex: 0,
        headList: ['基本信息', '费用', '专属福利'],
        cardDetail: {}
      }
    },
    methods: {
      handleGuidanceOpen() {
        this.guidanceVisible = true
        // this.handleScrollDisabled(this.guidanceVisible)
      },
      handleCloseRewardDialog() {
        this.rewardVisible = false
        // this.handleScrollDisabled(this.rewardVisible)
      },
      // handleScrollDisabled(val) {
      //   document.body.style.overflow = val ? 'hidden' : 'visible'
      //   // document.body.style.height = val ? '100%' : 'auto'
      //   document.getElementById('html').style.overflow = val ? 'hidden' : 'visible'
      //   // document.getElementById('html').style.height = val ? '100%' : 'auto'
      // },
      handleCloseGuidanceDialog() {
        this.guidanceVisible = false
        // this.handleScrollDisabled(this.guidanceVisible)
      },
      handleRewardClick(item) {
        this.rewardContent = item.content
        this.rewardVisible = true
        // this.handleScrollDisabled(this.rewardVisible)
      },
      handleJumpClick() {
        window.location.href = this.cardDetail.jumpUrl
      },
      handleCategoryClick(index) {
        this.categoryIndex = index
      },
      getClientHeight() {
        var clientHeight = 0
        if (document.body.clientHeight && document.documentElement.clientHeight) {
          clientHeight =
            document.body.clientHeight < document.documentElement.clientHeight
              ? document.body.clientHeight
              : document.documentElement.clientHeight
        } else {
          clientHeight =
            document.body.clientHeight > document.documentElement.clientHeight
              ? document.body.clientHeight
              : document.documentElement.clientHeight
        }
        this.maxHeight = (clientHeight - 315) / 100
      },
      getCardDetail() {
        this.cardDetail = cardDetailData.filter(
          item => item.cardId === +this.$route.params.cardId
        )[0]
      }
    },
    created() {
      // this.getClientHeight()
      this.getCardDetail()
      this.interPackage = util.getCurrentVersionInteractivePackage()
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: `${this.cardDetail.cardName} | 青团社·校园信用卡中心`,
        desc: '大学生办理信用卡首选平台'
      })
    }
  }
</script>
