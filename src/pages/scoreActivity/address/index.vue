<template>
  <div class="container">
    <div class="address-wrap">
        <div class="address-item">
            <div class="item-title">收货人姓名</div>
            <input class="input" type="text" placeholder="请输入收货人姓名" v-model.trim="name">
            <!-- <input placeholder="请输入收货人姓名" placeholder-class="input-placeholder" class="input" bindinput="bindNameInput"/> -->
        </div>
        <div class="address-item">
            <div class="item-title">手机号码</div>
            <input class="input" type="number" v-model.trim="mobile" placeholder="收货人的电话，方便联系">
        </div>
        <div class="address-item">
            <div class="item-title">所在地区</div>
            <input class="input" type="text" placeholder="请填写您所在省市区" v-model.trim="region">
        </div>
        <div class="address-item2">
            <div class="item-title">收货地址</div>
            <textarea class="textarea" placeholder="如小区、楼栋号、门牌号等"  v-model="address" maxlength="140"></textarea>
        </div>
    </div>
    <div class="button" @click="save()">
        兑换
    </div>
    <div class="mask" v-if="visible">
        <div class="mask-content">
            <div class="mask-title">兑换成功，请耐心等待，</div>
            <div class="mask-title">平台会在7个工作内发货</div>
            <div class="mask-tips">
                注：因新年假期，快递会有延迟，如有问题，请联系客服小姐姐哦！
            </div>
            <div class="mask-button" @click="goBack()">
                知道了
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import toast from 'toast'
import util from 'util'
export default {
  data() {
    return {
      interPackage: {},
      name: '',
      mobile: '',
      region: '',
      address: '',
      goodsRewardId: '',
      visible: false
    }
  },
  methods: {
    save() {
      if (this.name.trim() === '' || this.mobile === '' || this.region === '' || this.address.trim() === '') {
        toast('请填写您的收获信息')
        return
      }
      if (this.mobile.length !== 11) {
        toast('手机号码格式不对')
        return
      }
      let postData = {
        name: this.name,
        mobile: this.mobile,
        address: this.region + this.address,
        goodsRewardId: this.goodsRewardId
      }
      this.$axios.post('/activityCenter/beans/carnival/exchange/reward', postData).then(res => {
        if (res.success) {
          this.visible = true
        } else {
          toast(res.msg || res.message || '服务器错误，请稍后重试')
        }
      }).catch(() => {
        toast('服务器错误，请稍后重试')
      })
    },
    goBack() {
      window.location.replace('/act/scoreActivity/home')
    },
    displayShareBtn() {
      this.interPackage.displayShareBtn(false)
    }
  },
  created() {
    this.interPackage = util.getCurrentVersionInteractivePackage()
    this.interPackage.setNavTitle('填写收货地址')
  },
  mounted() {
    this.displayShareBtn()
    this.goodsRewardId = this.$route.query.goodsRewardId
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
