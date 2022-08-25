<template>
  <div :class="lastClass" @click="handleGoDetail">
    <div :class="rankClass">{{isTop3 ? '' : index}}</div>
    <div class="debang-list-item-icon" :style="iconStyle"></div>
    <div class="debang-list-item-content">
      <div class="debang-list-item-name">
        <span class="debang-list-item-name-text">{{item.name}}</span>
        <span :class="rankChangeClass"></span>
      </div>
      <div class="debang-list-item-box">
        <div class="debang-list-item-progress">
          <div class="debang-list-item-progress-c" :style="{width: progressRate+'%'}"></div>
        </div>
        <div class="debang-list-item-rate">{{item.progressRate}}%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    isLast: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    lastClass() {
      return 'debang-list-item' + (this.isLast ? ' lastClass' : '')
    },
    rankClass() {
      return `debang-list-item-rank debang-list-item-rank-icon debang-list-item-rank-${this.index}`
    },
    rankChangeClass() {
      // 排名变化 1 上升 0 无变化 -1 下降
      const rankChange = this.item.rankChange
      return rankChange > 0
        ? 'debang-list-item-wave-up'
        : rankChange < 0
        ? 'debang-list-item-wave-down'
        : ''
    },
    iconStyle() {
      return { 'background-image': `url(${this.item.logo})` }
    },
    isTop3() {
      return this.index <= 3
    },
    progressRate() {
      const progressRate = this.item.progressRate
      return progressRate > 100 ? 100 : progressRate
    }
  },
  methods: {
    handleGoDetail() {
      const id = this.item.benefitId
      // this.$router.push(`/debang/detail/${id}`)
      window.location.href = `/act/debang/detail/${id}`
    }
  }
}
</script>

<style lang="less" scoped>
@prex: "debang-list-item";

.debang-list-item {
  display: flex;
  align-items: center;
  height: 0.573rem;
  border-bottom: 1px solid rgba(46,120,234, 0.4);

  &.lastClass {
    border-bottom: none;
  }

  .debang-list-item-rank {
    color: #3955a1;
    font-size: 0.15rem;
    font-family: AlibabaPuHuiTiB;
    opacity: 0.6;
    width: 0.3rem;
    font-weight: bold;
    text-align: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .debang-list-item-rank-icon {
    width: 0.22rem;
    height: 0.25rem;
    margin: 0 0.04rem;
    flex: none;
  }

  .debang-list-item-rank-1 {
    background-image: url(https://qiniu-image.qtshe.com/debang/debang-list-one.png);
  }

  .debang-list-item-rank-2 {
    background-image: url(https://qiniu-image.qtshe.com/debang/debang-list-two.png);
  }

  .debang-list-item-rank-3 {
    background-image: url(https://qiniu-image.qtshe.com/debang/debang-list-three.png);
  }

  .debang-list-item-icon {
    width: 0.42rem;
    height: 0.42rem;
    border-radius: 50%;
    flex: none;
    margin-right: 0.073rem;
    margin-left: 0.06rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #cecece;
  }

  .debang-list-item-content {
    flex: none;
  }

  .debang-list-item-name {
    color: #3854a0;
    font-size: 0.15rem;

    .debang-list-item-name-text {
      max-width: 1.6rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
    }

    .debang-list-item-wave-up,
    .debang-list-item-wave-down {
      width: 0.106rem;
      height: 0.16rem;
      display: inline-block;
      vertical-align: middle;
      margin-left: 0.04rem;
      background-image: url(https://qiniu-image.qtshe.com/debang/debang-list-up.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .debang-list-item-wave-down {
      background-image: url(https://qiniu-image.qtshe.com/debang/debang-list-down.png);
    }
  }

  .debang-list-item-progress {
    width: 1.92rem;
    height: 0.153rem;
    position: relative;
    padding: 2px;
    border-radius: 0.765rem;
    background-color: #315fdb;
  }

  .debang-list-item-progress-c {
    height: 100%;
    border-radius: 0.0634rem;
    background-image: linear-gradient(90deg, #ffce00, #ffe800);
  }

  .debang-list-item-rate {
    font-size: 0.12rem;
    font-family: AlibabaPuHuiTiR;
    color: #e0612a;
    opacity: 0.66;
    width: 0.406rem;
    text-align: right;
  }

  .debang-list-item-box {
    display: flex;
  }
}
</style>

