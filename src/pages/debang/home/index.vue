<template>
  <div class="debang-home-main">
    <div class="debang-home-rule" @click="handleRuleVisibleShow"></div>
    <TvComponent />
    <div class="debang-home-button" @click="handleGoArea"></div>
    <div class="debang-home-list">
      <ItemComponent
        v-for="(item, index) in rankList"
        :key="item.benefitId"
        :index="index + 1"
        :isLast="index === rankList.length - 1"
        :item="item"
      />
    </div>
    <!-- <div class="debang-home-about"></div> -->
    <!-- <div class="debang-home-bottom"></div> -->
    <AlertComponent content-class="debang-alert-rule-content" closable v-model="ruleVisible">
      <div class="debang-alert-rule-bg"></div>
      <div class="debang-alert-rule-title">活动规则</div>
      <div class="debang-alert-rule-text">
        <div>
          <span>1</span>
          <span>参与对象：全国高校学生</span>
        </div>
        <div>
          <span>2</span>
          <span>参与要求：6月15日至6月30日，完成线上免费</span>
        </div>
        <div class="debang-alert-rule-indent">旧衣回收公益活动。</div>
        <div>
          <span>3</span>
          <span>挑战成功的学校可获得：</span>
        </div>
        <div class="debang-alert-rule-indent">100㎡公益林*1</div>
        <div class="debang-alert-rule-indent">环保奖杯*1；环保奖状*1</div>
        <div class="debang-alert-rule-indent">市级志愿者证书*10</div>
        <div class="debang-alert-rule-appendix">
          <div>附：挑战排名奖励</div>
          <div class="debang-alert-rule-indent">1 – 3 名：冠名100㎡公益林*5</div>
          <div class="debang-alert-rule-indent">4 -10 名：冠名100㎡公益林*3</div>
          <div class="debang-alert-rule-indent">11-20 名：冠名100㎡公益林*2</div>
        </div>
      </div>
    </AlertComponent>
  </div>
</template>
<script>
import util from 'util'
import toast from 'toast'
import setWechatTitle from 'setWechatTitle'
import TvComponent from '../components/tv'
import ItemComponent from '../components/item'
import AlertComponent from '../components/alert'
export default {
  components: {
    TvComponent,
    ItemComponent,
    AlertComponent
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.interPackage.initShareInfo({
      title: '旧衣回收挑战赛，等你来战！',
      desc: '为母校助力，等你出击！',
      imgUrl: 'https://qiniu-image.qtshe.com/debang/debang-n-share-v-img.png'
    })
    setWechatTitle('旧衣回收挑战赛')
    this.getRankList()
  },
  data() {
    return {
      ruleVisible: false,
      rankList: []
    }
  },
  methods: {
    getRankList() {
      this.$axios.post('/activityCenter/benefitDivision/school/rank').then(
        res => {
          if (res.success) {
            const list = res.data || []
            this.rankList = list.slice(0, 10)
          } else {
            toast(res.msg || '获取学校列表失败，请稍后重试')
          }
        },
        () => {
          toast('获取学校列表失败，请稍后重试')
        }
      )
    },
    handleRuleVisibleShow() {
      this.ruleVisible = true
    },
    handleGoArea() {
      // this.$router.push('/debang/area')
      window.location.href = `/act/debang/area`
    }
  }
}
</script>
<style lang="less">
@import "./index.less";
</style>
