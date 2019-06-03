<template lang="pug">
    p {{title}}
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            title: 'ABC'
        }
    }
})
</script>
<style lang="scss" scoped>
p {
    color: blue;
}
</style>

