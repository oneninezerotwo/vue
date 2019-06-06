<template>
  <div class="_3titDnO9z79JXkaOV-6j8-">
    <Mheader/>
    <Mnavigation/>
    <Mnearby/>
    <Mmenu/>
    <Mkklist/>
    <!-- <Mfooter/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Mheader from '@/components/Mheader.vue'; // @ is an alias to /src
import Mnavigation from '@/components/Mnavigation.vue';
import Mnearby from '@/components/Mnearby.vue';
import Mmenu from '@/components/Mmenu.vue';
import Mkklist from '@/components/Mkklist.vue';
import Mfooter from '@/components/Mfooter.vue';
@Component({
  components: {
    Mheader,
    Mnavigation,
    Mnearby,
    Mmenu,
    Mkklist,
    Mfooter
  },
  created(){
    // home组件进场通知Mfooter组件出现
    this.$store.state.isShowMfooter = true
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
._3titDnO9z79JXkaOV-6j8- {
    padding-top: 50px;
    padding-bottom: 50px;
}
</style>

