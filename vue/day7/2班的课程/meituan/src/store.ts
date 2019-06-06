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
    isShowMmodel: 0
  },
  // 4 突变改变修改
  // this.$store.state.xxx = xxx
  mutations: {
    setIsShowMmodel(state) {
      // 变更状态
      state.isShowMmodel = !state.isShowMmodel
    }
  },
  // 3 行动行为 触发mutations action触发mutations
  actions: {
    actionIsShowMmodel(context) {
      // 利用aciotn触发mutations
      context.commit('setIsShowMmodel')
    }
  },
  // 2 获取 获取仓库的值
  //  .$store.state.xxx
  getters: {
    // 这个函数时负责获取仓库state里面的isShowMmodel的值
    // 可以让仓库分发数据之前先加工数据
    getIsShowMmodel(state) {
      return {
        isShowMmodel: state.isShowMmodel,
        message: '你好帅'
      }
    }
  },
  // 模块再细分
  // 小仓库
  modules: {
    a: {
      state: {
        a: '1',
        b: '2'
      }
    },
    b: {
      state: {
        a: '3',
        b: '4'
      }
    },
  }
  // 1 模块化
  // modules
});
