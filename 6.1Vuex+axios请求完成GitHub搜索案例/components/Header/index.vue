<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="请输入查询的关键字" v-model="keyword" />&nbsp;
			<!-- ...mapActions传参方式 -->
			<button @click="searchKeywordHandle(keyword)">查询</button>
		</div>
	</section>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "Header",
	data() {
		return {
			keyword: "",
		};
	},
	methods: {
		...mapActions(["searchKeywordHandle"]),
	},
	mounted() {},
};
</script>

<style scoped></style>
