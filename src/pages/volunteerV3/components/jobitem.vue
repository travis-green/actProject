/**
* @description: 文件或模块描述
* @author: zengtiansheng
* @update: 2017/10/24
*/
<style lang='less' scoped>
  @dd: 200rem;
  .job-item{
    margin: 0 22/@dd;
    padding: 22/@dd 0 18/@dd;
    border-bottom: 1px solid #E5E5E5;
    .image{
      width: 100%;
      height: 319/@dd;
    }
    .title{
      color: #333333;
      font-size: 32/@dd;
      line-height: 1;
      margin-top: 20/@dd;
    }
    .subTitle{
      color: #666666;
      font-size: 26/@dd;
      line-height: 1;
      margin-top: 20/@dd;
    }
  }
</style>
<template>
  <section class="job-item" @click="jumpquality(jobItem.targetUrl, jobItem.param, jobItem.jumpType)">
    <img class="image" v-lazy="jobItem.image" alt="image">
    <p class="title">{{jobItem.title}}</p>
    <p class="subTitle">{{jobItem.subTitle}}</p>
  </section>
</template>
<script>
  import util from 'util'

  export default {
    props: {
      jobItem: {
        type: Object,
        default: function () {
          return {
            image: 'https://qiniu-image.qtshe.com/1507771726671_5724.jpg',
            jumpType: 4,
            param: [{'key': 'partJobId', 'name': '兼职…pe', 'value': '114979'}],
            resourceId: 2669,
            resourceType: 100,
            salary: 0.00,
            title: '重庆3D魔幻山城之旅',
            subTitle: '包食宿补贴路费',
            targetUrl: 'https://m.qtshe.com/app/qualitypart'
          }
        }
      }
    },
    data() {
      return {
        partJobId: '',
        interPackage: {}
      }
    },
    created() {
      this.interPackage = util.getCurrentVersionInteractivePackage()
    },
    mounted() {

    },
    methods: {
      jumpquality(url, param, jumpType) {
        param = JSON.parse(param)
        if (!util.isEmpty(param[2])) {
          // window.location.href = url + '?' + param[0].key + '=' + param[0].value + '&' + param[1].key + '=' + param[1].value + '&' + param[2].key + '=' + param[2].value
          this.partJobId = param[2].value
        } else if (!util.isEmpty(param[1])) {
          // window.location.href = url + '?' + param[0].key + '=' + param[0].value + '&' + param[1].key + '=' + param[1].value
          this.partJobId = param[1].value
        } else {
          //window.location.href = url + '?' + param[0].key + '=' + param[0].value
          this.partJobId = param[0].value
        }
        if (jumpType === 3) {
          this.interPackage.evokeNormalPartJobDetailPage(this.partJobId)
        } else if (jumpType === 4) {
          this.interPackage.evokePerfectPartJobDetailPage(this.partJobId)
        } else if (jumpType === 13) {
          this.interPackage.evokeLightTaskDetailPage(this.partJobId)
        }
      }
    }
  }
</script>
