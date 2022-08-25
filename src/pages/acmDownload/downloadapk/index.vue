<template>
    <div class="downLoadBg">
      <div style="margin-bottom:3px;" class="flexCenter">
         <img :src="apkIcon" class="Apkicon">
         <img src="https://qiniu-image.qtshe.com/downloadApk/acmDownloadBk.png" class="downloadPageBk">
      </div>
      <a class="downloadButton"  :href="downLoadUrl"></a>
      <div class="companyName"><p>{{downloadCompany}}</p></div>
    </div>
</template>
<style lang="less" scoped>
@import './index.less';
</style>
<style>
.mint-msgbox-confirm {
  color: #000 !important;
}
</style>
<script>
  import { Indicator, MessageBox } from 'mint-ui'
  import toast from 'toast'
  import util from 'util'
  export default {
    data () {
      return {
        visible: true, //蒙层
        downloadCompany: Number(util.getQueryString('switch')) === 1 ? '杭州弧途科技有限公司' : '杭州问速网络科技有限公司',
        downLoadUrl: 'https://qiniu-app.qtshe.com/v1.5.1-1-%E8%B5%9A%E9%92%B1%E5%9B%A2.apk', //默认下载链接
        apkIcon: Number(util.getQueryString('switch')) === 1 ? 'https://qiniu-image.qtshe.com/apkIcon/apkIcon3.png' : 'https://qiniu-image.qtshe.com/apkIcon/apkIcon2.png'//acm 上icon链接
        // downloadChannel: Number(util.getQueryString('switch')) || 1 //下载项
      }
    },
    mounted() {
      this.getact()
    },
    methods: {
      getact() {
        let postData = {
          key: 'product',
          dataId: 'downloadMjApp',
          group: 'qtzjz_appstore_url'
        }
        this.$axios.post('https://acm.qtshe.com/acm/getConfig', postData).then((res) => {
          const data = JSON.parse(res.data)
          if (data.halfPercentShunt) {
            // halfPercentShunt 为true 55分流，伪随机
            if (!util.getCookie('alreayShowDownPage')) {
              //之前没有打开过页面，随机分配
              if (Math.floor(Math.random() * 10) <= 4) {
                util.setCookie('alreayShowDownPage', 'A')
                this.downLoadUrl = data.urlList[Number(util.getQueryString('switch')) - 1 || 0].urlLinkA.url
                this.apkIcon = data.urlList[Number(util.getQueryString('switch')) - 1 || 0].urlLinkA.apkIcon
              } else {
                util.setCookie('alreayShowDownPage', 'B')
                this.downLoadUrl = data.urlList[Number(util.getQueryString('switch')) - 1 || 0].urlLinkB.url
                this.apkIcon = data.urlList[Number(util.getQueryString('switch')) - 1 || 0].urlLinkB.apkIcon
              }
            } else {
              // 打开过页面,下载之前打开的包
              if (util.getCookie('alreayShowDownPage') === 'A') {
                this.downLoadUrl = data.urlList[Number(util.getQueryString('switch')) - 1 || 0].urlLinkA.url
                this.apkIcon = data.urlList[Number(util.getQueryString('switch')) - 1 || 0].urlLinkA.apkIcon
              } else {
                this.downLoadUrl = data.urlList[Number(util.getQueryString('switch')) - 1 || 0].urlLinkB.url
                this.apkIcon = data.urlList[Number(util.getQueryString('switch')) - 1 || 0].urlLinkB.apkIcon
              }
            }
          } else {
            //acm halfPercentShunt false 全部替换为A链接
            if (Number(util.getQueryString('switch')) === 2) {
              this.downLoadUrl = data.urlList[1].urlLinkB.url
            } else {
              this.downLoadUrl = data.urlList[0].urlLinkA.url
            }
          }
        }).catch(e => {
          console.log(e)
        })
      },
      downloadApp() {
        let aLink = document.createElement('a')
        aLink.href = this.downloadLink//设置下载的图片链接
        aLink.download = '' //设置图片下载之后的名称,可省略
        aLink.click() //触发
      },
      copyInviteCode() {
        // var _this = this
        // const clipboard = new Clipboard('#download')
        // clipboard.on('success', (e) => {
        //   util.isAliMiniApp().then((res) => {
        //     if (res) {
        //       //准备两套，运营要换
        //       MessageBox.alert('链接复制成功，请粘贴至浏览器下载吧', '赚钱小贴士')
        //       // toast('复制成功，粘贴给好友吧~')
        //     } else {
        //       _this.downloadApp()
        //     }
        //   }).catch(() => {
        //     _this.downloadApp()
        //   })
        // })
        // clipboard.on('error', (error) => {
        //   // toast('复制失败，请稍后再试')
        // })
        // _hmt.push(['_trackEvent', '点击下载', 'click', this.channelId, this.channelId])
      },
      pushClickData() {
        //统计点击
        console.log('点击下载')
        _hmt.push(['_trackEvent', '点击下载', 'click', this.channelId, this.channelId])
      },
      // 直接下载
      autoDownload() {
        console.log('自动下载')
        let aLink = document.createElement('a')
        aLink.href = this.downloadLink//设置下载的图片链接
        aLink.download = '' //设置图片下载之后的名称,可省略
        aLink.click() //触发
        _hmt.push(['_trackEvent', '自动下载', 'click', this.channelId, this.channelId]) //统计
      },
      isAliPay() {
        //判断ua 匹配 micromessenger即为自付宝环境
        var ua = navigator.userAgent.toLowerCase()
        if (ua.indexOf('Alipayclient') > 0) {
          return true
        } else {
          return false
        }
      },
      iswechat() {
        //判断ua 匹配 micromessenger即为微信浏览器
        var ua = navigator.userAgent.toLowerCase()
        if (/micromessenger/.test(ua)) {
          return true
        } else {
          return false
        }
      }
    }
}
</script>
