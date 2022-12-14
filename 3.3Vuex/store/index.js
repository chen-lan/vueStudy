/**
 * 1、安装Vuex，注意版本问题，vue2使用vuex是3版本
 * 2、引入VueX并且声明
 * 3、实例化Store对象，并导出
 * 4、main.js文件引入store对象和把store对象添加vm实例身上，这样就可以供其他组件使用
 *
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		num: 1,
	},
	mutations: {
		ADD(state) {
			state.num++;
		},
		SUB(state) {
			state.num--;
		},
	},
	actions: {
		increase(context) {
			context.commit("ADD");
		},
		decrement({ commit }) {
			commit("SUB");
		},
		ifOddIncrease({ commit, state }) {
			if (state.num % 2 !== 0) {
				commit("ADD");
			}
		},
		ansyIncrease({ commit }) {
			setTimeout(() => {
				commit("ADD");
			}, 1000);
		},
	},
});
