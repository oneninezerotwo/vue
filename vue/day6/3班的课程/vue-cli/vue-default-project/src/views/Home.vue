<template>
  <ul>
    <li v-for="(g,index) in goods" :key="index">
      <router-link :to="`/detail/${index}`">Go to {{g}}</router-link>
    </li>
  </ul>
</template>
<script>
import axios from "axios";

// ES6规范 import
export default {
  data() {
    return {
      goods: ["mobile", "pc"]
    };
  },
  async created() {
    let goods = await axios.get("https://www.easy-mock.com/mock/5cee26e4c7e0071827e4f109/goods", {
      params: {
        ID: 12345
      }
    });
    this.goods = goods.data.data.goods;
  }
};

// common.js规范 require引入
// module.exports = {
//   data() {
//     return {
//       goods: ["mobile", "pc"]
//     };
//   }
// };
</script>

