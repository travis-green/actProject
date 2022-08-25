<template>
  <section class="section">
    <div class="form">
      <div class="form-item">
        <div class="label">姓名</div>
        <input class="input-content" placeholder="请填写姓名" v-model="formData.name">
      </div>
      <div class="form-item form-item-radio">
        <div class="label label-radio">性别</div>
        <label class="span-label-radio">
          <input type="radio" :value="1" v-model="formData.sex">
          <span class="span-radio" :class="{'span-radio-act': formData.sex===1}">
            <svg v-if="formData.sex===1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm-42.7 318.9L106.7 260.3l29.9-29.9 76.8 76.8 162.1-162.1 29.9 29.9-192.1 191.9z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"/></svg>
            <span class="span-radio-text">男</span>
          </span>
        </label>
        <label class="span-label-radio">
          <input type="radio" :value="2" v-model="formData.sex">
          <span class="span-radio" :class="{'span-radio-act': formData.sex===2}">
            <svg v-if="formData.sex===2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm-42.7 318.9L106.7 260.3l29.9-29.9 76.8 76.8 162.1-162.1 29.9 29.9-192.1 191.9z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"/></svg>
            <span class="span-radio-text">女</span>
          </span>
        </label>
      </div>
      <div class="form-item">
        <div class="label">学校</div>
        <input class="input-content" placeholder="请填写你所在的学校" v-model="formData.shcool">
      </div>
      <div class="form-item">
        <div class="label">学历</div>
        <input class="input-content" placeholder="请填写学历" v-model="formData.education">
      </div>
    </div>
    <div class="verify-msg">{{verifyMsg}}</div>
    <div class="alert-text">完善以上信息即有资格成为团长</div>
    <div class="btn-content" @click="btnNextClick">提交</div>
  </section>
</template>
<script>
import { Toast, Indicator, MessageBox } from 'mint-ui'

export default {
  data() {
    return {
      isReadonly: 'readonly',
      formData: {
        name: '',
        sex: 1,
        shcool: '',
        education: ''
      },
      ruleForm: {
        name: { msg: '请填写姓名' },
        shcool: { msg: '请填写学校' },
        education: { msg: '请填写学历' }
      },
      verifyMsg: ''
    }
  },
  mounted() {
    // this.getData()
  },
  methods: {
    async getData() {
      try {
        Indicator.open({ spinnerType: 'fading-circle' })
        const res = await this.$axios.post(API.USER_BANK_INIT)
        Indicator.close()
        if (res.success) {
          this.formData = res.data
          if (!(res.data.idCardCore && res.data.name)) {
            this.isReadonly = false
          }
          // 判断是否已经验证通过 0表示未通过 1表示已经通过
          if (res.data.status === 1) {
            this.redirectZH()
          }
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
      this.verifyMsg = ''
      return true
    }
  }
}
</script>
<style lang="less" scoped>
@dd: 100rem;
.section {
	width: 100%;
	height: 100%;
	padding-top: 10 / @dd;
	color: #888888;
	font-size: 14 / @dd;
}
.input-content {
	width: 100%;
	outline: none;
	border: none;
	font-size: 14 / @dd;
	color: #888888;
}
.form {
	background: #ffffff;
	padding: 0 15 / @dd;
	.form-item {
		display: flex;
		justify-content: flex-start;
		align-content: center;
		padding: 13 / @dd 0;
		border-bottom: 1px solid #ebebeb;
		.label {
			width: 100 / @dd;
		}
	}
}
.alert-text {
  padding: 15 / @dd 30 / @dd 0;
  text-align: center;
  color: #00CC88;
}
.verify-msg {
	height: 30 / @dd;
	margin-top: 30 / @dd;
	font-size: 14 / @dd;
	text-align: center;
	color: #ff8564;
}
.btn-content {
	width: 315 / @dd;
	height: 44 / @dd;
  margin: 5 / @dd auto 0;
	text-align: center;
	line-height: 44 / @dd;
	color: #ffffff;
	border-radius: 40/ @dd;
	background: #00CC88;
}
.bank-list {
	position: fixed;
	top: 200 / @dd;
	left: 0;
	right: 0;
	width: 2.25rem;
	max-height: 3rem;
	margin: 0 auto;
	overflow: scroll;
	box-shadow: -2.5px 0 4px rgba(0, 0, 0, 0.125), 0 -2.5px 4px rgba(0, 0, 0, 0.125), 0 2.5px 4px rgba(0, 0, 0, 0.125),
		2.5px 0 5px rgba(0, 0, 0, 0.125);
	z-index: 20;
	border-radius: 0.05rem;
	ul {
		display: block;
		text-align: left;
		padding: 0 0.15rem;
		background: #fff;
		li {
			height: 0.45rem;
			line-height: 0.45rem;
			list-style: none;
			font-size: 0.14rem;
			color: #666;
			border-bottom: 1px solid #ddd;
			&:last-child {
				border: none;
			}
		}
	}
}
.label-radio{
  width: 0.75rem !important;
}
.form-item-radio{
  padding: 0.14rem 0 0.1rem !important;
}
.span-label-radio{
  margin-right: 20/@dd;
}
.span-radio{
  margin-right: 5/@dd;
  svg{
    width: 22/@dd;
    height: 22/@dd;
    fill:#CCCCCC;
    border: 1px dotted #ebebeb;
    border-radius: 4/@dd;
  }
  .span-radio-text{
    float: right;
  }
}
.span-radio-act{
  svg{
    fill:#00CC88;
  }
}
</style>
/**
* @desc: 完善信息
* @author: zengtiansheng
*/
