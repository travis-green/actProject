<template>
  <section class="section">
    <div class="submit-btn" @click="btnBeTZClick"></div>
    <img class="img-bg" src="https://dn-qtshe.qbox.me/tz/2018/0802/recruit_img1.jpg" alt="">
    <img class="img-bg" src="https://dn-qtshe.qbox.me/tz/2018/0802/recruit_img2.jpg" alt="">
  </section>
</template>
<script>
  import { Indicator, MessageBox } from 'mint-ui'
  import toast from 'toast'
  import util from 'util'
  import API from './API.js'

  export default {
    data() {
      return {
        interPackage: '',
        token: ''
      }
    },
    mounted() {
      this.interPackage = util.getCurrentVersionInteractivePackage()
      this.initShareInfo()
    },
    methods: {
      async getLogin() {
        if (util.isMiniApp()) {
          this.token = util.getQueryString('token')
        } else {
          let loginInfo = await this.interPackage.getAppInfo()
          if (!loginInfo || !loginInfo.token) {
            loginInfo = await this.interPackage.evokeLoginPage()
          }
          this.token = loginInfo.token
        }
      },
      async btnBeTZClick() {
        try {
          await this.getLogin()
          Indicator.open()
          const res = await this.$axios.post(API.chiefApply, {token: this.token})
          Indicator.close()
          if (res.success) {
            this.$router.push({path: '/tz'})
          } else {
            if (res.code === 7000) { // 黑名单
              this.showErrMessageBox(res.msg)
            }
            if (res.code === 7001) { // 信息未完善
              this.showMessageBox(res.msg)
            }
            if (res.code === 7002) { // 已经是团长
              this.$router.replace({path: '/tz'})
            }
            if (res.code === 6000) {
              toast(res.msg || '服务器错误，请稍后重试')
            }
          }
        } catch (error) {
          console.log(error)
          Indicator.close()
          toast('网络异常')
        }
      },
      showErrMessageBox(msg) {
        MessageBox({
          title: '账号异常',
          message: msg,
          confirmButtonClass: 'recruit-messagebox-confirm-button',
          confirmButtonText: '我知道了'
        })
      },
      showMessageBox(msg) {
        const _this = this
        let message = `${msg}`
        if (util.isWebPage()) {
          message = '啊哦，您的基本信息未完善，请到青团社App完善信息'
        }
        MessageBox({
          title: '信息未完善',
          message,
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonClass: 'recruit-messagebox-confirm-button',
          cancelButtonClass: 'recruit-messagebox-cancel-button',
          confirmButtonText: '立即完善',
          cancelButtonText: '稍后再说'
        }).then((res) => {
          if (res === 'confirm') {
            // _this.$router.push({path: '/completeInfo'})
            if (util.isIosApp() || util.isAndroidApp()) {
              this.interPackage.evokePersonalPartJobResumePage()
            } else {
              util.downLoadQtsQpp()
            }
          }
        })
      },
      initShareInfo() {
        this.interPackage.initShareInfo({
          title: '请你免费拿礼包，一起宅家赚',
          desc: '最高10元大礼包，24小时内可领',
          imgUrl: 'https://dn-qtshe.qbox.me/tz/2018/0611/tz-share-img.png'
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @dd: 300rem;
  .section{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
  .img-bg{
    width: 100%;
    display: block;
    margin-top: -1px;
  }
  .submit-btn{
    position: absolute;
    top: 1350/@dd;
    left: 0;
    right: 0;
    width: 760/@dd;
    height: 178/@dd;
    margin: 0 auto;
    background: url('https://dn-qtshe.qbox.me/tz/2018/0802/recruit_img_btn.png') no-repeat center;
    background-size: 100%;
  }
  .confirm-button{
    color: red;
  }
</style>
