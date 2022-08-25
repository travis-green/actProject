/**
* @description: 文件或模块描述
* @author: zengtiansheng
* @update: 2017/10/24
*/
<style lang='less' scoped>
  @dd: 200rem;
  .section{
    background: #ffffff;
  }
  .a-text-img{
    width: 100%;
    .text-img{
      display: block;
      width: 722/@dd;
      height: 86/@dd;
      margin: 26/@dd auto -2/@dd;
    }
  }
  .defaultpage {
    width: 100%;
    font-size: 36/@dd;
    padding-bottom: 30/@dd;
    background: #ffffff;
    img {
      display: block;
      width: 480/@dd;
      height: 480/@dd;
      margin: 0 auto;
    }
    .p-text {
      color: #6b6b6b;
      text-align: center;
    }
  }
</style>
<template>
  <section>
    <a class="a-text-img" href="https://mp.weixin.qq.com/s?__biz=MjM5NDUzOTM4NA==&mid=2654513577&idx=1&sn=1d458dcecc3ca0ec8686153e1317fe53&chksm=bd4a3bbe8a3db2a8ba614e9821f6fe30392a44c57cabed7b728262d96a688dc3b9ecfe8c8d9d&mpshare=1&scene=1&srcid=1031D8hd1jxuJ1Mq4LIWYYhJ&key=a1026ad5cdff05b4ec00f27081b97d8ce4dbcaecafbd42470e5502d7d557d9f1426f58cc5fab2e2c58404ca483e1b3d5e315e278773427eb1cad98747ace728b9a2e83aab4bb3faf3897f3d6fae5abc8&ascene=0&uin=MjI1Nzg1NzEwMA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.4+build(16E195)&version=12020510&nettype=WIFI&fontScale=100&pass_ticket=9IY3Mb%2Fhu72PGPqudfbocvnVxB9PPlHqoAFH1VnMeKlnI85A4Za7nfUbTGYxH3Ie">
      <img class="text-img" src="https://qiniu-image.qtshe.com//act/volunteerV3/1508845149/text_img2@1x.png" alt="text-img">
    </a>
    <div class="job-item-box" v-infinite-scroll="loadMoreDataListening"
         :infinite-scroll-disabled="scrollEnableFlag" infinite-scroll-distance="60">
      <job-item v-for="(item,index) in arr_jobList" :key="index" :jobItem="item" ></job-item>
      <div v-if="nothingShowFlag" class="defaultpage">
        <img src="https://qiniu-image.qtshe.com/20161007search@3x.png" alt="null data">
        <p class="p-text">什么都没搜到...</p>
      </div>
    </div>
  </section>
</template>
<script>
  import jobItem from './jobitem'
  import compExtends from './compExtends'

  export default {
    extends: compExtends,
    data() {
      return {
        msg: '',
        sendData: {
          pageNum: 0,
          pageSize: 10,
          resourceType: 103
        },
        totalPageNum: 0,
        arr_jobList: [],
        scrollEnableFlag: true,
        nothingShowFlag: false
      }
    },
    components: {
      jobItem
    }
  }
</script>
