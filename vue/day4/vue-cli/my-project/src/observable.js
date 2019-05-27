import Vue from 'vue'
// 公有变量
const state = Vue.observable({
    // 控制弹窗的出现
    isActionsheet: false,
    // 切换主题 默认值
    tab: {
        title: "提问",
        tab: "ask"
    },
    // 主题数
    tabs: [{
        title: "提问",
        tab: "ask"
    }, {
        title: "分享",
        tab: "share"
    }, {
        title: "职位",
        tab: "job"
    }, {
        title: "点赞",
        tab: "good"
    }],
    // 控制loadging的出现或者隐藏
    isToast: 0
})

export default state