<style lang='less' scoped>
.a1500256767-wrapper {
    width: 100%;
    font-size: 0;
    .header {
        img {
            width: 100%;
        }
    }
    .p1 {
        width: 1.32rem;
        margin: 0.32rem auto 0.16rem;
        img {
            width: 100%;
        }
    }
    .p2 {
        margin: 0 0.16rem;
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        -webkit-overflow-scrolling: touch;
        .block {
            width: 2.72rem;
            height: 2.24rem;
            border: 1px solid #F0F0F0;
            padding: 0.28rem 0.16rem 0.2rem;
            display: inline-table;
            float: left;
            position: relative;
            & + .block {
                margin-left: 0.16rem;
            }
            .img-div {
                height: 0.6rem;
                overflow: hidden;
                img {
                    height: 100%;
                    vertical-align: middle;
                }
                span.title {
                    vertical-align: middle;
                    font-size: 20px;
                    color: #333;
                    margin-left: 0.16rem;
                }
            }
            .desc {
                font-size: 14px;
                color: #333;
                opacity: 0.6;
                margin: 0.24rem 0;
            }
            .btn-text {
                font-size: 14px;

            }
            &.qtshe .btn-text {
                color: #0C8;
            }
            &.pay-tool .btn-text {
                color: #F66;
            }
            &.yunditui .btn-text {
                color: #2AA3E5;
            }
        }
    }
    .p4 {
        padding: 0 0.16rem;
        .partJob-item {
            border-radius: 2px;
            overflow: hidden;
            position: relative;
            & + .partJob-item {
                margin-top: 0.12rem;
            }
            img {
                width: 100%;
            }
            .title-div {
                position: absolute;
                bottom: 0.07rem;
                left: 0.12rem;
                color: #fff;
                .title {
                    font-size: 15px;
                }
                .sub-title {
                    font-size: 12px;
                }
            }
        }
        .more {
            color: #00CC88;
            font-size: 14px;
            margin: 0.24rem auto 0.34rem;
            text-align: center;
        }
    }
    .p5 {
        font-size: 13px;
        color: #333;
        height: 0.5rem;
        line-height: 0.5rem;
        border-top: 1px solid #f0f0f0;
        text-align: center;
        li {
            display: inline-block;
            &:nth-of-type(2) {
                margin: 0 0.5rem;
            }
            img {
                width: 0.16rem;
                vertical-align: middle;
            }
            span {
                vertical-align: middle;
            }
        }

    }
}
</style>
<template>
<div class='a1500256767-wrapper'>
  <div class="header">
    <img src='https://qiniu-image.qtshe.com/1499934511.png' alt='header' />
  </div>
  <div class="p1">
    <img src='https://qiniu-image.qtshe.com/1499934597.png' alt='' />
  </div>
  <ul class="p2">
    <li class="block qtshe">
      <p class="img-div">
        <img src='https://qiniu-image.qtshe.com/1499935001.png' alt='' />
        <span class="title">兼职招聘</span>
      </p>
      <p class="desc">
        入驻即送200元礼包。百万大学生用户，招聘省心又省力
      </p>
      <p class="btn-text" @click="gotoQtshe()">
        查看详情
      </p>
    </li>
    <li class="block pay-tool">
      <p class="img-div">
        <img src='https://qiniu-image.qtshe.com/1499935002.png' alt='' />
        <span class="title">打款工具</span>
      </p>
      <p class="desc">
        安全、方便、合规。一键导入报名单，线上轻松发工资
      </p>
      <p class="btn-text" @click="gotoPaytool()">
        查看详情
      </p>
    </li>
    <li class="block yunditui">
      <p class="img-div">
        <img src='https://qiniu-image.qtshe.com/1499935003.png' alt='' />
        <span class="title">云地推</span>
      </p>
      <p class="desc">
        让每个企业都有自己的地推后台。海量数据全局监控，实时跟进推广进度
      </p>
      <p class="btn-text" @click="gotoYunditui()">
        查看详情
      </p>
    </li>
  </ul>
  <div class="p1">
    <img src='https://qiniu-image.qtshe.com/1499934595.png' alt='' />
  </div>
  <div class="p4">
    <ul class="partJob-div">
      <li class="partJob-item" v-for="(item, i) in list" :key="i" @click="gotoPartJob(item.partJobId)">
        <img :src='item.image' alt='' />
        <div class="title-div">
          <p class="title">{{item.title}}</p>
          <p class="sub-title">{{item.subTitle}}</p>
        </div>
      </li>
    </ul>
    <div class="more" @click="gotoHome">
      查看更多
    </div>
  </div>
  <div class="p5">
    <ul>
      <li>
        <img src='https://qiniu-image.qtshe.com/1499934594.png' alt='' />
        <span>名企招聘</span>
      </li>
      <li>
        <img src='https://qiniu-image.qtshe.com/1499934594.png' alt='' />
        <span>精品兼职</span>
      </li>
      <li>
        <img src='https://qiniu-image.qtshe.com/1499934594.png' alt='' />
        <span>工资保障</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import util from 'util'
import wx from 'wx'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      interPackage: {},
      list: []
    }
  },
  methods: {
    // 跳转C端主页
    gotoHome() {
      window.location.href = '/'
    },
    // 跳转到兼职详情页
    gotoPartJob(partJobId) {
      this.interPackage.evokePerfectPartJobDetailPage(partJobId)
    },
    gotoQtshe() {
      this.$router.push({
        path: '/a1500256767/qtshe'
      })
    },
    gotoPaytool() {
      this.$router.push({
        path: '/a1500256767/paytool'
      })
    },
    gotoYunditui() {
      this.$router.push({
        path: '/a1500256767/yunditui'
      })
    },
    // 获取推荐兼职列表
    getList() {
      let _this = this
      this.$axios.post('/resourceLocation/manager/h5/recommend', {
        pageNum: 0,
        pageSize: 3,
        resourceType: 15
      }).then((res) => {
        if (res.success) {
          if (res.data.recourceLocations) {
            let arr = res.data.recourceLocations || []
            arr.map((item) => {
              item.partJobId = _this.parsePartJobId(item.param)
              _this.list.push(item)
            })
          }
        }
      })
    },
    // 根据万能跳转解析兼职ID出来
    parsePartJobId(param) {
      let arr = []
      try {
        arr = JSON.parse(param)
      } catch (err) {}
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].key === 'partJobId') {
          return arr[i].value
        }
      }
      return 0
    }
  },
  mounted() {
    // 设置title
    setWechatTitle('青团社')
    this.getList()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
