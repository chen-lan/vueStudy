<template>
	<div>
		<p>Child组件传递过来内容：{{ ReviceMsg }}</p>
		<!-- 复杂写法 -->
		<!-- ref不仅可以获取到普通标签，还可以获取组件 -->
		<Child ref="child"></Child>
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
		};
	},
	components: {
		Child,
	},
	methods: {
		text1(msg) {
			console.log("msg：", msg);
			this.ReviceMsg = msg;
		},
	},
	mounted() {
		// this ===> App组件实例
		// 第一种方式
		// this.$refs.child ===> Child组件实例
		// $on 专门让咱们绑定自定事件 参数一：自定义事件名  参数二：事件回调函数
		// 其中的this指向的是VM实例对象，但是$on绑定事件，vue认为其this指向的是事件源，但是这里this指向的是vm实例
		// this.$refs.child.$on("hhh", this.text1);
		/**
		 * 第二种方式：回调函数写成箭头函数形式，因为箭头函数没有this指向，所以向外找，拿到的this是Vm实例
		 */
		this.$refs.child.$on("hhh", msg => {
			this.ReviceMsg = msg;
		});

		// 只执行一次once
		// this.$refs.child.$once("hhh", this.text1);
	},
	// 在beforeDestroy时刻，解绑事件函数
	beforeDestroy() {
		this.$refs.child.$off("hhh");
	},
};
</script>

<style scoped>
div {
	background-color: blue;
}
</style>
