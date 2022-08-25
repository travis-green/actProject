<style lang='less'>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 0.42rem;
    position: relative;
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.top-tip {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.06rem;
}

.top-icon {
  width:0.32rem;
  height:0.32rem;
  background:rgba(0,204,136,1);
  border-radius: 50%;
  margin-right: 0.02rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bean-icon {
  width: 0.16rem;
  height: 0.17rem;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAMAAAAJbCvNAAABlVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9//3////////////////////////////////////////////////////////////////////////////////////////c+O/////////////k+vP////////////K9Ob////////////////////////y/Pn////////////////////1/fr///////////////////////8AzIgBzIgCzIkEzYoJzowOz44U0JEV0JIY0ZMp1Jsy1qA01qFE2ahL26tN26xO26xa3rJj4Ldm4Lhp4bmA5cSC5sWL6MmX6s6Z68+h7NOt79mz8Ny88uDH9OXK9Ofb+O7i+fLr+/bu+/fv/Pjw/Pjx/Pn1/fr6/v38/v7///+3FSSqAAAAXXRSTlMAAQIECAkLDhMWFxkdHiAhIyYnKistLzAyNTc8P0RJTk9YW1xhbm97fYaHh4qLjI2PkZKWmpudpaqur7C0tbu9vsPNzs/Q09XW19jc4ebn6Ozs7e/x8/b3+fv8/f6UK7T/AAABK0lEQVQYGZXBhVYCUQAFwOuCiN3dit2B3d1dKM/ubrH7frcoirvLW89xBnrhRV3Ts732NAVSpsI5egykQyK4/YVe1SboBfZfU6VBgZal+5gaBdCq3b2hhiMeatmXO9RphIp1bMNFnfkw/Co/WX+jXg68gmbWDumjCV51F+KKPobwza/kfXPpkT6cFnwJbeW52KZECD7ZpuhaEaeUiAagVPJuT4jle0pEA6jg7aoQ4ogS82Ygk9wXQmy9UqIHMI+QZ4tLB8+UqQJsdHt4olwGUM8/TPsDg/yDHcAkjTkTAAzTWDPc2mjIEQe3Uhoqw6dkGuk040sH5UYj4JHooMx4LH7kUqIvEr9ss9RZsAdALaGNas6WJOil1EzQY6GrOAoySkxWXkm+LdWKf/oAFBxnlrtGDjgAAAAASUVORK5CYII=');
  background-repeat: no-repeat;
  background-size: cover;
}

.top-num {
  height:0.28rem;
  font-size:0.2rem;
  font-family:PingFangSC-Semibold,PingFang SC;
  font-weight:600;
  color:rgba(0,204,136,1);
  line-height:0.28rem;
}

.title {
    height:0.2rem;
    font-size:0.14rem;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(156,156,156,1);
    line-height:0.2rem;
}

.button {
    background: #00CC88;
    width: 3.43rem;
    margin: 0.24rem auto 0;
    border-radius: 0.04rem;
    color: #FFFFFF;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.44rem;
    height: 0.44rem;
}

.text {
    text-align: center;
    font-size: 0.12rem;
    color: #3c3c3c;
    margin-top: 0.1rem;
}

.recommand-box {
    width: 100%;
    margin-top: 0.4rem;
    padding: 0 0.16rem;
}

.box-title {
    width: 100%;
    font-size: 0.2rem;
    color: #3C3C3C;
    font-weight: bold;
}

.recommand-list {
    width: 100%;
    position: relative;
    overflow: hidden;
}

.recommand-item {
    width: 100%;
    border-bottom: 2rpx solid #E5E5E5;
    display: flex;
    justify-content: space-between;
    padding: 0.16rem 0;
}

.recommand-info {
    width: 2.5rem;
}

.part-title {
    width: 100%;
    height: 0.28rem;
    line-height: 0.28rem;
    color: #3C3C3C;
    font-size: 0.16rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.part-time {
    width: 100%;
    color: #9C9C9C;
    font-size: 0.12rem;
    height: 0.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    span {
        margin-left: 0.16rem;
    }
    &::before {
        content: "";
        position: absolute;
        width: 0.14rem;
        height: 0.17rem;
        background: url("https://qiniu-image.qtshe.com/20180525time.png") no-repeat left center;
        background-size: 0.14rem 0.14rem;
    }
}

.part-address {
    width: 100%;
    color: #9C9C9C;
    font-size: 0.12rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    span {
        margin-left: 0.16rem;
    }
    &::before {
        content: "";
        position: absolute;
        width: 0.14rem;
        height: 0.17rem;
        background: url("https://qiniu-image.qtshe.com/20180525address.png") no-repeat left center;
        background-size: 0.14rem 0.14rem;
    }
}

.recommand-salary {
    width: 0.88rem;
    color: #FF8000;
    font-size: 0.16rem;
    text-align: right;
}
.ad-box {
    width: 3.75rem;
    height: 1.05rem;
    position: relative;
    overflow: hidden;
    margin-top: 0.15rem;
    img {
        width: 100%;
    }
    .tip {
        width: 0.25rem;
        position: absolute;
        left: 0;
        top: 0;
    }
}

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;

  .mask-content {
    position: absolute;
    width: 3.11rem;
    padding-top: 0.81rem;
    left: 50%;
    margin-left: -1.555rem;
    top: 50%;
    margin-top: -1.09rem;
    background: #FFFFFF;
    border-radius: 0.12rem;
    padding-bottom: 0.16rem;
  }

  .mask-bg {
    width: 1.6rem;
    height: 1.4rem;
    display: block;
    position: absolute;
    top: -0.7rem;
    left: 0.78rem;
  }

  .mask-close {
    display: block;
    width: 0.28rem;
    height: 0.28rem;
    right: 0;
    top: -0.68rem;
    position: absolute;
  }

  .mask-desc {
    color: #3C3C3C;
    font-size: 0.2rem;
    text-align: center;
    font-weight: 400;
  }

  .mask-bean {
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    margin-left: 0.11rem;
    margin-right: 0.09rem;
  }

  .mask-button {
    background: #FF8000;
    height: 0.44rem;
    width: 2.79rem;
    margin: 0.2rem auto 0;
    border-radius: 0.06rem;
    text-align: center;
    line-height: 0.44rem;
    color: #FFFFFF;
    font-size: 0.16rem;
    display: block;
  }

  // .mask-pic {
  //   display: block;
  //   width: 1.9rem;
  //   height: 1.9rem;
  // }

  // .mask-title {
  //   font-size: 0.28rem;
  //   font-weight: bold;
  //   text-align: center;
  //   color: #FFFFFF;
  // }

  // .mask-desc2 {
  //   font-size: 0.16rem;
  //   text-align: center;
  //   color: #FFFFFF;
  // }

  .green {
    color: #00CC88;
    font-weight: bold;
  }
}

</style>
<template>
<div>
  <div class="container">
    <div class="header">
      <img src="https://qiniu-image.qtshe.com/20190617_successIcon.png" class="top-icon" />
      <div class="title">感谢您的参与</div>
      <div class="desc" v-if="hasIncentive">奖励已发放</div>
    </div>
    <div class="button" @click="jumpToIndex">继续答题</div>
    <div class="ad-box" @click="skipToHref" v-if="banner" v-clickEvents="{ businessId: 0, businessType: 0, position: 'smallThird-ad'}">
      <img src="https://qiniu-image.qtshe.com/20190401_2019tip.png" class="tip" v-if="promotion === 1" />
      <img :src="banner" class="ad-item" />
    </div>
    <div class="recommand-box" v-if="partData.length > 0">
      <div class="box-title">大家都在看</div>
      <div class="recommand-list">
        <div class="recommand-item" v-for="(item,index) in partData" v-bind:key="index" @click="handleSkipDetail(index)" v-clickEvents="{ businessId: item.businessId, businessType: item.businessType, index: index, position: 'smallThird-recommand'}">
          <div class="recommand-info">
            <div class="part-title">{{item.title}}</div>
            <div class="part-time"><span>{{item.subTitle}}</span></div>
            <div class="part-address"><span>{{item.subContent}}</span></div>
          </div>
          <div class="recommand-salary">{{item.salaryDesc}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="mask" v-if="visible">
    <div class="mask-content">
      <img src="https://qiniu-image.qtshe.com/20191209_rewardBg.png" class="mask-bg"/>
      <img src="https://qiniu-image.qtshe.com/20191209_closeIcon.png" class="mask-close" @click="closeDialog"/>
      <div class="mask-desc">点击“我要翻倍”</div>
      <div class="mask-desc">
        <span>可以再获得</span>
        <img src="https://qiniu-image.qtshe.com/20191209_beanIcon.png" class="mask-bean"/>
        <span class="green" v-if="rewardType===1">{{bean}}青豆</span>
        <span class="green" v-if="rewardType===2">{{money}}元</span>
      </div>
      <a class="mask-button" :href="jumpUrl" v-clickEvents="{ businessId: 0, businessType: 10, position: 'smallThird-double'}">我要翻倍</a>
    </div>
  </div>
  <!-- <div class="mask" v-if="hasWatch">
    <img src="https://qiniu-image.qtshe.com/20191209_rewardBg3.png" class="mask-pic"/>
    <div class="mask-title">+3青豆</div>
    <div class="mask-desc2">奖励已翻倍</div>
  </div> -->
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
export default {
  data() {
    return {
      interPackage: {},
      rewardType: 0, //奖励类型 1青豆  2现金
      bean: 0, //青豆数
      money: 0, //现金数
      banner: '',
      jumpKey: '',
      param: '',
      sign: '',
      lon: '', //经度
      lat: '', //维度
      townId: 87,
      promotion: 0,
      category: util.getQueryString('category'),
      partData: [],
      visible: false,
      id: util.getQueryString('id'),
      hasWatch: false, // 激励视频翻倍奖励弹窗
      jumpUrl: '',
      hasIncentive: false,
      score: util.getQueryString('score')
    }
  },
  methods: {
    skipToHref() {
      window.MtaH5.clickStat('answerhandler')
      util.universalJump({
        jumpKey: this.jumpKey,
        param: this.param
      })
    },
    queryBanner() {
      const appKey = util.getAppkey()
      let postData = {
        townId: this.townId,
        lon: this.lon,
        lat: this.lat,
        appKey,
        resourceType: this.category ? 62 : 60
      }
      this.$axios.post('/resourceCenter/userApp/resource/business/answer/resource/promotion', postData).then((res) => {
        if (res.success) {
          this.banner = res.data.image
          this.jumpKey = res.data.jumpKey
          this.param = res.data.param
          this.promotion = res.data.promotion || 0
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      })
    },
    initData() {
      if (util.isIosApp() || util.isAndroidApp()) {
        this.interPackage.getAppInfo().then((data) => {
          util.setCookie('longitude', data.longitude || '')
          util.setCookie('latitude', data.latitude || '')
          util.setCookie('townId', data.townId || '')
          util.setCookie('jwttoken', data.jwtToken || '')
          this.lon = data.longitude || ''
          this.lat = data.latitude || ''
          this.townId = data.townId || 87
          this.queryBanner()
          this.initRecommend()
          if (util.isAndroidApp()) {
            this.initIncentive()
          }
        })
      } else {
        this.lon = util.getCookie('longitude') || ''
        this.lat = util.getCookie('latitude') || ''
        this.townId = util.getCookie('townId') || 87
        this.queryBanner()
        this.initRecommend()
      }
    },
    initRecommend() {
      let postData = {
        townId: this.townId,
        lon: this.lon,
        lat: this.lat,
        appKey: util.getAppkey() || 'QTSHE_WECHAT'
      }
      this.$axios.post('/resourceCenter/userApp/resource/business/answer/resource/recommend', postData).then((res) => {
        if (res.success) {
          this.partData = res.data || []
        } else {
          toast(res.msg || '团团开小差了，请稍后重试')
        }
      })
    },
    initIncentive() {
      let postData = {
        businessId: this.id,
        businessType: 2,
        appKey: util.getAppkey() || 'QTSHE_WECHAT'
      }
      if (!util.getCookie('jwttoken')) return false
      this.$axios.post('/taskThird/incentive/get/chance', postData).then((res) => {
        if (res.success) {
          const { data = {} } = res
          const { hasIncentive, incentive, jump = {}, type, rewardType, money, bean } = data
          if (type === 1 && incentive && !hasIncentive && jump.jumpUrl) {
            this.visible = true
            this.jumpUrl = jump.jumpUrl
            this.rewardType = rewardType
            this.money = money
            this.bean = bean
          }
          if (hasIncentive) {
            this.hasIncentive = hasIncentive
          }
        }
      })
    },
    handleSkipDetail(index) {
      util.universalJump(this.partData[index])
    },
    jumpToIndex() {
      window.location.href = '/act/smalltopic/smallindex'
    },
    closeDialog() {
      this.visible = false
    }
  },
  mounted() {
    this.initData()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.id = util.getQueryString('id')
    this.score = util.getQueryString('score')
  }
}
</script>
