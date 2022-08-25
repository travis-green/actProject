<template>
  <section class="section">
    <img class="img-bg" src="https://qiniu-image.qtshe.com/act/gmo/20180821/gmo_imgbg.png" alt="">
    <div class="form-content">
      <div class="form-content-pre" :class="{'form-content-pre-act': contentNextFlag}">
        <div class="form">
          <div class="form-item">
            <img class="label-icon" src="./svg/icon-name.svg" alt="">
            <input class="input-content" placeholder="请输入姓名" v-model="formData.name">
          </div>
          <div class="form-item">
            <img class="label-icon" src="./svg/icon-sex.svg" alt="">
            <div class="form-item-radio">
              <div class="span-radio" :class="{'span-radio-act': formData.sex==='MALE'}" @click="btnSexClick('MALE')">
                <span class="span-radio-icon"></span>
                <span class="span-radio-text">男</span>
              </div>
              <div class="span-radio" :class="{'span-radio-act': formData.sex==='FEMALE'}" @click="btnSexClick('FEMALE')">
                <span class="span-radio-icon"></span>
                <span class="span-radio-text">女</span>
              </div>
            </div>
          </div>
          <div class="form-item">
            <img class="label-icon" src="./svg/icon-date.svg" alt="">
            <span class="input-content" @click="openPicker">{{pickerData||'选择出生日期'}}<img class="img-icon" src="https://qiniu-image.qtshe.com/qtBao/png/right_arrow_qtb.png" alt=""></span>
          </div>
          <div class="form-item">
            <img class="label-icon" src="./svg/icon-city.svg" alt="">
            <span class="input-content" @click="btnCitySelectClick">{{formData.townName || '选择城市'}}<img class="img-icon" src="https://qiniu-image.qtshe.com/qtBao/png/right_arrow_qtb.png" alt=""></span>
          </div>
        </div>
        <div class="verify-msg">{{verifyMsg}}</div>
        <div class="alert-msg">请认真填写资料，一旦填写后，年龄和性别将不能修改。</div>
        <div class="btn-submit" @click="btnNextClick">提交</div>
      </div>
      <div class="form-content-nex" :class="{'form-content-nex-act': contentNextFlag}">
        <div class="sold-out" v-if="soldOutFlag">
          问卷已经用完
        </div>
        <div class="content-text" v-else>
          您即将跳转到GMO服务完成调查问卷，届时将您的姓名、性别、生日和所在城市提供给GMO以便完成调查问卷。
        </div>
        <div class="btn-submit" v-if="!soldOutFlag" @click.stop="btnSubmitClick">点击确认</div>
      </div>
    </div>
    <datetime-picker
      ref="picker"
      v-model="defalutPickerValue"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="pickerConfirmClick"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
    </datetime-picker>
  </section>
</template>
<script>
import { Toast, Indicator, MessageBox, DatetimePicker } from 'mint-ui'
import util from 'util'
import getLocation from 'lib/getLocation'
import setWechatTitle from 'setWechatTitle'

const LIMIT_MIX_YEAR = 15 // 15岁以上才能进行调查问卷

export default {
  components: {
    DatetimePicker
  },
  data() {
    return {
      jumpUrl: '',
      defalutPickerValue: `${new Date().getFullYear() - 20}-01-01`,
      pickerValue: '',
      token: '',
      verifyMsg: '',
      contentNextFlag: true,
      soldOutFlag: false, // 是否已经下架
      startDate: new Date(new Date().getFullYear() - 68, 0, 1),
      endDate: new Date(new Date().getFullYear() - LIMIT_MIX_YEAR, 11, 31), // 15岁以上才能进行调查问卷
      formData: {
        name: '',
        sex: 'MALE',
        birthday: '',
        townName: '',
        townId: ''
      },
      ruleForm: {
        name: { msg: '请输入姓名' },
        birthday: { msg: '请选择出生日期' },
        townName: { msg: '请选择城市' }
      }
    }
  },
  computed: {
    pickerData() {
      if (this.pickerValue) {
        const birthday = util.dateFormat(this.pickerValue, 'yyyy-MM-dd')
        this.formData.birthday = birthday
        return birthday
      } else {
        return this.formData.birthday
      }
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    setWechatTitle('在线问卷调查')
    this._init()
    this.initShareInfo()
  },
  methods: {
    async _init() {
      let loginInfo = await this.interPackage.getAppInfo()
      if (!loginInfo || !loginInfo.token) {
        loginInfo = await this.interPackage.evokeLoginPage()
      }
      this.token = loginInfo.token
      this.getInformation()
    },
    async getInformation() {
      Indicator.open({ spinnerType: 'fading-circle' })
      try {
        const search = window.location.search
        if (search.indexOf('_selecttown=true') < 0) {
          await getLocation.init()
        }
      } catch (error) {
        console.log('定位信息出错', error)
      }
      try {
        const _GMO_FORM_DATA = util.getLocalStorage('_GMO_FORM_DATA')
        const res = await this.$axios.post('/thirdCenter/gmo/query/user/info') // 用户信息回填
        Indicator.close()
        if (res.success) {
          const {birthday, name, sex, townId, moneyFlag} = res.data
          this.formData.townId = util.getCookie('townId') || 0
          this.formData.townName = util.getCookie('townName') || ''
          this.formData.name = _GMO_FORM_DATA.name || name
          this.formData.sex = _GMO_FORM_DATA.sex || sex || 'MALE'
          this.formData.birthday = _GMO_FORM_DATA.birthday || birthday
          this.jumpUrl = res.data.jumpUrl
          util.setLocalStorage('_GMO_FORM_DATA', {})
          // 活动下架
          if (!moneyFlag) {
            this.contentNextFlag = true
            this.soldOutFlag = true
            return
          }
          // 信息不完善
          if (!(birthday && name && sex && townId)) {
            this.contentNextFlag = false
            return
          }
          // 城市信息不匹配
          if (parseInt(this.formData.townId) !== parseInt(townId)) {
            this.contentNextFlag = false
            return
          }
          // 有下一次进来有跳转链接
          if (!res.data.jumpUrl) {
            this.contentNextFlag = false
          }
          // 有下一次进来有跳转链接
          if (res.data.jumpUrl) {
            this.goGmoLink(res.data.jumpUrl, 2)
          }
        }
      } catch (error) {
        console.log(error)
        Indicator.close()
      }
    },
    async submitData() {
      try {
        Indicator.open({ spinnerType: 'fading-circle' })
        const res = await this.$axios.post('/thirdCenter/gmo/update/user/resume/gmo', this.formData) //用户信息修改
        Indicator.close()
        if (res.success) {
          this.contentNextFlag = true
        } else {
          Toast(res.msg || '服务器错误，请稍后重试')
        }
      } catch (error) {
        Toast('网络错误，请稍后重试')
        console.log(error)
        Indicator.close()
      }
    },
    btnNextClick() {
      const isVerifyForm = this.verifyForm()
      if (!isVerifyForm) {
        return
      }
      this.submitData()
    },
    async btnSubmitClick() {
      const {name, sex, birthday, townId} = this.formData
      if (!(name && sex && birthday && townId)) {
        Toast('请先完善用户信息')
        this.contentNextFlag = false
        return
      }
      try {
        Indicator.open({ spinnerType: 'fading-circle' })
        const res = await this.$axios.post('/thirdCenter/gmo/jump/confirm', this.formData) //获取第三方连接
        Indicator.close()
        if (res.success) {
          this.jumpUrl = res.data.jumpUrl
          this.goGmoLink(res.data.jumpUrl, 1)
        } else {
          Toast(res.msg || '服务器错误，请稍后重试')
        }
      } catch (error) {
        Toast('网络错误，请稍后重试')
        console.log(error)
        Indicator.close()
      }
    },
    async goGmoLink(jumpUrl, type) {
      Indicator.open({ spinnerType: 'fading-circle' })
      try {
        const res = await this.$axios.post('/thirdCenter/gmo/jump/record', {type, url: jumpUrl}) //跳转第三方
        Indicator.close()
        if (res.success) {
          window.location.replace(jumpUrl)
        } else {
          Toast(res.msg || '服务器错误，请稍后重试')
        }
      } catch (error) {
        Toast('网络错误，请稍后重试')
        console.log(error)
        Indicator.close()
      }
    },
    verifyForm() {
      const keyNames = Object.keys(this.formData)
      for (const item of keyNames) {
        if (this.ruleForm[item]) {
          if (!this.formData[item]) {
            this.verifyMsg = this.ruleForm[item].msg
            return false
          }
        }
      }
      if (new Date().getFullYear() - new Date(this.formData.birthday).getFullYear() < LIMIT_MIX_YEAR) {
        this.verifyMsg = '15岁以上才能进行问卷调查'
        this.jumpUrl = ''
        return false
      }
      this.verifyMsg = ''
      return true
    },
    btnSexClick(val) {
      if (this.jumpUrl) {
        return
      }
      this.formData.sex = val
    },
    openPicker() {
      if (this.jumpUrl) {
        return
      }
      this.$refs.picker.open()
    },
    pickerConfirmClick(val) {
      this.pickerValue = val
    },
    btnCitySelectClick() {
      util.setLocalStorage('_GMO_FORM_DATA', this.formData)
      const envhref = {
        development: 'dev-',
        testing: 'test-',
        production: ''
      }
      window.location.replace(`https://${envhref[window.g_info.env]}m.qtshe.com/app/cityList?redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}?_selecttown=true`)
    },
    initShareInfo() {
      this.interPackage.initShareInfo({
        title: '在线问卷调查',
        desc: '点点手指即可',
        imgUrl: 'https://qiniu-image.qtshe.com/act/gmo/20180821/gmo_logo.png'
      })
    }
  }
}
</script>
<style lang="less" scoped>
@dd: 100rem;

.section{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
}
.img-bg{
  width: 100%;
}
.form-content{
  position: absolute;
  top: 148/@dd;
  left: 0;
  right: 0;
  width: 319/@dd;
  height: 430/@dd;
  margin: 0 auto;
  padding: 18/@dd 0 57/@dd;
  background: #ffffff;
  box-shadow: 0 0 10/@dd rgba(0,0,0,0.1);
  border-radius: 6/@dd;
  overflow: hidden;
}
.form-content-pre{
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: all .5s ease-in-out;
}
.form-content-pre-act{
  opacity: 0.4;
}
.form-content-nex{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  transition: all .5s ease-in-out;
  transform: translate(100%,0);
  .content-text{
    padding: 30/@dd;
    font-size: 14 / @dd;
	  color: #888888;
  }
  .sold-out{
    padding: 90/@dd;
    font-size: 14 / @dd;
    color: #888888;
    text-align: center;
  }
}
.form-content-nex-act{
  transform: translate(0,0);
}
.form{
  .form-item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 265/@dd;
    height: 46/@dd;
    margin: 10/@dd auto 0;
    border: 1px solid #E7E7E7;
    border-radius: 2/@dd;
    .label-icon{
      width: 20/@dd;
      height: 23/@dd;
      margin: 0 10/@dd;
    }
    .input-content{
      display: inline-block;
      margin-right: 13/@dd;
      text-align: right;
      .img-icon{
        width: 5/@dd;
        height: 8/@dd;
        margin-left: 4/@dd;
      }
    }
    .form-item-radio{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 13/@dd;
      color: #888888;
      font-size: 14 / @dd;
    }
  }
}
.verify-msg {
	height: 20 / @dd;
	margin-top: 17 / @dd;
	font-size: 14 / @dd;
	text-align: center;
	color: #ff8564;
}
.alert-msg{
  width: 265/@dd;
  font-size: 14 / @dd;
  margin: 20/@dd auto 0;
  text-align: center;
  color: #888888;
}
.btn-submit{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40/@dd;
  width: 265/@dd;
  height: 46/@dd;
  margin: auto;
  border-radius: 4/@dd;
  font-size: 18/@dd;
  color: #ffffff;
  line-height: 46/@dd;
  text-align: center;
  background: #00ECA4;
}
.input-content {
	width: 100%;
	outline: none;
	border: none;
	font-size: 14 / @dd;
	color: #888888;
}
.span-label-radio{
  margin-top: -20/@dd;
}
.span-radio{
  margin-right: 10/@dd;
  .span-radio-icon{
    display: inline-block;
    width: 14/@dd;
    height: 14/@dd;
    border: 2/@dd solid #ebebeb;
    background: #ffffff;
    border-radius: 20/@dd;
    vertical-align: -2/@dd;
  }
  .span-radio-text{
    float: right;
  }
}
.span-radio-act{
  .span-radio-icon{
    border: 2/@dd solid #00C48C;
    background: #00ECA4;
  }
}
</style>
/**
* @desc: GMO 问卷调查
* @author: zengtiansheng
*/
