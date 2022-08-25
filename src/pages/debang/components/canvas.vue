<template>
  <div>
    <canvas id="debang-canvas"></canvas>
    <div id="qrcanvas"></div>
  </div>
</template>
<script>
import util from 'util'
import QRCode from 'qrcodejs2'
export default {
  props: {},
  methods: {
    createQrcode(schoolId) {
      let url =
        window.location.protocol + '//' + window.location.host + '/act/debang'
      if (!schoolId) {
        url += '/home?qr=true'
      } else {
        url += `/detail/${schoolId}?qr=true`
      }
      console.log(url)
      return new QRCode(document.getElementById('qrcanvas'), {
        text: url,
        width: 240,
        height: 240,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },
    initCanvas() {
      const debangCanvas = (this.debangCanvas = document.getElementById(
        'debang-canvas'
      ))
      const ctx = (this.ctx = debangCanvas.getContext('2d'))
      const W = (this.W = 1125)
      const H = (this.H = 2000)
      debangCanvas.width = W
      debangCanvas.height = H
      debangCanvas.style.width = W + 'px'
      debangCanvas.style.height = H + 'px'
    },
    drawText(name, schoolName, donateScore) {
      const ctx = this.ctx
      ctx.font = '42px sans-serif'
      ctx.fillStyle = '#333333'
      ctx.fillText('亲爱的：', 170, 615)
      ctx.font = 'bold 42px sans-serif'
      ctx.fillText(name, 338, 615)
      ctx.font = '39px sans-serif'
      this.renderLongText(ctx, schoolName, donateScore)
      ctx.font = '32px sans-serif'
      ctx.fillText('颁发机构 杭州青力量社会工作服务中心', 156, 1120)
      ctx.fillText(
        '颁发日期 ' + util.dateFormat(new Date(), 'yyyy年MM月dd日') || '',
        156,
        1170
      )
    },
    renderLongText(ctx, schoolName, donateScore) {
      let text = `感谢您为「 ${schoolName} 」捐赠${donateScore}点绿色能量，为志愿活动做出贡献。`
      let i = this.calculateWidth(text, 747)
      ctx.fillText(text.slice(0, i), 235, 720)
      text = text.slice(i)
      i = this.calculateWidth(text, 824)
      ctx.fillText(text.slice(0, i), 156, 780)
      if (i !== 0 && text.length !== i) {
        text = text.slice(i)
        i = this.calculateWidth(text, 824)
        ctx.fillText(text.slice(0, i), 156, 840)
        ctx.fillText('特发此证，以资鼓励。', 156, 960)
      } else {
        ctx.fillText('特发此证，以资鼓励。', 156, 960)
      }
    },
    calculateWidth(text, width) {
      const ctx = this.ctx
      if (!text) return 0
      if (ctx.measureText(text).width < width) return text.length
      let w = 0
      let i = 0
      for (let l = text.length; i < l; i++) {
        const _w = ctx.measureText(text[i]).width
        if (w + _w > width) {
          return i
        }
        w += _w
      }
      return i
    },
    toImage(name = '青团子', schoolName = '', donateScore = 0, schoolId) {
      return new Promise((resolve, reject) => {
        this.imagePromise
          .then(img => {
            this.ctx.drawImage(img, 0, 0, this.W, this.H)
            const qrcode = this.createQrcode(schoolId)
            this.ctx.drawImage(qrcode._oDrawing._elCanvas, 686, 1230, 240, 240)
            this.drawText(name, schoolName, donateScore)
            resolve(this.debangCanvas.toDataURL('image/png'))
          })
          .catch(reject)
      })
    }
  },
  created() {
    this.imagePromise = new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.onload = () => {
        resolve(img)
      }
      img.onerror = reject
      img.src =
        'https://qiniu-image.qtshe.com/debang/debang-n-share-bg.png'
    })
  },
  mounted() {
    this.initCanvas()
  }
}
</script>

<style lang="less" scoped>
</style>

