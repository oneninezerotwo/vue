<!--<template lang="pug">
    p {{title}}
        span {{content}}
</template>-->

<template>
    <p>
        C
        <span>D</span>
    </p>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            title: 'A',
            content: 'B',
        };
    },
});
</script>
<style lang="scss" scoped>
p{
    color:red;
    span{
        color:blue;
    }
}
</style>

