<template>
	<div class="todo-header">
		<input
			type="text"
			placeholder="请输入你的任务名称，按回车键确认"
			@keyup.enter="addTodoHandle" />
	</div>
</template>

<script>
export default {
	name: "Header",
	props: ["todos"],
	methods: {
		addTodoHandle(e) {
			const todoName = e.target.value;
			if (todoName.trim()) {
				// todos存在添加任务名，则报错——任务名已存在，不能添加该任务名
				const isRepeatTodoName = this.todos.some(todo => todo.todoName === todoName);
				if (isRepeatTodoName) {
					alert("任务名已存在，不能重复添加任务名");
				} else {
					this.$emit("addTodo", todoName);
					// this.addTodo(todoName);
					e.target.value = "";
				}
			} else {
				alert("添加任务不规范，首尾不能有空格");
			}
		},
	},
};
</script>

<style scoped>
/*header*/
.todo-header input {
	width: 560px;
	height: 28px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 4px 7px;
}

.todo-header input:focus {
	outline: none;
	border-color: rgba(82, 168, 236, 0.8);
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
