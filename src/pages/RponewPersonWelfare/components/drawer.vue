<template>

</template>

<script>
export default {
  props: {
    // 是否打开
    display: {
      type: Boolean
    },
    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    },
    // 任务列表
    taskItems: {
      type: Array,
      default: []
    },
    //已加薪任务数
    finishedCountDetail: {
      type: Number,
      default: 0
    },
    //额外奖励总金额
    totalRewardAmount: {
      type: Number,
      default: 0
    },
    // 是否显示遮罩
    mask: {
      type: Boolean,
      default: true
    },

    // 是否点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: true
    },

    // 宽度
    width: {
      type: String,
      default: '200px'
    }
  },
  computed: {
    maskClass: function () {
      return {
        'mask-show': this.display,
        'mask-hide': !this.display
      }
    },
    mainClass: function () {
      return {
        'main-show': this.display,
        'main-hide': !this.display
      }
    },
    mainStyle: function () {
      return {
        bottom: this.display ? '0' : `-${this.width}`,
      }
    }
  },
  mounted () {},
  methods: {
    closeByMask () {
      /* 点击mask关闭 */
      this.maskClosable && this.$emit('update:display', false)
      document.body.style.overflow = 'scroll'
    },
    closeByButton () {
      /* 关闭按钮 */
      this.$emit('update:display', false)
      document.body.style.overflow = 'scroll'
    }
  }
}
</script>

<style lang="less" scoped>
.drawer {
  /* 遮罩 */
  .mask-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0,0,0,.5);
    opacity: 1;
    transition: opacity .5s;
  }
  .mask-hide {
    opacity: 0;
    transition: opacity .5s;
  }

  /* 滑块 */
  .main {
    width: 100%;
    position: fixed;
    z-index: 50;
    transition: all 0.5s;
  }
  .main-show {
    opacity: 1;
  }
  .main-hide {
    opacity: 0;
  }

  .titleBox {
      color:#fff;
      line-height:28px;
  }

  .titleBox span {
      display:block;
      font-size:0.2rem;
      line-height:0.2rem;
      font-family:PingFangSC-Semibold,PingFang SC;
      font-weight:600;
  }
  
  .coin {
      width:0.78rem;
      height:0.55rem;
      top:0.17rem;
      left:0.18rem;
  }

  /* 其他样式 */
  .drawer-head {
    display: flex;
    align-items:center; 
    justify-content:space-between;
    background:url(https://qiniu-image.qtshe.com/newPersonWelfare/drawTitleBk.png);
    height: 0.91rem;
    border-radius:12px 12px 0 0;
    line-height: 45px;
    padding: 0 15px;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    .close-btn {
      top:0.13rem;
      right:0.16rem;
      display: inline-block;
      background:url(https://qiniu-image.qtshe.com/newPersonWelfare/drawCloseBtn.png) no-repeat;
      background-size:0.24rem 0.24rem;
      height: 0.24rem;
      width: 0.24rem;
    }
  }

  .drawer-body {
    background:#fff;
    font-size: 14px;
    padding: 15px;
  }

  .detailBox {
    border-bottom: 1px solid #E5E5E5;
    padding-top: 10px;
  }

  .detailTextBtm {
      font-size:0.14rem;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(224,61,60,1);
      line-height:0.32rem;
  }
  
  .detailTextBtm span {
    padding-left: 0.24rem;
  }
}
</style>
