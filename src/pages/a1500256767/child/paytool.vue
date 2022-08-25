<style lang='less' scoped>
.a1500256767-paytool-wrapper {
    width: 100%;
    font-size: 0;
    background-color: #fff;
    .img-div {
        padding: 0 0.16rem;
        img {
            width: 100%;
        }
    }
    .p1 {
        margin-top: 0.26rem;
    }
    .p2 {
        margin: 0.72rem 0 0.24rem;
    }
}
</style>

<template>
<div class='a1500256767-paytool-wrapper'>
  <div class="p1 img-div">
    <img src='https://qiniu-image.qtshe.com/1501206823.png' alt='' />
  </div>
  <div class="p2 img-div">
    <img src='https://qiniu-image.qtshe.com/1501206821.png' alt='' />
  </div>
  <apply-form desc="一键导入名单，线上轻松发工资" :fromId='1'></apply-form>
</div>
</template>

<script>
import wx from 'wx'
import setWechatTitle from 'setWechatTitle'
import applyForm from './components/apply'
export default {
  components: {
    applyForm
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    setWechatTitle('打款工具')
  }
}
</script>
