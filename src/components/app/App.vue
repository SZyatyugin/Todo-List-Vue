<template>
  <div id="app">
    <AppHeader :header="appHeader" />
    <AppAddTodo @addtodo="addTodo" />
    <AppFilters :filters="filters" />
    <AppTodoList :todoStore="todoStore" :setTodoDone="setTodoDone" />
  </div>
</template>

<script>
import AppHeader from "../app-header";
import AppAddTodo from "../app-add-todo";
import AppFilters from "../app-filters";
import AppTodoList from "../app-todo-list";

export default {
  name: "App",
  data() {
    return {
      appHeader: "Todo List",
      filters: ["All", "Active", "Done"],
      activeFilter: "",
      todoStore: [],
    };
  },
  methods: {
    addTodo(value) {
      let todoId;
      if (this.todoStore.length === 0) {
        todoId = 0;
      } else {
        this.todoStore.map((elem) => {
          if (elem.id >= todoId) {
            todoId = elem.id;
          }
        });
      }
      this.todoStore.push({
        id: todoId,
        name: value,
        done: false,
        important: false,
      });
      console.log(this.todoStore);
    },
    setTodoDone(id) {
      this.todoStore.map((elem) => {
        if (elem.id === id) {
          if (!elem.done) {
            elem.done = true;
          } else {
            elem.done = false;
          }
        }
        return elem;
      });
    },
  },
  components: {
    AppHeader,
    AppAddTodo,
    AppFilters,
    AppTodoList,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#app {
  width: 40vw;
  margin: 20vh auto;
}
* {
  user-select: none;
}
</style>
