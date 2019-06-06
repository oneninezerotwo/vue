import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// new Vuex.Store创建一个数据仓库
export default new Vuex.Store({
  // 5最重要  状态   公有数据
  state: {
    // 夜间模式，白天模式
    author: 'yao',
    status: 0,
    // 登陆信息
    loginInfo: {
      location: {
        lat: '',
        lag: '',
      },
      name: '',
      age: '',
    },
    // 决定loading是否出现
    loading: 0,
    isFixedMenu: false,
    // 决定底部选项卡是否出现
    isShowMfooter: true,
  },
  // 4 突变改变修改
  // this.$store.state.xxx = xxx
  mutations: {

  },
  // 3 行动行为 触发mutations action触发mutations
  actions: {

  },
  // 2 获取 获取仓库的值
  // this.$store.state.xxx
  // getters,
  // 1 模块化
  // modules
});
