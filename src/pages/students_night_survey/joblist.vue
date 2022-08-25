<style lang='less' scoped>
.job-list {
  ul {
    li {
      &:last-child {
        .bottom-line {
          display: none;
        }
      }
    }
  }
  .bottom-line {
    content: " ";
    margin: 0 auto;
    width: 86.7%;
    height: 2px;
    border-bottom: 1px solid #b19e87;
    color: #b19e87;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }
}
</style>
<template>
  <div class="job-list">
    <ul :style="`background-color: ${backgroundColor}`" v-infinite-scroll="loadMore" infinite-scroll-distance="5" infinite-scroll-disabled="isLastPage">
      <li v-for="(item,index) in infoList" :key="index" @click="handleClick(item)">
        <job-info :infoItem="item"></job-info>
        <div class="bottom-line"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import jobInfo from 'src/pages/citySelection/components/jobInfo'
import Vue from 'vue'
import {
  InfiniteScroll
} from 'mint-ui'
Vue.use(InfiniteScroll)
export default {
  components: {
    jobInfo
  },
  computed: {
    isLastPage () {
      return !this.infoList.length
    }
  },
  props: {
    interPackage: {
      type: Object,
      default: () => {
        return {}
      }
    },
    loadMore: {
      type: Function,
      default: () => { }
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    infoList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick (item) {
      window.MtaH5 && window.MtaH5.clickStat('students_night_life_click' + item.partJobId)
      if (item.category === 'COMMON_PART_JOB') {
        this.interPackage.evokeNormalPartJobDetailPage(item.partJobId)
      } else {
        this.interPackage.evokePerfectPartJobDetailPage(item.partJobId)
      }
    }
  }
}
</script>
