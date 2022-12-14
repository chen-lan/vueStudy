import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
	isFirst: true,
	isLoading: false,
	isErr: "",
	cars: [],
};
const mutations = {
	REQUEST_BEFORE(state) {
		state.isFirst = false;
		state.isLoading = true;
	},
	REQUEST_ERROR(state, error) {
		state.isLoading = false;
		state.isErr = error;
	},
	REQUEST_SUCCESS(state, arr) {
		state.isLoading = false;
		state.cars = arr;
	},
};
const actions = {
	async getCars({ commit }, keyword) {
		// 请求前改变状态
		commit("REQUEST_BEFORE");
		//发起请求,利用async和await来接受axios的请求结果,只能接受成功的结果，好处：可以解决回调地狱的问题
		try {
			const res = await axios({
				method: "get",
				url: " https://api.github.com/search/users",
				params: {
					q: keyword,
				},
			});
			const transformCars = res.data.items.map(item => {
				return {
					id: item.id,
					login: item.login,
					avatar_url: item.avatar_url,
					url: item.url,
				};
			});
			// 请求成功改变状态
			commit("REQUEST_SUCCESS", transformCars);
		} catch (error) {
			commit("REQUEST_ERROR", error.message);
		}
	},
};
const getters = {
	//
};

export default new Vuex.Store({
	// 里面的属性都是配置对象
	state,
	mutations,
	actions,
	getters,
});
