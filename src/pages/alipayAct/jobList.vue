<style lang="less" scoped>
.job-list {
  width: 100%;
  .head {
    width: 100%;
    img {
      display: block;
      width: 100%;
    }
  }
  .container {
    width: 100%;
    .top-selection {
      position: relative;
      margin-top: .1rem;
      margin-bottom: .1rem;
      width: 100%;
      .block {
        display: inline-block;
        width: calc(100% / 3);
        text-align: center;
        height: .46rem;
        span {
          display: block;
          font-size: .15rem;
          color: #434343;
          border-right: 1px solid #e1e1e1;
          line-height: .3rem;
        }
        &:last-child {
          span {
            border-right: none;
          }
        }
      }
    }
    .main-content {
      width: 100%;
      padding: 0 .18rem;
      .content {
        padding: .14rem 0;
        width: 100%;
        border-bottom: 1px solid #e1e1e1;
        .left {
          display: inline-block;
          border-radius: .02rem;
          width: .57rem;
          vertical-align: middle;
          img {
            display: block;
            width: 100%;
          }
        }
        .right {
          display: inline-block;
          width: 81.9%;
          vertical-align: middle;
          .section {
            display: block;
            padding-left: .1rem;
            width: 100%;
            font-size: .13rem;
            color: #888888;
            &:first-child {
              .left-text {
                font-size: .14rem;
                font-weight: 900;
                color: #000;
              }
              .right-text {
                font-size: .14rem;
                font-weight: 900;
                color: #ea552f;
              }
            }
            .left-text {
              float: left;
            }
            .right-text {
              float: right;
            }
          }
        }
      }
    }
  }
}

.bottom-line {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.33%;
  height: .04rem;
  background: #3559d1;
  transition: ease all .3s;
}

.left-1 {
  left: 33.33%;
  transition: ease all .3s;
}

.left-2 {
  left: 66.8%;
  transition: ease all .3s;
}
</style>

<template>
  <div class="job-list">
    <div class="head">
      <img src="https://qiniu-image.qtshe.com/act/sesame/job_list_head.png" alt="">
    </div>
    <div class="container">
      <div class="top-selection">
        <div class="block" v-for="item, index in titleGroup" @click="handleCategoriesSelect(index)">
          <span>{{item.title}}</span>
        </div>
        <div class="bottom-line" :class="activeIndex === 1 ? 'left-1' : (activeIndex === 2 ? 'left-2' : '')"></div>
      </div>
      <div class="main-content">
        <div class="content clearfix" v-for="job in jobList" @click="handleClick(job)">
          <div class="left">
            <img :src="job.logo" alt="">
          </div>
          <div class="right">
            <div class="section clearfix">
              <span class="left-text">{{job.title}}</span>
              <span class="right-text">{{job.salary}}</span>
            </div>
            <div class="section clearfix">
              <span class="left-text">{{job.subtitle}}</span>
              <span class="right-text">{{job.location}}</span>
            </div>
            <div class="section clearfix">
              <span class="left-text">{{job.prepay}}</span>
              <span class="right-text">{{`芝麻信用${job.sesameScore}`}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from 'util'
import { MessageBox } from 'mint-ui'
export default {
  computed: {
    jobList() {
      if (this.activeIndex === 0) {
        return this.testList
      } else if (this.activeIndex === 1) {
        return this.partJobList
      } else {
        return this.practiceList
      }
    }
  },
  data() {
    return {
      activeIndex: 0,
      titleGroup: [
        {
          title: '体验测评',
          value: ''
        },
        {
          title: '信用兼职',
          value: ''
        },
        {
          title: '信用实习',
          value: ''
        }
      ],
      testList: [
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_26.jpg',
          title: '无人超市购物体验员',
          subtitle: '预付薪资、简单易做',
          prepay: '预付25元',
          salary: '50元/次',
          location: '杭州',
          sesameScore: '630',
          jobId: 114902,
          alipayId: 445167
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_20.jpg',
          title: '家园环保人',
          subtitle: '预付薪资、简单易做',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114908,
          alipayId: 445157
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_14.jpg',
          title: 'VR眼镜体验员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114912,
          alipayId: 445144
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_10.jpg',
          title: '羽毛球拍测试员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114915,
          alipayId: 445133
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_06.jpg',
          title: 'Usb插座体验员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114918,
          alipayId: 445127
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_03.jpg',
          title: '迷你音响测试员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114919,
          alipayId: 445113
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_24.jpg',
          title: '便携小风扇体验员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114904,
          alipayId: 445164
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_16.jpg',
          title: '旅行收纳包测评员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114911,
          alipayId: 445148
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_22.jpg',
          title: '蓝色可乐试喝员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114907,
          alipayId: 445162
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_08.jpg',
          title: '反重力胶垫体验员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114917,
          alipayId: 445131
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_12.jpg',
          title: '多肉植物养护员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114913,
          alipayId: 445136
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_18.jpg',
          title: '水培花瓶体验员',
          subtitle: '预付薪资、免费体验',
          prepay: '预付5元',
          salary: '10元/次',
          location: '全国',
          sesameScore: '630',
          jobId: 114909,
          alipayId: 445150
        }
      ],
      partJobList: [
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_51.jpg',
          title: '兼职手绘漫画设计',
          subtitle: '预付薪资、简单易做',
          prepay: '预付50元',
          salary: '100元/次',
          location: '全国',
          sesameScore: '600',
          jobId: 115550,
          alipayId: 437546
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_49.png',
          title: '在线平面设计人员',
          subtitle: '预付薪资、简单易做',
          prepay: '预付50元',
          salary: '100元/次',
          location: '全国',
          sesameScore: '600',
          jobId: 116934,
          alipayId: 445061
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_7.jpg',
          title: '直播评论员',
          subtitle: '看直播也能赚钱',
          prepay: '预付100元',
          salary: '200元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3215011,
          alipayId: 431504
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_35.jpg',
          title: '全国在线主播',
          subtitle: '预付工资、在家可做',
          prepay: '预付20元',
          salary: '20元/小时',
          location: '全国',
          sesameScore: '600',
          jobId: 114616,
          alipayId: 444868
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_4.jpg',
          title: '短视频录制体验官',
          subtitle: '轻松领红包',
          prepay: '预付50元',
          salary: '50元/次',
          location: '全国',
          sesameScore: '600',
          jobId: 3213139,
          alipayId: 463992
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_31.jpg',
          title: '汽车知识培训充场',
          subtitle: '预付工资、可拿证书',
          prepay: '预付50元',
          salary: '50元/小时',
          location: '杭州',
          sesameScore: '600',
          jobId: 114029,
          alipayId: 436861
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_37.jpg',
          title: '陌陌直播主播',
          subtitle: '预付工资、在家可做',
          prepay: '预付20元',
          salary: '20元/小时',
          location: '深圳',
          sesameScore: '600',
          jobId: 114304,
          alipayId: 444869
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_1.jpg',
          title: '必胜客门店兼职',
          subtitle: '时薪高，工资预付',
          prepay: '预付50元',
          salary: '19元/小时',
          location: '全国',
          sesameScore: '600',
          jobId: 3253933,
          alipayId: 446149
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_3.jpg',
          title: '肯德基门店兼职',
          subtitle: '时薪高，工资预付',
          prepay: '预付50元',
          salary: '15元/小时',
          location: '全国',
          sesameScore: '600',
          jobId: 3254202,
          alipayId: 446151
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_2.jpg',
          title: '哈根达斯门店兼职',
          subtitle: '冰激凌球免费吃',
          prepay: '预付50元',
          salary: '17元/小时',
          location: '全国',
          sesameScore: '600',
          jobId: 3253689,
          alipayId: 445799
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_39.jpg',
          title: '才艺主播',
          subtitle: '预付工资、在家可做',
          prepay: '预付20元',
          salary: '20元/小时',
          location: '全国',
          sesameScore: '600',
          jobId: 110788,
          alipayId: 445426
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_43.jpg',
          title: 'CEO助理',
          subtitle: '预付日薪 、666元/天',
          prepay: '预付250元',
          salary: '666元/天',
          location: '杭州',
          sesameScore: '600',
          jobId: 114395,
          alipayId: 435632
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_41.jpg',
          title: '兼职测试工程师',
          subtitle: '预付日薪 、200元/天',
          prepay: '预付100元',
          salary: '200元/天',
          location: '杭州',
          sesameScore: '600',
          jobId: 110838,
          alipayId: 405563
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_5.jpg',
          title: '达美乐披萨配送',
          subtitle: '时薪高，工资预付',
          prepay: '预付50元',
          salary: '20元/小时',
          location: '全国',
          sesameScore: '600',
          jobId: 3254041,
          alipayId: 446394
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_6.jpg',
          title: '若比邻便利店推广',
          subtitle: '简单轻松',
          prepay: '预付50元',
          salary: '90元/天',
          location: '广州',
          sesameScore: '600',
          jobId: 3253623,
          alipayId: 445682
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_28.jpg',
          title: '网络主播',
          subtitle: '预付薪资、免费培训',
          prepay: '预付20元',
          salary: '20元/小时',
          location: '青岛',
          sesameScore: '600',
          jobId: 114115,
          alipayId: 444866
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_33.jpg',
          title: '线下主播',
          subtitle: '预付工资、高额提成',
          prepay: '预付30元',
          salary: '30元/小时',
          location: '杭州',
          sesameScore: '600',
          jobId: 113820,
          alipayId: 424308
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_8.jpg',
          title: '粉丝群管理员',
          subtitle: '做爱豆的护花使者',
          prepay: '预付100元',
          salary: '200元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3230468,
          alipayId: 437894
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_45.jpg',
          title: '手绘美工',
          subtitle: '预付工资、发展空间大',
          prepay: '预付100元',
          salary: '1000元/月',
          location: '上海',
          sesameScore: '600',
          jobId: 115052,
          alipayId: 434209
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/job_47.jpg',
          title: '轮滑培训教练',
          subtitle: '预付工资、带薪休假',
          prepay: '预付17元',
          salary: '17元/小时',
          location: '成都',
          sesameScore: '600',
          jobId: 114937,
          alipayId: 433662
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_9.jpg',
          title: '文档协助员',
          subtitle: '会打字就能赚钱',
          prepay: '预付50元',
          salary: '50元/次',
          location: '全国',
          sesameScore: '600',
          jobId: 3231111,
          alipayId: 438128
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_10.jpg',
          title: '小黄车调度员',
          subtitle: '就近安排，周末兼职',
          prepay: '预付50元',
          salary: '150元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3198006,
          alipayId: 423217
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_11.jpg',
          title: '兼职平面设计',
          subtitle: '工作简单，薪资高',
          prepay: '预付50元',
          salary: '50元/图',
          location: '全国',
          sesameScore: '600',
          jobId: 3253623,
          alipayId: 445659
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_12.jpg',
          title: 'jy club狼人杀法官',
          subtitle: '相爱相杀，边玩边挣钱',
          prepay: '预付75元',
          salary: '150元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3090801,
          alipayId: 396823
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_13.jpg',
          title: '奥秘之家游戏引导员',
          subtitle: '边玩边挣钱',
          prepay: '预付75元',
          salary: '150元/天',
          location: '北京、长沙、武汉',
          sesameScore: '600',
          jobId: 3253365,
          alipayId: 445575
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_14.jpg',
          title: 'YY多玩俱乐部',
          subtitle: '锻炼能力，结交朋友',
          prepay: '预付100元',
          salary: '200元/周',
          location: '全国',
          sesameScore: '600',
          jobId: 3253491,
          alipayId: 445605
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_15.jpg',
          title: '方言种类收集官',
          subtitle: '有些乡音此身不换',
          prepay: '预付50元',
          salary: '100元/次',
          location: '全国',
          sesameScore: '600',
          jobId: 3229549,
          alipayId: 438131
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_16.jpg',
          title: '游戏BUG捡陋员',
          subtitle: '在家游戏人生',
          prepay: '预付75元',
          salary: '150元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3253706,
          alipayId: 445797
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_17.jpg',
          title: '动漫APP互动交流员',
          subtitle: '喜欢动漫你就来',
          prepay: '预付75元',
          salary: '150元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3253715,
          alipayId: 445798
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_18.jpg',
          title: '电视剧细心咖',
          subtitle: '只愿做个吃瓜群众',
          prepay: '预付100元',
          salary: '100元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3230302,
          alipayId: 445578
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_19.jpg',
          title: '游玩儿分享官',
          subtitle: '分享图片就赚钱 ',
          prepay: '预付50元',
          salary: '100元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3230095,
          alipayId: 437819
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/doumi_20.jpg',
          title: '月亮拍摄采集员',
          subtitle: '月亮拍摄采集员',
          prepay: '预付50元',
          salary: '100元/天',
          location: '全国',
          sesameScore: '600',
          jobId: 3230526,
          alipayId: 438130
        }
      ],
      practiceList: [
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/baicizhan1.jpg',
          title: '百词斩-薄荷阅读线上教学',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '150-200元/天',
          location: '成都',
          sesameScore: '600',
          jobId: 255120,
          alipayId: 255120
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/shixiseng.jpg',
          title: '项目助理（北京）',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '150元/天',
          location: '北京',
          sesameScore: '600',
          jobId: 101831,
          alipayId: 101831
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/qingting.jpg',
          title: '主播服务实习生',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '80-100元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 35041,
          alipayId: 35041
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/shixiseng.jpg',
          title: '项目助理（上海）',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '150元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 17073,
          alipayId: 17073
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/qingting.jpg',
          title: '社群运营实习生',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '80-100元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 182197,
          alipayId: 182197
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/shixiseng.jpg',
          title: 'M小队-品牌创意实习生',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '150元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 27038,
          alipayId: 27038
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/qingting.jpg',
          title: '社区运营实习生',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '80-100元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 182181,
          alipayId: 182181
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/shixiseng.jpg',
          title: '校园渠道助理-学生端',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '100-150元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 111017,
          alipayId: 111017
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/qingting.jpg',
          title: '新媒体运营',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '80-100元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 13912,
          alipayId: 13912
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/shixiseng.jpg',
          title: '信息审核',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '100元/天',
          location: '成都',
          sesameScore: '600',
          jobId: 62566,
          alipayId: 62566
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/qingting.jpg',
          title: '销售助理实习生',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '80-100元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 35811,
          alipayId: 35811
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/shixiseng.jpg',
          title: '项目助理（成都）',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '100元/天',
          location: '成都',
          sesameScore: '600',
          jobId: 101258,
          alipayId: 101258
        },
        {
          logo: 'https://qiniu-image.qtshe.com/act/sesame/qingting.jpg',
          title: '财务实习生',
          subtitle: '预付月薪、正规实习',
          prepay: '一个月工资(不超过3k)',
          salary: '80-100元/天',
          location: '上海',
          sesameScore: '600',
          jobId: 74747,
          alipayId: 74747
        }
      ]
    }
  },
  methods: {
    getSesameScore() {
      if (!util.getQueryString('score')) {
      } else {
        sessionStorage.setItem('sesameScore', util.getQueryString('score'))
      }
    },
    handleClick(item) {
      let time = Date.parse(new Date())
      let redirectUrl = window.location.href
      let sesameAuthUrl = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2015111300783988&scope=auth_base,auth_zhima&redirect_uri=https://api.qtshe.com/zmCenter/act/callback?callbackUrl=${redirectUrl}`
      let partTimeUrl = `https://render.alipay-eco.com/p/x/aliapp-webonline/detail.html?post_id=${item.alipayId}&time=${time}`
      let practiceUrl = `http://www.anijue.com/p/q/campusjob/index.html#/jobInfo/?jobType=1&jobId=${item.alipayId}&time=${time}`
      let jobDetailUrl = (item.jobId === item.alipayId ? practiceUrl : partTimeUrl)
      let sesameScore = sessionStorage.getItem('sesameScore')
      if (!sesameScore) {
        window.location.href = sesameAuthUrl
      } else {
        if (item.sesameScore > sesameScore) {
          MessageBox.alert(`您的芝麻信用分是${sesameScore}，岗位所需最低信用分是${item.sesameScore}，试试其他岗位吧`, '提示')
        } else {
          window.location.href = jobDetailUrl
        }
      }
    },
    checkActiveIndexExist() {
      let activeIndex = parseInt(sessionStorage.getItem('activeIndex'))
      if (activeIndex) {
        this.activeIndex = activeIndex
      } else {
        this.activeIndex = 0
      }
      console.log(this.activeIndex)
    },
    handleCategoriesSelect(index) {
      this.activeIndex = index
      sessionStorage.setItem('activeIndex', this.activeIndex)
    }
  },
  mounted() {
    this.getSesameScore()
    this.checkActiveIndexExist()
  },
  created() {
    try {
      AlipayJSBridge.call('setTitle', {
        title: '大学生信用节'
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

