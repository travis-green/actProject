<style lang="less" scoped>
  .dialog-reward {
    position: fixed;
    padding: 0.2rem 0.38rem 0.8rem;
    top: 0;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    max-width: 750px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    .title {
      margin-bottom: 0.2rem;
      width: 100%;
      text-align: center;
      font-size: 0.18rem;
      color: #fff;
    }
    .underline {
      margin-bottom: .2rem;
      width: 100%;
      height: 0.01rem;
      background: #9c9c9c;
    }
    .content {
      font-size: 0;
      margin-bottom: 0.2rem;
      .number {
        display: inline-block;
        margin-right: 0.1rem;
        width: 0.18rem;
        line-height: 0.18rem;
        background: #91baff;
        font-size: 0.12rem;
        color: #fff;
        text-align: center;
        vertical-align: text-top;
      }
      .text {
        display: inline-block;
        font-size: 0.12rem;
        line-height: 0.18rem;
        vertical-align: text-top;
        max-width: 2.7rem;
        text-align: justify;
        .main {
          margin-bottom: 0.1rem;
          color: #ffffff;
        }
        .sub {
          color: #cccccc;
        }
      }
    }
    .close {
      position: absolute;
      left: 1.57rem;
      width: 0.46rem;
      bottom: 0.2rem;
      img {
        width: 100%;
      }
    }
  }
</style>

<template>
  <div class="dialog-reward" v-if="dialogVisible">
    <div class="title">猜你遇到这些问题</div>
    <div class="underline"></div>
    <div class="content" v-for="item, index in content" :key="index">
      <div class="number">{{index + 1}}</div>
      <div class="text">
        <div class="main">{{item.key}}</div>
        <div class="sub">{{item.value}}</div>
      </div>
    </div>
    <div class="close" @click="handleClick">
      <img src="https://qiniu-image.qtshe.com/system/page/close.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      },
      content: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      handleClick() {
        this.$emit('closeRewardDialog')
      }
    },
    created() {
      console.log(this.content)
    }
  }
</script>

