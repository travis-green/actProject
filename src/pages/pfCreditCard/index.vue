/**
* @description: 浦发信用卡活动
* @author: zengtiansheng
* @update: 2017/11/7
*/
<style lang='less' scoped>
  @dd: 300rem;
  .img-t {
    width: 100%;
    vertical-align: middle;
    margin-top: -1px;
  }

  .niu-niu {
    position: relative;
    top: 0;
    left: 0;
    .btn-box {
      position: absolute;
      left: 564/@dd;
      top: 1315/@dd;
      width: 352/@dd;
      height: 157/@dd;
    }
    .btn-img {
      position: absolute;
    }
  }
  .dialog-box{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.35);
    .dialog-content{
      position: absolute;
      top:-10%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 805/@dd;
      height: 825/@dd;
      .btn-close{
        position: absolute;
        top: 180/@dd;
        right: 40/@dd;
        width: 100/@dd;
        height: 100/@dd;
      }
      .btn-apply{
        position: absolute;
        bottom: 35/@dd;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 500/@dd;
        height: 150/@dd;
      }
    }
  }
</style>
<template>
  <section>
    <div class="niu-niu">
      <img class="img-t" src="https://qiniu-image.qtshe.com//act/pfcreditcard/1510137940/img_1.gif" alt="img_1">
      <div class="btn-box">
        <img class="img-t btn-img"  v-if='applyStatusFlag' src="https://qiniu-image.qtshe.com//act/pfcreditcard/1510137940/btn_rj.png" alt="btn_rj">
        <img class="img-t btn-img" @click="showMessageBox" src="https://qiniu-image.qtshe.com//act/pfcreditcard/1510137940/btn_act.png" alt="btn_act" v-else>
      </div>
    </div>
    <img class="img-t" src="https://qiniu-image.qtshe.com//act/pfcreditcard/1510137940/img_2.jpg" alt="img_2">
    <img class="img-t" src="https://qiniu-image.qtshe.com//act/pfcreditcard/1510137940/img_3_btn.jpg" @click="evokeLightTaskDetailPage" alt="img_3_btn">
    <img class="img-t" src="https://qiniu-image.qtshe.com//act/pfcreditcard/1510137940/img_4.jpg" alt="img_4">
    <div class="dialog-box" v-show="dialogShowFlag">
      <div class="dialog-content">
        <img class="img-t dialog-img" src="https://qiniu-image.qtshe.com//act/pfcreditcard/1510137943/dialog_img.png" alt="dialog_img">
        <div class="btn-close" @click="dialogShowFlag = false"></div>
        <div class="btn-apply" @click="evokeLightTaskDetailPage"></div>
      </div>
    </div>
  </section>
</template>
<script>
  import toast from 'toast'
  import util from 'util'
  import setWechatTitle from 'setWechatTitle'

  export default {
    data() {
      return {
        interPackage: {},
        homeToken: '',
        applyStatusFlag: false,
        dialogShowFlag: false,
        obj_resData: {
          apply: true,
          count: '',
          rank: 1,
          receiveRed: 0
        }
      }
    },
    created() {
      this.interPackage = util.getCurrentVersionInteractivePackage()
    },
    mounted() {
      setWechatTitle('领信用卡送好礼')
      this.interPackage.initShareInfo({
        title: '【青团社】福利扭蛋三重好礼随机送',
        desc: '限量1000位人人都有奖，最低5元，快来抢~',
        imgUrl: 'https://qiniu-image.qtshe.com//act/pfcreditcard/1510137942/share_img22.jpg'
      })
      this.getToken().then(() => {
        this.checkStatus()
      })
    },
    methods: {
      async getToken() {
        const tokenObj = await this.interPackage.getAppInfo()
        this.homeToken = tokenObj.token
      },
      async checkStatus() {
        let postData = {
          token: this.homeToken,
          type: 4
        }
        this.$axios.post('/accountCenter/integral/get/activity/applyStatus', postData).then((res) => {
          if (res.success) {
            this.applyStatusFlag = res.data.apply
          } else {
            toast(res.msg)
          }
        })
      },
      async applyAct() {
        const postData = {
          token: this.homeToken,
          type: 4
        }
        try {
          const res = await this.$axios.post('/accountCenter/integral/saveAccountActivityIntegral', postData)
          if (res.success) {
            this.dialogShowFlag = true
            this.applyStatusFlag = true
          } else {
            toast(res.msg)
          }
        } catch (err) {
          toast('网络错误')
        }
      },
      showMessageBox() {
        const _this = this
        if (this.homeToken) {
          if (!this.applyStatusFlag) {
            this.applyAct()
          }
        } else {
          this.interPackage.evokeLoginPage(obj => {
            if (obj.token) {
              _this.homeToken = obj.token
              _this.checkStatus()
            }
          })
        }
      },
      evokeLightTaskDetailPage() {
        let taks = ''
        if (window.g_info.env === 'testing') {
          taks = 406
        } else {
          taks = 925
        }
        this.interPackage.evokeLightTaskDetailPage(taks)
      }
    }
  }
</script>
