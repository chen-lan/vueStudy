<template>
	<div>
		<p>Child组件传递过来内容：{{ ReviceMsg }}</p>
		<!-- 区分原生dom事件和自定义事件 -->
		<!-- 1、给普通标签绑定原生dom的单击事件，那就当做原生dom事件进行处理 -->
		<p>{{ num }}</p>
		<button @click="num++">点击按钮数字自增</button>
		<!-- 2、给普通标签绑定自定义事件是没有意义的，因为普通标签无法进入内部调用$emit触发事件回调函数执行 -->
		<!-- 3、组件标签无论绑定的是原生dom事件还是自定义事件，都被当做自定义事件来处理，原生dom事件加native修饰符除外 -->
		<!-- <Child @hhh="text1"></Child> -->
		<!-- <Child @click="text2"></Child> -->
		<Child @click.native="text3"></Child>
	</div>
</template>

<script>
// 引入组件
import Child from "@/components/Child";
export default {
	name: "App",
	data() {
		return {
			ReviceMsg: "",
			num: 1,
		};
	},
	components: {
		Child,
	},
	methods: {
		text1(msg) {
			// console.log("msg：", msg);
			this.ReviceMsg = msg;
		},
		text2(msg) {
			// console.log("msg：", msg);
			this.ReviceMsg = msg;
		},
		text3() {
			console.log("执行了3");
		},
	},
};
</script>

<style scoped>
div {
	background-color: blue;
}
</style>
