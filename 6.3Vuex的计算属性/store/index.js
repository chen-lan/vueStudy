// 1、引入Vuex并声明
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	num: 1,
};
const mutations = {
	// 默认能够接收到state的值
	increase(state) {
		state.num++;
	},
};
const actions = {
	increase({ commit }) {
		commit("increase");
	},
};
const getters = {
	// 默认能拿到state数据
	newNum(state) {
		return state.num * 10;
	},
};

// 实例化Vuex中的store对象
export default new Vuex.Store({
	// 里面放置的都是配置对象
	state,
	mutations,
	actions,
	getters,
});
