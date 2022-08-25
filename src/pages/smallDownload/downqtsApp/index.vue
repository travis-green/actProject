<template>
    <div class="downLoadBg">
      <div class="mask" v-if="visible"></div>
      <a class="downloadButton" id="download" :data-clipboard-text="this.downloadLink" download="" @click="copyInviteCode"></a>
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
  import Clipboard from 'clipboard'
  import toast from 'toast'
  import util from 'util'
  export default {
    data () {
      return {
        visible: true, //蒙层
        channelId: Number(util.getQueryString('channel') || 0),
        downloadLink: `https://qiniu-app.qtshe.com/v4.47.4-${Number(util.getQueryString('channel') || 0)}-198-release-20201015-101704.apk`
      }
    },
    mounted() {
      this.downloadLink = `https://qiniu-app.qtshe.com/v4.47.4-${Number(util.getQueryString('channel') || 0)}-198-release-20201015-101704.apk` //链接待替换
      if (this.iswechat()) {
        //微信浏览器出现mask
        this.visible = true
      } else {
        this.visible = false
        //可选择自动下载
        if (util.getQueryString('auto')) {
          setTimeout(() => {
            this.autoDownload()
          }, 1000)
        }
        // 先取消自动下载
        // setTimeout(() => {
        //   this.autoDownload()
        // }, 1000)
      }
    },
    methods: {
      downloadApp() {
        let aLink = document.createElement('a')
        aLink.href = this.downloadLink//设置下载的图片链接
        aLink.download = '' //设置图片下载之后的名称,可省略
        aLink.click() //触发
      },
      copyInviteCode() {
        var _this = this
        const clipboard = new Clipboard('#download')
        clipboard.on('success', (e) => {
          util.isAliMiniApp().then((res) => {
            if (res) {
              //准备两套，运营要换
              MessageBox.alert('链接复制成功，请粘贴至浏览器下载吧', '赚钱小贴士')
              // toast('复制成功，粘贴给好友吧~')
            } else {
              _this.downloadApp()
              this.$axios.track({
                eventType: 2,
                positionId: `downloadQtsApp${this.channelId}`,
                currentId: '/act/smallDownload/downqtsApp'
              })
            }
          }).catch(() => {
            _this.downloadApp()
            this.$axios.track({
              eventType: 2,
              positionId: `downloadQtsApp${this.channelId}`,
              currentId: '/act/smallDownload/downqtsApp'
            })
          })
        })
        clipboard.on('error', (error) => {
          // toast('复制失败，请稍后再试')
        })
        _hmt.push(['_trackEvent', '点击下载', 'click', this.channelId, this.channelId])
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
        this.$axios.track({
          eventType: 2,
          positionId: `autoDownloadQtsApp${this.channelId}`,
          currentId: '/act/smallDownload/downqtsApp'
        })
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
