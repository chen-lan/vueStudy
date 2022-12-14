/**
 * 使用vuex的步骤
 * 1、安装Vuex，注意得是版本问题，vue2使用的是3版本
 * 2、引入并声明Vuex
 * 3、实例化Store对象，并导出
 * 4、在main.js文件引入store对象，并将store对象添加到vm身上，这样我们每个组件都可以使用$store来访问
 *
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	// state使用管理组件状态的
	state: {
		num: 1,
	},
	// 拿药大妈mutations，主要是用来修改state的状态数据，注意：不能写if判断语句和异步代码
	mutations: {
		ADD(state) {
			state.num++;
		},
		SUB(state) {
			state.num--;
		},
	},
	// 前台小姐姐，人好会聊，主要是提交修改数据的单子给mutation进行修改，这里可以写if语句和异步代码
	actions: {
		// 默认接受到context对象，该对象是类似是个小小的store
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
