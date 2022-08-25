<style lang='less' scoped>
.qualitylist {
  width: 100%;
  padding-top: 0.2rem;
  background: #ffffff;

  .imgmodel {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .mod-center {
    width: 100%;

    .moveclass {
      width: calc(~"100% - 0.24rem");
      margin-left: 0.12rem;
      margin-bottom: 0.12rem;
      position: relative;
      overflow: hidden;
      border-radius: 0.12rem;

      image[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      img {
        width: 100%;
        float: left;
      }

      .imgmodel {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .qualitycon {
        width: 100%;
        position: absolute;
        float: left;
        padding: 0 0.12rem;
        top: 36%;
        text-align: center;

        .qualititle {
          font-size: 0.18rem;
          color: #ffffff;
          text-shadow: 0 2px 1px rgba(0, 0, 0, 0.25);
        }

        .qualitdesc {
          font-size: 0.12rem;
          color: #ffffff;
          text-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
.lookmore {
  width: 40%;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  color: #ffffff;
  margin-left: 30%;
  background: #47cd88;
  font-size: 0.16rem;
  border-radius: 0.5rem;
  margin-top: 0.2rem;
}
</style>
<template>
  <div style="padding-bottom:.4rem;">
    <div class="qualitylist">
      <ul class="mod-center">
        <li class="moveclass" v-for="(item,index) in items" :key="index">
          <div style="position: relative;overflow: hidden;" @click="jumpquality(item.targetUrl, item.param, item.jumpType)">
            <img v-lazy="item.image">
            <div class="qualitycon">
              <div class="qualititle">{{item.title}}</div>
              <div class="qualitdesc">{{item.subTitle}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="lookmore" v-show="showlook" @click="jumplabel(740)">查看更多</div>
  </div>
</template>
<script>
import toast from "toast";
import util from "util";
import wx from "wx";
import { Indicator } from "mint-ui";
import setWechatTitle from "setWechatTitle";
export default {
  data() {
    return {
      interPackage: {},
      items: [],
      showlook: false,
      partJobId: "",
    };
  },
  methods: {
    initData() {
      let postData = {
        pageNum: 0,
        pageSize: 30,
        resourceType: 100,
      };
      // this.$axios.post("/activityPoll/h5/traval", postData).then((data) => {
      //   Indicator.close();
      //   // if (data.success) {
      //   this.showlook = true;
      //   // this.items = data.data.recourceLocations;
      //   // } else {
      //   //   toast(data.errMsg)
      //   // }
      // });
    },
    jumpquality(url, param, jumpType) {
      param = param && JSON.parse(param);
      if (!util.isEmpty(param[2])) {
        // window.location.href = url + '?' + param[0].key + '=' + param[0].value + '&' + param[1].key + '=' + param[1].value + '&' + param[2].key + '=' + param[2].value
        this.partJobId = param[2].value;
      } else if (!util.isEmpty(param[1])) {
        // window.location.href = url + '?' + param[0].key + '=' + param[0].value + '&' + param[1].key + '=' + param[1].value
        this.partJobId = param[1].value;
      } else {
        console.log(param[0].value);
        //window.location.href = url + '?' + param[0].key + '=' + param[0].value
        this.partJobId = param[0].value;
      }
      if (jumpType === 3) {
        this.interPackage.evokeNormalPartJobDetailPage(this.partJobId);
      } else if (jumpType === 4) {
        this.interPackage.evokePerfectPartJobDetailPage(this.partJobId);
      } else if (jumpType === 13) {
        this.interPackage.evokeLightTaskDetailPage(this.partJobId);
      }
    },
    jumplabel(labelId) {
      this.interPackage.evokeLabelListPage(labelId);
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: "qwe123123",
        desc: "123123123",
        imgUrl: "https://badsasd.pnd",
      });
    },
  },
  mounted() {
    setWechatTitle("111113333");
    this.sharebanner();
  },
  created() {
    Indicator.open();
    this.initData();
    this.interPackage = util.getCurrentVersionInteractivePackage();
  },
};
</script>
