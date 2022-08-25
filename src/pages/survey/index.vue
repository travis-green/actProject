<style lang="less" scoped>
.wrap {
    min-height: 100vh;
}

.container {
  background: url(https://qiniu-image.qtshe.com/surveyBg.png) no-repeat center
    top;
  min-height: 100vh;
  background-size: 100% 100%;
  width: 100%;
  padding-top: 0.08rem;
}

.header {
  display: block;
  width: 100%;
  height: 1.78rem;
}

.content {
  background: url(https://qiniu-image.qtshe.com/surveyContent.png) no-repeat
    center top;
  width: 3.645rem;
  height: 4.75rem;
  margin: 0 auto;
  background-size: 100% 100%;
  margin-top: -0.075rem;
  position: relative;
  padding-top: 0.58rem;
}

.title {
  height: 0.49rem;
  padding-left: 0.6rem;
  line-height: 0.49rem;
  color: #000000;
  font-size: 0.2rem;
  font-weight: 500;
}

.options-wrap {
  width: 2.4rem;
  margin: 0.4rem auto 0;
}

.options-item {
  width: 100%;
  height: 0.55rem;
  background: #00cc88;
  border-radius: 0.275rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.16rem;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.result {
    background: url(https://qiniu-image.qtshe.com/surveyResult.png) no-repeat center top;
    background-size: 3.255rem 3rem;
    margin: 0.16rem auto 0;
    width: 3.255rem;
    height: 3rem;
    padding-top: 0.8rem;
}

.result-text {
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
    color: #EF4639;
    font-weight: bold;
    font-size: 0;
}

.button {
    width: 3.43rem;
    height: 0.44rem;
    background: #00CC88;
    border-radius: 0.06rem;
    margin: 0.32rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 0.16rem;
    font-weight:500;
}

.text {
    margin-top: 0.15rem;
    text-align: center;
    color: #838D99;
    font-size: 0.13rem;
    font-weight:400;
}

.red {
    color: #EB4B51;
    font-weight:500;
}

.font-size-50 {
    font-size: 0.5rem;
}

.font-size-20 {
    font-size: 0.2rem;
    font-weight: normal;
}
</style>
<template>
  <div class="wrap" v-if="isLoaded">
    <div class="container" v-if="!hasApply">
      <img
        src="https://qiniu-image.qtshe.com/surveyHeader.png"
        class="header"
      />
      <div class="content">
        <div class="title">{{problem}}</div>
        <div class="options-wrap">
          <div v-for="(item, i) in options" :key="i" class="options-item" @click="applyAct(item)">
            {{ item.slhAnswerTitle }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        <div class="result">
            <div class="result-text">
                <span class="font-size-50">+</span>
                <span class="font-size-50">{{money}}</span>
                <span class="font-size-20">元</span>
            </div>
        </div>
        <div class="button" @click="jumpToQTB">立即提现</div>
        <div class="text">
            <span>提现成功，再送</span>
            <span class="red">2元</span>
            <span>现金奖励。</span>
        </div>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      token: '',
      problem: '',
      hasApply: false, // 是否已参与
      hasLogin: false, // 是否已登录
      options: [],
      shareUserId: util.getQueryString('shareUserId') || '',
      money: 1,
      isLoaded: false
    }
  },
  methods: {
    jumpToQTB() {
      if (!this.hasLogin) {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.eventEmitter()
          this.interPackage.loginHandler((token) => {
            this.token = token
            util.setCookie('token', data.token)
            this.hasLogin = true
            this.checkToken()
          })
        } else {
          util.goLogin()
        }
      } else {
        window.location.href = `${window.g_info.qtbao_domain}/app/openVirtualAccount?token=${util.getToken()}`
      }
    },
    applyAct(obj) {
      if (!this.hasLogin) {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.eventEmitter()
          this.interPackage.loginHandler((token) => {
            this.token = token
            util.setCookie('token', data.token)
            this.hasLogin = true
            this.checkToken()
          })
        } else {
          util.goLogin()
        }
      } else {
        let postData = {
          slhAnswerId: obj.slhAnswerId,
          shareUid: this.shareUserId
        }
        this.$axios.post('/qtbUserCenter/qtb/slh/question/submit/question', postData).then(res => {
          if (res.success) {
            this.hasApply = true
            this.money = res.data.money || 1
          } else {
            toast(res.msg || '服务器错误，请稍后再试')
          }
        }).catch(e => {
          toast('服务器错误，请稍后再试')
        })
      }
    },
    getAppToken() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
            util.setCookie('token', data.token)
          }
          this.checkToken()
        })
      } else {
        if (util.getToken()) {
          this.token = util.getToken()
        }
        this.checkToken()
      }
    },
    initData() {
      this.$axios.post('/qtbUserCenter/qtb/slh/question/obtain/question').then(res => {
        if (res.success) {
          const { data = {} } = res
          const { problem = '', slhAnswers = [], status = 0 } = data
          if (this.shareUserId && (status === 10 || status === 20)) {
            toast('啊哦，不符合活动要求')
            setTimeout(() => {
              window.location.replace('/act/invite')
            }, 1000)
            return
          }
          this.problem = problem
          this.options = slhAnswers
          this.hasApply = status === 10
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
        this.isLoaded = true
      }).catch(e => {
        this.isLoaded = true
        toast('服务器错误，请稍后再试')
      })
    },
    checkToken() {
      this.$axios.post('/accountCenter/account/miniApp/validation/token').then(res => {
        if (res.success) {
          this.hasLogin = true
        } else {
          this.hasLogin = false
        }
        this.initData()
      }).catch(e => {
        this.hasLogin = false
        this.initData()
      })
    }
  },
  mounted() {
    this.getAppToken()
    this.interPackage.setNavTitle('青团小调研')
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
