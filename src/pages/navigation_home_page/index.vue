<template>
  <div class="index-wrap">
    <a style="display:block" :href="'/act'+item.href" v-for="(item,index) in newArr" :key="index">{{index+1}}. &nbsp;&nbsp;{{item.title}}</a>
  </div>
</template>
<script>
import routes from '../../routes'
export default {
  data () {
    return {
      newArr: []
    }
  },
  methods: {
    handleForIn () {
      routes.map(v => {
        let a = {
          href: v.path,
          title: v.meta ? v.meta.title : '错误首页'
        }
        this.newArr.push(a)
      })
    }
  },
  mounted () {
  },
  created() {
    this.handleForIn()
  }
}
</script>
<style lang="less" scoped>
.index-wrap {
  padding: 0.166667rem;
  font-size: 0.133333rem;
}
</style>
