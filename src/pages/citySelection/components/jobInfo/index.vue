<style lang='less' scoped>
.job-info {
  width: 100%;
  padding: 0.2rem 0.25rem;
  .title {
    width: 100%;
    margin-bottom: 0.14rem;
    line-height: 0.18rem;
    font-size: 0.15rem;
    color: #333;
    .title-left {
      float: left;
      text-align: left;
      max-width: 2.2rem;
    }
    .title-right {
      float: right;
      text-align: right;
      max-width: 1rem;
    }
  }
  .subtitle {
    width: 100%;
    font-size: 0.1rem;
    line-height: 0.14rem;
    color: #333;
    img {
      margin-right: 0.05rem;
      width: 0.1rem;
      height: 0.1rem;
      vertical-align: middle;
    }
    span {
      margin: 0;
      padding: 0;
      vertical-align: middle;
    }
    .block {
      width: 100%;
      .block-left {
        float: left;
        text-align: left;
        max-width: 2.2rem;
      }
      .block-right {
        float: right;
        text-align: right;
        max-width: 1rem;
      }
    }
    .block + .block {
      margin-top: 0.1rem;
    }
  }
}
</style>
<template>
  <div class="job-info">
    <div class="title clearfix">
      <div class="title-left ellipsis">
        {{infoItem.partJobTitle}}
      </div>
      <div class="title-right ellipsis">
        {{infoItem.salary}}
      </div>
    </div>
    <div class="subtitle">
      <div class="block clearfix">
        <div class="block-left">
          <img src="https://qiniu-image.qtshe.com/m/H5/time.png" alt="">
          <span>{{infoItem.newJobStandTime}}</span>
        </div>
        <div class="block-right">
          <img src="https://qiniu-image.qtshe.com/m/H5/popular.png" alt="">
          <span>热度{{infoItem.hotScore}}</span>
        </div>
      </div>
      <div class="block clearfix">
        <div class="block-left">
          <img src="https://qiniu-image.qtshe.com/m/H5/location.png" alt="">
          <span v-if="!infoItem.distance">{{infoItem.addressDetail}}</span>
          <span v-if="infoItem.distance">{{infoItem.addressDetail}}/{{infoItem.distance}}</span>
        </div>
        <div class="block-right ellipsis">
          <span style="color: #888888">{{infoItem.brandName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    infoItem: {
      type: Object,
      default: () => {
        return {
          title: '找初中语文家教',
          salary: 100,
          date: '7月1日-7月4日（共3天）',
          location: '西湖区碗汤力',
          distance: '6.2',
          popular: '57335',
          company: '弘弧教育'
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {

  },
  mounted () { }
}
</script>
