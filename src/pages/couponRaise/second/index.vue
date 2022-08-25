<style lang='less' scoped>
img {
    width: 100%;
    float: left;
}
.downBtn {
    margin-top: -14.5%;
    width: 90%;
    margin-left: 5%;
}
.taskList {
    width: 90%;
    border-radius: 0.08rem;
    height: 2.5rem;
    margin-top: -90%;
    float: left;
    margin-left: 5%;
    background: #FFF;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
}
.taskList::-webkit-scrollbar {
    display: none;
}
.couponTips {
    width: 100%;
    padding: 0 0.32rem;
    float: left;
    font-size: 0.13rem;
    margin-top: -105%;
    color: #FFF;
}
.onelist {
    width: 100%;
    height: 0.7rem;
    border-bottom: 0.01rem solid #EEE;
    position: relative;
    overflow: hidden;
}
.conpanyLogo {
    width: 0.45rem;
    height: 0.45rem;
    float: left;
    margin: 0.15rem 0.16rem 0;
}
.taskCenter {
    width: 1.8rem;
    height: 0.7rem;
    float: left;
    position: relative;
    overflow: hidden;
}
.taskTitle {
    width: 100%;
    height: 0.35rem;
    line-height: 0.35rem;
    font-size: 0.16rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3c3c3c;
    margin-top: 0.1rem;
}
.taskPerce {
    width: 100%;
    float: left;
    color: #999;
    font-size: 0.12rem;
}
.taskSalary {
    width: 0.7rem;
    font-size: 0.16rem;
    color: #e46051;
    float: right;
    line-height: 0.7rem;
    text-align: right;
    padding-right: 0.16rem;
}
.ticketStatus {
    width: 1.9rem;
    float: left;
    margin-top: -36%;
    font-size: 0.4rem;
    color: #e46051;
    text-align: center;
    margin-left: 1.3rem;
}
.ticketStatus span {
    font-size: 0.7rem;
    font-weight: bold;
}
</style>
<template>
<div>
  <img src="https://qiniu-image.qtshe.com/20180730_01.jpg" alt="">
  <div class="ticketStatus"><span>{{ticketStatus}}</span>倍</div>
  <img src="https://qiniu-image.qtshe.com/20180730_02.jpg" alt="">
  <div class="couponTips">恭喜你{{ticketStatus}}倍加薪券已放入账号{{mobile}}中，你可以在青团社app中使用加薪券领取以下任务哦！</div>
  <ul class="taskList">
    <li class="onelist" v-for="(item, index) in taskList" v-key="index" @click="skipTodetails(item.taskBaseId)">
      <img :src="item.logoUrl" alt="" class="conpanyLogo">
      <div class="taskCenter">
        <div class="taskTitle">{{item.name}}</div>
        <div class="taskPerce">剩余{{item.quantity - item.applyCnt}}次</div>
      </div>
      <div class="taskSalary">{{item.price}}元</div>
    </li>
  </ul>
  <a ref="btnOpenApp">
    <img src="https://qiniu-image.qtshe.com/20180730_04.png" class="downBtn"/>
  </a>
  <img src="https://qiniu-image.qtshe.com/20180730_02%20%281%29.jpg" alt="">
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import {
  Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      taskList: [],
      mobile: util.getCookie('mobile'),
      ticketStatus: util.getQueryString('ticketStatus')
    }
  },
  methods: {
    initData() {
      let postData = {
        pageNum: 0,
        pageSize: 10,
        townId: 0,
        foreClassifyId: 4
      }
      this.$axios.post('/taskCenter/taskUserApp/list', postData).then((res) => {
        if (res.success) {
          this.taskList = res.data.results
        } else {
          toast(res.msg)
        }
      })
    },
    skipTodetails(id) {
      window.location.href = `/app/lightask/taskdetail?taskBaseId=${id}`
      // this.$router.push({
      //   path: `/app/lightask/taskdetail?taskBaseId=${id}`
      // })
    },
    // 唤起app回调
    openApp() {
      if (util.isAndroid()) {
        window.Mlink && new Mlink({
          mlink: 'https://azgwwp.mlinks.cc/AAEe?selectIndex=', //在魔窗后台配置好的短链URL
          button: this.$refs.btnOpenApp, //必须是A标签
          autoRedirect: false, //自动打开App, 此配置在Android Chrome 35以上版本, 部分其他Android机型和浏览器, iOS 9.0以上系统无效;
          autoRedirectToDownloadUrl: true // 默认true, 当用户设备上未安装应用时自动打开下载地址; 如果您不希望直接打开下载地址, 设为false即可;
        })
      } else if (util.isIos()) {
        window.Mlink && new Mlink({
          mlink: 'https://azgwwp.mlinks.cc/AAEe?selectIndex=0', //在魔窗后台配置好的短链URL
          button: this.$refs.btnOpenApp, //必须是A标签
          autoRedirect: false, //自动打开App, 此配置在Android Chrome 35以上版本, 部分其他Android机型和浏览器, iOS 9.0以上系统无效;
          autoRedirectToDownloadUrl: true // 默认true, 当用户设备上未安装应用时自动打开下载地址; 如果您不希望直接打开下载地址, 设为false即可;
        })
      }
    }
  },
  mounted() {
    this.initData()
    this.openApp()
  }
}
</script>
