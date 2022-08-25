<style lang="less">
.container {
  width: 100%;
  min-height: 100vh;
  background: #ff483a;
}
img {
  width: 100%;
  display: block;
}
</style>
<template>
<div class="container">
  <img src="https://qiniu-image.qtshe.com/2020090icon-01.png" />
  <img src="https://qiniu-image.qtshe.com/2020090icon-02.gif" @click="handleClick"/>
</div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleClick () {
      window.location.href = 'https://qiniu-app.qtshe.com/v4.45.1-62-188-release-20200810-145312.apk'
    }
  }
}
</script>
