<template>
	<div>
		<ul v-if="todos.length" class="todo-main">
			<!-- 每项都得加key值才可以 -->
			<Item
				v-for="(todo, index) in todos"
				:key="todo.id"
				:todo="todo"
				:index="index"
				:delOneTodo="delOneTodo"
				:editTodoShow="editTodoShow"
				:editTodoName="editTodoName"
				:todoIsDone="todoIsDone"></Item>
		</ul>
		<ul v-else class="todo-main">
			<li style="list-style: none; color: red; font-size: 20px">暂无任务，您可以添加新任务...</li>
		</ul>
	</div>
</template>

<script>
import Item from "@/components/Main/Item";
export default {
	name: "",
	props: ["todos", "todoIsDone", "delOneTodo", "editTodoShow", "editTodoName"],
	components: {
		Item,
	},
};
</script>

<style scoped>
/*main*/
.todo-main {
	margin-left: 0px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding: 0px;
}

.todo-empty {
	height: 40px;
	line-height: 40px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding-left: 5px;
	margin-top: 10px;
}
</style>
