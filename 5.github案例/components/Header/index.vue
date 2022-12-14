<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="请输入查询的关键字" v-model="keyword" />&nbsp;
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
			this.$bus.$emit("searchKeyWord", this.keyword);
		},
	},
	mounted() {},
};
</script>

<style scoped></style>
