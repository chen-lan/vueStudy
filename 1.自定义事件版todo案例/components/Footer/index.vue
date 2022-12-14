<template>
	<div class="todo-footer" v-show="todos.length">
		<label>
			<input type="checkbox" :checked="checkNum === todos.length" @click="allIsDoneHandle" />
		</label>
		<span>
			<span>已完成{{ checkNum }}</span> / 全部{{ todos.length }}
		</span>
		<button class="btn btn-danger" @click="delIsDoneTodoHandle">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	name: "Footer",
	props: ["todos", "allIsDone"],
	data() {
		return {};
	},
	computed: {
		// 因为只有get方法，所以可以简写
		checkNum() {
			return this.todos.reduce((prev, item, index) => {
				if (item.isDone) {
					// return 的就是reduce的返回值
					prev = prev + 1;
				}
				return prev;
			}, 0);
		},
	},
	methods: {
		delIsDoneTodoHandle() {
			this.$emit("delIsDoneTodo");
			// this.delIsDoneTodo();
		},
		allIsDoneHandle(e) {
			this.$emit("allIsDone", e.target.checked);
			// this.allIsDone(e.target.checked);
		},
	},
};
</script>

<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>
