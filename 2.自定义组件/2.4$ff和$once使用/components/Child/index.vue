<template>
	<div class="child">
		<h1>学习自定义事件-简写</h1>
		<p>Child组件内容</p>
		<button @click="changeMsg">点击按钮修改msg的内容</button>
	</div>
</template>

<script>
export default {
	name: "Child",
	data() {
		return {
			msg: "战神归来，你等着看好戏吧",
		};
	},
	methods: {
		changeMsg() {
			// 用$emit触发自定义事件函数
			this.$emit("hhh", this.msg);
		},
	},
};
</script>

<style scoped>
.child {
	background-color: skyblue;
}
</style>
