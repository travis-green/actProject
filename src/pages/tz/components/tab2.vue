<template>
  <div class="tab-content" :class="{'tab-content-act':tabFixedFlag}">
    <img class="top-line" src="https://qiniu-image.qtshe.com/act/tz/0608/top-line.png" alt="">
    <ul id="J_list_content" class="list-content" v-infinite-scroll="loadMoreDataListening"
         :infinite-scroll-disabled="scrollEnableFlag" infinite-scroll-distance="60">      
      <li class="item" v-for="(item, index) in resData.results" :key="index">
        <div class="user-content">
          <img class="header-logo" :src="item.headerUrl || 'https://qiniu-image.qtshe.com/default-avatar20170707.png'" alt="">
          <div>
            <span class="name">{{item.userName}}</span>
            <span class="time">入团<span class="time-day">{{item.days}}</span>天</span>
          </div>
        </div>
        <div class="income">累计收益{{item.totalIncome}}元</div>
      </li>
      <div class="list-empty" v-if="resData.results.length === 0">暂无团员数据</div>
    </ul>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Indicator, InfiniteScroll} from 'mint-ui'
  import toast from 'toast'
  import API from '../API.js'

  Vue.use(InfiniteScroll)

  export default {
    props: {
      tabFixedFlag: {
        type: Boolean,
        default: false
      },
      headId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        scrollEnableFlag: false,
        sendData: {
          headId: '',
          pageSize: 20,
          pageNum: 1
        },
        resData: {
          pageSize: 20,
          pageNum: 1,
          totalCount: '',
          results: []
        }
      }
    },
    watch: {
      headId() {
        this.sendData.headId = this.headId
        this.getMemberList()
      }
    },
    mounted() {
    },
    methods: {
      async getMemberList() {
        try {
          Indicator.open()
          this.scrollEnableFlag = false
          const res = await this.$axios.post(API.memberList, this.sendData)
          this.scrollEnableFlag = true
          Indicator.close()
          if (res.success) {
            this.resData.pageSize = res.data.pageSize
            this.resData.pageNum = res.data.pageNum
            this.resData.totalCount = res.data.totalCount
            this.resData.results = [...this.resData.results, ...res.data.results]
          } else {
            toast(res.msg || '服务器错误，请稍后重试')
          }
        } catch (error) {
          console.log(error)
          Indicator.close()
          this.scrollEnableFlag = true
          toast('网络异常')
        }
      },
      loadMoreDataListening() {
        if (this.scrollEnableFlag) {
          const {pageNum, pageSize, totalCount} = this.resData
          if ((pageNum * pageSize) < totalCount) {
            // 上拉页数加一
            this.sendData.pageNum++
            this.getMemberList()
          }
        }
      }
    }
  }
</script>
<style lang='less' scoped>
@dd: 100rem;
.tab-content{
  // height: 100%;
  // overflow: hidden;
  background: #ffffff;
  padding-bottom: 10/@dd;
  border-radius: 6/@dd 0 0 0;
}
.tab-content-act{
  overflow: auto;
}
.top-line{
  width:100%;
  height:44/@dd;
  margin: 0 auto;
}
.list-content{
  margin: -30/@dd 17/@dd 5/@dd;
  background: #FFF8EF;
  .item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 17/@dd;
    padding: 10/@dd 0;
    border-top: 1px solid rgba(251,140,0,0.1);
    &:first-child{
       border-top: 1px solid transparent;
    }
    .header-logo{
      width: 40/@dd;
      height: 40/@dd;
      margin-right: 8/@dd;
      border-radius: 40/@dd;
    }
    .user-content{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .name{
        display: block;
        font-size: 14/@dd;
        color: #6C6C6C;
        font-weight: 600;
      }
      .time{
        display: block;
        font-size: 12/@dd;
        color: #9C9C9C;
      }
      .time-day{
        color: #FB8C00;
        font-weight: 500;
      }
    }
    .income{
      font-size: 14/@dd;
      color: #FB8C00;
      font-weight: 600;
    }
  }
  .list-empty{
    font-size: 14/@dd;
    text-align: center;
    height: 200/@dd;
    line-height: 200/@dd;
    color: #9C9C9C;
    background: #FFF8EF;
  }
}
</style>
