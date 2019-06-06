<template>
  <div v-if="isShowMfooter" class="_3jvb2nTFcJZaKfGT3jLO-N">
    <div class="_2_zO9X158TTb_XBigSBXaa">
      <!-- 编程式导航 -->
      <a v-for="(t,index) in tabs" :key="index" @click="toggleTab(index)" class="vhHLSLSvFKDyfNbVNtOGV _1XFdFVvdIV2Kk5DvkemeIS">
        <div class="_3qJAJgmwFK8XUy7QH5OT8t" :class="t.className"></div>
        <div class="_2q_OgZBvsix_vxRGtxelUo" v-text="t.name"></div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      tabs: [
        {
          // 选项卡的名字
          name: '首页',
          // 跳转路由
          url: 'home',
          // 图标
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
    }
  },
  methods:{
    toggleTab(tab){
      console.log(tab)
      // 编程式导航
      // router.push(...)
      this.$router.push({
        name: this.tabs[tab].url
      })
      console.log(this)
    }
  },
  computed:{
    isShowMfooter(){
      // 从仓库获取值到组件
      return this.$store.state.isShowMfooter
    }
  }
})
</script>

<style scoped>
@import "../assets/home.css";
</style>
