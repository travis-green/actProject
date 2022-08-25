<style lang='less' scoped>
@dd: 300rem;
.item {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40/@dd 0;
    &::before {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        content: '';
        display: block;
        width: 94%;
        margin: 0 auto;
        border-top: 1px solid #e7e0d7;
    }
}
.item:first-child {
    &::before {
        border-top: 0 solid transparent;
    }
}
.item-text {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 50/@dd;
    color: #888888;
    font-size: 34/@dd;
    .span-left {
        width: 650/@dd;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .i-icon {
        display: inline-block;
        width: 40/@dd;
        height: 40/@dd;
        margin-right: 10/@dd;
        vertical-align: -8/@dd;
    }
    .icon-time {
        background: url("https://qiniu-image.qtshe.com//act/1501760559/icon_time.png") no-repeat center;
        background-size: 100%;
    }
    .icon-hot {
        background: url("https://qiniu-image.qtshe.com//act/1501760559/icon_hot.png") no-repeat center;
        background-size: 100%;
    }
    .icon-loaction {
        background: url("https://qiniu-image.qtshe.com//act/1501760559/icon_location.png") no-repeat center;
        background-size: 100%;
    }
}
.item-title {
    color: #333333;
    font-size: 50/@dd;
    padding-bottom: 18/@dd;
    .span-right {
        color: #e97261;
    }
}
</style>
<template>
<div class='item' @click="handleClick(jobItem)">
  <div class="item-text item-title">
    <span class="span-left">{{jobItem.title}}</span>
    <span class="span-right" v-show="false">{{jobItem.salary}}</span>
  </div>
  <div class="item-text">
    <span class="span-left"><i class="i-icon icon-time"></i>{{jobItem.jobDate}}</span>
    <span class="span-right"><i class="i-icon icon-hot"></i>热度{{jobItem.hotScore}}</span>
  </div>
  <div class="item-text">
    <span class="span-left"><i class="i-icon icon-loaction"></i>{{jobItem.addressDetail}}</span>
    <span class="span-right">{{jobItem.brandName}}</span>
  </div>
</div>
</template>
<script>
import util from 'util'
export default {
  props: {
    jobItemNum: 0,
    interPackage: {
      type: Object,
      default: () => {
        return {}
      }
    },
    jobItem: {
      type: Object,
      default: {
        'addressBuilding': '浙江省杭州市余杭区龙舟路金之源1楼',
        'addressDetail': '五味小菜(仓前店)',
        'areaId': 851,
        'brandName': ' 绩效奖金',
        'category': 'COMMON_PART_JOB',
        'clearingForm': {
          'chinese': '其他结算',
          'key': 'OTHER'
        },
        'companyType': 'ENTERPRISE',
        'contacter': '不会闹',
        'createTime': '2017-07-19 14:06:36',
        'duration': '7月19日',
        'entryCount': 1,
        'entryDeadline': '2017-08-19 23:59:59',
        'hotScore': 62,
        'jobCount': 25,
        'jobTime': '不限工作时间',
        'jobTimeStandard': '2017-07-26,2017-07-28',
        'latitude': 30.281002,
        'longitude': 119.993425,
        'needInterview': false,
        'newJobStandTime': '7月26日 - 7月28日 (共2天)',
        'objectType': 'PART_JOB',
        'partJobId': 89059,
        'partJobTitle': '新促销哦',
        'salary': '2元/小时',
        'salaryTimeUnit': {
          'chinese': '元/小时',
          'key': 'HOUR'
        },
        'salaryUnit': 2,
        'sexRequire': '男女不限',
        'status': 'ONGOING',
        'townId': 87,
        'type': 'SHORT_TERM',
        'viewCount': 0
      }
    }
  },
  data() {
    return {
      itemMsage: ''
    }
  },
  methods: {
    handleClick(item) {
      if (item.category === 'COMMON_PART_JOB') {
        this.interPackage.evokeNormalPartJobDetailPage(item.partJobId)
      } else {
        this.interPackage.evokePerfectPartJobDetailPage(item.partJobId)
      }
    }
  }
}
</script>
