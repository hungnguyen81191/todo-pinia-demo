import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    id: 0,
    complete: false,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, complete: false });
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId;
      });
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((object) => object.id === idToFind);
      if (todo) {
        todo.complete = !todo.complete;
      }
      console.log(todo.complete);
    },
  },
});
