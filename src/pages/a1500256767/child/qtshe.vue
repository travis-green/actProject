<style lang='less' scoped>
.a1500256767-qtshe-wrapper {
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
<div class='a1500256767-qtshe-wrapper'>
  <div class="p1 img-div">
    <img src='https://qiniu-image.qtshe.com/1501206819.png' alt='' />
  </div>
  <div class="p2 img-div">
    <img src='https://qiniu-image.qtshe.com/1500548360.png' alt='' />
  </div>
  <apply-form desc="百万大学生用户，招聘省心又省力" :fromId='0'></apply-form>
</div>
</template>

<script>
import util from 'util'
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
    setWechatTitle('兼职招聘')
  }
}
</script>
