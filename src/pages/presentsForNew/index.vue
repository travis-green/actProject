/**
* @description: 浙江实习平台新人有礼
* @author: ruanqingqiang
* @update: 2018/5/30
*/
<style lang='less' scoped>
 .container{
     background: url(https://qiniu-image.qtshe.com/20180531_newbg.jpg) no-repeat center top;
     background-size: 100% 100%;
     min-height: 16.67rem;
     padding-top: 4.65rem;
     .form-wrap{
         background: url(https://qiniu-image.qtshe.com/20150530_blank.png) no-repeat center top;
         width: 2.54rem;
         height: 2.55rem;
         margin: 0 auto 0.3rem;
         background-size: 100% 100%;
         padding-top: 0.37rem;
         .form-main{
             width: 1.94rem;
             margin: 0 auto;
             input{
                 outline: none;
                 border: 1px solid #3264dc;
                 width: 100%;
                 height: 0.29rem;
                 margin-bottom: 0.18rem;
                 padding-left: 0.13rem;
             }
             .submit-button{
                 background: url(https://qiniu-image.qtshe.com/20180530_button.png) no-repeat;
                 background-size: 100% 100%;
                 width: 1.66rem;
                 height: 0.31rem;
                 margin: 0 auto;
                 text-align: center;
                 color: #fff;
                 font-size: 0.13rem;
                 line-height: 0.31rem;
             }
         }
     }
     .content-wrap{
        width: 3.07rem;
        margin: 0 auto;
        padding-left: 0.16rem;
        .title{
            height: 0.16rem;
            line-height: 0.16rem;
            color: #fff;
            font-size: 0.13rem;
            font-weight: bold;
        }
        .desc{
            margin-top: 0.03rem;
            li{
                line-height: 0.16rem;
                font-size: 0.1rem;
                color: #fff;
            }
        }
     }
     .banner{
         margin-top: 0.05rem;
     }
     .footer{
         margin-top: 0.5rem;
         height: 0.18rem;
         line-height: 0.18rem;
         text-align: center;
         font-size: 0.08rem;
         color: #fff;
     }
     .submit-content{
         padding-top: 0.25rem;
         p{
            color: #3265dc;
            font-size: 0.14rem;
            height: 0.27rem;
            line-height: 0.27rem;
            text-align: center;
         }
     }
 }
</style>
<template>
  <div class="container">
      <div class="form-wrap">
          <div class="form-main" v-if="hasSubmit === false">
              <input type="text" placeholder="请输入企业名称" v-model="form.companyName" maxlength="20"/>
              <input type="text" placeholder="请输入联系人" v-model="form.name" maxlength="5"/>
              <input type="tel" placeholder="请输入联系人手机号码" v-model="form.mobile" style="margin-bottom:0.25rem"  maxlength="11"/>
              <div class="submit-button" @click="submit">提交</div>
          </div>
          <div class="submit-content" v-else>
            <p>您的资料已成功提交，</p>
            <p>我们的招聘顾问</p>
            <p>会在1个工作日内联系您，</p>
            <p>请保持手机畅通。</p>
          </div>
      </div>
      <div class="content-wrap">
          <div class="title">活动规则</div>
          <ul class="desc">
              <li>1. 仅限“<b>浙江大学生实习平台</b>”新用户免费领取</li>
              <li>2. 提交信息成功后领取实习招聘免费名额，有效期限一年</li>
              <li>3. 活动时间：<b>2018.5.29～2018.6.29</b></li>
          </ul>
          <div class="title" style="margin-top:0.34rem">平台优势</div>
          <ul class="desc">
              <li>1. 360万优质高校大学生，精准匹配实习人员；</li>
              <li>2. 客服全程一对一跟踪，24小时内极速响应；</li>
              <li>3. 一键发布实习岗位，实时沟通，批量处理报名简历</li>
              <li>4. 大型连锁企业需求定制，多层级账号数据统计、同时实习生薪资批量打款。</li>
          </ul>
          <div class="title" style="margin-top:0.26rem">关于青团社</div>
          <ul class="desc">
              <li>青团社成立于2013年7月，是由杭州弧途科技有限公司倾力打造的全国首家为大学生提供免费兼职服务的平台。青团社成立之初，是一家具有公益型的社团组织，致力于帮助大学生解决与兼职相关的问题和困扰，希望能够为大学生提供优质的、免费的、安全的大学生兼职服务平台，现公司秉承“一次兼职，一次成长”的理念，致力于帮助大学生找到更好的兼职，获得更大的成长。</li>
          </ul>
          <div class="title" style="margin-top:0.43rem">关于浙江人才市场</div>
          <ul class="desc">
              <li>浙江省人才市场成立于1993年3月，自成立以来，省人才市场在省委、省政府和厅党组正确领导下，在全体员工的共同努力下，发展非常迅速，各项工作取得了明显成效，目前己经成为我省人才资源配置的重要平台。1999年6月，我们创办了浙江人才网。</li>
          </ul>
          <div class="title" style="margin-top:0.42rem">活动介绍</div>
          <ul class="desc">
              <li>2018年5月月24，在浙江副省长王文序，浙大党委副书记郑强，海亮集团党委书记冯亚丽，赛伯乐总裁陈斌分别代表政府、高校、企业、资本的见证下，由青团社全权开发运营的“浙江大学生就业实习平台”正式发布，期待平台能帮助浙江大学生更好的参加实习，也帮助浙江吸引更多省外大学生</li>
          </ul>
          <img src="https://qiniu-image.qtshe.com/%E6%96%B0%E4%BA%BA%E6%9C%89%E7%A4%BCh51_10.jpg" width="100%" class="banner"/>
          <ul class="desc">
              <li>为全面推进大学生就业实习平台，现赠送新用户商家免费实习招聘福利，半年内您可以免费在平台发布岗位，完成您的招聘需求，同时平台还为您提供专业的技术与客服服务团队，在您使用过程中遇到任何问题都可快速得到解决。</li>
          </ul>
      </div>
      <div class="footer">*活动最终解释权归青团社所有</div>
  </div>
</template>
<script>
  import util from 'util'
  import toast from 'toast'
  import { Indicator } from 'mint-ui'
  import setWechatTitle from 'setWechatTitle'
  export default {
    data() {
      return {
        hasSubmit: false,
        error: '',
        form: {
          companyName: '',
          mobile: '',
          name: '',
          type: 4
        }
      }
    },
    created() {
      this.interPackage = util.getCurrentVersionInteractivePackage()
    },
    mounted() {
      setWechatTitle('立享一年免费使用名额')
      this.sharebanner()
    },
    methods: {
      submit() {
        if (!util.trimStr(this.form.companyName)) {
          toast('请填写企业名称')
          return false
        }
        if (!util.trimStr(this.form.name)) {
          toast('请填写联系人')
          return false
        }
        if (!util.trimStr(this.form.mobile)) {
          toast('请输入联系人手机号码')
          return false
        }
        if (!/^1[0-9]{10}$/.test(this.form.mobile)) {
          toast('请输入正确的手机号码')
          return false
        }
        Indicator.open('提交中...')
        this.$axios.post('/accountCenter/activity/company/record', this.form).then((data) => {
          if (data.success) {
            Indicator.close()
            this.hasSubmit = true
            toast('提交成功!')
          } else {
            Indicator.close()
            toast(data.errMsg || data.msg || '提交失败，请稍后重试')
          }
        }, () => {
          Indicator.close()
          toast('服务器错误，请稍后重试')
        })
      },
      sharebanner() {
        // this.interPackage = util.getCurrentVersionInteractivePackage()
      // 初始化自定义分享内容
        this.interPackage.initShareInfo({
          title: '浙江大学生就业实习平台，一年免费使用名额限量发放中，快来领取吧！',
          desc: '360万优质高校大学生精准匹配实习人员，让您的招聘快人一步！',
          imgUrl: 'https://qiniu-image.qtshe.com/20180530_logo.png'
        })
      }
    }
  }
</script>
