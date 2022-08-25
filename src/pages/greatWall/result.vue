<style lang='less' scoped>
img {
    width: 100%;
    display: block;
    // -webkit-touch-callout: none;
    // -webkit-user-select: none;
    // -khtml-user-select: none;
    // -moz-user-select: none;
    // -ms-user-select: none;
    // user-select: none;
}
.bg {
    width: 100%;
    position: fixed;
    left: -9999px;
    .result-bg {
        width: 100%;
        max-width: 750px;
    }
    .content-box {
        width: 100%;
        position: absolute;
        top: 0.87rem;
        .name {
            width: 0.96rem;
            margin-left: 0.5rem;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 0.14rem;
            color: #ffe597;
            font-weight: bold;
        }
        .call {
            color: #FE5F31;
            font-size: 0.14rem;
            margin: 0.86rem 0 0 0.6rem;
            width: 1.1rem;
            text-align: center;
            span {
                font-size: 0.55rem;
                font-weight: bold;
            }
        }
        .question-box {
            width: 100%;
            padding: 0 0.4rem;
            margin-top: 1.2rem;
            .question-title {
                color: #612E10;
                font-size: 0.12rem;
                font-weight: 600;
            }
            .question-answer {
                width: 100%;
                color: #612E10;
                font-size: 0.12rem;
            }
        }
    }
}
</style>
<template>
<div>
  <div class="bg" ref="container">
    <img src="https://qiniu-image.qtshe.com/2020092701.png" class="result-bg" v-if="answerRight < 6" />
    <img src="https://qiniu-image.qtshe.com/2020092702.png" class="result-bg" v-if="answerRight >= 6 && answerRight < 8" />
    <img src="https://qiniu-image.qtshe.com/2020092703.png" class="result-bg" v-if="answerRight >= 8 && answerRight < 10" />
    <img src="https://qiniu-image.qtshe.com/2020092704.png" class="result-bg" v-if="answerRight === 10" />
    <div class="content-box">
      <div class="name">{{name}}</div>
      <div class="call"><span>{{answerRight}}<span v-if="answerRight !== 0">0</span></span>%</div>
      <div class="question-box">
        <div class="question-title">Q：{{questionTitle}}</div>
        <div class="question-title">A：{{questionAnswer}}</div>
        <div class="question-answer">解析：{{questionDesc}}</div>
      </div>
    </div>
  </div>
  <img :src="image" alt="">
  <img src="https://qiniu-image.qtshe.com/2020092705.png" v-if="image" style="margin-top: -1px;" />
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import questionList from './answer.js'
export default {
  data() {
    return {
      image: '',
      interPackage: {},
      answerRight: 0,
      name: '', // 用户姓名
      questionTitle: '',
      questionAnswer: '',
      questionDesc: ''
    }
  },
  methods: {
    async createImage() {
      const el = this.$refs.container
      const options = {
        type: 'dataURL',
        useCORS: true
      }
      this.image = await this.$html2canvas(el, options)
    },
    randomDesc() {
      let index = Math.floor(Math.random() * 10)
      this.questionTitle = questionList[index].title
      this.questionAnswer = questionList[index].answers[questionList[index].rightKey].subTitle
      this.questionDesc = questionList[index].desc
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '「长城守护砖员」招募',
        desc: '假期限定，带你体验不一样的万里长城',
        imgUrl: 'https://ojlf2aayk.qnssl.com/WechatIMG47.png'
      })
    }
  },
  mounted() {
    this.randomDesc()
    this.sharebanner()
    this.createImage()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.answerRight = +this.$route.query.answerRight
    this.name = decodeURIComponent(this.$route.query.name) || '青团子'
  }
}
</script>
