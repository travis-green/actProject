<template>
  <!-- 切换内容star -->
  <div class="downLoadBg" v-if="showPage">
    <div class="rulesBtn" @click="showrules" v-clickEvents="{ businessId: 0, businessType: 0, index: 0, position: 'showrules'}">
      <img src="https://qiniu-image.qtshe.com/activitySchool/ruleImage.png" class="rulesImage" />
    </div>
    <!-- 弹窗 -->
    <div v-if="visible" class="mask" @click="resetMove"></div>
    <!-- 规则弹窗 -->
    <div class="alertBkImage fixedcenter" v-if="visible && dialogType===1">
      <div class="rules">
        <span>1、本抽奖活动为“超级团宠福利”，为青团社用户专享福利。</span>
        <span>2、“超级团宠区”得主通过随机获得抽奖码产生；每个用户每轮抽奖活动最多可获得8个抽奖码。其中，在抽奖时间内点击抽奖按钮即可获得首个抽奖码，分享可获得第二个抽奖码，同时用户将活动分享给好友且好友成功参与后可继续获得抽奖码，最多可通过分享获得7个抽奖码；登记结束后，平台将在抽奖时间内从所有抽奖码中随机抽取1个抽奖码为中奖号码，中奖用户可获得当期中奖奖品；</span>
        <span>3、若平台发现用户存在批量注册、恶意刷奖等行为，平台有权取消其中奖资格且不予发货。</span>
      </div>
      <div class="subbutton flexcenter" @click="resetMove">好的，我知道了</div>
    </div>
    <!-- 获得抽奖码单 -->
    <div class="getcodedialog flexcenter fixedcenter" v-if="visible && dialogType===2">
      <img
        src="https://qiniu-image.qtshe.com/closeShape.png"
        @click="resetMove"
        class="getcodeCloseBtn"
      />
      <div class="getCodebox">
        <span :key="i" v-for="(item, i) in freeCode">{{freeCode[i]}}</span>
      </div>
      <!-- 分享 -->
      <div class="shareBottom" @click="showSharePanel"></div>
    </div>
    <!-- 获得抽奖码 双 -->
    <div class="getcodedialog2 flexcenter fixedcenter" v-if="visible && dialogType===3">
      <img
        src="https://qiniu-image.qtshe.com/closeShape.png"
        @click="resetMove"
        class="getcodeCloseBtn"
      />
      <div class="getCodebox2">
        <span :key="i" v-for="(item, i) in freeCode">{{freeCode[i]}}</span>
      </div>
      <!-- 分享 -->
      <div class="shareBottom" @click="showSharePanel"></div>
    </div>
    <!-- 中奖弹窗 -->
    <div class="awardsuccess flexcenter fixedcenter" v-if="visible && dialogType===4">
      <div class="avatar flexcenter flexcolumn">
        <img :src="headImg" />
        <div class="userName">{{resultName}}</div>
      </div>
      <img
        src="https://qiniu-image.qtshe.com/closeShape.png"
        @click="resetMove"
        class="successCloseBtn"
      />
      <div class="ticketbk successDialog">
        <span>{{raffleCode}}</span>
      </div>
    </div>
    <!-- 未中奖弹窗 -->
    <div class="awardfailed flexcenter fixedcenter" v-if="visible && dialogType===5">
      <div class="avatarfail flexcenter flexcolumn">
        <img :src="headImg" />
        <div class="userName">{{resultName}}</div>
      </div>
      <img
        src="https://qiniu-image.qtshe.com/closeShape.png"
        @click="resetMove"
        class="failCloseBtn"
      />
      <div class="ticketbk successDialog">
        <span>{{raffleCode}}</span>
      </div>
    </div>
    <!-- 我的码 未满 -->
    <div class="mycodedialog flexcenter fixedcenter" v-if="visible && dialogType===7">
      <img
        src="https://qiniu-image.qtshe.com/closeShape.png"
        @click="resetMove"
        class="getcodeCloseBtn"
      />
      <div class="myCodebox grid">
        <block :key="i" v-for="(item, i) in codeArray" :class="item.code === ''? 'myticketbkfail myticketbk':'myticketbk flexcenter'">
          <div v-if="item.code !==''">
            <span>{{item}}</span>
          </div>
        </block>
      </div>
      <!-- 分享 -->
      <div class="shareBottom" @click="showSharePanel"></div>
    </div>
    <!-- 进度  
    <div class="timelineBox flexcenter topIndex">
      <img :src="processImg" class="timelineImage" />
    </div>-->
    <!-- 奖品动图标题 
    <div class="awardItemBox flexcenter topIndex" style="top:4.45rem">
      <img src="https://qiniu-image.qtshe.com/activitySchool/awardItemTitle.png" class="awardTitle" />
    </div> -->
    <!-- 奖品图 
    <div class="awardItemBox flexcenter topIndex" style="top:4.25rem" @click="_universalJump(jumpKey,param)" v-clickEvents="{ businessId: 0, businessType: 0, index: 0, position: 'awardTop'}">
      <img :src="firstImage" class="award" />
    </div> -->
    <!-- 奖品动图标题  -->
    <div class="awardItemBox flexcenter topIndex" style="top:4.26rem">
      <img src="https://qiniu-image.qtshe.com/activitySchool/awardTitleIcon.png" class="awardTitle" />
    </div> 
    <!-- 底部奖品 -->
    <div class="repeatBk flexcenter flexcolumn">
      <div class="btmAward">
        <div class="awardImage flexcenterjust">
          <img
            src="https://qiniu-image.qtshe.com/activitySchool/awardImage.png"
            class="awardTitle"
          />
          <div class="awardSubtitle flexspacebetween">
            <span>
              <span class="ylcolor">{{userCnt}}</span>人已参与
            </span>
            <span v-if="draw">活动已结束</span>
            <span v-else>即将开奖：{{dateText}}</span>
          </div>
        </div>
        <div class="codeBox">
          <img
            src="https://qiniu-image.qtshe.com/activitySchool/mycode.png"
            class="mycode"
            v-clickEvents="{ businessId: 0, businessType: 0, index: 0, position: 'mycode'}"
            @click="showMycodeDialog"
          />
          <img
            v-if="draw"
            src="https://qiniu-image.qtshe.com/activitySchool/checkResult.png"
            class="getcode"
            v-clickEvents="{ businessId: 0, businessType: 0, index: 0, position: 'getRaffResult'}"
            @click="getRaffResult"
          />
          <img
            v-else
            :src="hasAlreadyGet?'https://qiniu-image.qtshe.com/activitySchool/alreadyGet.png':'https://qiniu-image.qtshe.com/activitySchool/getcode.png'"
            class="getcode"
            v-clickEvents="{ businessId: 0, businessType: 0, index: 0, position: 'getcode'}"
            @click="getCode(0)"
          />
        </div>
      </div>
      <!-- 奖品tab  -->
      <!-- 奖品动图标题  -->
      <div class="awardItemBox flexcenter topIndex" style="top:.25rem">
        <img src="https://qiniu-image.qtshe.com/activitySchool/awardTitleBottom.png" class="awardTitle" />
      </div> 
      <div class="awardtabBox" :key="index" v-for="(item, index) in awardBox" style="margin-top:8px;">
        <div class="tab-content">
          <div class="awardgrid">
            <div class="tabicon marginTop" :key="i" v-for="(it, i) in item.banners" @click="_universalJump(it.jumpKey, it.param)"  v-clickEvents="{ businessId: i, businessType: 0, index: i, position: `${'awardItem_' + index}`}">
              <img
                :src="it.image"
                class="tabItemImg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="companyLogo">
        <img src="https://qiniu-image.qtshe.com/activitySchool/qtslogo.png" ></image>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "./index.less";
</style>
<style>
.mint-msgbox-confirm {
  color: #000 !important;
}
</style>
<script>

function visibilitychangeHandaler() {
  if (document.visibilityState === 'visible') {
    location.reload(true)
  }
}
function webkitvisibilitychangeHandaler() {
  if (document.webkitVisibilityState === 'visible') {
    location.reload(true)
  }
}
function mozvisibilitychangeHandaler() {
  if (document.mozVisibilityState === 'visible') {
    location.reload(true)
  }
}
function msvisibilitychangeHandaler() {
  if (document.msVisibilityState === 'visible') {
    location.reload(true)
  }
}

import { Indicator, MessageBox } from 'mint-ui'
import toast from 'toast'
import util from 'util'
export default {
  data() {
    return {
      interPackage: {},
      whether: false,
      codeArray: [],
      curId: 0,
      hasAlreadyGet: false, //是否抽过
      headImg: 'https://qiniu-image.qtshe.com/1575466455774_684.png-300', //中奖头像
      resultName: '', //中奖名
      raffleCode: '', //中奖码
      userCnt: 0, //参数人数
      processImg: 'https://qiniu-image.qtshe.com/activitySchool/timeLineProgress1.png',
      tabListfirst: [
        {
          img:
            'https://qiniu-image.qtshe.com/activitySchool/awardItemTitle.png',
          title: '智能手环智能表表这里还能放8个字',
          price: 99
        },
        {
          img:
            'https://qiniu-image.qtshe.com/activitySchool/awardItemTitle.png',
          title: '智能手环智能表表这里还能放8个字',
          price: 99
        },
        {
          img:
            'https://qiniu-image.qtshe.com/activitySchool/awardItemTitle.png',
          title: '智能手环智能表表这里还能放8个字',
          price: 99
        },
        {
          img:
            'https://qiniu-image.qtshe.com/activitySchool/awardItemTitle.png',
          title: '智能手环智能表表这里还能放8个字',
          price: 99
        },
        {
          img:
            'https://qiniu-image.qtshe.com/activitySchool/awardItemTitle.png',
          title: '智能手环智能表表这里还能放8个字',
          price: 99
        }
      ],
      tabtitle: [
        {
          title: '硬核装备团'
        },
        {
          title: '颜值爆表团'
        },
        {
          title: '吃喝玩乐团'
        },
        {
          title: '天天向上团'
        }
      ],
      showPage: false, //显示页面
      freeCode: ['', ''], //免费码
      dateText: '',
      shareUserId: '', //分享人id
      islogin: false, //登陆状态
      awardFirst: [], //第一个奖品类
      cur: 0, //默认选中第一个tab
      visible: false, //蒙层
      draw: false, //开奖状态
      dialogType: 1, //弹窗类型 1规则，2单抽奖码 3双抽奖码 4中奖 5 未中奖 7我的码未满
      firstImage: 'https://qiniu-image.qtshe.com/activitySchool/awardItem.gif'
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.setShareinfo() //设置分享信息
    this.initPageShowEvent()
  },
  beforeDestroy() {
    this.removePageShowEvent()
  },
  beforeMount() {},
  mounted() {
    this.getAppinfo()
  },
  methods: {
    removePageShowEvent() {
      document.removeEventListener(
        'visibilitychange',
        visibilitychangeHandaler
      )
      document.removeEventListener(
        'webkitvisibilitychange',
        webkitvisibilitychangeHandaler
      )
      document.removeEventListener(
        'mozvisibilitychange',
        mozvisibilitychangeHandaler
      )
      document.removeEventListener(
        'msvisibilitychange',
        msvisibilitychangeHandaler
      )
    },
    initPageShowEvent() {
      document.addEventListener('visibilitychange', visibilitychangeHandaler)
      document.addEventListener(
        'webkitvisibilitychange',
        webkitvisibilitychangeHandaler
      )
      document.addEventListener(
        'mozvisibilitychange',
        mozvisibilitychangeHandaler
      )
      document.addEventListener(
        'msvisibilitychange',
        msvisibilitychangeHandaler
      )
    },
    setShareinfo() {
      if (util.getAppVersionNum() >= 4450200) {
        this.interPackage.setShareInfo([
          {
            'plateformType': 0,
            'title': '青团百团大战，超级团宠福利等你来拿',
            'desc': '承包2020最前端最好玩的开学季！',
            'webpageUrl': '',
            'imgUrl': 'https://qiniu-image.qtshe.com/activitySchool/shareInfoImage.png',
            'miniProgramPath': `/activity/schoolDays/index?shareUserId${this.shareUserId}`,
            'shareType': 2
          }
        ])
      } else {
        // 初始化自定义分享内容
        this.interPackage.initShareInfo({
          title: '青团百团大战，超级团宠福利等你来拿',
          desc: '承包2020最前端最好玩的开学季！',
          link: `/act/activitySchoolDays/schoolDays?shareUserId${this.shareUserId}`,
          imgUrl: 'https://qiniu-image.qtshe.com/activitySchool/shareInfoImage.png'
        })
      }
    },
    getAppinfo() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then((data) => {
          if (data.token) {
            this.token = data.token
            util.setCookie('token', data.token)
            util.setCookie('jwttoken', data.jwtToken)
            this.getPageData()
            this.showMycode(data.token)//设置我的码
            this.islogin = true
          } else {
            this.getPageData()
            this.showMycode()//设置我的码
            this.islogin = false
          }
        })
      } else {
        this.getPageData()
        this.showMycode()//设置我的码
      }
    },
    resetMove() {
      this.visible = false
      // this.Move()
    },
    //停止滚动
    stopMove() {
      let m = function(e) { e.preventDefault() }
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
      document.body.style.width = '100%'
      document.addEventListener('touchmove', m, {passive: false})//禁止页面滑动
    },
    //开启页面滚动
    Move() {
      let m = function(e) { e.preventDefault() }
      document.body.style.overflow = ''//出现滚动条
      document.body.style.height = 'auto'
      document.body.style.width = '100%'
      document.removeEventListener('touchmove', m, {passive: true})
    },
    showSharePanel() {
      //唤起分享列表
      //设置分享
      this.interPackage.showSharePanel()
      setTimeout(() => {
        toast('分享成功')
        this.getCode(1)
      }, 800)
    },
    _universalJump(jumpKey, param) {
      if (this.draw) {
        return false
      }
      //万能跳转
      const paramData = JSON.parse(param)
      if (jumpKey === 'USER_PART_JOB_DETAIL_PAGE') {
        this.interPackage.evokeNormalPartJobDetailPage(paramData[0].value)
      }
      if (jumpKey === 'USER_TASK_DETAIL_PAGE') {
        this.interPackage.evokeLightTaskDetailPage(paramData[0].value)
      }
      if (jumpKey === 'USER_PRACTICE_DETAIL_PAGE') {
        this.interPackage.evokeInterViewPracticePage(paramData[0].value)
      }
      if (jumpKey === 'USER_STATIC_PAGE') {
        window.location.href = paramData[0].value
      }
      if (jumpKey === 'USER_TASK_LIST_PAGE') {
        this.interPackage.evokeLightTaskDetailPage()
      }
      if (jumpKey === 'USER_CLIENT_OPEN_MINI_APP') {
        this.interPackage.evokeSkipToWechatMiniApp(paramData[0].value)
      }
      if (jumpKey === 'USER_INTEGRAL_MALL_GOODS_PAGE') {
        this.interPackage.evokeInterMallGoodsPage(paramData[0].value)
      }
      if (jumpKey === 'USER_PART_JOB_TAG_PAGE') {
        this.jumplabel(paramData[0].value)
      }
    },
    jumplabel(labelId) {
      this.interPackage.evokeLabelListPage(labelId)
    },
    getPageData() {
      this.$axios.post('/activityCenter/new/term/data').then(res => {
        if (res.success) {
          const { banner, blocks, draw, userCnt, processImg } = res.data
          this.firstImage = banner.image
          this.jumpKey = banner.jumpKey
          this.param = banner.param
          this.processImg = banner.processImg
          this.awardBox = blocks
          this.userCnt = userCnt //参与人数
          this.draw = draw //开奖状态 false 未开状态 true 已开
          let dateLine = new Date(res.data.drawTime)
          this.dateText = (dateLine.getMonth() + 1) + '月' + dateLine.getDate() + '日 ' + dateLine.getHours() + ':' + dateLine.getMinutes() + '0'
          this.shareUserId = res.data.userId
          // let batchTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        } else {
          console.log('fail', res)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    showrules() {
      this.dialogType = 1
      this.visible = true
      // this.stopMove()
    },
    getRaffResult() {
      this.$axios.post('/activityCenter/new/term/raffle/result').then(res => {
        if (res.success) {
          this.raffleCode = res.data.raffleCode
          this.resultName = res.data.name
          this.headImg = res.data.headImg || 'https://qiniu-image.qtshe.com/1575466455774_684.png-300'
          if (res.data.win) {
            // 中奖
            this.dialogType = 4
          } else {
            this.dialogType = 5
          }
          this.visible = true
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(e => {
        toast(res.msg || '服务器错误，请稍后再试')
      })
    },
    showMycodeDialog() {
      this.dialogType = 7
      this.visible = true
    },
    showMycode(token) {
      let sendData = {
        token: token
      }
      this.$axios.post('/activityCenter/new/term/code/list', sendData).then(res => {
        if (res.success) {
          let arrayList = Array.from({length: 8}, () => ({code: ''}))
          this.codeArray = Object.assign(arrayList, res.data).splice(0, 8)
          this.showPage = true
          if (res.data.length > 0) {
            //抽过奖
            this.hasAlreadyGet = true
          }
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(e => {
        toast(res.msg || '服务器错误，请稍后再试')
      })
    },
    getCode(raffleType) {
      let reqData = {
        raffleType: raffleType,
        shareUserId: this.shareUserId || ''
      }
      this.$axios.post('/activityCenter/new/term/code/raffle', reqData).then(res => {
        if (res.success) {
          if (this.islogin) {
            if (raffleType === 0) {
              this.freeCode = res.data
              this.dialogType = 2
              this.visible = true
            } else {
              this.freeCode = res.data
              this.dialogType = 3
              this.visible = true
            }
          }
          // let batchTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        } else {
          //抽过的话 显示弹窗7 我的码
          this.dialogType = 7
          this.visible = true
          // toast(res.msg || '服务器错误，请稍后再试')
        }
        setTimeout(() => {
          this.showMycode()
          this.getPageData()
        }, 100)
      }).catch(e => {
        this.getPageData()
        toast(res.msg || '服务器错误，请稍后再试')
      })
    },
    closeDialog() {
      this.visible = false
    },
    isAliPay() {
      //判断ua 匹配 micromessenger即为自付宝环境
      var ua = navigator.userAgent.toLowerCase()
      if (ua.indexOf('Alipayclient') > 0) {
        return true
      } else {
        return false
      }
    },
    iswechat() {
      //判断ua 匹配 micromessenger即为微信浏览器
      var ua = navigator.userAgent.toLowerCase()
      if (/micromessenger/.test(ua)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
