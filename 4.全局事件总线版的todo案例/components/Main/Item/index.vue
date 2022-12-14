<template>
	<!-- 移入显示删除按钮和显示背景颜色，则是修改isShow的值 -->
	<li @mouseenter="isShow = true" @mouseleave="isShow = false" :class="{ active: isShow }">
		<label>
			<input type="checkbox" :checked="todo.isDone" @click="isDoneHendle" />
			<!-- vue用插值表达式书写js代码 -->
			<input
				v-if="todo.isEdit"
				type="text"
				:value="todo.todoName"
				@keyup.enter="editTodoNameHandle" />
			<span v-else :class="{ isDoneTodo: todo.isDone }">{{ todo.todoName }}</span>
		</label>
		<!-- v-show比重值小于li button的css样式 -->
		<button class="btn btn-danger" v-show="isShow" @click="delTodoHandle">删除</button>
		<button class="btn btn-primary" v-show="isShow" @click="editTodoHandle">
			{{ todo.isEdit ? "取消" : "编辑" }}
		</button>
	</li>
</template>

<script>
export default {
	name: "Item",
	data() {
		return {
			isShow: false,
		};
	},
	props: ["todo", "index", "todoIsDone", "editTodoShow"],
	methods: {
		isDoneHendle() {
			this.todoIsDone(this.index);
		},
		delTodoHandle() {
			this.$bus.$emit("delOneTodo", this.todo.id);
			// this.delOneTodo(this.todo.id);
		},
		editTodoHandle() {
			// 根据下标修改是否编辑的值
			this.editTodoShow(this.index);
		},
		editTodoNameHandle(e) {
			// 调用修改todoName的方法
			// 触发全局事件总线的自定义事件
			this.$bus.$emit("editTodoName", e.target.value, this.index);
			// this.editTodoName(e.target.value, this.index);
		},
	},
};
</script>

<style scoped>
/*item*/
li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;
}

.active {
	background-color: skyblue;
}
.isDoneTodo {
	text-decoration: line-through;
}

li label {
	float: left;
	cursor: pointer;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li button {
	float: right;
	/* display: none; */
	margin-top: 3px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}
</style>
