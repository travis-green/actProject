<template>
  <div class="speed-feedback">
    <img src="https://qiniu-image.qtshe.com/20170927feedBackheader.jpg">
    <img src="https://qiniu-image.qtshe.com/20170927fir-recommend.jpg" @click="companyDetails(22442)">
    <img src="https://qiniu-image.qtshe.com/20170927sec-recommend.jpg" @click="companyDetails(20201)">
    <img src="https://qiniu-image.qtshe.com/20170927thi-recommend.jpg" @click="companyDetails(22428)">
    <img src="https://qiniu-image.qtshe.com/20170927speed-storm.jpg">
    <div class="companyList">
      <div @click="companyDetails(item.companyId)" v-for="(item,index) in jobList" :key="index">
        <img :src='`https://qiniu-image.qtshe.com/20171010company-${index+1}.png`'>
        <div class="jobinfo">
          <p @click.stop="jobdetails(info.jobId)" v-for="(info,num) in item.jobItem" :key="num">{{info.name}}
            <span>{{info.price}}</span>
          </p>
        </div>
      </div>
    </div>
    <img src="https://qiniu-image.qtshe.com/20170927bottom-tips.png">
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import wx from 'wx'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      interPackage: {},
      jobList: [
        {
          companyId: 16277,
          jobItem: [{ name: '才艺主播', price: '20元/小时', jobId: 110788 }, { name: '才艺主播', price: '8000元/月', jobId: 118464 }]
        },
        {
          companyId: 21328,
          jobItem: [{ name: '手机宅家赚', price: '2元/次', jobId: 114364 }]
        },
        {
          companyId: 21425,
          jobItem: [{ name: '留学招生人', price: '7000元/月', jobId: 125478 }, { name: '留学代理人', price: '7000元/月', jobId: 126046 }]
        },
        {
          companyId: 15992,
          jobItem: [{ name: '手机APP试玩', price: '2元/次', jobId: 96975 }]
        },
        {
          companyId: 23021,
          jobItem: [{ name: '校园经纪人', price: '800元/次', jobId: 122488 }, { name: '高薪主播', price: '8000元/月', jobId: 119388 }]
        },
        {
          companyId: 22991,
          jobItem: [{ name: '直播练习生', price: '18元/小时', jobId: 122360 }, { name: '花椒招星探', price: '5000元/月', jobId: 120194 }]
        },
        {
          companyId: 22904,
          jobItem: [{ name: '网络主播', price: '60元/小时', jobId: 129174 }]
        },
        {}
      ]
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    setWechatTitle('24小时极速反馈')
    this.sharemodel()
  },
  methods: {
    // 点击分享按钮回调
    sharemodel() {
      this.interPackage.initShareInfo({
        title: '这些商家给出答复超快der',
        desc: '告别苦苦等待，追逐梦想的路上就要快人一步',
        imgUrl: 'https://qiniu-image.qtshe.com/20170926share.jpeg-100'
      })
    },
    jobdetails(partJobId) {
      this.interPackage.evokeNormalPartJobDetailPage(partJobId)
    },
    companyDetails(companyId = undefined) {
      if (!companyId) { return }
      this.interPackage.evokeCompanyHomePage(companyId)
    }
  }
}
</script>
<style lang="less" scoped>
.speed-feedback {
  font-size: 0;
  &>img {
    float: left;
    width: 100%;
  }
  .companyList {
    font-size: 0;
    &>div {
      float: left;
      position: relative;
      height: 2.27rem;
      .jobinfo {
        position: absolute;
        top: 1.33rem;
        width: 1.33rem;
        height: .44rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        p {
          display: flex;
          justify-content: space-between;
          font-size: .11rem;
          color: #333;
          span {
            font-size: .11rem;
            color: #fb6b4f;
            font-weight: bolder;
          }
        }
      }
      &:nth-of-type(odd) {
        img {
          height: 100%;
          width: 1.84rem;
        }
        .jobinfo {
          left: .39rem;
        }
      }
      &:nth-of-type(even) {
        img {
          height: 100%;
          width: 1.91rem;
        }
        .jobinfo {
          left: .21rem;
        }
      }
    }
  }
}
</style>
