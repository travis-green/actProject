<template>
  <ul class="tab-container">
    <li :class="active === index ? 'tab-item active' : 'tab-item'" v-for="(item ,index) in titleList" :key="index" @click="tab(index)">{{item}}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  props: {
    titleList: {
      type: Array,
      default: []
    }
  },
  methods: {
    tab(index) {
      this.active = index
      this.$emit('indexChange', index)
    }
  }
}
</script>
<style lang="less" scoped>
  .tab-container {
    display: flex;
    justify-content: space-around;
    height: 0.62rem;
    .tab-item {
      color: #3D3D3D;
      font-size: 0.17rem;
      line-height: 0.17rem;
      font-family: HYQiHei;
      text-align: center;
      padding-top: 0.19rem;
      position: relative;
    }
    .active {
      font-weight: bold;
    }
    .active:after {
      position: absolute;
      width: 96%;
      height: 0.04rem;
      content: '';
      background: #0F58C5;
      bottom: 0.13rem;
      left: 2%;
      border-radius: 0.02rem;
    }
  }
</style>
