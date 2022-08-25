<style lang='less' scoped>
img {
    width: 100%;
    display: block;
}
.open-button {
    position: absolute;
    top: 5.6rem;
    left: 0.16rem;
    width: 3.43rem;
    height: 0.48rem;
    z-index: 888;
    background: #1FCDB9;
    border-radius: 0.04rem;
    overflow: hidden;
    text-align: center;
    line-height: 0.48rem;
    font-size: 0.17rem;
    color: #FFF;
}
</style>
<template>
<div>
  <img src="https://qiniu-image.qtshe.com/1595498455326_423.png" />
  <div class="open-button" @click="handleClick">{{buttonText}}</div>
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
export default {
  data() {
    return {
      interPackage: {},
      buttonText: '立即打开商家版小程序',
      downloadUrl: '',
      navigateApp: false,
      packageName: ''
    }
  },
  methods: {
    initData() {
      let postData = {
        key: 'product',
        dataId: 'company-download',
        group: 'com.qts.mobile.android'
      }
      this.$axios.post('https://acm.qtshe.com/acm/getConfig', postData).then((res) => {
        const {
          buttonText,
          downloadUrl,
          navigateApp,
          packageName
        } = JSON.parse(res && res.data)
        this.buttonText = buttonText
        this.downloadUrl = downloadUrl
        this.navigateApp = navigateApp
        this.packageName = packageName
      })
    },
    handleClick() {
      if (this.navigateApp) {
        this.interPackage.launchApp({
          url: this.downloadUrl,
          packageName: this.packageName
        }).then((res) => {
          if (JSON.parse(res).code === 3002) { // 版本过低未找到该方法则跳转支付宝小程序
            window.location.href = 'alipays://platformapi/startapp?appId=2018110962083552&page=pages/recruitList/index&query=authorizedKey%3D200428143172259'
          }
        })
      } else {
        window.location.href = 'alipays://platformapi/startapp?appId=2018110962083552&page=pages/recruitList/index&query=authorizedKey%3D200428143172259'
      }
    }
  },
  mounted() {
    this.initData()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
