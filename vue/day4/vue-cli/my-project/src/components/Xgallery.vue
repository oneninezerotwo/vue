<template>
  <div v-show="bool" class="weui-gallery" style="display: block">
    <span class="weui-gallery__img" :style="{
        'backgroundImage': `url(${src})`
    }"></span>
    <div @click="hideGallery" class="weui-gallery__opr">
      <a href="javascript:" class="weui-gallery__del">
        <i class="weui-icon-delete weui-icon_gallery-delete"></i>
      </a>
    </div>
  </div>
</template>
<script>
import bus from "../bus.js";
export default {
  data() {
    return {
      src: "",
      bool: false
    };
  },
  created() {
    // 监听Xpanel传过来的事件
    bus.$on("showGallery", data => {
      this.src = data.src;
      this.bool = true;
    });
  },
  methods: {
    //   隐藏预览图片
    hideGallery() {
      this.bool = false;
    }
  }
};
</script>
<style scoped>
</style>
