<template>
  <div class="jiaxing-job-contain">
    <div class="head-box">
      <div class="head-image"></div>
      <div class="head-content">
        <div class="head-docs"></div>
        <div class="head-video">
          <video
            id="video"
            class="video-js vjs-default-skin vjs-big-play-centered"
            controls
            x5-playsinline
            playsinline
            webkit-playsinline
            preload
            style="width: 100%;height: 100%;object-fit: fill"
            poster="https://qiniu-image.qtshe.com/jiaxing/jiaxing-video-poster.png"
            data-setup="{}"
          >
            <source src="https://qiniu-image.qtshe.com/jiaxing/jiaxing-video.mp4" />
          </video>
        </div>
      </div>
    </div>
    <div class="content-contain">
      <div class="content-box">
        <div class="category-btn-box">
          <div
            v-for="(item, index) in category"
            :key="item.ref"
            @click="scrollToCategory(item)"
            v-bind:class="['category-btn',`category-btn-${index+1}`, {'category-btn-active': item.active}]"
          >
            <div class="category-text"></div>
          </div>
        </div>
        <div class="category-contain" ref="category1">
          <div class="category-title category-title-1"></div>
          <div class="category-box">
            <div @click="goJob" class="category-job-box category-job-box-1"></div>
            <div @click="goJob" class="category-more-btn"></div>
          </div>
        </div>
        <div class="category-contain" ref="category2">
          <div class="category-title category-title-2"></div>
          <div class="category-box">
            <div @click="goJob" class="category-job-box category-job-box-2"></div>
            <div @click="goJob" class="category-more-btn"></div>
          </div>
        </div>
        <div class="category-contain" ref="category3">
          <div class="category-title category-title-3"></div>
          <div class="category-box">
            <div @click="goJob" class="category-job-box category-job-box-3"></div>
            <div @click="goJob" class="category-more-btn"></div>
          </div>
        </div>
        <div class="category-contain" ref="category4">
          <div class="category-title category-title-4"></div>
          <div class="category-box">
            <div @click="goJob" class="category-job-box category-job-box-4"></div>
            <div @click="goJob" class="category-more-btn"></div>
          </div>
        </div>
        <div class="category-contain" ref="category5">
          <div class="category-title category-title-5"></div>
          <div class="category-box">
            <div @click="goJob" class="category-job-box category-job-box-5"></div>
            <div @click="goJob" class="category-more-btn"></div>
          </div>
        </div>
        <div class="category-contain" ref="category6">
          <div class="category-title category-title-6"></div>
          <div class="category-box">
            <div @click="goJob" class="category-job-box category-job-box-6"></div>
            <div @click="goJob" class="category-more-btn"></div>
          </div>
        </div>
        <div class="hot-news-box">
          <div class="hot-news-scroll">
            <div
              class="hot-news-list"
              :class="{transition: hasTransition}"
              :style="{ transform: hotNewsTop}"
            >
              <div
                @click="goLink('https://m.qtshe.com/activity/v1?activityMark=f18a61c7c09bd65b4aa374c5bf907191')"
                class="hot-news-item"
              >> 百万岗位虚位以待，全国首个城市网络</div>
              <div
                @click="goLink('https://m.qtshe.com/activity/v1?activityMark=f18a61c7c09bd65b4aa374c5bf907191')"
                class="hot-news-item"
              >招聘节在嘉兴开幕</div>
              <div
                @click="goLink('https://m.qtshe.com/activity/v1?activityMark=91143e8fb130943e7b447e2e0a1721bd')"
                class="hot-news-item"
              >> 嘉兴市就业创业相关政策</div>
              <div
                @click="goLink('https://m.qtshe.com/activity/v1?activityMark=2496e87515b3df5a0bbc27d6905186fb')"
                class="hot-news-item"
              >> 关于实施硕博倍增计划的若干政策意见</div>
              <div
                @click="goLink('https://m.qtshe.com/activity/v1?activityMark=f18a61c7c09bd65b4aa374c5bf907191')"
                class="hot-news-item"
              >> 百万岗位虚位以待，全国首个城市网络</div>
              <div
                @click="goLink('https://m.qtshe.com/activity/v1?activityMark=f18a61c7c09bd65b4aa374c5bf907191')"
                class="hot-news-item"
              >招聘节在嘉兴开幕</div>
            </div>
          </div>
        </div>
        <div class="highlights"></div>
        <div class="process"></div>
        <div class="foot-msg">
          <div>主办单位：嘉兴市人民政府</div>
          <div>承办单位：嘉兴市人力社保局、嘉兴市发展改革委、嘉兴市经信局</div>
          <div>服务热线：0573-82214748、13586360626</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import util from 'util'
import setWechatTitle from 'setWechatTitle'
export default {
  data() {
    return {
      interPackage: {},
      hasTransition: true,
      clickScrollGoing: false,
      hasActive: false,
      hotNewsSize: 3,
      retryCount: 0,
      isOffsetTop: false,
      hotNewsTop: 'translateY(0)',
      category: [
        { ref: 'category1', active: false },
        { ref: 'category2', active: false },
        { ref: 'category3', active: false },
        { ref: 'category4', active: false },
        { ref: 'category5', active: false },
        { ref: 'category6', active: false }
      ]
    }
  },
  mounted() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.interPackage.initShareInfo({
      title: '嘉兴万家企业百万岗位网络招聘节',
      desc: '我们在“嘉”等你！',
      imgUrl: 'https://qiniu-image.qtshe.com/jiaxing/share.png'
    })
    setWechatTitle('嘉兴万家企业百万岗位网络招聘节')
    setTimeout(() => {
      this.getCategoryOffsetTop()
    }, 1000)
    this.scrollBind = this.handleScroll.bind(this)
    let index = 0
    this.timer = setInterval(() => {
      index++
      if (index === this.hotNewsSize - 1) {
        setTimeout(() => {
          index = 0
          this.hasTransition = false
          this.$nextTick(() => {
            this.setHotNewsTop(index)
            setTimeout(() => {
              this.hasTransition = true
            }, 1000)
          })
        }, 1000)
      }
      this.setHotNewsTop(index)
    }, 3000)
    window.addEventListener('scroll', this.scrollBind)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollBind)
    clearInterval(this.timer)
  },
  methods: {
    goJob() {
      this.goLink(
        'https://www.renlibao.cn/jx/?from=singlemessage&isappinstalled=0'
      )
    },
    goLink(url) {
      window.location = url
    },
    getCategoryOffsetTop() {
      this.retryCount++
      this.category.map(item => {
        if (this.$refs[item.ref]) {
          item.top = this.$refs[item.ref].offsetTop
          if (item.top > 0) {
            this.isOffsetTop = true
          }
        }
      })
      if (!this.isOffsetTop && this.retryCount < 5) {
        setTimeout(() => {
          this.getCategoryOffsetTop()
        }, 2000)
      }
    },
    handleScroll() {
      const scrollTo =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTo < this.category[0].top - 700) {
        return this.hasActive && this.clearCategoryActive()
      } else if (scrollTo < this.category[1].top - 600) {
        return (
          !this.clickScrollGoing &&
          !this.category[0].active &&
          this.setCategoryActive(this.category[0])
        )
      }
    },
    setHotNewsTop(index) {
      this.hotNewsTop = `translateY(${index * (-100 / this.hotNewsSize)}%)`
    },
    clearCategoryActive() {
      this.category.forEach(item => (item.active = false))
      this.hasActive = false
    },
    setCategoryActive(item) {
      this.clearCategoryActive()
      item.active = true
      this.hasActive = true
    },
    scrollToCategory(item) {
      const top = this.$refs[item.ref].offsetTop - 10
      this.setCategoryActive(item)
      this.clickScrollGoing = true

      setTimeout(() => {
        this.goScrollTop(top)
        setTimeout(() => {
          this.clickScrollGoing = false
        }, 200)
      }, 100)
    },
    goScrollTop(top) {
      try {
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        })
      } catch (e) {
        if (document.documentElement.scrollTop) {
          document.documentElement.scrollTop = top
        } else {
          document.body.scrollTop = top
        }
      }
    }
  }
}
</script>
<style lang="less" >
@import "./index.less";
</style>
