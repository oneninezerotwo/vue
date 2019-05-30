<template>
  <div v-show="state.isActionsheet">
    <div @click="hideActionsheet" class="weui-mask" id="iosMask" style="opacity: 1;"></div>
    <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
      <div class="weui-actionsheet__title">
        <p class="weui-actionsheet__title-text">主题</p>
      </div>
      <div class="weui-actionsheet__menu">
        <div
          @click="changeTab(tab)"
          v-for="(tab,index) in state.tabs"
          :key="index"
          class="weui-actionsheet__cell"
          v-text="tab.title"
        ></div>
      </div>
      <div class="weui-actionsheet__action">
        <div @click="hideActionsheet" class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
import state from "../observable.js";
export default {
  methods: {
    hideActionsheet() {
      this.state.isActionsheet = false;
    },
    // 触发切换频道，让它更改公有变量的tab值
    changeTab(tab) {
      // 切换主题并且隐藏弹窗
      this.state.tab = tab;
      this.state.isActionsheet = false;
    }
  },
  //   从obs获取这个公有变量来控制弹窗出现
  computed: {
    state() {
      return state;
    }
  }
};
</script>

