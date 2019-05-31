<template>
  <div>
    <p v-text="title"></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "hello world"
    };
  }
  // render,
  // template
};
</script>

<style scoped>
p {
  color: red;
}
</style>

