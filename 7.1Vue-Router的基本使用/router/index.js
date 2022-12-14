/**
 * 1、下载Vue-router，并且引入Vue-router
 * 2、声明使用vue-router
 * 3、实例化router对象，并导出
 * 4、在main.js文件中引入router，并且在配置对象使用router
 * 5、写路由，使用路由，用到的是Router-View
 * 6、使用Router-Link来进行修改路径
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/page/Home";
import About from "@/page/About";

Vue.use(VueRouter); // 这里使用插件，不要老是写成"VueRouter"

export default new VueRouter({
	// routes是一个路由数组，放置很多路由
	routes: [
		{
			path: "/home",
			component: Home,
		},
		{
			path: "/about",
			component: About,
		},
	],
});
