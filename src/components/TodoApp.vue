<template>
  <TodoFormVue />
  <TodoListVue />
</template>

<script>
import TodoFormVue from "./TodoForm.vue";
import TodoListVue from "./TodoList.vue";

export default {
  components: {
    TodoFormVue,
    TodoListVue,
  },
  setup() {
    return {};
  },
};
</script>
