<template>
	<div class="row">
		<h1 v-if="isFirst">欢迎您首次登入网站</h1>
		<h1 v-else-if="isLoading">正在加载中...</h1>
		<h1 v-else-if="isErr">{{ isErr }}</h1>
		<div v-else class="card" v-for="car in cars" :key="car.id">
			<a :href="car.url" target="_blank">
				<img :src="car.avatar_url" style="width: 100px" />
			</a>
			<p class="card-text">{{ car.login }}</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "Main",
	data() {
		return {
			isFirst: true,
			isLoading: false,
			isErr: "",
			cars: [],
		};
	},
	methods: {
		searchKeyWord(keyword) {
			// 发送ajax请求
			axios({
				method: "get",
				url: " https://api.github.com/search/users",
				params: {
					q: keyword,
				},
			}).then(
				res => {
					this.isFirst = false;
					this.isLoading = true;
					// 改造自己想要的数据
					const newArr = res.data.items.map(item => {
						return {
							id: item.id,
							login: item.login,
							avatar_url: item.avatar_url,
							url: item.url,
						};
					});
					this.cars = newArr;
					this.isLoading = false;
				},
				err => {
					this.isFirst = false;
					this.isErr = err.message;
				}
			);
		},
	},
	mounted() {
		this.$bus.$on("searchKeyWord", this.searchKeyWord);
	},
};
</script>

<style scoped>
.card {
	float: left;
	width: 33.333%;
	padding: 0.75rem;
	margin-bottom: 2rem;
	border: 1px solid #efefef;
	text-align: center;
}

.card > img {
	margin-bottom: 0.75rem;
	border-radius: 100px;
}

.card-text {
	font-size: 85%;
}
</style>
