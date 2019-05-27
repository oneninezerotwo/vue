<template>
  <div>
    <router-view></router-view>
    <Xfooter/>
    <Xdialog />
  </div>
</template>

<script>
// 底部组件
import Xfooter from "../components/Xfooter.vue";
// 弹窗
import Xdialog from "../components/Xdialog.vue";

export default {
  name: "app",
  components: {
    Xfooter,
    Xdialog
  }
};
</script>

<style>
</style>
