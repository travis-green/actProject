<template>
  <div class="business-login-wrap">
    <img class="login-icon" src="https://ojlf2aayk.qnssl.com/1523861926345/businessLogin.png" alt="">
    <div class="login-title">
      青团社招聘版
    </div>
    <div class="form-wrap">
      <div class="form-item">
        <label>手机号码</label>
        <input type="tel" class="lang-input" v-model="mobile" placeholder="请输入手机号码(未注册将自动注册)">
      </div>
      <div class="form-item" v-show="isVeriCode">
        <label>验证码</label>
        <input type="tel" v-model="verificationCode" placeholder="短信验证码">
        <span class="verification-code">短信验证码</span>
      </div>
      <div class="form-item" v-show="!isVeriCode">
        <label>密码</label>
        <input type="password" class="lang-input" v-model="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="login-button" @click="goLoginIn">立即登录</div>
    <div class="login-type-change" @click="isVeriCode=!isVeriCode">
      <span>{{isVeriCode?'密码登录':'验证码登录'}}</span>
      <span class="voice-verfication">语音验证码</span>
    </div>
    <div class="login-tips">
      无需注册
    </div>
    <div class="login-agreement">登录即视您同意《
      <a class="business-agreement" href="https://ojlf2aayk.qnssl.com/qts/protocol/userAgreement.html">青团社用户协议</a>》</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isVeriCode: true,
      mobile: '',
      verificationCode: ''
    }
  },
  methods: {
    goLoginIn () {
      // this.$router.push('/business/old/newer/unAuthorized')
      this.$router.push('/business/old/beNewer/home')
    }
  }
}
</script>

<style lang="less" scoped>
.business-login-wrap {
  color: #555555;
  padding: 0.96rem 0.16rem 0.24rem;
  .login-icon {
    display: block;
    width: 0.64rem;
    height: 0.64rem;
    margin: 0 auto 0.12rem;
  }
  .login-title {
    font-size: 0.13rem;
    color: #555555;
    margin-bottom: 0.64rem;
    text-align: center;
  }
  .form-wrap {
    margin-bottom: 0.32rem;
    .form-item {
      height: 0.5rem;
      font-size: 0;
      border-bottom: 1px solid #ccc;
      label {
        display: inline-block;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.14rem;
        margin-right: 0.16rem;
      }
      input {
        border: none;
        font-size: 0.14rem;
      }
      .lang-input {
        width: 2.5rem;
      }
      input::-webkit-input-placeholder {
        color: #cccccc;
      }
      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #cccccc;
      }
      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #cccccc;
      }
      input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #cccccc;
      }
      .verification-code {
        float: right;
        margin-top: 0.15rem;
        border-left: 1px solid #ccc;
        color: #00cc88;
        font-size: 0.14rem;
        padding-left: 0.08rem;
      }
    }
  }
  .login-button {
    width: 100%;
    height: 0.46rem;
    line-height: 0.46rem;
    background-color: #00cc88;
    border-radius: 4px;
    font-size: 0.14rem;
    text-align: center;
    color: #fff;
    margin-bottom: 0.24rem;
  }
  .login-type-change {
    color: #555555;
    margin-bottom: 1.27rem;
    .voice-verfication {
      float: right;
    }
  }
  .login-tips {
    color: #999999;
    text-align: center;
  }
  .login-agreement {
    color: #999999;
    text-align: center;
    .business-agreement {
      color: #00cc88;
    }
  }
}
</style>

