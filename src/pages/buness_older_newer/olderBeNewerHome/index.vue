<template>
  <div class="older-be-newer-wrap">
    <img src="../img/loginin.jpg" alt="">
    <span class="btn" data-clipboard-text="www.baidu.com">{{isWorkCopy?'可以复制':'不能复制'}}</span>
  </div>
</template>
<script>
import ClipboardJS from 'clipboard'
export default {
  data () {
    return {
      isWorkCopy: ClipboardJS.isSupported()
    }
  },
  methods: {
    toLogo () {
      this.$router.push('/business/old/newer/login')
    }
  },
  mounted () {
    var clipboard = new ClipboardJS('.btn')
    clipboard.on('success', function (e) {
      console.info('Action:', e.action)
      console.info('Text:', e.text)
      console.info('Trigger:', e.trigger)
      e.clearSelection()
    })
    clipboard.on('error', function (e) {
      console.error('Action:', e.action)
      console.error('Trigger:', e.trigger)
    })
  }
}
</script>

<style lang="less" scoped>
.older-be-newer-wrap {
  position: relative;
  img {
    width: 100%;
  }
  .btn {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 20px;
    color: #fff;
  }
}
</style>

