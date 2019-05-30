<template>
  <div>
    <div class="weui-search-bar" :class="{
    'weui-search-bar_focusing':bool
  }" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input
            v-model="searchInput"
            ref="searchInput"
            type="search"
            class="weui-search-bar__input"
            id="searchInput"
            placeholder="搜索"
            required
          >
          <a @click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label
          @click="toggle"
          class="weui-search-bar__label"
          id="searchText"
          style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        >
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a @click="toggle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>
    <!-- 要有输入内容和父组件bool值判断 -->
    <div v-show="bool&&searchInput" class="weui-cells searchbar-result" id="searchResult">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>实时搜索文本</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 获取父组件的bool值，更改当前页面的状态
  props: ["bool"],
  data() {
    return {
      // 控制搜索框的状态
      // bool: false,
      // 搜索框的内容
      searchInput: ""
    };
  },
  methods: {
    toggle() {
      // this.bool = !this.bool;
      // 跳转到搜索页
      // 如果在搜索页，就返回home页面，否则进入搜索页
      this.$route.name === "search"
        ? this.$router.push({ name: "wechat" })
        : this.$router.push({ name: "search" });
    },
    clear() {
      // 清空搜索框
      this.searchInput = "";
    }
  },
  mounted() {
    // 挂载完之后进行输入框的聚焦
    this.$refs.searchInput.focus();
  }
  // directives: {
  //   focus(el) {
  //     el.focus();
  //   }
  // }
};
</script>

