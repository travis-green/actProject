<template>
  <div class="debang-detail-main">
    <div class="debang-detail-info">
      <div class="debang-detail-info-title">{{schoolData.title}}</div>
      <div class="debang-detail-info-subTitle">{{schoolData.subTitle}}</div>
      <div
        :class="{'debang-detail-info-progress':true, 'title-over-length': schoolData.title.length > 15}"
      >
        <div class="debang-detail-info-progress-c" :style="{width: progressRate + '%'}"></div>
      </div>
      <div
        :class="{'debang-detail-info-bottom':true, 'title-over-length': schoolData.title.length > 15}"
      >
        <div>
          <span>当前公益进度：</span>
          <span class="protruding">{{schoolData.progressRate}}%</span>
        </div>
        <div>
          <span>筹集目标：</span>
          <span class="protruding">{{schoolData.targetDesc}}</span>
        </div>
      </div>
    </div>
    <TvComponent />
    <div
      class="debang-detail-button"
      v-clickEvents="{ businessId: 0, businessType: 0, position: 'benefitDivisionAssist'}"
    >
      <div class="debang-detail-button-text">已结束</div>
      <div class="debang-detail-button-subText">我的绿色能量：{{schoolData.score}}点</div>
    </div>
    <div class="debang-detail-task-box">
      <div class="debang-detail-task">
        <div class="debang-detail-task-title-1"></div>
        <div class="debang-detail-task-item debang-detail-task-item-1">
          <div class="debang-detail-task-title">每参与一次旧衣回收</div>
          <div class="debang-detail-task-subTitle">可获得10点绿色能量</div>
          <div class="debang-detail-task-button-dis">已结束</div>
        </div>
        <div class="debang-detail-task-item debang-detail-task-item-2">
          <div class="debang-detail-task-title">每参与一次毕业行李邮寄</div>
          <div class="debang-detail-task-subTitle">可获得10点绿色能量</div>
          <div class="debang-detail-task-button-dis">已结束</div>
        </div>
        <div class="debang-detail-task-item debang-detail-task-item-3">
          <div class="debang-detail-task-title">每参与一次公益分享</div>
          <div class="debang-detail-task-subTitle">可获得5点绿色能量</div>
          <div class="debang-detail-task-button-dis">已结束</div>
        </div>
      </div>
      <div class="debang-detail-list">
        <div class="debang-detail-task-title-2"></div>
        <div ref="rankListRef" class="debang-detail-school-list">
          <div class="debang-detail-school-box">
            <ItemComponent
              v-for="(item, index) in rankList"
              ref="rankListItemRef"
              :key="item.benefitId"
              :index="index + 1"
              :isLast="index === rankList.length - 1"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 捐赠确认 -->
    <AlertComponent content-class="debang-alert-donation-content" v-model="donationVisible">
      <div class="debang-alert-donation-bg"></div>
      <div class="debang-alert-donation-btnBox">
        <div
          class="debang-alert-donation-btn debang-alert-donation-btn-cancel"
          @click="handleDonationCancel"
        >取消</div>
        <div
          class="debang-alert-donation-btn debang-alert-donation-btn-confirm"
          @click="handleDonationConfirm"
        >确定</div>
      </div>
    </AlertComponent>
    <!-- 分享图名称 -->
    <AlertComponent content-class="debang-alert-name-content" closable v-model="nameVisible">
      <div class="debang-alert-name-bg">
        <input class="debang-alert-name-input" v-model="userName" placeholder="请输入你的名字" />
        <span v-show="nameValidate" class="debang-alert-name-validate">名称长度不能超过10位</span>
        <div class="debang-alert-name-btn-confirm" @click="handleNameConfirm"></div>
      </div>
    </AlertComponent>
  </div>
</template>
<script>
import util from 'util'
import toast from 'toast'
import { Indicator } from 'mint-ui'
import setWechatTitle from 'setWechatTitle'
import TvComponent from '../components/tv'
import ItemComponent from '../components/item'
import AlertComponent from '../components/alert'
import CanvasComponent from '../components/canvas'
export default {
  components: {
    TvComponent,
    ItemComponent,
    AlertComponent,
    CanvasComponent
  },
  created() {
    window.addEventListener('popstate', this.backRefresh, false)
    this.interPackage = util.getCurrentVersionInteractivePackage()
    setWechatTitle('旧衣回收挑战赛')
    this.initData()
  },
  beforeRouteUpdate(to, from, next) {
    next()
    setTimeout(() => {
      this.initData()
    }, 100)
  },
  destroyed() {
    window.removeEventListener('popstate', this.backRefresh)
  },
  data() {
    return {
      donationVisible: false, // 捐赠弹框
      nameVisible: false, // 名称弹框
      userName: '', // 分享显示名称
      isLogin: false,
      schoolData: {
        title: '',
        subTitle: '',
        targetDesc: '',
        progressRate: 0
      },
      rankList: []
    }
  },
  computed: {
    progressRate() {
      const progressRate = this.schoolData.progressRate
      return progressRate > 100 ? 100 : progressRate
    },
    nameValidate() {
      return this.userName.length > 10
    }
  },
  methods: {
    backRefresh() {
      if (window.sessionStorage.getItem('debangRefresh')) {
        this.nameVisible = false
        window.sessionStorage.removeItem('debangRefresh')
        this.initData()
      }
    },
    initData() {
      this.schoolId = this.$route.params.schoolId
      this.initShare()
      this.getAppToken()
      this.getRankList()
    },
    initShare() {
      this.interPackage.initShareInfo({
        title: '快来为母校助力！等你献爱心',
        desc: '听说隔壁学校已经上榜Top10了！',
        imgUrl: 'https://qiniu-image.qtshe.com/debang/debang-n-share-v-img.png'
      })
    },
    getAppToken() {
      if (util.isIosApp() || util.isAndroidApp()) {
        this.interPackage.getAppInfo().then(data => {
          if (data.token) {
            util.setCookie('token', data.token)
          }
          const jwttoken = data.jwtToken || data.jwttoken || ''
          if (jwttoken) {
            util.setCookie('jwttoken', jwttoken)
          }
          this.checkToken()
        })
      } else {
        this.checkToken()
      }
    },
    checkToken() {
      util.checkToken().then(
        () => {
          this.isLogin = true
          this.benefitData()
        },
        () => {
          this.isLogin = false
          this.benefitData()
        }
      )
    },
    // 基础数据
    benefitData() {
      return this.$axios
        .post('/activityCenter/benefitDivision/data', {
          benefitId: this.schoolId
        })
        .then(
          res => {
            if (res.success) {
              this.schoolData = res.data || {}
            } else {
              toast(res.msg || '获取学校信息失败，请稍后重试')
            }
          },
          () => {
            toast(res.msg || '获取学校信息失败，请稍后重试')
          }
        )
    },
    // 学校排行
    getRankList() {
      this.$axios
        .post('/activityCenter/benefitDivision/school/rank')
        .then(res => {
          if (res.success) {
            this.rankList = res.data || []
            this.$nextTick(() => {
              this.scrollToSchool()
            })
          }
        })
    },
    // 助力
    benefitAssist() {
      Indicator.open()
      this.$axios
        .post('/activityCenter/benefitDivision/assist', {
          benefitId: this.schoolId
        })
        .then(
          res => {
            Indicator.close()
            if (res.success) {
              this.benefitData()
              toast('助力成功')
              setTimeout(() => {
                this.handleDonationCancel()
              }, 500)
            } else {
              toast(res.msg || '助力失败，请稍后重试')
            }
          },
          () => {
            Indicator.close()
            toast('助力失败，请稍后重试')
          }
        )
    },
    // 行李邮寄和分享 完成任务
    benefitFinishTask(taskType) {
      if (!this.isLogin) {
        util.login().then(() => {
          this.getAppToken()
        })
        return Promise.reject()
      }
      return this.$axios
        .post('/activityCenter/benefitDivision/finishTask', {
          benefitId: this.schoolId,
          taskType // 任务类型 1-旧衣回收（不可用） 2-行李邮寄 3-分享
        })
        .then(
          res => {
            if (res.success) {
              // this.benefitData()
            } else {
              toast(res.msg || '完成任务失败，请稍后重试')
            }
          },
          () => {
            toast('完成任务失败，请稍后重试')
          }
        )
    },
    // 邮寄按钮
    handlePost() {
      _hmt &&
        _hmt.push([
          '_trackEvent',
          'debang',
          'click',
          'button-2',
          this.schoolId
        ])
      if (!util.isWeiXin()) {
        return toast('请在微信打开页面完成此任务')
      }
      this.benefitFinishTask(2).then(() => {
        window.sessionStorage.setItem('debangRefresh', true)
        setTimeout(() => {
          this.backRefresh()
        }, 500)
        window.location.href = `https://www.deppon.com/newwebsite/depponmobile/wechat#/send`
      })
    },
    // 寄衣服
    handleCloth() {
      _hmt &&
        _hmt.push([
          '_trackEvent',
          'debang',
          'click',
          'button-1',
          this.schoolId
        ])
      if (!this.isLogin || !this.schoolData.uid) {
        util.login().then(() => {
          this.getAppToken()
        })
        return
      }
      window.sessionStorage.setItem('debangRefresh', true)
      window.location.href = `https://wechat.jiuyibang.net/index.php/Home/YuyueOne/index/user_id/6669241/uid/${this.schoolData.uid}/schoolId/${this.schoolId}`
    },
    handleDonationShow() {
      if (!this.isLogin) {
        util.login().then(() => {
          this.getAppToken()
        })
        return
      }
      if (this.schoolData.score <= 0) {
        const { clothFinish, postFinish, shareFinish } = this.schoolData
        if (clothFinish && postFinish && shareFinish) {
          toast('任务已全部完成，明日再来')
        } else {
          toast('请完成任务获得绿色能量')
        }
        return
      }
      this.donationVisible = true
    },
    // 滚动到当前学校
    scrollToSchool() {
      const schoolId = this.schoolId
      const schoolIndex = this.rankList.findIndex(
        item => item.benefitId === Number(schoolId)
      )
      if (schoolIndex < 0) return
      setTimeout(() => {
        const top = this.$refs.rankListItemRef[schoolIndex].$el.offsetTop
        this.$refs.rankListRef.scrollTop = top
      }, 500)
    },
    handleDonationCancel() {
      this.donationVisible = false
    },
    handleDonationConfirm() {
      this.benefitAssist()
    },
    handleNameShow() {
      _hmt &&
        _hmt.push([
          '_trackEvent',
          'debang',
          'click',
          'button-3',
          this.schoolId
        ])
      if (!this.isLogin) {
        util.login().then(() => {
          this.getAppToken()
        })
        return
      }
      this.nameVisible = true
    },
    // 名字提交
    handleNameConfirm() {
      if (this.userName) {
        if (this.userName.length > 10) return toast('输入名字过长')
        this.createShareImage(this.userName)
      }
    },
    // 生成图片
    createShareImage(userName) {
      this.nameVisible = false
      this.benefitFinishTask(3).then(() => {
        window.sessionStorage.setItem('debangRefresh', true)
        setTimeout(() => {
          this.backRefresh()
        }, 500)
        window.location.href = `/act/debang/certificate?name=${encodeURIComponent(
          userName
        )}&schoolName=${encodeURIComponent(this.schoolData.title)}&schoolId=${
          this.schoolId
        }&donateScore=${this.schoolData.donateScore}`
      })
      // this.$router.push({
      //   path: '/debang/certificate',
      //   query: {
      //     name: userName,
      //     schoolName: this.schoolData.title,
      //     schoolId: this.schoolId,
      //     donateScore: this.schoolData.donateScore
      //   }
      // })
    }
  }
}
</script>
<style lang="less">
@import "./index.less";
</style>
