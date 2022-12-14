<template>
	<div>
		<h1>Vuex中getter的使用</h1>
		<h1>{{ $store.state.num }}</h1>
		<h1>getters的计算属性：{{ $store.getters.newNum }}</h1>
		<button @click="increase">点击按钮num自增改变计算属性值</button>
		<button @click="decrement">点击按钮num自减</button>
	</div>
</template>

<script>
export default {
	name: "App",
	methods: {
		increase() {
			this.$store.dispatch("increase");
		},
		decrement() {
			//
		},
	},
};
</script>

<style scoped></style>
