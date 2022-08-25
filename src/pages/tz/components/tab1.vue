<template>
  <div class="tab-content" :class="{'tab-content-act':tabFixedFlag}">
    <div class="desc-content">
      <div class="desc-text" v-for="(item, index) in rules" :key="index">
        <span class="span-dot">·</span>
        <span>{{item}}</span>
      </div>
    </div>
    <div class="rule-content">
      <div class="title">
        <span class="span-line"></span>
        <span class="span-text">活动细则</span>
        <span class="span-line"></span>
      </div>
      <ul class="ul-rule-items">
        <li class="li-item">
          <img class="item-img" src="https://qiniu-image.qtshe.com/act/tz/0608/decs-img1.png" alt="">
          <p class="itme-p">点击招募按钮或右上角分享给好友</p>
        </li>
        <li class="li-item">
          <img class="item-img" src="https://qiniu-image.qtshe.com/act/tz/0608/decs-img2.png" alt="">
          <p class="itme-p">好友打开链接并下载安装</p>
        </li>
        <li class="li-item">
          <img class="item-img" src="https://qiniu-image.qtshe.com/act/tz/0608/decs-img3.png" alt="">
          <p class="itme-p">好友报名兼职／完成小任务即可获得奖励</p>
        </li>
      </ul>
    </div>
    <div class="btn-up-top-content" @click.stop="btnUpTopClick">
      <div class="btn-up-top"></div>
    </div>
  </div>
</template>
<script>
  import toast from 'toast'
  import API from '../API.js'

  export default {
    props: {
      tabFixedFlag: false
    },
    data() {
      return {
        rules: []
      }
    },
    mounted() {
      this.getChiefRules()
    },
    methods: {
      async getChiefRules () {
        try {
          const res = await this.$axios.post(API.chiefRules)
          if (res.success) {
            this.rules = JSON.parse(res.data.module.rules)
          } else {
            toast(res.msg || '服务器错误，请稍后重试')
          }
        } catch (error) {
          console.log(error)
          toast('网络异常')
        }
      },
      btnUpTopClick() {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        const r = () => {
          osTop -= 30
          document.documentElement.scrollTop = document.body.scrollTop = osTop
          if (osTop <= 0) {
            cancelAnimationFrame(r)
            return
          }
          requestAnimationFrame(r)
        }
        r()
      }
    }
  }
</script>
<style lang='less' scoped>
@dd: 100rem;
.tab-content{
  // height: 100%;
  // overflow: hidden;
  background: #ffffff;
  border-radius: 0 6/@dd 0 0;
}
.tab-content-act{
  overflow: auto;
}
.desc-content{  
  color: #6C6C6C;
  font-size: 14/@dd;
  padding: 9/@dd;
  .span-dot{
    display: inline-block;
    font-size: 24/@dd;
    padding: 0 9/@dd;
    line-height: 1;
  }
  .desc-text{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 25/@dd;
  }
  .desc-text-tow{
    margin-top: 25/@dd;
  }
}
.rule-content{
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      display: inline-block
    }
    .span-line{
      width:30px;
      height:1px;
      background:rgba(204,204,204,1);
      border-radius:1px;
      vertical-align: 4/@dd;
    }
    .span-text{
      padding: 0 10/@dd;
      color: #FB8C00;
      font-size: 16/@dd;
    }
  }
  .ul-rule-items{
    .li-item{
      margin-top: 35/@dd;
      text-align: center;
    }
    .item-img{
      width: 80/@dd;
      height: 80/@dd;
    }
    .itme-p{
      color:rgba(60,60,60,1);
      font-size: 14/@dd;
    }
  }
}
.btn-up-top-content{
    padding: 40/@dd 0 10/@dd;
}
.btn-up-top{
  width: 10/@dd;
  height: 10/@dd;
  margin: 0 auto;
  background: url('https://qiniu-image.qtshe.com/act/tz/0608/up-icon.png') no-repeat center;
  background-size: 100%;
}
</style>
