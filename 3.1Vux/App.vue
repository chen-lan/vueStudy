<template>
	<div>
		<h1>{{ $store.state.num }}</h1>
		<button @click="increase">点击按钮数字自增</button>
		<button @click="decrement">点击按钮数字自减</button>
		<button @click="ifOddIncrease">点击按钮奇数自增</button>
		<button @click="ansyIncrease">点击按钮一秒后自增</button>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			// num: 1,
		};
	},
	methods: {
		increase() {
			// 组件实例可以通过$store来获取访问store对象
			this.$store.dispatch("increase");
		},
		decrement() {
			this.$store.dispatch("decrement");
		},
		ifOddIncrease() {
			this.$store.dispatch("ifOddIncrease");
		},
		ansyIncrease() {
			this.$store.dispatch("ansyIncrease");
		},
	},
};
</script>

<style scoped></style>
