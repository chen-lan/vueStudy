/**
 * vue的使用步骤
 *
 * 1、安装Vuex，现在用的是vue2 所以下载时注意版本，一定得使用3版本
 * 2、引入并声明vuex
 * 3、生成一个Store的实例化对象，并向外暴露
 * 4、在main.js中引入刚才暴露的store实例对象，需要在生成vm的配置对象中添加store
 */

import Vue from "vue";
import Vuex from "vuex"; //引入Vuex

// 当做插件引入声明Vuex
Vue.use(Vuex);

// 生成一个Store的实例对象，并向外暴露
// 对vue应用中多个组件的共享状态（数据）进行集中式的管理（读/写）
// 核心概念一共有五个
export default new Vuex.Store({
	// 配置对象
	state: {
		num: 1,
	},
	// 拿药大妈，无趣，无言（不能写if语句和异步代码）
	mutations: {
		// 默认接受到state
		ADD(state) {
			state.num++;
		},
		SUB(state) {
			state.num--;
		},
	},
	// 前台小姐姐，人好会说话，能聊（可以写if判断语句和异步）
	actions: {
		// 默认能够接受到一个context参数，context参数其实是一个小的store，同样也可以拿到state数据，但是不能够对state中数据进行修改
		increase(context) {
			context.commit("ADD");
		},
		decrement(context) {
			context.commit("SUB");
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
