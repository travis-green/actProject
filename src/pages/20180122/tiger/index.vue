<template>
<div>
  <ul class="one">
    <li class="second" v-for="(item,index) in options" :key="index" :style="{background: 'url(' + item.img + ')',backgroundSize: '100% 100%',backgroundPositionY: run ? drawn ? (rotateDeg + index * 3)  + 'rem' : (rotateDeg + index) + 'rem' : 0, transitionProperty : 'all', transitionDelay: index * 200 + 'ms', transitionDuration: speed + 's'}">
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    run: {
      type: Boolean,
      default: false
    },
    drawn: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: ''
    },
    speed: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      rotateDeg: Math.floor(Math.random() * 50),
      options: [
        {
          img: this.background
        },
        {
          img: this.background
        },
        {
          img: this.background
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.one {
    width: 100%;
    height: 1rem;
    background: url("https://qiniu-image.qtshe.com/20180116_bg.png") center center repeat-y;
    background-size: 100% 100%;
    float: left;
    margin-right: 1.25%;
    background-attachment: scroll;
    -webkit-transform: transition3d(0, 0, 0);
    position: relative;
    overflow: hidden;
    .second {
        float: left;
        width: 32%;
        height: 3rem;
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
    }
    &:nth-child(2) {
        width: 33.5%;
    }
    &:nth-child(3) {
        width: 32%;
        margin: 0;
    }
}
</style>
