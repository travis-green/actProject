<style lang='less' scoped>
.universal-container {
  background: #70e3c0;
  position: relative;
  img {
    width: 100%;
    display: block;
  }
  .url{
    position: absolute;
    display: block;
    right: 0.38rem;
    top: 1.19rem;
    width: 1.42rem;
    height: 0.25rem;
  }
  .header {
    height: 1.62rem;
  }
  .pic1 {
    height: 4.49rem;
  }
  .pic2 {
    height: 4.33rem;
  }
  .pic3 {
    height: 4.32rem;
  }
  .pic4 {
    height: 6.06rem;
  }
  .mask {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.76rem;
    img {
      height: 0.76rem;
    }
  }
}
</style>
<template>
    <div class="universal-container">
        <a :href="url[channel] || 'https://at.umeng.com/onelink/5Dyyae'" target="_self" class="url"></a>
        <img src="https://qiniu-image.qtshe.com/20180730_universalheader.jpg" alt="" class="header" />
        <img src="https://qiniu-image.qtshe.com/20180730_universalpic1.jpg" alt="" class="pic1" />
        <img src="https://qiniu-image.qtshe.com/20180730_universalpic2.jpg" alt="" class="pic2" />
        <img src="https://qiniu-image.qtshe.com/20180730_universalpic3.jpg" alt="" class="pic3" />
        <img src="https://qiniu-image.qtshe.com/20180730_universalpic4.jpg" alt="" class="pic4" />
        <div class="mask">
            <a :href="url[channel] || 'https://at.umeng.com/onelink/5Dyyae'" target="_self">
              <img src="https://qiniu-image.qtshe.com/20180730_universalbottom.png" alt="" />
            </a>
        </div>
    </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
export default {

  data() {
    return {
      channel: 0,
      url: ['https://at.umeng.com/onelink/5Dyyae', 'https://at.umeng.com/onelink/y8fG5D', 'https://at.umeng.com/onelink/WrCi8z', 'https://at.umeng.com/onelink/9Tz41b', 'https://at.umeng.com/onelink/q8DOPr', 'https://at.umeng.com/onelink/Pb0j0v', 'https://at.umeng.com/onelink/1Pjyyq', 'https://at.umeng.com/onelink/zi8j8b', 'https://at.umeng.com/onelink/eOHzmi', 'https://at.umeng.com/onelink/89Xryi']
    }
  },
  mounted() {
    const { id = '1' } = this.$route.params
    this.channel = parseInt(id) - 1
  }
}
</script>
