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
    <router-link class="a-text-img" to="/volunteerArticle">
      <img class="text-img" src="https://qiniu-image.qtshe.com//act/volunteerV3/1508845152/text_img1@1x.png.png" alt="text-img">
    </router-link>
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
          resourceType: 102
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
