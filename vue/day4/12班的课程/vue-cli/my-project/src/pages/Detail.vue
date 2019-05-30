<template>
  <div>
    <Xheader :isShowBack="true" :isShowHam="false">详情</Xheader>
    <article class="weui-article">
      <h1>大标题</h1>
      <section>
        <h2 class="title">章标题</h2>
        <section>
          <h3>1.1 节标题</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            <img :src="picArticle" alt>
            <img :src="picArticle" alt>
          </p>
        </section>
        <section>
          <h3>1.2 节标题</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </section>
    </article>
  </div>
</template>

<script>
import Xheader from "../components/Xheader.vue";
import picArticle from "../assets/pic_article.png";
export default {
  data() {
    return {
      picArticle
    };
  },
  components: {
    Xheader
  }
};
</script>

<style>
</style>
