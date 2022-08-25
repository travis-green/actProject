<template>
<div class="container">
  <img src="https://qiniu-image.qtshe.com/20200924question_bg.png" class="bg">
  <div v-for="(item, index) in questionList">
    <div class="question-box" v-if="index === actIndex">
      <div class="question-tips">· 第{{index + 1}}题 ·</div>
      <div class="question-title">{{item.title}}</div>
      <div class="answer-box">
        <div class="answer-item" v-for="(todo, index) in item.answers" :class="{success: todo.isActive === 1, error: todo.isActive === 2, active: todo.subTitle.length >= 14}" @click="handleSelct(index, item.rightKey)">{{index === 0 ? 'A. ' : index === 1 ? 'B. ' : index === 2 ? 'C. ' : index === 3 ? 'D. ' : ''}}{{todo.subTitle}}</div>
      </div>
      <div class="question-tips">{{index + 1}}/10</div>
    </div>
  </div>
  <div class="dialog" v-if="showDialog">
    <div class="dialog-back" catchtouchmove="preventDefault"></div>
    <div class="dialog-content">
      <img src="https://qiniu-image.qtshe.com/20200924user-name.png" />
      <input type="text" v-model="userName" placeholder="请输入你的名字" />
      <div class="look-result" @click="lookResult"></div>
    </div>
  </div>
</div>
</template>
<script>
import toast from 'toast'
import util from 'util'
import questionList from './answer.js'
import {
  Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      showDialog: false,
      interPackage: {},
      userName: '', // 用户姓名
      questionList: questionList, // 题库
      actIndex: 0, // 第几题
      answerRight: 0 // 答对几题
    }
  },
  methods: {
    initData() {

    },
    handleSelct(index, rightKey) {
      if (index === rightKey) {
        this.$set(this.questionList[this.actIndex].answers[index], 'isActive', 1)
        this.answerRight += 1
      } else {
        this.$set(this.questionList[this.actIndex].answers[index], 'isActive', 2)
        this.$set(this.questionList[this.actIndex].answers[rightKey], 'isActive', 1)
        this.vibration()
      }
      setTimeout(() => {
        if (this.actIndex === 9) {
          this.showDialog = true
        } else {
          this.actIndex += 1
        }
      }, 1500)
    },
    vibration() {
      navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
      if (navigator.vibrate) {
        // 支持
        navigator.vibrate([500, 300])
      } else {
        console.log('设备不支持震动！')
      }
    },
    preventDefault() {},
    lookResult() {
      window.location.href = `/act/greatWall/result?name=${this.userName}&answerRight=${this.answerRight}`
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
    this.sharebanner()
  },
  created() {
    this.initData()
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
<style lang='less' scoped>
img {
    width: 100%;
    display: block;
}
.bg {
    width: 100%;
    position: absolute;
    top: 0;
    max-width: 750px;
}
.question-box {
    width: 3rem;
    height: 3.3rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    max-width: 750px;
    top: 2.5rem;
    .question-tips {
        color: #6d320e;
        font-size: 0.13rem;
        width: 100%;
        text-align: center;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-top: 0.04rem;
    }
    .question-title {
        width: 100%;
        height: 0.7rem;
        display: flex;
        align-items: center;
        color: #6d320e;
        font-size: 0.17rem;
        padding-left: 0.2rem;
    }
    .answer-box {
        width: 100%;
        position: relative;
        overflow: hidden;
        .answer-item {
            width: 2.65rem;
            height: 0.38rem;
            background: #FDE5B2;
            border: 0.01rem solid #FFCD8B;
            border-radius: 0.035rem;
            color: #6D320E;
            margin: 0 auto 0.09rem;
            font-size: 0.16rem;
            padding-left: 0.1rem;
            display: flex;
            align-items: center;
            line-height: normal;
            position: relative;
            &.active {
                font-size: 0.14rem;
            }
            &.success {
                background: #32C6A2;
                color: #FFF;
                transition: all 0.3s;
                &:before {
                    content: '\2713';
                    color: #FFF;
                    position: absolute;
                    right: 0.1rem;
                }
            }
            &.error {
                background: #FF7046;
                color: #FFF;
                transition: all 0.3s;
                animation: shake-horizontal 0.3s;
                animation-iteration-count: 5;
                &:before {
                    content: '\2717';
                    color: #FFF;
                    position: absolute;
                    right: 0.1rem;
                }
            }
        }
    }
}

.dialog {
    width: 100%;
    max-width: 750px;
    .dialog-back {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        max-width: 750px;
        background: rgba(0,0,0,0.6);
    }
    .dialog-content {
        width: 3.05rem;
        height: 2.14rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: fixed;
        z-index: 999;
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        input {
            width: 2.5rem;
            height: 0.5rem;
            margin-top: 0.73rem;
            border: none;
            font-weight: 500;
            font-size: 0.16rem;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            position: relative;
            background: none;
            text-align: center;
            color: #612E10;
            &::-webkit-input-placeholder {
                color: #612E10;
            }
        }
        .look-result {
            width: 2.1rem;
            height: 0.45rem;
            margin: 0 auto;
            position: relative;
            margin-top: 0.48rem;
            border-radius: 0.23rem;
            opacity: 0;
        }
    }
}
@keyframes shake-horizontal {
    2% {
        transform: translate(-5px, 0) rotate(0);
    }

    4% {
        transform: translate(8px, 0) rotate(0);
    }

    6% {
        transform: translate(8px, 0) rotate(0);
    }

    8% {
        transform: translate(9px, 0) rotate(0);
    }

    10% {
        transform: translate(-7px, 0) rotate(0);
    }

    12% {
        transform: translate(1px, 0) rotate(0);
    }

    14% {
        transform: translate(-4px, 0) rotate(0);
    }

    16% {
        transform: translate(7px, 0) rotate(0);
    }

    18% {
        transform: translate(8px, 0) rotate(0);
    }

    20% {
        transform: translate(-7px, 0) rotate(0);
    }

    22% {
        transform: translate(9px, 0) rotate(0);
    }

    24% {
        transform: translate(8px, 0) rotate(0);
    }

    26% {
        transform: translate(-2px, 0) rotate(0);
    }

    28% {
        transform: translate(5px, 0) rotate(0);
    }

    30% {
        transform: translate(6px, 0) rotate(0);
    }

    32% {
        transform: translate(4px, 0) rotate(0);
    }

    34% {
        transform: translate(3px, 0) rotate(0);
    }

    36% {
        transform: translate(7px, 0) rotate(0);
    }

    38% {
        transform: translate(-1px, 0) rotate(0);
    }

    40% {
        transform: translate(3px, 0) rotate(0);
    }

    42% {
        transform: translate(10px, 0) rotate(0);
    }

    44% {
        transform: translate(3px, 0) rotate(0);
    }

    46% {
        transform: translate(-9px, 0) rotate(0);
    }

    48% {
        transform: translate(6px, 0) rotate(0);
    }

    50% {
        transform: translate(-8px, 0) rotate(0);
    }

    52% {
        transform: translate(6px, 0) rotate(0);
    }

    54% {
        transform: translate(1px, 0) rotate(0);
    }

    56% {
        transform: translate(5px, 0) rotate(0);
    }

    58% {
        transform: translate(-4px, 0) rotate(0);
    }

    60% {
        transform: translate(3px, 0) rotate(0);
    }

    62% {
        transform: translate(-5px, 0) rotate(0);
    }

    64% {
        transform: translate(7px, 0) rotate(0);
    }

    66% {
        transform: translate(-8px, 0) rotate(0);
    }

    68% {
        transform: translate(-2px, 0) rotate(0);
    }

    70% {
        transform: translate(-5px, 0) rotate(0);
    }

    72% {
        transform: translate(1px, 0) rotate(0);
    }

    74% {
        transform: translate(1px, 0) rotate(0);
    }

    76% {
        transform: translate(-9px, 0) rotate(0);
    }

    78% {
        transform: translate(6px, 0) rotate(0);
    }

    80% {
        transform: translate(8px, 0) rotate(0);
    }

    82% {
        transform: translate(10px, 0) rotate(0);
    }

    84% {
        transform: translate(-6px, 0) rotate(0);
    }

    86% {
        transform: translate(-1px, 0) rotate(0);
    }

    88% {
        transform: translate(5px, 0) rotate(0);
    }

    90% {
        transform: translate(-1px, 0) rotate(0);
    }

    92% {
        transform: translate(7px, 0) rotate(0);
    }

    94% {
        transform: translate(-3px, 0) rotate(0);
    }

    96% {
        transform: translate(-7px, 0) rotate(0);
    }

    98% {
        transform: translate(-4px, 0) rotate(0);
    }

    0%,
    100% {
        transform: translate(0, 0) rotate(0);
    }
}
</style>
