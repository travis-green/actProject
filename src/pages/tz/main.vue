<template>
  <section class="section">
    <div id="J_header_content">
      <header class="header-content">
      <img class="img-shade" src="https://qiniu-image.qtshe.com/act/tz/0608/tzm-hearder-bg.png" alt="">
      <div class="user-content">
        <img class="header-logo" :src="resData.headerUrl || 'https://qiniu-image.qtshe.com/default-avatar20170707.png'" alt="">
        <div class="user-content-right">
          <span class="name">{{resData.name}}</span>
          <span class="tz-id">ID: {{resData.headIdShow}}</span>
        </div>
      </div>
      <div class="income-content">
        <div class="income total-income">
          <p class="total-money money">{{resData.totalIncome||'0.00'}}</p>
          <p class="span-text">累计收益(元)</p>
        </div>
        <div class="income">
          <p class="month-income money">{{resData.monthIncome||'0.00'}}</p>
          <p class="span-text">本月收益(元)</p>
        </div>
        <div class="income">
          <p class="money">{{resData.lastMonthIncome||'0.00'}}</p>
          <p class="span-text">上月收益(元)</p>
        </div>
      </div>
    </header>
    <div class="btn-content" :data-clipboard-text="shareLinkUrl" ref="copyUrlClick" @click="btnGoShareClick">立即招募团员</div>
    </div>
    <div class="tabs" :class="{'tab-fixed':tabFixedFlag}">
        <div class="tab-item" :class="{'tab-item-act': tabIndex === 0}" @click="btnTabClick(0)">
          <span class="span-icon span-icon1"></span>
          <span class="span-rules">奖励规则</span>
        </div>
        <div class="tab-item" :class="{'tab-item-act': tabIndex === 1}" @click="btnTabClick(1)">
          <span class="span-icon span-icon2"></span>
          <span class="span-rules">我的团员</span>
        </div>
      </div>
      <div id="J_tab_components" class="tab-components" :class="{'tab-components-fixed':tabFixedFlag}">
        <tab1 v-show="tabIndex === 0" :tabFixedFlag="tabFixedFlag"/>
        <tab2 v-show="tabIndex === 1" :tabFixedFlag="tabFixedFlag" :headId="resData.id"/>
      </div>
  </section>
</template>
<script>
  import toast from 'toast'
  import util from 'util'
  import Clipboard from 'src/lib/clipboard'
  import setWechatTitle from 'setWechatTitle'
  import tab1 from './components/tab1.vue'
  import tab2 from './components/tab2.vue'
  import API from './API.js'
  import {Indicator} from 'mint-ui'

  export default {
    components: {
      tab1,
      tab2
    },
    data() {
      return {
        token: '',
        tabIndex: 0,
        JHeaderContentHeight: '',
        shareLinkUrl: '',
        interPackage: '',
        tabFixedFlag: false,
        resData: {}
      }
    },
    created() {
      this.interPackage = util.getCurrentVersionInteractivePackage()
    },
    mounted() {
      setWechatTitle('我是团长')
      this._init()
      window.addEventListener('scroll', this.menu)
    },
    methods: {
      async _init() {
        let loginInfo = await this.interPackage.getAppInfo()
        if (!loginInfo || !loginInfo.token) {
          loginInfo = await this.interPackage.evokeLoginPage()
        }
        console.log(86, loginInfo)
        this.token = loginInfo.token
        await this.getData()
        util.onBuriedPoint('P8011001')
      },
      async getData() {
        try {
          Indicator.open()
          const res = await this.$axios.post(API.chiefInfo, {token: this.token})
          Indicator.close()
          console.log(96, res)
          if (res.success) {
            if (res.data) {
              this.resData = res.data
              this.initShareInfo()
            } else {
              // 不是团长跳团长招募页
              this.$router.replace({path: '/tz/recruit'})
            }
          } else {
            toast(res.msg || '服务器错误，请稍后重试')
          }
        } catch (error) {
          console.log(error)
          Indicator.close()
          toast('网络异常')
        }
      },
      btnTabClick(val) {
        this.tabIndex = val
      },
      btnGoShareClick() {
        util.onBuriedPoint('C8011002')
        if (util.isWeiXin()) {
          toast('请点击右上角分享')
          return
        }
        if (util.isIosApp() || util.isAndroidApp()) {
          this.evokeSharePanel()
          return
        }
        this.shareLinkUrl = `${window.location.origin}/act/tz/promotion?headId=${this.resData.id}`
        const $copyUrlClick = this.$refs.copyUrlClick
        const clipboard = new Clipboard($copyUrlClick)
        clipboard.on('success', function(e) {
          toast('分享链接复制成功')
        })
        clipboard.on('error', function(e) {
          toast('链接复制失败，请打开链接进行分享')
        })
      },
      initShareInfo() {
        this.interPackage.initShareInfo({
          title: '请你免费拿礼包，一起宅家赚',
          desc: '最高10元大礼包，24小时内可领',
          link: `${window.location.origin}/act/tz/promotion?headId=${this.resData.id}`,
          imgUrl: 'https://dn-qtshe.qbox.me/tz/2018/0611/tz-share-img.png'
        })
      },
      evokeSharePanel() {
        this.interPackage.evokeSharePanel({
          title: '请你免费拿礼包，一起宅家赚',
          desc: '最高10元大礼包，24小时内可领',
          link: `${window.location.origin}/act/tz/promotion?headId=${this.resData.id}`,
          imgUrl: 'https://dn-qtshe.qbox.me/tz/2018/0611/tz-share-img.png'
        })
      },
      menu() {
        this.JHeaderContentHeight = document.getElementById('J_header_content').clientHeight
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (scrollTop >= this.JHeaderContentHeight) {
          this.tabFixedFlag = true
        } else {
          this.tabFixedFlag = false
        }
      }
    }
  }
</script>
<style lang='less' scoped>
@dd: 100rem;
@dd2: 200rem;
.section{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #F3F4F5;
}
#J_header_content{
  padding-bottom: 27/@dd;
}
.header-content{
  width: 100%;
  height: 514/@dd2;
  background: url('https://qiniu-image.qtshe.com/act/tz/0608/tzm-header.png') no-repeat center;
  background-size: 100%;
}
.img-shade{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
}
.user-content{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 47/@dd 0 0 26/@dd;
  .header-logo{
    width: 56/@dd;
    height: 56/@dd;
    margin-right: 10/@dd;
    border: 4/@dd solid rgb(245, 194, 111);
    border-radius: 50/@dd;
  }
  .user-content-right{
    color: #ffffff;
    font-size: 16/@dd;
    span{
      display: block;
    }
    .name{
      font-weight: 600;
    }
  }
}
.income-content{
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top:30/@dd; 
  .income{
    width: 33.333%;
    text-align: center;
  }
  .total-money{
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
  .month-income{
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
  .money{
    color: #ffffff;
    font-size: 40/@dd;
    line-height: 1;
  }
  .span-text{
    margin-top: 20/@dd;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14/@dd;
  }
}
.btn-content{
  width: 300/@dd;
  height: 44/@dd;
  margin: 20/@dd auto 0;
  color: #ffffff;
  font-weight: 500;
  font-size: 16/@dd;
  text-align: center;
  line-height: 44/@dd;
  background:linear-gradient(90deg,rgba(49,220,205,1),rgba(30,205,185,1));
  box-shadow:0px 6px 6px 0px rgba(60,60,60,0.1);
  border-radius:22px;
}
.tabs{
    display: flex;
    justify-content: center;
    align-self: center;
    height: 50/@dd;
    padding: 0 16/@dd;
    background: #F3F4F5;
    .tab-item{
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 50/@dd;
      color: #9C9C9C;
      cursor: pointer;
    }
    .tab-item-act{
      background: #ffffff;
      color: #FB8C00;
      border-radius: 6/@dd 6/@dd 0 0;
      .span-icon1{
        background: url('https://qiniu-image.qtshe.com/act/tz/06011/img/tab1-icon-act.png') no-repeat center;
        background-size: 100%;
      }
      .span-icon2{
        background: url('https://qiniu-image.qtshe.com/act/tz/06011/img/tab2-icon-act.png') no-repeat center;
        background-size: 100%;
      }
    }
    .span-icon{
      display: inline-block;
      width: 18/@dd;
      height: 18/@dd;
      vertical-align: -3/@dd;
    }
    .span-icon1{
      background: url('https://qiniu-image.qtshe.com/act/tz/06011/img/tab1-icon-dis.png') no-repeat center;
      background-size: 100%;
    }
    .span-icon2{
      background: url('https://qiniu-image.qtshe.com/act/tz/06011/img/tab2-icon-dis.png') no-repeat center;
      background-size: 100%;
    }
    .span-rules{
      font-size: 16/@dd;
      font-weight: 500;
      margin-left: 6/@dd;
    }
  }
  .tab-fixed{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
  }
  .tab-components{
    padding: 0 16/@dd 16/@dd;
    background: #F3F4F5;
  }
  .tab-components-fixed{
    padding-top: 50/@dd;
  }
</style>
