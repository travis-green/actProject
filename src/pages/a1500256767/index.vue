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
        <span class="title">????????????</span>
      </p>
      <p class="desc">
        ????????????200?????????????????????????????????????????????????????????
      </p>
      <p class="btn-text" @click="gotoQtshe()">
        ????????????
      </p>
    </li>
    <li class="block pay-tool">
      <p class="img-div">
        <img src='https://qiniu-image.qtshe.com/1499935002.png' alt='' />
        <span class="title">????????????</span>
      </p>
      <p class="desc">
        ????????????????????????????????????????????????????????????????????????
      </p>
      <p class="btn-text" @click="gotoPaytool()">
        ????????????
      </p>
    </li>
    <li class="block yunditui">
      <p class="img-div">
        <img src='https://qiniu-image.qtshe.com/1499935003.png' alt='' />
        <span class="title">?????????</span>
      </p>
      <p class="desc">
        ????????????????????????????????????????????????????????????????????????????????????????????????
      </p>
      <p class="btn-text" @click="gotoYunditui()">
        ????????????
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
      ????????????
    </div>
  </div>
  <div class="p5">
    <ul>
      <li>
        <img src='https://qiniu-image.qtshe.com/1499934594.png' alt='' />
        <span>????????????</span>
      </li>
      <li>
        <img src='https://qiniu-image.qtshe.com/1499934594.png' alt='' />
        <span>????????????</span>
      </li>
      <li>
        <img src='https://qiniu-image.qtshe.com/1499934594.png' alt='' />
        <span>????????????</span>
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
    // ??????C?????????
    gotoHome() {
      window.location.href = '/'
    },
    // ????????????????????????
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
    // ????????????????????????
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
    // ??????????????????????????????ID??????
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
    // ??????title
    setWechatTitle('?????????')
    this.getList()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
