/**
* @description: 义工精选
* @author: zengtiansheng
* @update: 2017/10/24
*/
<style lang='less' scoped>
  @dd: 200rem;
  .swipe-banner{
    width: 100%;
    height: 300/@dd;// 300px / 200  = 1.5rem = 150px
  }
  .swipe-item{
    img {
      width: 100%;
    }
  }
  .fixed_tab_ball{
    position: fixed;
    top:0;
    left: 0;
    background: #ffffff;
  }
  .fill_tab_ball{
    width: 100%;
    height: 88/@dd;
  }
  .ul-tabs{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88/@dd;
    border-bottom: 1px solid #E5E5E5;
    .li-tab{
      width: 100%;
      text-align: center;
      font-size: 30/@dd;
      color: #333333;
    }
    .li_tab_act {
      position: relative;
      top:0;
      left: 0;
      color: #00CC88;
    }
    .li_tab_act::after{
      content: '';
      position: absolute;
      bottom: -20/@dd;
      left: 0;
      right: 0;
      display: inline-block;
      width: 40/@dd;
      height: 2px;
      margin: 0 auto;
      background: #00CC88;
    }
  }
  .rv{
    width: 100%;
    height: 800/@dd;
    background: red;
  }
</style>
<template>
  <section>
    <section class="swipe-banner" id="s_content_part1">
      <mt-swipe class="swipe-box" :auto="3000">
        <mt-swipe-item class="swipe-item">
          <img @click="toPerfectPageJobClick(132733)" src="https://qiniu-image.qtshe.com//act/volunteerV3/1508845149/banner1@1x.png" alt="banner1">
        </mt-swipe-item>
        <mt-swipe-item class="swipe-item">
          <img @click="toPerfectPageJobClick(132947)" src="https://qiniu-image.qtshe.com//act/volunteerV3/1508845149/banner2@1x.png" alt="banner2">
        </mt-swipe-item>
        <mt-swipe-item class="swipe-item">
          <img @click="toPerfectPageJobClick(132996)" src="https://qiniu-image.qtshe.com//act/volunteerV3/1508845149/banner3@1x.png" alt="banner3">
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <div :class="{fill_tab_ball:tabToTop}"></div>
    <ul class="ul-tabs" :class="{fixed_tab_ball:tabToTop}">
      <li class="li-tab" :class="{li_tab_act: n_tabNum===1}" @click="tabClick(1)">演唱会志愿者</li>
      <li class="li-tab" :class="{li_tab_act: n_tabNum===2}" @click="tabClick(2)">义工旅行</li>
      <li class="li-tab" :class="{li_tab_act: n_tabNum===0}" @click="tabClick(0)">义工精选</li>
    </ul>
    <compTba1 :n_tabNum="n_tabNum" v-show="n_tabNum===0"></compTba1>
    <compTba2 :n_tabNum="n_tabNum" v-show="n_tabNum===1"></compTba2>
    <compTba3 :n_tabNum="n_tabNum" v-show="n_tabNum===2"></compTba3>
  </section>
</template>
<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  import compTba1 from './components/compTab1'
  import compTba2 from './components/compTab2'
  import compTba3 from './components/compTab3'
  import setWechatTitle from 'setWechatTitle'
  import util from 'util'

  export default {
    data() {
      return {
        msg: '',
        n_tabNum: 1,
        part1_content_height: 0,
        scroll: 0,
        tabToTop: false,
        interPackage: {}
      }
    },
    created() {
      this.scroll = 0
      this.interPackage = util.getCurrentVersionInteractivePackage()
    },
    mounted() {
      setWechatTitle('免费看世界追爱豆')
      this.interPackage.initShareInfo({
        title: '即刻出发，免费看世界追爱豆！',
        desc: '诗和远方你都能有！',
        imgUrl: 'https://qiniu-image.qtshe.com//act/volunteerV3/1508845154/wx_share_img.jpg'
      })
      window.addEventListener('scroll', this.menu)
    },
    methods: {
      tabClick(tba_num) {
        this.n_tabNum = tba_num
      },
      toPerfectPageJobClick(pageID) {
        this.interPackage.evokePerfectPartJobDetailPage(pageID)
      },
      menu() {
        if (this.part1_content_height === 0) {
          this.part1_content_height = document.getElementById('s_content_part1').clientHeight
//          if (!this.isIosFlag) {
//            this.part1_content_height -= 12
//          }
        }
//        this.scroll = document.documentElement.scrollTop
        this.scroll = document.body.scrollTop
        this.scroll > this.part1_content_height ? this.tabToTop = true : this.tabToTop = false
        //this.navTabFitIosFlag = this.isIosFlag && this.tabToTop
        console.log(this.scroll)
      }
    },
    components: {
      'mtSwipe': Swipe,
      'mtSwipeItem': SwipeItem,
      compTba1,
      compTba2,
      compTba3
    }
  }
</script>
