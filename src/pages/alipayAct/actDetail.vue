<style lang="less" scoped>
.act-detail {
  width: 100%;
  background: #fff;
  .head {
    width: 100%;
    img {
      display: block;
      width: 100%;
    }
  }
  .container {
    width: 100%;
    .top-selection {
      position: relative;
      width: 100%;
      .block {
        display: inline-block;
        padding: .15rem 0;
        width: calc(100% / 3);
        text-align: center;
        background: #e4efff;
        span {
          display: block;
          font-size: .12rem;
          color: #93a5c6;
          border-right: 1px solid #e1e1e1;
          &:first-child {
            font-size: .14rem;
            color: #6b7ea3;
          }
        }
        &:last-child {
          span {
            border-right: none;
          }
        }
      }
    }
  }
  .card {
    width: 100%;
    padding: 0 .2rem;
    img {
      display: block;
      width: 100%;
    }
  }
  .rules {
    width: 100%;
    line-height: .42rem;
    text-align: center;
    span {
      font-size: .13rem;
      color: #2468d9;
    }
  }
  .experience {
    padding: .1rem .15rem;
    width: 100%;
    background: #f1f6f8;
    .btn {
      width: 100%;
      line-height: .5rem;
      border-radius: .05rem;
      background: #2468d9;
      text-align: center;
      span {
        font-size: .18rem;
        color: #fff;
      }
    }
  }
  .job-container {
    padding: .22rem .22rem .12rem;
    width: 100%;
    .text {
      margin-bottom: .25rem;
      width: 100%;
      font-size: .13rem;
      color: #888888;
    }
    .container {
      width: 100%;
      font-size: .12rem;
      color: #888888;
      .job-block {
        display: inline-block;
        padding: .08rem .09rem;
        margin-right: .08rem;
        margin-bottom: .1rem;
        width: 1.05rem;
        border: 1px solid #c7c7c7;
        text-align: center;
        &:nth-child(3n) {
          margin-right: 0;
        }
        img {
          display: inline-block;
          width: .75rem;
          height: .75rem;
        }
        .job-title {
          width: .85rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .sesame-score {
          width: .85rem;
          text-align: center;
        }
        .apply-btn {
          margin: 0 auto;
          width: .75rem;
          height: .2rem;
          border-radius: .09rem;
          border: 1px solid #2468d9;
          img {
            width: .05rem;
            height: .1rem;
          }
          span {
            font-size: .13rem;
            color: #2468d9;
          }
        }
      }
    }
  }
  .background {
    width: 100%;
    height: .1rem;
    background: #f1f6f8;
  }
  .process {
    padding: .18rem;
    font-size: .13rem;
    color: #888888;
    line-height: .24rem;
    span{
      display: block;
    }
  }
  .contact {
    padding-top: .2rem;
    width: 100%;
    height: 1.35rem;
    background: #f1f6f8;
    line-height: .25rem;
    text-align: center;
    span {
      display: block;
      font-size: .13rem;
      color: #888888;
    }
  }
}
</style>

<template>
  <div class="act-detail">
    <div class="head">
      <img src="https://qiniu-image.qtshe.com/act/sesame/job_list_head.png" alt="">
    </div>
    <div class="container">
      <div class="top-selection">
        <div class="block" v-for="item, index in titleGroup">
          <span>{{item.title}}</span>
          <span>{{item.value}}</span>
        </div>
        <div class="bottom-line" :class="activeIndex === 1 ? 'left-1' : (activeIndex === 2 ? 'left-2' : '')"></div>
      </div>
      <div class="head">
        <img src="https://qiniu-image.qtshe.com/act/sesame/detail_1.jpg" alt="">
      </div>
      <div class="card" @click="jumpToJobList">
        <img src="https://qiniu-image.qtshe.com/act_detail_4.jpg" alt="">
      </div>
      <div class="rules" @click="showHintWindow">
        <span>活动规则 >></span>
      </div>
      <div class="experience" @click="jumpToJobList">
        <div class="btn">
          <span>立即体验服务</span>
        </div>
      </div>
      <div class="head">
        <img src="https://qiniu-image.qtshe.com/act/sesame/detail_3.jpg" alt="">
      </div>
      <div class="job-container">
        <div class="text">
          校园工作携手芝麻信用，首次为在校大学生用户提供薪资先享服务，凡芝麻分满600分的用户均可报名此次活动提供的薪资先享岗位。
        </div>
        <div class="container">
          <div class="job-block" v-for="job in jobList" @click="handleClick(job)">
            <img :src="job.logo" alt="">
            <div class="job-title">{{job.title}}</div>
            <div class="sesame-score">{{`芝麻分${job.score}`}}</div>
            <div class="apply-btn">
              <div style="margin: 0 auto;">
                <span>去报名</span>
                <img src="https://qiniu-image.qtshe.com/act/sesame/act_detail_icon.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background"></div>
      <div class="head">
        <img src="https://qiniu-image.qtshe.com/act/sesame/detail_4.jpg" alt="">
      </div>
      <div class="process">
        <span>1.报名：开通芝麻信用服务且芝麻分满600的同学可以获得预付工资的申请资格；</span>
        <span>2.录取：提交报名后，商家录取会发送录取通知短信；</span>
        <span>3.工作要求：具体工作要求参考岗位的详情介绍；</span>
        <span>4.薪资结算：报名录取后，商家提前预付的部分薪水，完成工作后结算剩余薪水；</span>
        <span>5.违规退款：如录取成功，用户需按照合同履行相关义务，否则商家有权要求全额退回预付工资款项，违约行为将会发送至芝麻信用，可能会影响芝麻分喔。</span>
      </div>
      <div class="contact">
        <span>客服电话：
          <a href="tel:010-84504033">010-84504033</a>
        </span>
        <span>周一至周五 10:00 - 19:00 </span>
        <span>本次活动由芝麻信用&校园工作举办</span>
      </div>
    </div>
  </div>
</template>

<script>
import util from 'util'
import openHintWindow from './components/hintWindow/index'
export default {
  computed: {
  },
  data() {
    return {
      activeIndex: 0,
      titleGroup: [
        {
          title: '信用校园',
          value: '信用工作·助你成长'
        },
        {
          title: '参与门槛',
          value: '芝麻分满600有机会'
        },
        {
          title: '活动亮点',
          value: '凭信用先享工资'
        }
      ],
      jobList: [
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_img_09.jpg',
          title: 'CEO助理',
          score: '600',
          jobId: 111111,
          aliPayUrl: 'https://render.alipay-eco.com/p/x/aliapp-webonline/detail.html?post_id=435632&time=1503299437000'
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_img_08.jpg',
          title: '无人超市体验员',
          score: '630',
          jobId: 111111,
          aliPayUrl: 'https://render.alipay-eco.com/p/x/aliapp-webonline/detail.html?post_id=445167&time=1503369980000'
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_img_06.jpg',
          title: '蓝色可乐试喝员',
          score: '630',
          jobId: 111111,
          aliPayUrl: 'https://render.alipay-eco.com/p/x/aliapp-webonline/detail.html?post_id=445162&time=1503369694000'
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/baicizhan.jpg?v=1',
          title: '品牌创意实习生',
          score: '600',
          jobId: 111111,
          aliPayUrl: 'http://www.anijue.com/p/q/campusjob/index.html#/jobInfo/?jobType=1&jobId=27038'
        },
        {
          logo: 'https://qiniu-image.qtshe.com/commenter.jpg',
          title: '直播评论员',
          score: '600',
          jobId: 111111,
          aliPayUrl: 'https://render.alipay-eco.com/p/x/aliapp-webonline/detail.html?post_id=431504'
        },
        {
          logo: 'https://qiniu-image.qtshe.com/HD.jpg',
          title: '哈根达斯兼职',
          score: '600',
          jobId: 111111,
          aliPayUrl: 'https://render.alipay-eco.com/p/x/aliapp-webonline/detail.html?post_id=445799'
        }
      ]
    }
  },
  methods: {
    getSesameScore() {
      if (!util.getQueryString('score')) {
      } else {
        sessionStorage.setItem('sesameScore', util.getQueryString('score'))
      }
    },
    handleClick(item) {
      let redirectUrl = window.location.href
      let sesameAuthUrl = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2015111300783988&scope=auth_base,auth_zhima&redirect_uri=https://api.qtshe.com/zmCenter/act/callback?callbackUrl=${redirectUrl}`
      let jobDetailUrl = item.aliPayUrl
      let sesameScore = sessionStorage.getItem('sesameScore')
      if (!sesameScore) {
        window.location.href = sesameAuthUrl
      } else {
        if (item.sesameScore > sesameScore) {
          MessageBox.alert('您的芝麻信用分不足', '提示')
        } else {
          window.location.href = jobDetailUrl
        }
      }
    },
    showHintWindow() {
      openHintWindow()
    },
    jumpToJobList() {
      let redirectUrl = 'https://m.qtshe.com/app/act/sesame/jobList'
      let sesameAuthUrl = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2015111300783988&scope=auth_base,auth_zhima&redirect_uri=https://api.qtshe.com/zmCenter/act/callback?callbackUrl=${redirectUrl}`
      let sesameScore = sessionStorage.getItem('sesameScore')
      if (!sesameScore) {
        window.location.href = sesameAuthUrl
      } else {
        window.location.href = `${redirectUrl}?score=${sesameScore}`
      }
    }
  },
  mounted() {
    this.getSesameScore()
  },
  created() {
    try {
      AlipayJSBridge.call('setTitle', {
        title: '大学生信用节'
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

