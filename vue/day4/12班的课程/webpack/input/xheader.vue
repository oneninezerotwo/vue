<template>
  <div>
    <p v-text="name"></p>
    <img :src="img" />
    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2111229976,2860914838&fm=58&bpow=500&bpoh=399" />
  </div>
</template>
<script>
// module.exports = {}
// 把图片打包进代码
import img from "./ml.jpg";
export default {
  data() {
      return {
          name: "yao",
          img
      }
  },
  mounted() {}
};
</script>
<style scoped>
p {
  color: red;
}
</style>

