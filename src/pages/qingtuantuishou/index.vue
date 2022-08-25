<style lang='less' scoped>
.qingtuan-container {
  position: relative;
  padding-top: 7.11rem;
  background: #0b73ca;
  z-index: 1;
  padding-bottom: 0.36rem;
  .qingtuan-bg {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.3rem;
    z-index: 2;
  }
  .qingtuan-content {
    position: absolute;
    display: block;
    left: 0.14rem;
    top: 3.07rem;
    width: 3.48rem;
    height: 3.87rem;
    z-index: 3;
  }
  .qingtuan-hand {
    width: 0.81rem;
    height: 0.76rem;
    position: absolute;
    display: block;
    right: 0;
    top: 6.39rem;
    z-index: 2;
  }
  .qingtuan-report {
    position: absolute;
    z-index: 4;
    width: 1.94rem;
    height: 0.46rem;
    left: 0.98rem;
    top: 2.36rem;
  }
  .qingtuan-rule {
    width: 3.48rem;
    margin: 0 auto;
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
  .qingtuan-bottom {
    display: block;
    width: 2.33rem;
    height: 0.26rem;
    margin: 0.28rem auto 0;
  }
}
</style>
<template>
  <div class="qingtuan-container" v-if="visible">
    <img src="https://qiniu-image.qtshe.com/20180723_qingtuanbg.png" class="qingtuan-bg" />
    <img src="https://qiniu-image.qtshe.com/20180723_qingtuancontent.png" class="qingtuan-content" />
    <img src="https://qiniu-image.qtshe.com/20180723_qingtuanhand1.png" class="qingtuan-hand" />
    <div class="qingtuan-report" @click="report"></div>
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
    <img src="https://qiniu-image.qtshe.com/20170723_qingtuanbottom.png" class="qingtuan-bottom" />
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import setWechatTitle from 'setWechatTitle'
import {
  Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      token: '',
      interPackage: {},
      visible: false
    }
  },
  methods: {
    //获取用户信息
    getAppinfo() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
            util.setCookie('token', data.token)
            this.queryReport()
          } else {
            Indicator.close()
            this.visible = true
            this.interPackage.setNavTitle('最强推手大赛')
          }
        })
      }
    },
    //查询是否已报名，4010标示未报名
    queryReport() {
      this.$axios.post('/zhongcao/activity/join').then((res) => {
        Indicator.close()
        if (res.success) {
          this.visible = false
          window.location.replace(`/act/myqingtuan`)
        } else {
          this.interPackage.setNavTitle('最强推手大赛')
          this.visible = true
          if (res.code !== 4010) {
            toast(res.msg || '服务错误，请稍后再试')
          }
        }
      })
    },
    //报名
    report() {
      this.$axios.post('/zhongcao/activity/signup').then((res) => {
        if (res.success) {
          window.location.replace(`/act/myqingtuan`)
        } else {
          toast(res.msg || '服务错误，请稍后再试')
        }
      })
    }
  },
  mounted() {
    this.getAppinfo()
    Indicator.open()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.interPackage.setNavTitle('加载中')
  }
}
</script>
