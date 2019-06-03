<template>
  <div>
      详情页
      <router-link to="/detail/0/childa">childa</router-link> |
      <router-link to="/detail/1/childb">childb</router-link>
      <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: ["mobile", "pc"]
    };
  }
};
</script>

