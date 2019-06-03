<template>
    <div>
        {{this.name}}
        <Ycontent/>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Ycontent from '../components/Ycontent.vue';
@Component({
  data(){
      return {
          name: 'setting'
      }
  },
  components: {
      Ycontent
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
$color:red;

div {
    color: $color;
}
</style>

