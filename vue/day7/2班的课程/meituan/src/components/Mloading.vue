<template>
  <div id="loadingToast" :style="{
      opacity: loading?1:0,
      display: loading?'block':'none'
    }">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">数据加载中</p>
    </div>
  </div>
</template>
<style>
@import "../assets/weui.css";
</style>
<script>
export default {
    computed:{
        loading(){
            // 把仓库的公有变量获取到loading组件里面使用
            console.log(this)
            // 从仓库拿到一个值
            return this.$store.state.loading
        }
    }
}
</script>

