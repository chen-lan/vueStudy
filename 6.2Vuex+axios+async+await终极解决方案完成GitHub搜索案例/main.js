import Vue from "vue";
import App from "./App.vue";
import store from "@/store";

Vue.config.productionTip = false; // false关闭生成提示

new Vue({
	// render: h => h(App), 是将App组件传进给h()函数，render函数是渲染的意思，
	// 其内部本质也是帮我们注册了App组件和在模板中使用，另外还具有渲染的功能
	store,
	render: h => h(App),
}).$mount("#app");
