<style lang="less" scoped>
.hint-window {
  position: relative;
  width: 100%;
  .shadow {
    position: fixed;
    opacity: 1;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .3);
    z-index: 998;
    transition: ease all 0.3s;
  }
}

.container {
  position: fixed;
  margin: auto;
  padding: .3rem .2rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 3rem;
  height: 5rem;
  background: #fff;
  border-radius: .07rem;
  z-index: 999;
  transition: ease all 0.3s;
  .close-icon {
    position: absolute;
    right: .07rem;
    top: .07rem;
    width: .14rem;
    height: .14rem;
    img {
      display: block;
      width: 100%;
    }
  }
  .content {
    font-size: .12rem;
    color: #000;
    span {
      display: block;
      line-height: .18rem;
      margin-bottom: .2rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.fade-in-enter,
.fade-in-leave-active {
  opacity: 0;
  transition: ease all 0.3s;
}

.zoom-out-enter,
.zoom-out-leave-active {
  transform: scale(0);
  transition: ease all 0.3s;
}
</style>

<template>
  <div class="hint-window">
    <transition name="fade-in">
      <div class="shadow" v-show="isVisible" @click="closeWindow"></div>
    </transition>
    <transition name="zoom-out">
      <div class="container" v-if="isVisible">
        <div class="close-icon" @click="closeWindow">
          <img src="https://qiniu-image.qtshe.com/Combined%20Shape@2x.png" alt="">
        </div>
        <div class="content">
          <span>1.报名：开通芝麻信用服务且芝麻分满600分的同学可以获得预付工资的申请资格；</span>
          <span>2.录取：提交报名后，商家录取会发送录取通知短信；</span>
          <span>3.工作要求：具体工作要求参考岗位的详情介绍；</span>
          <span>4.薪资结算：报名录取后，商家提前预付薪水，按照要求完成工作后，结算剩余薪水。预付工资款项以其被录用岗位的日薪为准，兼职预付最高不超过250元，实习预付最高不超过3000元；</span>
          <span>5.违规退款：如录取成功，用户需按照合同履行相关义务，否则商家有权要求全额退回预付工资款项，违约行为将会发送至芝麻信用，能会影响芝麻分喔；</span>
          <span>6.特别提示：所有兼职岗位，不收取任何费用；</span>
          <span>7.活动时间：2017年09月06日-2017年09年20日。</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    closeWindow() {
      document.body.style.overflow = 'auto'
      this.isVisible = false
    }
  },
  mounted() {

  }
}
</script>

