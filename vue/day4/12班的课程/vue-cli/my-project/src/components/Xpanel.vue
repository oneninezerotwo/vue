<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <a
        v-for="(n,index) in news"
        :key="index"
        href="javascript:void(0);"
        class="weui-media-box weui-media-box_appmsg"
      >
        <div class="weui-media-box__hd">
          <img
            @click="showGallery(n.author.avatar_url)"
            class="weui-media-box__thumb"
            :src="n.author.avatar_url"
            alt
          >
        </div>
        <!-- 编程式导航，实现首页详情页的关联 -->
        <div @click="toDetail(n.id)" class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="n.author.loginname"></h4>
          <p class="weui-media-box__desc" v-text="n.title"></p>
        </div>
      </a>
    </div>
    <div @click="loadMore" class="weui-panel__ft">
      <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
import state from "../observable.js";
import bus from "../bus.js";
import request from "../request.js";
export default {
  data() {
    return {
      // 新闻
      news: [],
      // 页码
      page: 0
    };
  },
  // 创建前 虚拟DOM没有，但数据有
  async created() {
    // 首页加载的触发
    this.loadMore();
  },
  methods: {
    // 加载更多
    async loadMore() {
      // 请求的时候
      // state.isToast = true;
      // // 加页码
      // this.page += 1;
      // let { data } = await this.$axios
      //   // api接口
      //   .get("https://cnodejs.org/api/v1/topics", {
      //     params: {
      //       // 页码
      //       page: this.page,
      //       // 每页的条数
      //       limit: 10,
      //       // 主题
      //       tab: this.tab
      //     }
      //   });
      // // 请求完时候
      // state.isToast = false;
      // // 把接口拿到的数据，放入该组件的Model层
      // this.news = [...this.news, ...data.data];
      this.page += 1;
      let { data } = await request.get("https://cnodejs.org/api/v1/topics", {
        // 页码
        page: this.page,
        // 每页的条数
        limit: 10,
        // 主题
        tab: this.tab
      });
      this.news = [...this.news, ...data.data];
    },
    // 点击预览图片
    showGallery(src) {
      // 通知Xgallery组件出现
      bus.$emit("showGallery", {
        src
      });
    },
    // 跳转详情页
    toDetail(id) {
      // 跳转详情页并传递ID值
      this.$router.push({ name: "detail", params: { id } });
    }
  },
  // 获取公有变量，更改当前主题
  computed: {
    tab() {
      return state.tab.tab;
    },
    state() {
      return state;
    }
  },
  watch: {
    tab() {
      this.news = [];
      // 频道切换页码初始化为0
      this.page = 0;
      // 主题切换自动触发ajax请求
      this.loadMore();
    }
  }
};
</script>
<style scoped>
.weui-panel {
  margin-bottom: 50px;
}
</style>


