<template>
  <form @submit.prevent="addItemAndClear(todo)" class="w-full h-20">
    <input type="text" v-model="todo" class="w-1/3 h-12 border-2" />
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useTodoListStore } from "@/store/useTodoListStore";

export default {
  setup() {
    const todo = ref("");
    const store = useTodoListStore();
    function addItemAndClear(item) {
      if (item.lenght === 0) {
        return;
      }
      store.addTodo(item);
      todo.value = "";
    }
    return { todo, addItemAndClear };
  },
};
</script>
