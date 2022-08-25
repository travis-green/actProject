<template>
  <div class="debang-tv-box">
    <div class="debang-tv">
      <video
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        x5-playsinline
        playsinline
        webkit-playsinline
        preload
        style="width: 100%;height: 100%;object-fit: fill"
        data-setup="{}"
        poster="https://qiniu-image.qtshe.com/debang/debang-n-tv-img.jpg"
      >
        <source src="https://qiniu-image.qtshe.com/debang/debang-n-tv.mp4" />
      </video>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
.debang-tv-box {
  width: 3.5rem;
  height: 2.07rem;
  padding: 0.16rem 0.16rem 0.12rem;
  background-image: url(https://qiniu-image.qtshe.com/debang/debang-n-home-tv.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.debang-tv {
  width: 100%;
  height: 100%;
}
</style>

