<template>
  <div class="direcruit-bg">
    <div class="join-btn" @click="joinBtn"></div>
    <div class="copy-btn-mei" @click="copyBtn('mei')" data-clipboard-text="QTZPXM"></div>
    <div class="copy-btn-qin" @click="copyBtn('qin')" data-clipboard-text="QTZPGD"></div>
  </div>
</template>

<script>
import toast from 'toast'
import util from 'util'
import Clipboard from 'clipboard'

export default {
  data() {
    return {
      interPackage: {}
    }
  },
  methods: {
    joinBtn() {
      window.location.href = 'https://www.wjx.top/jq/48520845.aspx'
    },
    copyBtn(type) {
      const clipboard = new Clipboard(`.copy-btn-${type}`)
      clipboard.on('success', (e) => {
        toast('复制成功，快去加工作人员好友吧')
        e.clearSelection()
      })
      clipboard.on('error', (e) => {
        toast('复制失败')
      })
    },
    sharebanner() {
      // 初始化自定义分享内容
      this.interPackage.initShareInfo({
        title: '青团直聘  双十一  狂撒现金红包',
        desc: '推荐好友入职青团直聘银泰岗位，得现金红包28元/人，多推多得，上不封顶！！'
      })
    }
  },
  mounted() {
    this.sharebanner()
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
  }
}
</script>
<style lang="less" scoped>
@rem: 300rem;
@url: "https://qiniu-image.qtshe.com/20191031/";
.wd(@w, @h) {
  width: @w / @rem;
  height: @h / @rem;
}

.ps(@top, @left) {
  position: absolute;
  top: @top / @rem;
  left: @left / @rem;
}

.bl(@bottom, @left) {
  position: absolute;
  bottom: @bottom / @rem;
  left: @left / @rem;
}

.bg(@img) {
  background-image: url("@{url}@{img}");
  background-repeat: no-repeat;
  background-size: 100%;
}

.center(@top) {
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  top: @top / @rem;
}
.direcruit-bg {
  .wd(1125, 5191);
  .center(0);
  .bg('direcruit-bg.jpg')
}
.join-btn {
  .wd(800, 200);
  .center(3890);
}
.copy-btn-mei {
  .wd(230, 80);
  .bl(210, 500);
}
.copy-btn-qin {
  .wd(230, 80);
  .bl(110, 500);
}
</style>
