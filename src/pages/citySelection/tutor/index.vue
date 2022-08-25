<style lang='less' scoped>
.tutor-selection {
    padding-bottom: 0.15rem;
    .head-img {
        width: 100%;
        img {
            display: block;
            width: 100%;
        }
    }
    .categories {
        display: flex;
        position: relative;
        flex-wrap: wrap;
        width: 100%;
        .block {
            display: block;
            position: relative;
            width: 33%;
            img {
                display: block;
                width: 100%;
            }
            .right-line-top {
                top: -.37rem;
            }
            .right-line-bottom {
                top: -.3rem;
            }
            .right-line {
                position: absolute;
                right: 0;
                content: " ";
                width: 2px;
                height: 1rem;
                border-left: 1px solid #e1e1e1;
                color: #e1e1e1;
                transform-origin: 0 100%;
                transform: scaleY(0.5);
            }
        }
        .bottom-line {
            margin: 0 auto;
            position: absolute;
            top: 1.38rem;
            left: 0;
            right: 0;
            content: " ";
            width: 3.14rem;
            height: 2px;
            border-bottom: 1px solid #e1e1e1;
            color: #e1e1e1;
            transform-origin: 0 100%;
            transform: scaleY(0.5);
        }
    }
}
.title-img {
    margin-top: 0.17rem;
    width: 3.75rem;
    height: 0.4rem;
    img {
        width: 100%;
    }
}
.online-collection {
    margin: 0.25rem auto;
    left: 0;
    right: 0;
    width: 1.6rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border-radius: 0.4rem;
    border: 1px solid #858483;
    text-align: center;
    font-size: 0.17rem;
    color: #333;
}
.top-dis {
    margin-top: 0.5rem;
}
</style>
<template>
<div class="tutor-selection">
  <div class="head-img">
    <img src="https://qiniu-image.qtshe.com/m/H5/tutor_head.jpg" alt="">
  </div>
  <div class="categories">
    <div class="title-img">
      <img src="https://qiniu-image.qtshe.com/m/H5/subject_categories.jpg" alt="">
    </div>
    <div class="block" v-for="item, index in imgList" @click="jumpToList(item.label)">
      <img :src="item.src" alt="" />
      <div :class="index < 3 ? 'right-line-top' : 'right-line-bottom'" class="right-line" v-if="(index === 0) || (index === 1) || (index === 3) || (index === 4)"></div>
    </div>
    <div class="bottom-line"></div>
  </div>
  <div class="title-img" v-if="infoList.length">
    <img src="https://qiniu-image.qtshe.com/m/H5/senior_recommand.jpg" alt="">
  </div>
  <job-list :interPackage="interPackage" :infoList="infoList" :backgroundColor="'#fff'" style="margin-top: -.1rem;"></job-list>
  <div :class="infoList.length ? 'online-collection' : 'online-collection top-dis'" @click="jumpToList(14)">
    线上家教岗位
  </div>
</div>
</template>
<script>
import util from 'util'
import jobList from '../components/jobList'
export default {
  components: {
    jobList
  },
  data() {
    return {
      townId: 87,
      imgLabel: 13,
      interPackage: {},
      imgList: [{
        label: 7,
        src: 'https://qiniu-image.qtshe.com/m/H5/chinese.jpg'
      },
      {
        label: 8,
        src: 'https://qiniu-image.qtshe.com/m/H5/math.jpg'
      },
      {
        label: 9,
        src: 'https://qiniu-image.qtshe.com/m/H5/English.jpg'
      },
      {
        label: 10,
        src: 'https://qiniu-image.qtshe.com/m/H5/general.jpg'
      },
      {
        label: 11,
        src: 'https://qiniu-image.qtshe.com/m/H5/art.jpg'
      },
      {
        label: 12,
        src: 'https://qiniu-image.qtshe.com/m/H5/children.jpg'
      }
      ],
      infoList: []
    }
  },
  methods: {
    jumpToList(typeId) {
      this.$router.push({
        path: '/tutorSelectionList/' + typeId
      })
    },
    getList(typeId) {
      let type = typeId
      let townId = this.townId
      let postData = {
        type,
        townId
      }
      let promise = this.$axios.post('/activity/partJob/payActivity', postData).then(res => {
        this.handleList(res)
      })
    },
    getData() {
      this.getList(this.imgLabel)
    },
    handleList(res) {
      if (res.data.partJobs) {
        let list = res.data.partJobs
        list.map(item => {
          this.infoList.push(item)
        })
      }
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  },
  mounted() {
    this.townId = this.$route.params.townId || 87
    util.setCookie('townId', this.townId, 30)
    this.getData()
    // 初始化自定义分享内容
    this.interPackage.initShareInfo({
      title: '我愿意做一颗传播知识的种子',
      desc: '让更多孩子感受到学习的快乐',
      imgUrl: 'https://qiniu-image.qtshe.com/m/H5/tutor_service.jpg',
      showShareBtn: false
    })
  }
}
</script>
