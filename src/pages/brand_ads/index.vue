<template>
  <div class="elevator-poster-wrap">
    <div class="img-wrap1">
    </div>
    <div class="img-wrap2"></div>
    <div class="img-wrap3"></div>
    <div class="img-wrap4"></div>
    <div class="img-wrap5">
      <div class="form-list-long">
        <input type="text" v-model.trim="form.name" class="lang-input" placeholder="姓名">
      </div>
      <div class="form-list-long">
        <input type="tel" maxlength="12" v-model.trim="form.tel" class="lang-input" placeholder="联系方式">
      </div>
      <div class="button-warp">
        <span class="button" @click="handleApply">立即领取</span>
      </div>
    </div>
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
        type: 2,
        name: '',
        tel: ''
      }
    }
  },
  methods: {
    handleApply () {
      if (util.isEmpty(this.form.name)) {
        return toast('请输入姓名')
      }
      if (util.isEmpty(this.form.tel)) {
        return toast('请输入联系方式')
      }
      if (!(this.form.tel.length === 11 || this.form.tel.length === 12)) {
        return toast('请输入正确的联系方式')
      }
      Indicator.open()
      this.$axios.post('/accountCenter/activity/company/record', this.form).then(res => {
        Indicator.close()
        if (res.success) {
          toast('提交成功')
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
      title: '青团社小任务上线',
      desc: '品牌曝光，用户引流，火热招商中',
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
    height: 2.42rem;
    background: url("https://qiniu-image.qtshe.com/taskinfor/1512957211455/task_01.jpg")
      no-repeat center center;
    background-size: cover;
  }
  .img-wrap2 {
    width: 100%;
    height: 2.92rem;
    background: url("https://qiniu-image.qtshe.com/taskinfor/1512957211455/task_02.jpg")
      no-repeat center center;
    background-size: cover;
  }
  .img-wrap3 {
    width: 100%;
    height: 3.506667rem;
    background: url("https://qiniu-image.qtshe.com/taskinfor/1512957211455/task_03.jpg")
      no-repeat center center;
    background-size: cover;
  }
  .img-wrap4 {
    width: 100%;
    height: 2.586667rem;
    background: url("https://qiniu-image.qtshe.com/taskinfor/1512957211455/task_04.jpg")
      no-repeat center center;
    background-size: cover;
  }
  .img-wrap5 {
    width: 100%;
    height: 3.166667rem;
    background: url("https://qiniu-image.qtshe.com/taskinfor/1512957211455/task_05.jpg")
      no-repeat center center;
    background-size: cover;
    padding-top: 0.116667rem;
    input {
      width: 100%;
      height: 100%;
      color: #999999;
      padding-left: 0.223333rem;
      font-size: 0.18rem;
      background-color: #f0f0f0;
      border: 0;
      border-radius: 0.05rem;
    }
    input::-webkit-input-placeholder {
      color: #999999;
    }
    .form-list-long {
      width: 3rem;
      height: 0.45rem;
      margin: 0 auto 0.15rem;
      text-align: center;
    }
    .button-warp {
      text-align: center;
      margin-top: 0.243333rem;
      .button {
        display: inline-block;
        width: 2.003333rem;
        height: 0.523333rem;
        background: url(https://qiniu-image.qtshe.com/taskinfor/1512957211455/button@3x.png)
          no-repeat center center;
        background-size: cover;
      }
    }
  }
}
</style>
