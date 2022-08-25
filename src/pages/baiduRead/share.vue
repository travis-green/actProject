<template>
  <section class="section">
    <div class="content" :class="{'content-name-x': isIphoneX}" v-if="!isShare">
      <img class="img-bg" :src="flagImg.bgImg" alt="">
      <img class="img-bg-text" :src="resData.bgImage" alt="">
      <div class="content-name">
        <span class="span-line"></span>
        <span class="span-name">{{resData.name}}</span>
        <span class="span-line"></span>
      </div>
      <div class="content-btn">
        <div v-if="$name">
          <img class="btn-img" :src="flagImg.btn1" alt="" @click="btnSaveImgClick">
          <img class="btn-img" :src="flagImg.btn2" alt="" @click="btnDownAppClick">
        </div>
        <img v-else class="btn-img btn-play" :src="flagImg.btn3" alt="" @click="btnPlayClick">
      </div>
    </div>
    <div id="J_share_content" class="content J_share_content" :class="{'J_share_content-x': isIphoneX}" v-if="isShare && !isImage">
      <img class="img-bg" :src="resData.shareImage" alt="">
      <div class="content-name content-name-share">
        <span class="span-line"></span>
        <span class="span-name">{{resData.name}}</span>
        <span class="span-line"></span>
      </div>
      <div class="qrcode" ref="qrcodes"></div>
    </div>
    <div style="font-size: 0;">
      <img style="width:100%;" :src="imageUrl" v-if="isImage">
    </div>
  </section>
</template>
<script>
import {mapState} from 'vuex'
import { Toast, Indicator } from 'mint-ui'
import html2canvas from 'html2canvas'
import QRCode from 'qrcodejs2'
import setWechatTitle from 'setWechatTitle'
import util from 'util'

export default {
  data() {
    return {
      recordId: '',
      imageUrl: '',
      isImage: false,
      isShare: false,
      isQtsFlag: false,
      isIphoneX: false,
      isShareFlag: false,
      isChannelFlag: false,
      resData: {
        flagId: '',
        name: '',
        result: '',
        resultDesc: '',
        recommend: '',
        recommendDesc: '',
        shareImage: '',
        bgImage: ''
      },
      flagImg: {},
      flagBtnList: [
        {
          bgImg: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag1_bg_img.png',
          btn1: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag1_btn1.png',
          btn2: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag1_btn2.png',
          btn3: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag1_btn3.png'
        },
        {
          bgImg: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag2_bg_img.png',
          btn1: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag2_btn1.png',
          btn2: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag2_btn2.png',
          btn3: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag2_btn3.png'
        },
        {
          bgImg: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag3_bg_img.png',
          btn1: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag3_btn1.png',
          btn2: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag3_btn2.png',
          btn3: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag3_btn3.png'
        },
        {
          bgImg: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag4_bg_img.png',
          btn1: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag4_btn1.png',
          btn2: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag4_btn2.png',
          btn3: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag4_btn3.png'
        },
        {
          bgImg: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag5_bg_img.png',
          btn1: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag5_btn1.png',
          btn2: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag5_btn2.png',
          btn3: 'https://qiniu-image.qtshe.com/act/baiduread/20180905/flag5_btn3.png'
        }
      ]
    }
  },
  computed: {
    ...(mapState('temporary', {
      $name: function (state) {
        return state.readData.name || ''
      }
    }))
  },
  created() {
    this.isQtsFlag = this.$route.query.isQtsFlag
    this.isShareFlag = this.$route.query.isShareFlag
    this.isChannelFlag = this.$route.query.isChannelFlag
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.recordId = this.$route.query.recordId
    this.isIphoneX = util.isIphoneX()
    if (!this.recordId) {
      this.$router.replace({path: '/read', query: Object.assign({}, this.$route.query)})
    }
  },
  mounted() {
    setWechatTitle('百度阅读 Flag诊所')
    this.getData()
    this.initShareInfo()
  },
  methods: {
    async getData() {
      try {
        Indicator.open({ spinnerType: 'fading-circle' })
        const res = await this.$axios.post('/activityCenter/baidu/read/get/result', {recordId: this.recordId}) // 按记录id获取答题结果
        Indicator.close()
        if (res.success) {
          if (res.data.flagId && res.data.flagId <= 5) {
            this.flagImg = this.flagBtnList[res.data.flagId - 1]
          }
          this.resData = res.data
        } else {
          Toast(res.msg || '服务器错误，请稍后重试')
        }
      } catch (error) {
        console.log(error)
        Toast('网络错误，请稍后重试')
        Indicator.close()
      }
    },
    btnSaveImgClick() {
      this.isShare = true
      setTimeout(() => {
        this.getQrCode()
      }, 100)
    },
    btnDownAppClick() {
      if (this.isChannelFlag) {
        if (util.isIos()) {
          window.location.href = 'https://yd.baidu.com/apps/spread?channel_id=1021477m'
          return
        }
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.yuedu&ckey=CK1405965496545'
      } else {
        if (util.isIos()) {
          window.location.href = 'https://itunes.apple.com/cn/app/id714802729?mt=8&pt=328057&ct=1021724j'
          return
        }
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.yuedu&ckey=CK1402520757761'
      }
    },
    btnPlayClick() {
      this.$router.replace({path: '/read', query: Object.assign({}, this.$route.query)})
    },
    savaImage() {
      let that = this
      let opts = {
        scale: 2, // 添加的scale 参数
        useCORS: true // 【重要】开启跨域配置
      }
      html2canvas(document.getElementById('app'), opts).then((canvas) => {
        canvas.id = 'canvasId'
        document.getElementById('J_share_content').appendChild(canvas)
        document.getElementById('canvasId').style.display = 'none'
        that.isImage = true
        that.imageUrl = canvas.toDataURL()
      })
      if (this.isShareFlag) {
        Toast('长按保存图片分享')
      }
    },
    getQrCode() {
      Indicator.open({ spinnerType: 'fading-circle' })
      const envhref = {
        development: 'dev-',
        testing: 'test-',
        production: ''
      }
      let shareUrl = `https://${envhref[window.g_info.env]}m.qtshe.com/act/read`
      if (this.isQtsFlag) {
        shareUrl = `https://${envhref[window.g_info.env]}m.qtshe.com/act/read?isQtsFlag=true`
      }
      var qrcode = new QRCode(this.$refs.qrcodes, {
        text: shareUrl,
        width: 70,
        height: 70,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
      setTimeout(() => {
        this.savaImage()
        Indicator.close()
      }, 500)
    },
    initShareInfo() {
      this.interPackage.initShareInfo({
        title: '百度阅读Flag诊所',
        desc: '要想flag立得好，日常检查不能少',
        imgUrl: 'http://qiniu-qts-app.qtshe.com/act/20180903/baiduread/read_share_img.png'
      })
    }
  }
}
</script>
<style lang="less" scoped>
@dd: 300rem;

.section{
  width: 100%;
  height: 100%;
}
.content{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 150/@dd;
  .img-bg{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .img-bg-text{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .content-name{
    display: flex;
    justify-content: center;
    align-items: center;
    .span-line {
      width: 97/@dd;
      height: 1px;
      background: #000000;
    }
    .span-name{
      display: inline-block;
      margin: 0 40/@dd;
      font-size: 60/@dd;
      font-weight: 600;
    }
  }
  .share-img-icon{
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .title{
    font-size: 80/@dd;
    font-weight: 600;
    margin-top: 54/@dd;
    text-align: center;
  }
  .desc{
    width: 878/@dd;
    margin: 54/@dd auto 0;
  }
  .content-opinion{
    width: 878/@dd;
    margin: 54/@dd auto;
    padding-top: 80/@dd;
    border-top: 3px solid #000000;
    .opinion-title{
      font-size: 50/@dd;
      font-weight: 600;
    }
    .opinion-text{
      margin-top: 44/@dd;
    }
  }
  .qrcode {
    position: absolute;
    left: 160/@dd;
    bottom: 292/@dd;
    padding: 0.05rem;
    background: #FFF;
    width: 0.74rem;
    margin: 0.2rem auto 0;
    canvas {
        width: 0.7rem;
        img {
            width: 0.64rem;
        }
    }
  }
  .span-qrcode{
    text-align: center;
  }
  .content-btn{
    position: absolute;
    bottom: 70/@dd;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn-img{
      width: 441/@dd;
      height: 148/@dd;
      margin: 0 22/@dd;
    }
    .btn-play{
      width: 451/@dd;
      height: 148/@dd;
    }
  }
}
.content-name-x{
  padding-top: 165/@dd;
}
.J_share_content{
  padding-top: 195/@dd;
}
.J_share_content-x{
  padding-top: 223/@dd;
}
</style>
/**
* @desc: 百度阅读活动
* @author: zengtiansheng
*/
