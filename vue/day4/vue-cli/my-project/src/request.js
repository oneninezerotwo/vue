import Vue from 'vue'
import state from "./observable.js"
// ajax库
import axios from 'axios'
// Vue继承axios方法
Vue.prototype.$axios = axios

export default {
    get(url, params) {
        state.isToast += 1;
        return new Promise((resovle, reject) => {
            axios.get(url, {
                params: {
                    ...params
                }
            })
                .then(function (response) {
                    state.isToast -= 1;
                    resovle(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        })
    }
}
