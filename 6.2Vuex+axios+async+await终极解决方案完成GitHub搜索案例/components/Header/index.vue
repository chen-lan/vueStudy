<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="请输入查询的关键字" v-model="keyword" />&nbsp;
			<!-- ...mapActions传参方式 -->
			<!-- <button @click="searchKeywordHandle(keyword)">查询</button> -->
			<button @click="searchKeywordHandle">查询</button>
		</div>
	</section>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			keyword: "",
		};
	},
	methods: {
		searchKeywordHandle() {
			// 利用store对象中的dispatch触发action函数执行
			this.$store.dispatch("getCars", this.keyword);
		},
	},
	mounted() {},
};
</script>

<style scoped></style>
