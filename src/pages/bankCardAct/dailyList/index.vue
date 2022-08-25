<style lang="less" scoped>
  .daily-act-list {
    padding-top: 0.46rem;
    width: 100%;
    .content {
      padding: 0 0.16rem;
      li {
        .main {
          display: flex;
          position: relative;
          padding: 0.16rem 0;
          border-bottom: 0.01rem solid #eeeeee;
          .text-expand {
            position: relative;
            margin-bottom: 0.09rem;
            left: 2.15rem;
            font-size: 0.11rem;
            width: 0.25rem;
            top: -0.3rem;
            line-height: 0.16rem;
            color: #448aff;
          }
          .left-sec {
            img {
              width: 0.86rem;
              height: 0.86rem;
            }
          }
          .right-sec {
            padding-left: .2rem;
          }
        }
        &:last-child {
          border-bottom: none;
        }
        .title {
          margin-bottom: 0.16rem;
          font-size: 0.14rem;
          color: #3c3c3c;
        }
        .intro {
          height: auto;
          transition: ease all 0.3s;
          margin-bottom: 0.36rem;
          font-size: 0.12rem;
          color: #3c3c3c;
          overflow: hidden;
          text-align: justify;
        }
        .expand {
          height: 0.52rem;
          transition: ease all 0.3s;
        }
        .btn {
          position: absolute;
          right: 0;
          bottom: 0.16rem;
          padding: 0.05rem 0.1rem;
          line-height: 0.18rem;
          font-size: 0.11rem;
          color: #fff;
          text-align: center;
          border-radius: 0.04rem;
          background: #448aff;
          cursor: pointer;
        }
      }
    }
  }
  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.5s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }
</style>


<template>
  <div class="daily-act-list">
    <week-tab @getWeekday="handleWeekdayGot" />
    <div class="content">
      <transition-group tag="ul" name="slide-fade">
        <li v-for="item, index in content" v-if="item.weekday === weekday" :key="item.weekday">
          <div class="main" v-for="main, m in item.content" :key="m" v-if="main.deadline >= new Date().getTime()">
            <div class="left-sec">
              <img :src="main.cardImg" alt="">
            </div>
            <div class="right-sec">
              <div class="title">{{main.title}}</div>
              <div :class="contentStatusArr[m] === false ? 'intro expand' : 'intro'">
                <p v-for="content, i in main.content" :key="i">{{content}}</p>
              </div>
              <div class="text-expand" @click="handleExpandClick(m)" v-if="contentStatusArr[m] !== ''">{{contentStatusArr[m] === false ? '展开' : (contentStatusArr[m] === true ? '收起' : '')}}</div>
            </div>
            <div class="btn" @click="handleClick(main.bankLink)">
              点击办卡
            </div>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import util from 'util'
  import data from './config'
  import weekTab from './components/tab'
  export default {
    components: {
      weekTab
    },
    data() {
      return {
        interPackage: {},
        contentStatusArr: [],
        content: data,
        lastClick: 1,
        weekday: 1
      }
    },
    methods: {
      handleExpandClick(index) {
        this.$set(this.contentStatusArr, index, !this.contentStatusArr[index])
      },
      handleClick(url) {
        window.location.href = url
      },
      handleContentExpandStatus() {
        let weekContent = this.content.filter(
          item => item.weekday === this.weekday
        )[0]
        this.contentStatusArr = weekContent.content.map(con => {
          let strLength =
            con.content.join(',').length - weekContent.content.length + 1
          if (strLength > 70) {
            con.isExpand = false
          } else {
            con.isExpand = ''
          }
          return con.isExpand
        })
        console.log(this.content)
      },
      handleWeekdayGot(day) {
        this.weekday = day
        setTimeout(() => {
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
          this.handleContentExpandStatus()
        }, 400)
      }
    },
    created() {
      this.interPackage = util.getCurrentVersionInteractivePackage()
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '大学生如何利用校园信用卡省钱薅羊毛？| 青团社·校园信用卡中心',
        desc: '大学生办理信用卡首选平台'
      })
    }
  }
</script>

