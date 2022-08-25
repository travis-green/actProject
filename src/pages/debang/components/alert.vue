<template>
  <div v-show="visible" :class="{'debang-alert-contain':true, 'debang-alert-closable': closable}">
    <div class="debang-alert-mask"></div>
    <div :class="['debang-alert-content', contentClass]">
      <slot></slot>
      <div class="debang-alert-close" @click="handleClose"></div>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    contentClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClose() {
      this.$emit('change', !this.visible)
    }
  }
}
</script>

<style lang="less" scoped>
.debang-alert-contain {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  .debang-alert-mask {
    width: 100%;
    height: 100%;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.46);
  }

  .debang-alert-content {
    width: 3.11rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -1.535rem;
    transform: translateY(-60%);
    border: 1px solid #020000;
    background-color: #ffffff;
    border-radius: 0.07rem;
  }

  .debang-alert-close {
    width: 0.4rem;
    height: 0.4rem;
    background-image: url(https://qiniu-image.qtshe.com/debang/debang-alert-close.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    bottom: -0.82rem;
    left: 50%;
    margin-left: -0.2rem;
    display: none;
  }
}

.debang-alert-closable .debang-alert-content {
  transform: translateY(-70%);
}

.debang-alert-closable .debang-alert-close {
  display: block;
}
</style>

