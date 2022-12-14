<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<Header :todos="todos" @addTodo="addTodo"></Header>
			<!-- <Main
				:todos="todos"
				:todoIsDone="todoIsDone"
				:delOneTodo="delOneTodo"
				:editTodoName="editTodoName"
				:editTodoShow="editTodoShow"></Main> -->
			<Main :todos="todos" :todoIsDone="todoIsDone" :editTodoShow="editTodoShow"></Main>
			<!-- <Footer :todos="todos" :delIsDoneTodo="delIsDoneTodo" :allIsDone="allIsDone"></Footer> -->
			<Footer :todos="todos" ref="footer"></Footer>
		</div>
	</div>
</template>

<script>
// 引入组件
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
	name: "App",
	data() {
		return {
			// todos: [
			// 	{ id: 1, todoName: "起床", isDone: true, isEdit: false },
			// 	{ id: 2, todoName: "刷牙", isDone: false, isEdit: false },
			// 	{ id: 3, todoName: "吃饭", isDone: false, isEdit: false },
			// ],
			todos: JSON.parse(localStorage.getItem("vueTodos")) || [],
		};
	},
	// 注册组件
	components: {
		Header,
		Main,
		Footer,
	},
	// 处理函数
	methods: {
		todoIsDone(index) {
			this.todos[index].isDone = !this.todos[index].isDone;
		},
		delOneTodo(id) {
			const newTodos = this.todos.filter(todo => todo.id !== id);
			this.todos = newTodos;
		},
		editTodoShow(index) {
			this.todos[index].isEdit = !this.todos[index].isEdit;
		},
		editTodoName(todoName, index) {
			const todo = this.todos[index];
			todo.todoName = todoName;
			todo.isEdit = !todo.isEdit;
		},

		// 添加任务
		addTodo(todoName) {
			// 创建对象
			const todo = { id: Date.now(), todoName: todoName, isDone: false, isEdit: false };
			this.todos.unshift(todo);
		},
		// 删除已完成任务
		delIsDoneTodo() {
			const newTodos = this.todos.filter(todo => todo.isDone === false);
			this.todos = newTodos;
		},
		// 全选
		allIsDone(isDone) {
			this.todos.forEach(todo => {
				todo.isDone = isDone;
			});
		},
	},
	watch: {
		todos: {
			handler(newTodos) {
				localStorage.setItem("vueTodos", JSON.stringify(newTodos));
			},
			deep: true,
		},
	},
	mounted() {
		// 删除已完成的任务
		this.$refs.footer.$on("delIsDoneTodo", this.delIsDoneTodo);
		// 全选与全不选
		this.$refs.footer.$on("allIsDone", this.allIsDone);
		// 编辑todoName，利用全局数据总线实现
		// 接收数据，给全局事件总线绑定自定义事件，并在App组件中定义事件回调函数
		this.$bus.$on("editTodoName", this.editTodoName);
		this.$bus.$on("delOneTodo", this.delOneTodo);
	},
};
</script>

<style scoped>
/*app*/
.todo-container {
	width: 600px;
	margin: 0 auto;
}
.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>
