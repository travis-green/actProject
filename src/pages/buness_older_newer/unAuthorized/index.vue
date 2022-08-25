<template>
  <div class="unAuthorized-wrap">
    <img class="bg-img" src="../img/unauth.jpg" alt="">
    <div class="user-tips">
      <img class="user-icon" src="https://ojlf2aayk.qnssl.com/1523865165369/usericon.png" alt="">
      <span class="user-mobile">123123123123</span>
      <span>切换 ></span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.unAuthorized-wrap {
  position: relative;
  .bg-img {
    width: 100%;
  }
  .user-tips {
    width: 1.633333rem;
    height: 0.266667rem;
    position: absolute;
    top: 0.126667rem;
    right: 0;
    background-color: #50b790;
    border-top-left-radius: 0.133333rem;
    border-bottom-left-radius: 0.133333rem;
    padding-top: 0.033333rem;
    padding-left: 0.033333rem;
    .user-icon {
      width: 0.193333rem;
      height: 0.193333rem;
      vertical-align: bottom;
      margin-right: 0.05rem;
    }
    span {
      margin-right: 0.05rem;
      font-size: 0.126667rem;
    }
  }
}
</style>

