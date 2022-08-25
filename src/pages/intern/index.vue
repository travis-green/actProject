/**
* @description: 实习生活动页
* @author: zengtiansheng
* @update: 2017/8/10
*/
<style lang='less' scoped>
  @dd: 300rem;
  .intern {
    width: 100%;
    background: #779eda;
  }

  .s-content {
    width: 100%;
    padding-bottom: 105/@dd;
    header {
      width: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
  }

  .s-content2 {
    background: #82a8e2;
    padding-bottom: 125/@dd;
  }
</style>

<template>
  <div class="intern">
    <section class="s-content s-content1">
      <header>
        <img class="head-img1" src="https://qiniu-image.qtshe.com/act/intern/1502348864/section1_headimg.jpg" alt="section1_headimg">
      </header>
      <jobitem :interPackage="interPackage" :indexItem="0"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="1"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="2"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="3"></jobitem>
    </section>
    <section class="s-content s-content2">
      <header>
        <img class="head-img2" src="https://qiniu-image.qtshe.com/act/intern/1502348864/section2_headimg.jpg" alt="section1_headimg">
      </header>
      <jobitem :interPackage="interPackage" :indexItem="4"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="5"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="6"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="7"></jobitem>
    </section>
    <section class="s-content s-content3">
      <header>
        <img class="head-img3" src="https://qiniu-image.qtshe.com/act/intern/1502348864/section3_headimg.jpg" alt="section1_headimg">
      </header>
      <jobitem :interPackage="interPackage" :indexItem="8"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="9"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="10"></jobitem>
      <jobitem :interPackage="interPackage" :indexItem="11"></jobitem>
    </section>
    <!--<router-link class="btn-more" to="/findjob"></router-link>-->
  </div>
</template>

<script>
  import setWechatTitle from 'setWechatTitle'
  import libUtil from '../../lib/util'
  import util from 'util'
  import jobitem from './components/jobitem'
  export default {
    data() {
      return {
        interPackage: {},
        sendData: {
          townId: 0,
          labelId: 4558
        }
      }
    },
    created() {
      this.interPackage = util.getCurrentVersionInteractivePackage()
    },
    mounted() {
      setWechatTitle('找工作就要快人一步')
      this.sharebanner()
    },
    methods: {
      sharebanner() {
        // 初始化自定义分享内容
        this.interPackage.initShareInfo({
          title: '实习找工作就要快人一步',
          desc: '各类快速入职岗位等你来选',
          imgUrl: 'https://qiniu-image.qtshe.com/act/intern/1502348864/intern_shareimg.jpeg'
        })
      }
    },
    components: {
      jobitem
    }
  }
</script>
