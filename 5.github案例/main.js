// import Vue from "vue"; // 引入的是vue.runtime.common.js的，该文件没有带着template模板
import Vue from "vue/dist/vue";
import App from "./App.vue";

Vue.config.productionTip = false; // false关闭生成提示

// 方式一：安装全局事件总线
// Vue.prototype.$bus = new Vue();

new Vue({
	// render: h => h(App), 是将App组件传进给h()函数，render函数是渲染的意思，
	// 其内部本质也是帮我们注册了App组件和在模板中使用，另外还具有渲染的功能
	render: h => h(App),

	// 越早加加载全局数据总线越好，所以将其在beforeCreate阶段创建最好
	beforeCreate() {
		Vue.prototype.$bus = this;
	},
}).$mount("#app");

// 原理真正Vue.js方式
// new Vue({
// 	el: "#app",
// 	components: {
// 		App,
// 	},
// 	template: "<App></App>",
// });
