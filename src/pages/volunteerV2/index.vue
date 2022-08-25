<style lang='less' scoped>
  @dd: 300rem;
  @cl: #5EDEE2;
  .pseudo-selection-middle {
    position: absolute;
    top: 40/@dd;
    content: '';
    display: block;
    margin: auto;
    width: 1px;
    height: 60%;
    border-left: 1px solid #e4e4e3;
  }

  .s-content-part1 {
    background: #ffffff;
    padding-bottom: 30/@dd;
    .c-header {
      width: 100%;
      height: 632/@dd;
      img {
        width: 100%;
      }
    }
  }

  .s-content-part2 {
    background: #fbf9f6;
    //padding-bottom: 80/@dd;
    .navTabToTop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 888;
      width: 100%;
      max-width: 1125/@dd;
      margin: 0 auto;
      padding-top: 20/@dd;
      background: #ffffff;
    }
    .navTabToTop_fitIos {
      padding-top: 65/@dd;
    }
    .fill_tab_ball {
      width: 100%;
      height: 200/@dd;
    }
    .navchoose {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      .selection {
        width: 33.333%;
        .tab-img {
          width: 300/@dd;
          height: 150/@dd;
          margin: 0 28/@dd;
          img {
            width: 100%;
          }
        }
        .tab-line {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 10/@dd;
          margin-top: 55/@dd;
        }
        .tab_act_line {
          background: #b19e87;
        }
      }
      .selection-middle {
        position: relative;
        top: 0;
        left: 0;
      }
      .selection-middle::before {
        left: 0;
        .pseudo-selection-middle;
      }
      .selection-middle::after {
        right: 0;
        .pseudo-selection-middle;
      }
    }
    .note-img-link {
      display: block;
      width: 100%;
      img {
        width: 100%;
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
    .job-item-box {
      width: 100%;
    }
    .job_item_bg {
      background: #ffffff;
    }
    .loading-img {
      display: block;
      width: 124/@dd;
      height: 124/@dd;
      margin: 0 auto;
    }
    .c-concert {
      width: 100%;
      .tab2-title-img {
        display: block;
        width: 481/@dd;
        height: 153/@dd;
        margin: 95/@dd auto 75/@dd;
      }
      .ul-concert-img {
        width: 100%;
        margin-top: 20/@dd;
        .img-item-link {
          display: block;
          width: 100%;
          img {
            display: block;
            width: 1036/@dd;
            height: 316/@dd;
            margin: 0 auto;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="popo-hot">
    <section class="s-content-part1" id="s_content_part1">
      <header class="c-header">
        <img v-show="activeStatus.tab1_act" src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624banner1.png"
             alt="旅行义工">
        <img v-show="activeStatus.tab2_act" src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624banner2.png"
             alt="演唱会义工">
        <img v-show="activeStatus.tab3_act" src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624banner3.png"
             alt="政府义工">
      </header>
    </section>
    <section class="s-content-part2">
      <div :class="{fill_tab_ball:tabToTop}"></div>
      <div class="navchoose" :class="{navTabToTop:tabToTop,navTabToTop_fitIos:navTabFitIosFlag}">
        <div class="selection">
          <div class="tab-img" @click="tabOnClick(1)">
            <img src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624tab1.png" alt="tab1_act">
          </div>
          <div :class="{tab_act_line:activeStatus.tab1_act}" class="tab-line"></div>
        </div>
        <div class="selection selection-middle">
          <div class="tab-img" @click="tabOnClick(2)">
            <img src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624tab2.png" alt="tab1_act">
          </div>
          <div :class="{tab_act_line:activeStatus.tab2_act}" class="tab-line"></div>
        </div>
        <div class="selection">
          <div class="tab-img" @click="tabOnClick(3)">
            <img src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624tab3.png" alt="tab1_act">
          </div>
          <div :class="{tab_act_line:activeStatus.tab3_act}" class="tab-line"></div>
        </div>
      </div>
      <a v-show="activeStatus.tab1_act" href="http://mp.weixin.qq.com/s/V4B09QlSjwJVzwNzkk6Z1Q" class="note-img-link">
        <img src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624tab1_note_img.png" alt="义工日记">
      </a>
      <div v-if="tabJob.length === 0 && !activeStatus.tab2_act" class="defaultpage">
        <img src="https://qiniu-image.qtshe.com/20161007search@3x.png" alt="null data">
        <p class="p-text">什么都没搜到...</p>
      </div>
      <div class="job-item-box" v-if="tabJob.length !== 0" v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading" infinite-scroll-distance="5">
        <jobitem v-for="(item,index) in tabJob" :key="index" :jobItem="item" :jobItemNum="index"
                 :interPackage="interPackage" :class="{job_item_bg:activeStatus.tab2_act}"></jobitem>
        <img v-show="loadingImg" class="loading-img" src="https://qiniu-image.qtshe.com/20160409-weixinload.gif"
             alt="loadind_img">
      </div>
      <div v-show="activeStatus.tab2_act" class="c-concert">
        <img v-if="tabJob.length === 0" class="tab2-title-img"
             src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624tab2_title_img.png" alt="tab2_title_img">
        <ul class="ul-concert-img">
          <li class="li-img-item">
            <a class="img-item-link" href="https://mp.weixin.qq.com/s/Jb6PQs5XFnQDj1hmdgbaeQ">
              <img src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624concert_img1.png" alt="concert_img1">
            </a>
          </li>
          <li class="li-img-item">
            <a class="img-item-link" href="https://mp.weixin.qq.com/s/GNByr8f2KKFyOrlIuepRYg">
              <img src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624concert_img2.png" alt="concert_img2">
            </a>
          </li>
          <li class="li-img-item">
            <a class="img-item-link" href="https://mp.weixin.qq.com/s/ZHL5rtvb2vVfGjA1C2WxJg">
              <img src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624concert_img3.png" alt="concert_img3">
            </a>
          </li>
          <li class="li-img-item">
            <a class="img-item-link" href="http://mp.weixin.qq.com/s/2hlap5YG7OU_YFPm5jwYMA">
              <img src="https://qiniu-image.qtshe.com/act/volunteerV2/1502112624concert_img4.png" alt="concert_img4">
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import Vue from 'vue'
  import util from 'util'
  import libUtil from '../../lib/util'
  import api from './API'
  import {
    Indicator,
    InfiniteScroll
  } from 'mint-ui'
  import toast from 'toast'
  import jobitem from './components/jobitem'
  import setWechatTitle from 'setWechatTitle'

  Vue.use(InfiniteScroll)
  export default {
    data() {
      return {
        townId: 0,
        loadingImg: false,
        sendData: {
          sortRules: 3, // 按最新发布排序
          pageNum: 1,
          pageSize: 20,
          tagId: 723
        },
        tabJob: [], // tab 数据
        partJobObjs: [{}, // 义工旅行
          {}, // 演唱会
          {} // 余杭区志愿者集合
        ],
        labelIds: [{
          name: '义工旅行',
          id: 723
        }, {
          name: '演唱会',
          id: 739
        }, {
          name: '余杭区志愿者集合',
          id: 689
        }],
        activeStatus: {
          tab1_act: true,
          tab2_act: false,
          tab3_act: false
        },
        scroll: 0,
        tabToTop: false,
        part1_content_height: 0,
        interPackage: {},
        isIosFlag: false,
        navTabFitIosFlag: false
      }
    },
    created() {
      this.scroll = 0
      this.interPackage = util.getCurrentVersionInteractivePackage()
    },
    mounted() {
      setWechatTitle('免费看世界追爱豆')
      window.addEventListener('scroll', this.menu)
      this.sendData.townId = this.$route.params.townId || 0
      this.sharebanner()
      this.getData()
      this.isIosFlag = libUtil.isIos()
    },
    methods: {
      sharebanner() {
        // 初始化自定义分享内容
        let _this = this
        this.interPackage.initShareInfo({
          title: '免费看世界追爱豆',
          desc: '诗和远方你都能有！',
          imgUrl: 'https://qiniu-image.qtshe.com/act/volunteerV2/1502112624wx_share_img.jpg'
        })
      },
      menu() {
        if (this.part1_content_height === 0) {
          this.part1_content_height = document.getElementById('s_content_part1').clientHeight
          if (!this.isIosFlag) {
            this.part1_content_height -= 12
          }
        }
        this.scroll = document.body.scrollTop
        this.scroll > this.part1_content_height ? this.tabToTop = true : this.tabToTop = false
        this.navTabFitIosFlag = this.isIosFlag && this.tabToTop
      },
      getData() {
        Indicator.open({
          spinnerType: 'fading-circle'
        })
        this.$axios.post(api.POST_JOB_LIST, this.sendData).then((data) => {
          if (data.success) {
            this.partJobObjs[0] = data.data
            this.tabJob = data.data.results
            this.sendData.tagId = this.labelIds[1].id
            return this.$axios.post(api.POST_JOB_LIST, this.sendData)
          } else {
            toast(data.msg)
          }
        }).then((data) => {
          if (data.success) {
            this.partJobObjs[1] = data.data
            this.sendData.tagId = this.labelIds[2].id
            return this.$axios.post(api.POST_JOB_LIST, this.sendData)
          } else {
            toast(data.msg)
          }
        }).then((data) => {
          Indicator.close()
          if (data.success) {
            this.partJobObjs[2] = data.data
          } else {
            toast(data.msg)
          }
        }).catch(() => {
          Indicator.close()
          toast('请求出错')
        })
      },
      loadMore() {
        let tabNum = 0
        if (this.activeStatus.tab1_act) {
          tabNum = 0
        }
        if (this.activeStatus.tab2_act) {
          tabNum = 1
        }
        if (this.activeStatus.tab3_act) {
          tabNum = 2
        }
        if (this.partJobObjs[tabNum].pageNum === undefined) {
          return
        }
        let totalPage = Math.ceil(this.partJobObjs[tabNum].totalCount / this.partJobObjs[tabNum].pageSize)
        if (this.partJobObjs[tabNum].pageNum === totalPage) {
          return
        }
        this.loadingImg = true
        this.partJobObjs[tabNum].pageNum ++
        let sendData = {
          sortRules: 3,
          townId: 0,
          pageNum: this.partJobObjs[tabNum].pageNum,
          pageSize: 20,
          tagId: this.labelIds[tabNum].id
        }
        this.$axios.post(api.POST_JOB_LIST, sendData).then((data) => {
          if (data.success) {
            let partJobs = this.partJobObjs[tabNum].results
            this.partJobObjs[tabNum] = data.data
            this.partJobObjs[tabNum].results = [...partJobs, ...this.partJobObjs[tabNum].results]
            this.tabJob = this.partJobObjs[tabNum].results
          } else {
            toast(data.errMsg)
          }
        }).then(() => {
          this.loadingImg = false
        }).catch(() => {
          this.partJobObjs[tabNum].pageNum --
          this.loadingImg = false
        })
      },
      tabOnClick(tab_num) {
        switch (tab_num) {
          case 1:
            this.activeStatus.tab1_act = true
            this.activeStatus.tab2_act = false
            this.activeStatus.tab3_act = false
            this.tabJob = this.partJobObjs[0].results || []
            break
          case 2:
            this.activeStatus.tab1_act = false
            this.activeStatus.tab2_act = true
            this.activeStatus.tab3_act = false
            this.tabJob = this.partJobObjs[1].results || []
            break
          case 3:
            this.activeStatus.tab1_act = false
            this.activeStatus.tab2_act = false
            this.activeStatus.tab3_act = true
            this.tabJob = this.partJobObjs[2].results || []
            break
          default:
            this.activeStatus.tab1_act = true
            this.activeStatus.tab2_act = false
            this.activeStatus.tab3_act = false
            this.tabJob = this.partJobObjs[0].results || []
        }
      }
    },
    components: {
      jobitem
    }
  }
</script>
