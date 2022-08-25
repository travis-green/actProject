<style lang='less' scoped>
.geely-practice-wrapper {
    width: 100%;
    font-size: 0;
    img {
      width: 100%;
    }
    .p1 {
      position: relative;
      .box {
        position: absolute;
        z-index: 1;
        width: 1.6rem;
        height: 1.74rem;
        // border: 1px solid red;
      }
      .r1 {
        top: .67rem;
      }
      .r2 {
        top: 2.55rem;
      }
      .r3 {
        top: 4.44rem;
      }
      .l1 {
        left: .2rem;
      }
      .l2 {
        left: 1.95rem;
      }
    }
    .p2 {
      position: relative;
      .native-div {
        position: absolute;
        z-index: 1;
        bottom: .32rem;
        width: 1.5rem;
        height: 0.35rem;
        // border: 1px solid red;
        &.l {
          left: .3rem;
        }
        &.r {
          right: .3rem;
        }
      }
    }
}
</style>
<template>
<div class='geely-practice-wrapper'>
  <div class="header">
    <img src='https://qiniu-image.qtshe.com/1522204552.jpg' alt='header' />
  </div>
  <div class="p1">
    <img src='https://qiniu-image.qtshe.com/1522204554.jpg' alt='' />
    <div class="box r1 l1" @click="gotoPractice(0)"></div>
    <div class="box r1 l2" @click="gotoPractice(1)"></div>
    <div class="box r2 l1" @click="gotoPractice(2)"></div>
    <div class="box r2 l2" @click="gotoPractice(3)"></div>
    <div class="box r3 l1" @click="gotoPractice(4)"></div>
    <div class="box r3 l2" @click="gotoPractice(5)"></div>
  </div>
  <div class="p2" v-if="isInAlipay">
    <img src='https://qiniu-image.qtshe.com/1522204555.jpg' alt='' />
    <div class="native-div l" @click="gotoCoolPartjobs"></div>
    <div class="native-div r" @click="gotoWealPartjobs"></div>
  </div>
</div>
</template>
<script>
import util from 'util'
import wx from 'wx'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      interPackage: {},
      isInAlipay: false, // 是否在支付宝环境内
      list: [
        {
          practiceId: 10429,
          aliId: 80004922
        },
        {
          practiceId: 10430,
          aliId: 1495614
        },
        {
          practiceId: 10431,
          aliId: 80004923
        },
        {
          practiceId: 10432,
          aliId: 80004924
        },
        {
          practiceId: 10433,
          aliId: 1495616
        },
        {
          practiceId: 10434,
          aliId: 1495575
        }
      ]
    }
  },
  methods: {
    gotoPractice(index) {
      let obj = this.list[index]
      // 支付宝环境
      if (this.isInAlipay) {
        window.location.href = `https://campus.alipay-eco.com/public/job-production.html#/jobInfo/?jobType=1&jobId=${obj.aliId}`
      } else {
        this.interPackage.evokeInterViewPracticePage(obj.practiceId)
      }
    },
    // 跳转炫酷兼职
    gotoCoolPartjobs() {
      if (this.isInAlipay) {
        AlipayJSBridge.call('pushWindow', {
          url: 'alipays://platformapi/startapp?appId=20000067&url=https%3a%2f%2frender.alipay-eco.com%2fp%2fx%2faliapp-webonline%2findex.html%3fis_alert%3dtrue%26scene%3dXYSHJZ%26channel%3dalipay%26s%3dabs'
        })
      }
    },
    // 跳转福利兼职
    gotoWealPartjobs() {
      if (this.isInAlipay) {
        AlipayJSBridge.call('pushWindow', {
          url: 'alipays://platformapi/startapp?appId=20000047&followType=PUBLIC&actionType=gotoPublicDetail&sourceId=FromShare&publicId=2015111300783988&publicBizType=PUBLIC'
        })
      }
    }
  },
  mounted() {
    setWechatTitle('青团社携手吉利')
    this.interPackage.initShareInfo({
      title: '青团社携手吉利',
      desc: '寻找同路人，开启2018年全球校园招聘'
    })
  },
  created() {
    let _this = this
    this.interPackage = util.getCurrentVersionInteractivePackage()
    function ready(callback) {
      // 如果jsbridge已经注入则直接调用
      if (window.AlipayJSBridge) {
        callback && callback()
      } else {
        // 如果没有注入则监听注入的事件
        document.addEventListener('AlipayJSBridgeReady', callback, false)
      }
    }
    ready(function() {
      _this.isInAlipay = true
    })
  }
}
</script>
