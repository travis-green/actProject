<style lang='less' scoped>
.container {
    height:100vh;
    background: #fff;
}
.mask{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    background-image: url(https://qiniu-image.qtshe.com/downloadApk/leaderPicNew.png);
    background-repeat: no-repeat;
    background-size: 5.1rem 2.88rem;
    background-position: -40px top;
}
.downloadBkimage {
    height: 100vh;
    width: 100%;
    background: url('https://qiniu-image.qtshe.com/downloadBk.png') no-repeat;
    background-size: cover;
}
.copyBtn {
    width: .71rem;
    height: .24rem;
    line-height: .24rem;
    background:rgba(252,99,2,1);
    border-radius: .12rem;
    color:#fff;
    text-align:center;
    margin-left: .3rem;
    img {
        width: .16rem;
        height: .16rem;
        margin-left: .02rem;
    }
}

.flexCenter {
    display:flex;
    justify-content: center;
    align-items:center;
}
.copyBox {
    margin-top: .08rem;
}
.bottomBox {
    width: 100%;
    height: 15vh;
    position: fixed;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    top:2.97rem;
    display:flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
}
.downloadButton {
    width:3.43rem;
    height:.48rem;
    background:linear-gradient(90deg,rgba(255,76,0,1) 0%,rgba(255,151,0,1) 100%);
    box-shadow:0 .08rem .12rem 0 rgba(255,86,0,0.2);
    border-radius: .24rem;
    color: #fff;
    font-size:.18rem;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
}
.magin24 {
  margin-top: .24rem;
}
.heartbeat {
    animation: heartbeat 1.3s ease-in-out 0s infinite alternate;
    animation:heartbeat 3s infinite;
    -webkit-animation:heartbeat 3s infinite;
    animation-direction:alternate;
    animation-timing-function: ease-in-out;
    -webkit-animation:heartbeat 3s infinite;
    -webkit-animation-direction:alternate;
    -webkit-animation-timing-function: ease-in-out;
}
@keyframes heartbeat {
    0%{
      transform: scale(1);
    }
    25%{
      transform: scale(1.05);
    }
    50%{
      transform: scale(1);
    }
      75%{
    transform: scale(1.05);
    }
}
@-webkit-keyframe heartbeat {
    0%{
      transform: scale(1);
    }
    25%{
      transform: scale(1.05);
    }
    50%{
      transform: scale(1);
    }
      75%{
    transform: scale(1.05);
    }
}
</style>
<template>
<div class="container">
    <div class="mask" v-if="visible"></div>
    <div class="downloadBkimage"></div>
    <div class="bottomBox">
        <div class="downloadButton flexCenter heartbeat" @click="downloadApk">立即安装</div>
        <div class="flexCenter magin24">
            <div style="font-size:.15rem;font-weight:900;color:#545151;">邀请码：{{inviteCode}}</div>
            <div class="copyBtn flexCenter" id="inviteCode" :data-clipboard-text="inviteCode" @click="copyInviteCode">复制<img src="https://qiniu-image.qtshe.com/xrwInvited/copyIcon.png" alt='' /></div>
        </div>
    </div>
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import Clipboard from 'clipboard'
export default {
  data() {
    return {
      visible: false, //蒙层
      inviteCode: 0
    }
  },
  methods: {
    copyInviteCode() {
      const clipboard = new Clipboard('#inviteCode')
      clipboard.on('success', (e) => {
        toast('复制成功，去粘贴吧~')
      })
      clipboard.on('error', (error) => {
        console.log(error)
        toast('复制失败，请稍后再试')
      })
    },
    downloadApk() {
      //替换下载链接 渠道包链接，待替换
      if (this.iswechat()) {
        //微信浏览器出现mask
        this.visible = true
        return false
      }
      if (util.isIos()) {
        toast('请使用安卓手机下载应用～')
        return false
      }
      window.location.href = 'https://qiniu-app.qtshe.com/v1.5.1-6-%E8%B5%9A%E9%92%B1%E5%9B%A2.apk'
    },
    getInviteData() {
      this.$axios
        .post('/taskThird/invite/home', {
          appKey: 'QTSHE_ANDROID_MJ_TRIBE'
        }).then(
          res => {
            if (res.success) {
              this.inviteCode = res.data.inviteCode //邀请码
            } else {
              toast(res.msg || '服务器错误，请稍后重试')
            }
          }
        ).catch(
          error => {
            console.log(error)
          }
        )
    },
    handleOpenAccount() {
      //曝光触发
      this.$axios.track({
        eventType: 5,
        positionId: 'downloadMJApk6',
        currentId: '/act/smallTaskAct/download'
      })
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
  },
  mounted() {
    // this.getInviteData()
    this.handleOpenAccount()
  },
  created() {
    this.inviteCode = this.$route.query.inviteCode //邀请码取url上的
  }
}
</script>
