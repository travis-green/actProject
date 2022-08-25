<style lang="less" scoped>
.q-toast {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000000;
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    .q-toast-text {
        background: rgba(0,0,0,0.8);
        min-width: 1rem;
        max-width: 80%;
        margin: 0 auto;
        text-align: center;
        padding: 0.13rem 0.24rem;
        line-height: 1.42857143;
        font-size: 0.16rem;
        color: #FFF;
        box-shadow: 0.04rem 0.04px 0.16rem 0.08rem rgba(67,72,81,0.10);
        border-radius: 0.06rem;
    }
}
.q-toast-pop-transition {
    transition: opacity 0.3s linear;
}
.q-toast-pop-enter,
.q-toast-pop-leave {
    opacity: 0;
}
</style>

<template>
<div class="q-toast" transition="q-toast-pop">
  <div class="q-toast-text">{{ message }}</div>
</div>
</template>

<script>
export default {
  props: {
    message: String,
    default: ''
  }
}
</script>
