<template>
  <div class="elevator-poster-wrap">
    <div class="img-wrap1">
      <div class="form-list-long">
        <input type="text" v-model.trim="form.name" class="lang-input" placeholder="姓名">
      </div>
      <div class="form-list-long">
        <input type="text" v-model.trim="form.companyName" class="lang-input" placeholder="企业名称">
      </div>
      <div class="form-list-long">
        <input type="tel" maxlength="11" v-model.trim="form.mobile" class="lang-input" placeholder="手机号">
      </div>
      <div class="button-warp">
        <span class="button" @click="handleApply">立即领取</span>
      </div>
    </div>
    <div class="img-wrap2"></div>
    <div class="img-wrap3"></div>
    <div class="img-wrap4"></div>
    <div class="img-wrap5"></div>
  </div>
</template>

<script>
import util from 'util'
import toast from 'toast'
import {
  Indicator
} from 'mint-ui'
export default {
  data () {
    return {
      interPackage: {},
      form: {
        type: 1,
        name: '',
        companyName: '',
        mobile: ''
      }
    }
  },
  methods: {
    handleApply () {
      if (util.isEmpty(this.form.name)) {
        return toast('请输入姓名')
      }
      if (util.isEmpty(this.form.companyName)) {
        return toast('请输入企业名称')
      }
      if (util.isEmpty(this.form.mobile)) {
        return toast('请输入手机号码')
      }
      if (!(/^1[0123456789]\d{9}$/.test(this.form.mobile))) {
        return toast('请输入正确的手机号码')
      }
      Indicator.open()
      this.$axios.post('/accountCenter/activity/company/record', this.form).then(res => {
        Indicator.close()
        if (res.success) {
          toast('领取成功')
        } else {
          toast(res.msg)
        }
      }).catch(err => {
        Indicator.close()
        toast('服务器错误，请稍后重试')
      })
    }
  },
  created () {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted () {
    this.interPackage.initShareInfo({
      title: '招大学生兼职，就上青团社',
      desc: '免费领取20个大学生兼职名额',
      imgUrl: 'https://qiniu-image.qtshe.com/qts/settings/logo.png'
    })
  }
}
</script>

<style lang="less" scoped>
.elevator-poster-wrap {
  font-size: 0;
  .img-wrap1 {
    width: 100%;
    height: 3.553333rem;
    background: url("https://qiniu-image.qtshe.com/elevatorPoster/1512632422406/h5_01.jpg")
      no-repeat center center;
    background-size: cover;
    padding-top: 1.11rem;
    input {
      width: 100%;
      height: 100%;
      color: #ebe7dc;
      padding-left: 0.12rem;
      font-size: 0.123333rem;
      background-color: rgba(255, 255, 255, 0.18);
      border: 0;
    }
    input::-webkit-input-placeholder {
      color: #ebe7dc;
    }
    .form-list-long {
      width: 2.623333rem;
      height: 0.34rem;
      margin: 0 auto 0.16rem;
      border: 1px solid #fff;
      text-align: center;
      margin-bottom: 0.15rem;
    }
    .button-warp {
      text-align: center;
      margin-top: 0.233333rem;
      .button {
        display: inline-block;
        width: 1.7rem;
        height: 0.466667rem;
        background-color: #00daa2;
        color: #fff;
        border-radius: 0.233333rem;
        line-height: 0.466667rem;
        text-align: center;
        font-size: 0.226667rem;
      }
    }
  }
  .img-wrap2 {
    width: 100%;
    height: 3.303333rem;
    background: url("https://qiniu-image.qtshe.com/elevatorPoster/1512632422406/h5_02.jpg")
      no-repeat center center;
    background-size: cover;
  }
  .img-wrap3 {
    width: 100%;
    height: 3.423333rem;
    background: url("https://qiniu-image.qtshe.com/elevatorPoster/1512632422406/h5_03.jpg")
      no-repeat center center;
    background-size: cover;
  }
  .img-wrap4 {
    width: 100%;
    height: 2.453333rem;
    background: url("https://qiniu-image.qtshe.com/elevatorPoster/1512632422406/h5_04.jpg")
      no-repeat center center;
    background-size: cover;
  }
  .img-wrap5 {
    width: 100%;
    height: 2.05rem;
    background: url("https://qiniu-image.qtshe.com/elevatorPoster/1512632422406/h5_05.jpg")
      no-repeat center center;
    background-size: cover;
  }
}
</style>
