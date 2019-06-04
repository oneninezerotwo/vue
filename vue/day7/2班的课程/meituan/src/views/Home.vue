<template>
  <div class="_3titDnO9z79JXkaOV-6j8-">
    <Mheader/>
    <Mnavigation/>
    <Mmenu/>
    <Mkklist/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Mheader from '@/components/Mheader.vue';
import Mnavigation from '@/components/Mnavigation.vue';
import Mmenu from '@/components/Mmenu.vue';
import Mkklist from '@/components/Mkklist.vue';
@Component({
  components: {
    Mheader,
    Mnavigation,
    Mmenu,
    Mkklist
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

