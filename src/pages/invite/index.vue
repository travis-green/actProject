<style lang="less" scoped>
.contain {
  position: absolute;
  width: 100%;
  min-height: 100vh;
}

.inviteBoxItem {
  margin-top: 2.9rem;
}

.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-image: url(https://qiniu-image.qtshe.com/invitePerson/topImage_togetherNew.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: #f95c4b;
}

.bottomBtnpd {
  padding-bottom: 0.76rem;
}

.blocktext {
  display: block;
}

.ruleBox {
  margin-top: 0.24rem;
  padding-bottom: 0.36rem;
}

.ruleTitle {
  font-size: 0.16rem;
  font-weight: 500;
  color: #fff5a9;
  text-align: center;
  margin-bottom: 0.1rem;
}

.ruleDes {
  padding: 0 0.24rem;
  margin-bottom: 0.1rem;
  font-size: 0.12rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.16rem;
  opacity: 0.82;
}

.donateContent {
    width:3.34rem;
    background:#fff;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius:0.06rem;
    border:0.02rem solid #f5bd35;
    padding-bottom: 0.16rem;
}

.reflect {
    font-size:0.14rem;
    font-family:PingFang SC;
    font-weight:400;
     color:#db7007;
    text-align: center;
    margin-top: 0.1rem;
}

.titlePd {
    padding:0 0.24rem;
}

.padding-20 {
    padding: 0 0.2rem;
}

.getMoneyTopImg {
    display: block;
    margin: 0.16rem auto 0;
    width: 1.6rem;
}

.stepImg {
    width: 0.525rem;
}

.stepArrow {
    width: 0.1rem;
}

.stepBox {
    margin-top:0.075rem;
    display: flex;
}

.stepItem {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.stepText {
    flex:1; 
    font-size:0.14rem;
    font-family:PingFang SC;
    font-weight:400;
    text-align: center;
    color:#683E28;
    letter-spacing: 0.5px;
}

.stepText text {
    font-size:0.14rem;
    font-family:PingFang SC;
    font-weight:400;
    color:#E4544A;
}



.activity_shareBtn {
    width: 2.865rem;
    height: 0.475rem;
    margin:0.26rem auto 0;
    background: url(https://qiniu-image.qtshe.com/invitePerson/shareButton.png) center center;
    background-size: 100% 100%;
}

.myRecord {
    margin-top:0.3rem;
    font-size:0.14rem;
    font-family:PingFang SC;
    font-weight:500;
    color:#683E28;
}

.myRecord text {
    color:#E76854;
}

.invitedListBox {
    width:2.865rem;
    height:0.9rem;
    margin:0.085rem auto 0;
    background:rgba(245,245,245,1);
    border:1px solid rgba(224,224,224,1);
    border-radius:0.04rem;
    font-size:0.12rem;
    font-family:PingFang SC;
    font-weight:400;
    color:#B1B1B1;
    display: flex;
    justify-content: center;
    align-items: center;
}


.InviteListBox {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    overflow-x: scroll;
}

.InviteListBox::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.inviteListBox-bg {
    padding: 0 0.16rem;
    width: fit-content;
    display: flex;
    align-items: flex-end;
    background-repeat: no-repeat;
    background-size: 100% 0.02rem;
    background-position: 0.2rem 50%;
    box-sizing: border-box;
}
  
.inviteBox {
    margin-right: 0.12rem;
    flex-shrink: 0;
    overflow: hidden;
    display: inline-block;
    position: relative;
    z-index: 2;
}
  
  
  .inviteListnameImg {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #ffffff;
    border: 1px solid #e76854;
    border-radius: 50%;
    box-sizing: border-box;
    background-size: contain;
    background-position: center center;
  }
  
  .inviteListname {
    text-align: center;
    margin: 0.05rem auto 0;
    width: 0.48rem;
    font-size: 0.12rem;
    font-weight: 400;
    color: #B1B1B1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
<template>
  <div class="contain flex-center">
    <div class="inviteBoxItem">
      <div class="donateContent">
        <img
          class="getMoneyTopImg"
          src="https://qiniu-image.qtshe.com/invitePerson/howGetMoney.png"
        />
        <div class="stepBox titlePd">
          <div class="stepItem" v-for="(item, index) in stepPic" :key="index">
            <img
              :class="index === 1 || index === 3 ? 'stepArrow' : 'stepImg'"
              :src="item"
            />
          </div>
        </div>
        <div class="stepBox">
          <div class="stepText">
            分享活动
            <div>给您的好友</div>
          </div>
          <div class="stepText">
            好友点击链接
            <div>完成提现</div>
          </div>
          <div class="stepText">
            好友获得<span>{{ personGetMoney }}元</span>
            <div>
              您获得<span>{{ mineGetMoney }}元</span>
            </div>
          </div>
        </div>
        <div class="activity_shareBtn" @click="shareHandle"></div>
        <div class="titlePd myRecord padding-20">
          我的战绩：成功邀请<span>{{ myRecordPerson }}</span
          >人，获得奖励<span>{{ myRecordCount }}</span
          >元
        </div>
        <div>
          <div v-if="invitedCount.length === 0" class="invitedListBox">
            还没有完成任务哦，快去提醒他们吧～
          </div>
          <div v-else class="invitedListBox">
            <div class="InviteListBox">
              <div class="inviteListBox-bg">
                <div
                  class="inviteBox"
                  v-for="(item, index) in invitedCount"
                  :key="index"
                >
                  <div
                    class="inviteListnameImg"
                    :style="{backgroundImage: `url(${item.headImage})`}"
                  ></div>
                  <div class="inviteListname">{{ item.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reflect" @click="withdraw" v-if="myRecordPerson">立即提现 &gt;</div>
      </div>
    </div>
    <div class="ruleBox">
      <div class="ruleTitle">活动规则</div>
      <div class="ruleDes">
        1、规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则
      </div>
      <div class="ruleDes">
        2、规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则
      </div>
      <div class="ruleDes">
        3、规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则
      </div>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      personGetMoney: 4, //被邀请人获得X元
      mineGetMoney: 1, //邀请人获得X元
      myRecordPerson: 0, //邀请X人
      myRecordCount: 0, //成功获得X元
      invitedCount: [],
      stepPic: [
        'https://qiniu-image.qtshe.com/invitePerson/stepImg_1.png',
        'https://qiniu-image.qtshe.com/invitePerson/arrow.png',
        'https://qiniu-image.qtshe.com/invitePerson/stepImg_2.png',
        'https://qiniu-image.qtshe.com/invitePerson/arrow.png',
        'https://qiniu-image.qtshe.com/invitePerson/stepImg_3.png'
      ]
    }
  },
  methods: {
    getAppToken() {
      if (util.isAndroidApp() || util.isIosApp()) {
        this.interPackage.getAppInfo().then(data => {
          if (data.token) {
            util.setCookie('token', data.token)
            this.token = data.token
          }
          this.initData()
        })
      } else {
        if (util.getToken()) {
          this.token = util.getToken()
        }
        this.initData()
      }
    },
    initData() {
      this.$axios.post('/qtbUserCenter/qtb/slh/share/init').then(res => {
        if (res.success) {
          this.myRecordCount = res.data.successReward || 0
          this.myRecordPerson = res.data.successInvite || 0
          this.invitedCount = res.data.slhShareUsers || []
          this.shareUserId = res.data.shareUid || ''
        } else {
          toast(res.msg || '服务器错误，请稍后再试')
        }
      }).catch(e => {
        toast('服务器错误，请稍后再试')
      })
    },
    withdraw() {
      window.location.href = `${window.g_info.qtbao_domain}/app/index?token=${util.getToken()}`
    },
    shareHandle() {
      this.interPackage.evokeSharePanel({
        title: '邀请好友赚现金',
        desc: '送你4元现金，快来提现！还有更多现金和我一起赚吧！',
        link: window.location.origin + `/act/survey?shareUserId=${this.shareUserId}`,
        imgUrl: 'https://qiniu-image.qtshe.com/invitePerson/shareImage.png'
      })
    }
  },
  mounted() {
    this.getAppToken()
    this.interPackage.setNavTitle('有钱一起赚')
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
