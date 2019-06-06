<template>
    <div>
      <button @click="toggleMmodal">切换模态窗口</button>
      <Mmodal/>
    </div>
</template>
<script>
import Mmodal from '../components/Mmodal'
export default {
  created(){
    // 通知底部出现
    this.$store.state.isShowMfooter = 0
  },
  mounted() {
    console.log(this)
  },
  methods:{
    toggleMmodal(){
      // 3.action
      // store.dispatch('increment')
      this.$store.dispatch('actionIsShowMmodel')

      // 2.mumation修改
      // 触发仓库里面的mutations的setIsShowMmodel的方法
      // this.$store.commit('setIsShowMmodel')

      // 1.暴力修改
      // this.$store.state.isShowMmodel = !this.$store.state.isShowMmodel
    }
  },
  components:{
    Mmodal
  }
}
</script>
