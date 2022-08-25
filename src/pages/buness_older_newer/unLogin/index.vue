<template>
  <div class="older-be-newer-wrap">
    <img src="../img/unlogin.jpg" alt="">
    <span class="to-logo" @click="toLogo"></span>
  </div>
</template>
<script>
export default {
  methods: {
    toLogo () {
      this.$router.push('/business/old/newer/login')
    }
  }
}
</script>

<style lang="less" scoped>
.older-be-newer-wrap {
  position: relative;
  img {
    width: 100%;
  }
  .to-logo {
    display: inline-block;
    width: 2.2rem;
    height: 0.433333rem;
    position: absolute;
    top: 2.876667rem;
    left: 0.79rem;
  }
}
</style>

