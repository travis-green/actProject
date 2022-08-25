<template>
  <section class="section">
    <img class="img-bg" src="https://qiniu-image.qtshe.com/act/gmo/20180821/gmo_imgbg.png" alt="">
    <p class="p-text">答题结束 请等待审核结果</p>
    <div class="btn-submit" @click="goTogomLink">返回答题列表</div>
  </section>
</template>
<script>
import util from 'util'
import setWechatTitle from 'setWechatTitle'

export default {
  data() {
    return {
      token: ''
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    setWechatTitle('在线问卷调查')
    this.initShareInfo()
    this._init()
  },
  methods: {
    async _init() {
      const loginInfo = await this.interPackage.getAppInfo()
      this.token = loginInfo.token
    },
    async goTogomLink() {
      const length = window.history.length
      window.history.go(-(length - 1))
    },
    async getGmoLink() {
      try {
        const res = await this.$axios.post('/thirdCenter/gmo/jump/confirm') //获取第三方链接
        if (res.success) {
          window.location.replace(res.data.jumpUrl)
        }
      } catch (error) {
        console.log(error)
        window.location.replace(this.goGmoHome())
      }
    },
    goGmoHome() {
      const envhref = {
        development: 'dev-',
        testing: 'test-',
        production: ''
      }
      return `https://${envhref[window.g_info.env]}m.qtshe.com/act/gmo/`
    },
    initShareInfo() {
      this.interPackage.initShareInfo({
        title: '在线问卷调查',
        desc: '点点手指即可',
        link: this.goGmoHome(),
        imgUrl: 'https://qiniu-image.qtshe.com/act/gmo/20180821/gmo_logo.png'
      })
    }
  }
}
</script>
<style lang="less" scoped>
@dd: 100rem;

.section{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
}
.img-bg{
  width: 100%;
}
.p-text{
  margin-top: 30/@dd;
  font-size: 14/@dd; 
  text-align: center;
  color: #818181;
}
.btn-submit{
  width: 265/@dd;
  height: 46/@dd;
  margin: 70/@dd auto 0;
  border-radius: 4/@dd;
  font-size: 18/@dd;
  color: #ffffff;
  line-height: 46/@dd;
  text-align: center;
  background: #00ECA4;
}
</style>
/**
* @desc: GMO 问卷调查
* @author: zengtiansheng
*/
