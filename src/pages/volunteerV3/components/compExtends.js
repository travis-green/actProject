/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/10/24
 */
import Vue from 'vue'
import api from '../API'
import {
  Indicator,
  InfiniteScroll
} from 'mint-ui'
import toast from 'toast'

Vue.use(InfiniteScroll)

export default {
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.scrollEnableFlag = false
      Indicator.open({
        spinnerType: 'fading-circle'
      })
      this.$axios.post(api.traval, this.sendData).then((res) => {
        Indicator.close()
        this.scrollEnableFlag = true
        if (res.success) {
          this.arr_jobList = [...this.arr_jobList, ...res.data.recourceLocations]
          this.totalPageNum = res.data.totalPageNum
          if (this.arr_jobList.length === 0) {
            this.nothingShowFlag = true
          }
        } else {
          toast(res.msg)
        }
      }).catch(() => {
        Indicator.close()
        this.scrollEnableFlag = true
        toast('请求出错')
      })
    },
    loadMoreDataListening() {
      if (this.scrollEnableFlag) {
        // 上拉页数加一
        if (this.sendData.pageNum < (this.totalPageNum - 1)) {
          this.sendData.pageNum++
          this.getData()
        }
      }
    }
  }
}
