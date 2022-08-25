<style lang="less" scoped>
  .card-instrctions {
    max-width: 750px;
    width: 100%;
    img {
      width: 0.2rem;
      height: 0.2rem;
    }
    .content {
      margin: 0.16rem;
      padding-bottom: 0.3rem;
      border-bottom: 0.01rem solid #eeeeee;
      &:last-child {
        border-bottom: none;
      }
    }
    .title {
      display: flex;
      margin-bottom: 0.17rem;
      font-size: 0.14rem;
      color: #3c3c3c;
      .intro {
        max-height: 0.54rem;
        line-height: 0.18rem;
        text-align: justify;
        white-space: pre-line;
        vertical-align: middle;
        overflow: hidden;
      }
      img {
        margin-right: 0.08rem;
        vertical-align: middle;
      }
    }
    .answer {
      display: flex;
      position: relative;
      font-size: 0.12rem;
      color: #3c3c3c;
      span {
        width: 3.3rem;
        line-height: 0.18rem;
        text-align: justify;
        white-space: pre-line;
        vertical-align: text-top;
        overflow: hidden;
      }
      .expand {
        max-height: 0.54rem;
        transition: ease all 0.3s;
      }
      img {
        margin-right: 0.08rem;
        vertical-align: text-top;
      }
      .btn {
        position: absolute;
        bottom: -0.25rem;
        right: 0;
        font-size: 0.11rem;
        color: #448aff;
      }
    }
  }
</style>


<template>
  <div class="card-instrctions">
    <div class="content" v-for="item, index in content" :key="index">
      <div class="title">
        <img src="https://qiniu-image.qtshe.com/system/page/Q.png" alt="">
        <span>{{item.title}}</span>
      </div>
      <div class="answer">
        <img src="https://qiniu-image.qtshe.com/system/page/A.png" alt="">
        <span :class="item.isNeedExpand ? 'expand' : ''">{{item.content}}</span>
        <div class="btn" v-if="item.isNeedExpand !== ''" @click="handleItemClick(index)">{{item.isNeedExpand === false ? '收起' : '展开'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import util from 'util'
  import data from './config'
  export default {
    data() {
      return {
        isExpand: false,
        interPackage: {},
        content: data
      }
    },
    methods: {
      handleItemClick(index) {
        this.$set(
          this.content[index],
          'isNeedExpand',
          !this.content[index].isNeedExpand
        )
        this.$set(this.content, index, this.content[index])
      },
      handleExpandStatus() {
        this.content.map(item => {
          item.content.length > 70
            ? (item.isNeedExpand = true)
            : (item.isNeedExpand = '')
        })
      }
    },
    created() {
      this.handleExpandStatus()
      this.interPackage = util.getCurrentVersionInteractivePackage()
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '校园信用卡办卡攻略 | 青团社·校园信用卡中心',
        desc: '大学生办理信用卡首选平台'
      })
    }
  }
</script>

