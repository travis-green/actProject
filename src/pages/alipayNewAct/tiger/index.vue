<template>
<div class="tiger_box">
  <img src="https://qiniu-image.qtshe.com/20180328squerleft.png" class="leftIcon">
  <img src="https://qiniu-image.qtshe.com/20180328squeright.png" class="rightIcon">
  <img src="https://qiniu-image.qtshe.com/20180328top.png" class="topIcon">
  <img src="https://qiniu-image.qtshe.com/20180328down.png" class="bottomIcon">
  <ul class="one">
    <li class="second" v-for="(item,index) in options" :key="index" :style="{background: 'url(' + item.img + ')',backgroundSize: '100% 100%',backgroundPositionY: run ? drawn ? (rotateDeg + index * 3)  + 'rem' : (rotateDeg + index) + 'rem' : 0, transitionProperty : isTranstion ? 'all' : 'none', transitionDelay: index * 100 + 'ms', transitionDuration: speed + 's'}">
      <img src="https://qiniu-image.qtshe.com/20180328currentline.png" v-if="index !== 0" style="width: .02rem; margin-top: .05rem;">
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    isTranstion: {
      type: Boolean,
      default: true
    },
    run: {
      type: Boolean,
      default: false
    },
    drawn: {
      type: Boolean,
      default: false
    },
    rotateDeg: {
      type: Number,
      default: 0
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
.tiger_box {
    position: relative;
    margin-top: -93%;
    width: 57.5%;
    margin-left: 20.5%;
    border-radius: 0.1rem;
    height: 1rem;
    overflow: hidden;
    float: left;
    .leftIcon {
        position: absolute;
        width: 0.07rem;
        left: 0;
        z-index: 1;
        top: 0.43rem;
    }
    .rightIcon {
        position: absolute;
        width: 0.07rem;
        right: 0;
        z-index: 1;
        top: 0.43rem;
    }
    .topIcon {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 9;
    }
    .bottomIcon {
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 9;
    }
    .one {
        width: 100%;
        height: 1rem;
        background-size: 100% 100%;
        float: left;
        background-attachment: scroll;
        -webkit-transform: transition3d(0, 0, 0);
        position: relative;
        overflow: hidden;
        border-radius: 0.08rem;
        .second {
            float: left;
            width: 33.3%;
            height: 3rem;
            background-size: 100% 100%;
            position: relative;
            overflow: hidden;
            img {
                width: 2px;
                margin-top: 0.05rem;
            }
        }
    }
}
</style>
