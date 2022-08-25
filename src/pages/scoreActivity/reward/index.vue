<template>
  <div class="container">
    <img src="https://qiniu-image.qtshe.com/20190115_scoreActivity_rewardbg.png" class="header-pic"/>
    <div class="reward-wrap" v-if="list.length>0">
       <div v-bind:class="{'reward-item': true, 'no-border': index === list.length-1}" v-for="(item, index) in list" :key="index">
           <div class="item-content">
               <div class="item-title" v-if="item.rewardType === 1">青豆奖励（自动存入我的—青豆商城）</div>
               <div class="item-title" v-if="item.rewardType === 2">现金红包（自动存入我的—余额）</div>
               <div class="item-title" v-if="item.rewardType === 4">{{item.goodsName}}</div>
               <div class="item-time">{{item.receiveTime}}</div>
           </div>
           <div class="item-num" v-if="item.rewardType === 1">+{{item.score}}</div>
           <div class="item-num" v-if="item.rewardType === 2">+{{item.money}}</div>
           <div class="item-button" v-if="item.rewardType === 4 && item.goodsStatus ===0" @click="jumpToChange(item.goodsRewardId)">兑奖</div>
           <div class="item-button-changed" v-if="item.rewardType === 4 && item.goodsStatus ===1">已兑奖</div>
           <div class="item-button" v-if="item.rewardType === 4 && item.goodsStatus ===2">已过期</div>
        </div>
   </div>
   <div class="reward-wrap" v-else>
       <img src="https://qiniu-image.qtshe.com/20190115_scoreActivity_rewardBlank.png" class="blank"/>
   </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import {
  Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      interPackage: {},
      list: []
    }
  },
  methods: {
    queryInfo() {
      let postData = {
        pageNum: 1,
        pageSize: 50
      }
      this.$axios.post('/activityCenter/beans/carnival/reward/list/by/user', postData).then(res => {
        Indicator.close()
        if (res.success) {
          this.list = res.data.results || []
        } else {
          toast(res.msg || res.message || '服务器错误，请稍后重试')
        }
      }).catch(() => {
        Indicator.close()
        toast('服务器错误，请稍后重试')
      })
    },
    jumpToChange(id) {
      this.$router.push(`/scoreActivity/address?goodsRewardId=${id}`)
    },
    displayShareBtn() {
      this.interPackage.displayShareBtn(false)
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.interPackage.setNavTitle('我的奖品')
    Indicator.open()
  },
  mounted() {
    this.queryInfo()
    this.displayShareBtn()
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
