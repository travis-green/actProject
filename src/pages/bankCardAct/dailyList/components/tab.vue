<style lang="less" scoped>
  .week-tab {
    position: fixed;
    padding: 0 .16rem;
    top: 0;
    width: 100%;
    max-width: 750px;
    box-shadow: 0 0 .04rem 0 #CCCCCC;
    background: #fff;
    z-index: 999;
    ul {
      display: flex;
      justify-content: space-between;
      line-height: .46rem;
      font-size: .14rem;
      color: #6C6C6C;
      background: #fff;
      li {
        cursor: pointer;
        // border-bottom: 0.02rem solid #fff;
        transition: ease all .3s;
      }
      .active {
        color: #448AFF;
        // border-bottom-color: #448AFF;
        transition: ease all .3s;
      }
      .underline {
        position: absolute;
        width: .28rem;
        height: .02rem;
        bottom: 0;
        background: #448AFF;
        transition: ease-in-out all .25s
      }
    }
  }
</style>


<template>
  <div class="week-tab">
    <ul>
      <li :class="weekday -1 === index ? 'active' : ''"  @click="handleClick(index)" v-for="item, index in weekList" :key="index">{{item}}</li>
      <div :style="`transition: ease-in-out all .25s; left: ${((weekday - 1)  * (28 + 24.5) + 16) / 100}rem`" class="underline"></div>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        weekday: 1,
        weekList: []
      }
    },
    methods: {
      handleClick(index) {
        this.weekday = index + 1
        this.$emit('getWeekday', this.weekday)
      },
      handleWeekListFormat() {
        this.weekday = new Date().getDay() || 7
        this.$emit('getWeekday', this.weekday)
        let weekArr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        for (var i = 0; i < weekArr.length; i++) {
          if (this.weekday - 1 === i) {
            weekArr[i] = '今天'
            this.weekList = weekArr
            break
          }
        }
      }
    },
    created() {
      this.handleWeekListFormat()
    }
  }
</script>

