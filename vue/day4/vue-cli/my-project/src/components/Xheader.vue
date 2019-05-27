<template>
  <header>
    <!-- 左图标 -->
    <div v-if="isShowBack" @click="back" class="leftIcon"></div>
    <div v-else class="emptyIcon"></div>
    <!-- 标题 -->
    <div @click="showDialog" class="title">
      <slot></slot>
    </div>
    <!-- 右图标 -->
    <div v-if="isShowHam" @click="showActionsheet" class="rightIcon"></div>
    <div v-else class="emptyIcon"></div>
  </header>
</template>
<script>
import state from "../observable.js";
export default {
  // 父组件决定子组件，是否显示图标
  props: ["isShowBack", "isShowHam"],
  methods: {
    showActionsheet() {
      // 把控制弹窗的公有变量改为true
      state.isActionsheet = true;
    },
    back() {
      // 返回
      this.$router.go(-1);
    },
    // 通知弹窗出现
    showDialog() {
      // 触发action的setIsShowDialog
      this.$store.dispatch("setIsShowDialog", true);
    }
  },
  computed: {
    state() {
      return state;
    }
  }
};
</script>
<style scoped lang="scss">
/* css是局部样式 */
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  background-color: red;
  /* 弹性盒布局 */
  display: flex;
  .leftIcon {
    background-image: url(../assets/back.png);
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
    flex: 1;
  }

  .title {
    flex: 3;
  }
  .rightIcon {
    background-image: url(../assets/ham.png);
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
    flex: 1;
  }
  // 空图标
  .emptyIcon {
    flex: 1;
  }
}
</style>

