<template>
  <div v-if="isShowMfooter" class="_3jvb2nTFcJZaKfGT3jLO-N">
    <div class="_2_zO9X158TTb_XBigSBXaa">
      <a
        v-for="(t,index) in tabs"
        :key="index"
        @click="hightLight(index)"
        class="vhHLSLSvFKDyfNbVNtOGV"
        :class = "{
            _1XFdFVvdIV2Kk5DvkemeIS: tab === index
        }"
      >
        <div class="_3qJAJgmwFK8XUy7QH5OT8t" :class="t.className"></div>
        <div class="_2q_OgZBvsix_vxRGtxelUo" v-text="t.name"></div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          name: '首页',
          url: 'home',
          className: '_2JMxUK2tV5fNkgpziy4SwV',
        },
        {
          name: '订单',
          url: 'order',
          className: '_26drFUnsVh-214x7eRutxe',
        },
        {
          name: '我的',
          url: 'mine',
          className: 'NofT5VOaEk7jwz6aM-096',
        },
      ],
      tab: 0,
    };
  },
  methods: {
    hightLight(index) {
      console.log(this);
      // router.push(...)
      // 编程式导航，代替了传统的<router-link>
      this.$router.push({
        // path
        name: this.tabs[index].url,
      });
      //   记录位置
      this.tab = index;
      // index 你点击的当前所在位置
      console.log(index);
    },
  },
  computed: {
    // 从仓库获取值
    isShowMfooter() {
      return this.$store.state.isShowMfooter;
    },
  },
});
</script>

<style scoped>
@import "../assets/home.css";
</style>
