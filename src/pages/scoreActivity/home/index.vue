<template>
  <div class="container">
    <div class="header">
        <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_header.jpg" class="header-pic"/>
        <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_rule.png" class="header-rule" @click="ruleSwitch()"/>
        <div class="reward-entry" @click="jumpToMyReward()"></div>
        <div class="header-reward" v-if="rewardList.length>0">
            <div class="marquee_box">
                <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="(item,index) in rewardList" :key="index">{{item.noticeText}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="header-num" v-if="remainCount>0">
        今日剩余<span class="yellow">{{remainCount}}次</span>抽奖机会
    </div>
    <div class="partjob-wrap">
        <div class="partjob-item" v-for="(item, index) in goodsList" :key="index">
            <img :src="item.image" class="partjob-pic" @click="changeHandler(item.goodsId,item.url)"/>
            <div class="partjob-title" @click="changeHandler(item.goodsId,item.url)">{{item.name}}</div>
            <div class="partjob-price" @click="changeHandler(item.goodsId,item.url)">
                <span>{{item.priceDesc}}</span>
                <span class="partjob-price-underline">{{item.originalPrice}}元</span>
            </div>
            <div class="partjob-button">
                <div class="button-item lottoryClick" @click="lottoryHandler(item.goodsId,item.url)">免费抽奖</div>
                <div class="button-item change-button changeClick" @click="changeHandler(item.goodsId,item.url)">直接兑换</div>
            </div>
        </div>
    </div>
    <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_title.png" class="title"/>
    <div class="task-wrap">
        <div class="task-item" v-for="(item, index) in resource" :key="index" @click="_universalJump(item)">
            <img :src="item.image" class="task-pic"/>
            <div class="task-content">
                <div v-bind:class="{'task-title': true , 'task-title2' : !item.subTitle}">{{item.title}}</div>
                <div class="task-desc" v-if="item.subTitle">{{item.subTitle}}</div>
            </div>
            <div class="task-right">
                <div class="task-salary">{{item.salaryDesc}}</div>
                <div class="task-button">立即报名</div>
            </div>
        </div>
    </div>
    <div class="more-button" @click="jumpToJob(861)">
        查看更多
    </div>
    <!-- 中奖弹窗 -->
    <div class="mask" v-if="rewardVisible">
        <div class="reward-warp">
            <div v-bind:class="{'reward-icon': true, 'reward-icon2': type === 4, 'top-56': type === 1}"></div>
            <div class="reward-content" v-if="type === 2">
                <div>嘤嘤嘤嘤~差一点点就抽中了！</div>
                <div>别灰心，<span class="yellow">{{money}}元</span>购物津贴。</div>
            </div>
            <div class="reward-content top-258" v-if="type === 1">
                <div>嘤嘤嘤嘤~差一点点就抽中了！</div>
                <div>别灰心，奖励你<span class="yellow">{{score}}青豆</span></div>
                <div>团团悄悄告诉你，</div>
                <div>青豆商城可直接兑换哦</div>
            </div>
            <div class="reward-content" v-if="type === 4">
                <div>哇塞！中奖啦！恭喜你获得</div>
                <div><span class="yellow">"{{goodsName}}"</span>快去兑奖吧</div>
            </div>
            <div class="reward-button2" v-if="type === 4">
                <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_button5.png"  class="reward-item2" @click="jumpToAddress(goodsRewardId)"/>
            </div>
            <div class="reward-button" v-if="type != 4 && remainCount>0">
                <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_button3.png"  class="reward-item" @click="lottoryHandler(goodsId, goodsUrl)"/>
                <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_button4.png"  class="reward-item" @click="changeHandler(goodsId, goodsUrl)"/>
            </div>
            <div class="reward-button2" v-if="type != 4 && remainCount === 0">
                <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_button6.png"  class="reward-item2" @click="changeHandler(goodsId, goodsUrl)"/>
            </div>
        </div>
        <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_close.png" class="reward-close" @click="rewardCLose()"/>
    </div>
    <!-- 获取更多次数弹窗 -->
    <div class="mask" v-if="moreVisible">
        <div class="more-warp">
            <div class="share-button" @click="share()"></div>
            <!-- <button open-type="share" class="share-button" hover-class='none' onTap="addTimes"></button> -->
            <div class="share-button top-243" @click="jumpToJob(839)"></div>
            <div class="share-button top-340" @click="jumpToTaskList()"></div>
        </div>
        <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_close.png" class="reward-close" @click="moreCLose()"/>
    </div>
    <!-- 规则弹窗 -->
    <div class="mask" v-if="ruleVisible">
        <div class="rule-warp">
        </div>
        <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_close.png" class="reward-close top-873" @click="ruleSwitch()"/>
    </div>
    <!-- 抽奖GIF -->
    <div class="mask" v-if="gifVisible">
        <img src="https://qiniu-image.qtshe.com/20190114_scoreActivity_ing.gif" class="gif"/>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import {
  Indicator,
  MessageBox
} from 'mint-ui'
export default {
  data() {
    return {
      animate: false,
      interPackage: {},
      rewardList: [], //顶部通知栏
      interval: 3500, //通知栏滚动速度
      textStyle: 'color: #FFF; font-size: 28rpx;', //通知栏字体颜色
      remainCount: 0, //剩余次数
      goodsList: [],
      resource: [],
      type: 1,
      money: 0, //抽奖获取的钱
      goodsName: '', //抽奖获取的商品名称
      score: '', //抽奖获取的青豆
      rewardVisible: false,
      moreVisible: false,
      gifVisible: false,
      ruleVisible: false,
      isLogin: false,
      goodsId: '',
      goodsUrl: '',
      goodsRewardId: '',
      todayUsedCount: 0 //今天已用次数
    }
  },
  methods: {
    getAppToken() {
      if (util.isIosApp() || util.isAndroidApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            util.setCookie('token', data.token)
          }
          this.checkToken()
        })
      } else {
        this.checkToken()
      }
    },
    rewardCLose() {
      this.rewardVisible = false
    },
    moreCLose() {
      this.moreVisible = false
      this.initData()
    },
    ruleSwitch() {
      this.ruleVisible = !this.ruleVisible
    },
    queryResource() {
      this.$axios.post('/activityCenter/beans/carnival/resource').then((res) => {
        if (res.success) {
          this.resource = res.data || []
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(() => {
        toast('服务器错误，请稍后再试')
      })
    },
    initData() {
      this.$axios.post('/activityCenter/beans/carnival/page/data').then((res) => {
        Indicator.close()
        if (res.success) {
          const { data = {} } = res
          const { goodsList = [], remainCount = 0, rewardList = [], todayUsedCount = 0 } = data
          let arr = []
          rewardList.forEach(item => {
            let noticeText = ''
            if (item.rewardType === 1) {
              noticeText = `恭喜${item.name}获得了${item.score}青豆`
            }
            if (item.rewardType === 2) {
              noticeText = `恭喜${item.name}获得了${item.money}元`
            }
            if (item.rewardType === 4) {
              noticeText = `恭喜${item.name}免费获得了${item.goodsName}`
            }
            noticeText && arr.push({
              noticeText
            })
          })
          this.goodsList = goodsList
          this.remainCount = remainCount
          this.rewardList = arr
          this.todayUsedCount = todayUsedCount
          clearInterval(this.showMarquee)
          setInterval(this.showMarquee, 2000)
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(() => {
        Indicator.close()
        toast('服务器错误，请稍后再试')
      })
    },
    checkToken() {
      let postData = {
        token: util.getToken() || ''
      }
      this.$axios.post('/accountCenter/account/miniApp/validation/token', postData).then((res) => {
        if (res.success) {
          this.isLogin = true
        } else {
          this.isLogin = false
        }
        this.initData()
      }).catch(() => {
        this.initData()
      })
    },
    _universalJump(obj) {
      const param = JSON.parse(obj.param)
      if (obj.jumpKey === 'USER_PART_JOB_DETAIL_PAGE') {
        this.interPackage.evokeNormalPartJobDetailPage(param[0].value)
      }
      if (obj.jumpKey === 'USER_TASK_DETAIL_PAGE') {
        this.interPackage.evokeLightTaskDetailPage(param[0].value)
      }
    },
    shareInitInfo() {
      this.interPackage.initShareInfo({
        title: '青豆狂欢节，团团送年货啦',
        imgUrl: 'https://qiniu-image.qtshe.com/20190115_scoreActivity_sharepic.png'
      })
    },
    showMarquee() {
      this.animate = true
      setTimeout(() => {
        this.rewardList.push(this.rewardList[0])
        this.rewardList.shift()
        this.animate = false
      }, 500)
    },
    lottoryHandler(goodsId, goodsUrl) {
      goodsId = goodsId || this.goodsId
      goodsUrl = goodsUrl || this.goodsUrl
      this.rewardVisible = false
      this.goodsId = goodsId
      this.goodsUrl = goodsUrl
      window.MtaH5 && window.MtaH5.clickStat('lottoryHandler_' + goodsId)
      if (!this.isLogin) {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.eventEmitter()
          this.interPackage.loginHandler((token) => {
            util.setCookie('token', token)
            this.checkToken()
          })
        } else {
          util.goLogin()
        }
        return
      }
      if (this.remainCount === 0 && this.todayUsedCount < 4) {
        toast('次数不足，请完成指定任务')
        this.moreVisible = true
        return
      }
      if (this.todayUsedCount === 4) {
        MessageBox.confirm('', {
          message: '今日次数已用尽，明日再来?',
          title: '提示',
          confirmButtonText: '直接兑换',
          cancelButtonText: '知道了'
        }).then(() => {
          window.location.href = `${goodsUrl}&token=${util.getToken()}`
        }).catch(() => {
        })
        return
      }
      this.gifVisible = true
      clearTimeout(this.timeout)
      this.$axios.post('/activityCenter/beans/carnival/turnover', { goodsId }).then(res => {
        if (res.success) {
          this.timeout = setTimeout(() => {
            this.goodsRewardId = res.data.goodsRewardId
            this.gifVisible = false
            this.rewardVisible = true
            this.type = res.data.rewardType
            this.money = res.data.money || 0 //抽奖获取的钱
            this.goodsName = res.data.goodsName || '' //抽奖获取的商品名称
            this.score = res.data.score || 0 //抽奖获取的青豆
          }, 1500)
          this.initData()
        } else {
          this.gifVisible = false
          toast(res.msg || res.message || '服务器错误，请稍后重试')
        }
      }).catch(() => {
        this.gifVisible = false
        toast('服务器错误，请稍后重试')
      })
    },
    share() {
      this.interPackage.evokeSharePanel({
        title: '青豆狂欢节，团团送年货啦',
        link: window.location.href,
        imgUrl: 'https://qiniu-image.qtshe.com/20190115_scoreActivity_sharepic.png'
      })
      this.addTimes()
    },
    addTimes() {
      this.$axios.post('/activityCenter/beans/carnival/add/chance/by/share').then(res => {
        if (res.success) {
          this.initData()
        } else {
          toast(res.msg || res.message || '服务器错误，请稍后重试')
        }
      }).catch(() => {
        toast('服务器错误，请稍后重试')
      })
    },
    jumpToJob(tagId) {
      this.interPackage.evokeLabelListPage(tagId)
    },
    jumpToTaskList() {
      this.interPackage.evokeLightTaskListPage()
    },
    changeHandler(goodsId, goodsUrl) {
      if (util.isWeiXin()) {
        toast('由于支付问题，请点击右上角使用自带浏览器进行兑换')
        return
      }
      if (!this.isLogin) {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.eventEmitter()
          this.interPackage.loginHandler((token) => {
            util.setCookie('token', token)
            this.checkToken()
          })
        } else {
          util.goLogin()
        }
        return
      }
      window.MtaH5 && window.MtaH5.clickStat('changeHandler_' + goodsId)
      window.location.href = `${goodsUrl}&token=${util.getToken()}`
    },
    jumpToAddress(id) {
      this.rewardVisible = false
      this.$router.push(`/scoreActivity/address?goodsRewardId=${id}`)
    },
    jumpToMyReward() {
      if (!this.isLogin) {
        if (util.isAndroidApp() || util.isIosApp()) {
          this.interPackage.eventEmitter()
          this.interPackage.loginHandler((token) => {
            util.setCookie('token', token)
            this.checkToken()
          })
        } else {
          util.goLogin()
        }
        return
      }
      this.$router.push(`/scoreActivity/reward`)
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.interPackage.setNavTitle('青豆狂欢节')
  },
  mounted() {
    this.getAppToken()
    this.queryResource()
    this.shareInitInfo()
    Indicator.open()
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
