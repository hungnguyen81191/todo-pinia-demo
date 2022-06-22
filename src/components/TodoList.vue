<template>
  <div
    v-for="todo in todoList"
    :key="todo"
    class="flex flex-grow w-full h-full px-8"
  >
    <div class="flex h-12 w-12 px-4">{{ todo.id }}</div>
    <span :class="[todo.complete ? 'complete' : '']">{{ todo.item }}</span>
    <span class="flex h-auto w-auto" @click="toggleCompleted(todo.id)"
      >&#10004;</span
    >
  </div>
</template>

<script>
import { useTodoListStore } from "@/store/useTodoListStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useTodoListStore();
    const { todoList } = storeToRefs(store);
    const { toggleCompleted } = store;
    return { todoList, toggleCompleted };
  },
};
</script>

<style scoped>
.complete {
  text-decoration: line-through;
}
</style>
