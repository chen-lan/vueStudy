<template>
	<div>
		<p>Child组件传递过来内容：{{ ReviceMsg }}</p>
		<!-- 绑定自定义事件 —— 简写 -->
		<Child @hhh="text1"></Child>
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
			// console.log("msg：", msg);
			this.ReviceMsg = msg;
		},
	},
};
</script>

<style scoped>
div {
	background-color: blue;
}
</style>
