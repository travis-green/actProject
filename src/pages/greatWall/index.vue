<style lang='less' scoped>
img {
    width: 100%;
    display: block;
}
.job-box {
    width: 100%;
    padding: 0 0.16rem;
    position: absolute;
    top: 7.8rem;
    max-width: 750px;
}
.job-card {
    width: 100%;
    #launch-btn {
        width: 3.43rem;
    }
}
.video-js {
    width: 3.2rem;
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: .1rem;
    border: 0.03rem solid #000;
    max-width: 750px;
    object-fit:fill;
}
</style>
<template>
<div>
  <img src="https://qiniu-image.qtshe.com/20200924bg_01.png" alt="">
  <video class="video-js vjs-default-skin vjs-big-play-centered" controls x5-playsinline playsinline poster="https://qiniu-image.qtshe.com/20200927poster.png" webkit-playsinline preload data-setup="{}">
    <source src="https://qiniu-video.qtshe.com/20200927normal.mp4" />
  </video>
  <img src="https://qiniu-image.qtshe.com/20200924bg_02.png" alt="">
  <img src="https://qiniu-image.qtshe.com/20200924bg_03.png" alt="">
  <div class="job-box">
    <div class="job-card">
      <img src="https://qiniu-image.qtshe.com/20200924job_01.png" v-if="!isInWeChat" @click="jumpToPartJobDetail(741464)" />
      <wx-open-launch-weapp id="launch-btn" v-else username="gh_7c2bc00a6bf8" path="pages/partdetails/partdetails.html?partJobId=741464">
        <script type="text/wxtag-template">
          <style> img { width: 100%; display: block;} </style>
          <img src="https://qiniu-image.qtshe.com/20200924job_01.png" alt="" />
        </script>
      </wx-open-launch-weapp>
    </div>
    <div class="job-card">
      <img src="https://qiniu-image.qtshe.com/20200924job_02.png" v-if="!isInWeChat" @click="jumpToPartJobDetail(741457)" />
      <wx-open-launch-weapp id="launch-btn" v-else username="gh_7c2bc00a6bf8" path="pages/partdetails/partdetails.html?partJobId=741457">
        <script type="text/wxtag-template">
          <style> img { width: 100%;} </style>
          <img src="https://qiniu-image.qtshe.com/20200924job_02.png" alt="" />
        </script>
      </wx-open-launch-weapp>
    </div>
    <div class="job-card">
      <img src="https://qiniu-image.qtshe.com/20200924job_03.png" v-if="!isInWeChat" @click="jumpToPartJobDetail(741519)" />
      <wx-open-launch-weapp id="launch-btn" v-else username="gh_7c2bc00a6bf8" path="pages/partdetails/partdetails.html?partJobId=741519">
        <script type="text/wxtag-template">
          <style> img { width: 100%;} </style>
          <img src="https://qiniu-image.qtshe.com/20200924job_03.png" alt="" />
        </script>
      </wx-open-launch-weapp>
    </div>
    <img src="https://qiniu-image.qtshe.com/20200924job_04.png" style="margin-top: .24rem;" @click="skipToQuestion">
  </div>
  <img src="https://qiniu-image.qtshe.com/20200924bg_04.png" alt="">
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import jsBridge from 'jsBridge'
import {
  Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      interPackage: {},
      isInWeChat: util.isWeiXin() || util.isMiniApp(),
      isInAndroid: util.isAndroidApp(),
      isInIOS: util.isIosApp(),
      alipayLink: 'alipays://platformapi/startapp?appId=2018082861168647&page=pages/partdetails/partdetails&query=partJobId%3D'
    }
  },
  methods: {
    skipToQuestion() {
      window.location.href = '/act/greatWall/question'
    },
    jumpToPartJobDetail(partJobId) {
      if (this.isInAndroid || this.isInIOS) {
        this.jumpToNativePartJobDetail(partJobId)
      } else if (!(this.isInAndroid || this.isInIOS)) {
        this.jumpToAliPayMiniProgramPartJobDetail(partJobId)
      }
    },
    jumpToNativePartJobDetail(partJobId) {
      jsBridge.evokeNormalPartJobDetailPage(partJobId)
    },
    jumpToAliPayMiniProgramPartJobDetail(partJobId) {
      window.location.href = this.alipayLink + partJobId
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '「长城守护砖员」招募',
        desc: '假期限定，带你体验不一样的万里长城',
        imgUrl: 'https://ojlf2aayk.qnssl.com/WechatIMG47.png'
      })
    }
  },
  mounted() {
    this.sharebanner()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
