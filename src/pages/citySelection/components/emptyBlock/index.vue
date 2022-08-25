<style lang='less' scoped>
.empty-block {
    margin: 0 auto;
    .back-img {
        text-align: center;
        img {
            display: inline-block;
            width: 1.3rem;
        }
    }
    .jump-btn {
        display: flex;
        justify-content: center;
        .btn {
            padding: 0.1rem 0.2rem;
            margin-top: 0.1rem;
            font-size: 0.14rem;
            text-align: center;
            color: #fff;
            background: #b19e87;
            border-radius: 0.44rem;
            box-shadow: 0 0 2px 8 rgba(0, 204, 136, 0.5);
        }
    }
}
</style>
<template>
<div class="empty-block">
  <div class="back-img">
    <img src="https://qiniu-image.qtshe.com/20161007search@3x.png" alt="">
  </div>
  <div class="jump-btn">
    <div class="btn" @click="handleClick">{{hintTitle}}</div>
  </div>
</div>
</template>
<script>
import util from 'util'
export default {
  props: {
    interPackage: {
      type: Object,
      default: () => {
        return {}
      }
    },
    hintTitle: {
      type: String,
      default: '查看更多'
    },
    classifyId: {
      type: Number,
      default: 0
    },
    classifyName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.interPackage.evokePartJobListClassifiedPage(this.classifyId, this.classifyName)
    }
  }
}
</script>
