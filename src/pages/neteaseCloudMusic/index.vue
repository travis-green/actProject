<style lang="less" scoped>
</style>
<template>
    <div>

    </div>
</template>
<script>
import util from 'util'
import {
    Indicator
} from 'mint-ui'
export default {
  data() {
    return {
      token: ''
    }
  },
  methods: {
    query() {
      if (util.isAndroidApp() || util.isIosApp()) {
        util.getCurrentVersionInteractivePackage().getAppInfo().then(data => {
          util.setCookie('token', data.token)
          let token = data.token
          this.$axios.post('/thirdCenter/netEase/jumpUrl', { token: token }).then(res => {
            if (res.success) {
              this.$axios.post('/thirdCenter/netEase/user/record', { jumpUrl: res.data.jumpUrl, token: token })
              window.location.replace(res.data.jumpUrl)
            }
          })
        }).catch((err) => {
          util.getCurrentVersionInteractivePackage().evokeLoginPage()
        })
      }
    }
  },
  mounted() {
    Indicator.open('')
    this.query()
  }
}
</script>
