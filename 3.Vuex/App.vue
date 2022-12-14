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
			// 修改state的数据，必须经过某个action函数,dispatch的本质是触发某个action  参数1：某个action函数名字
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
