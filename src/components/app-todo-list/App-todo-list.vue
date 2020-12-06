<template>
    <ul v-if="todoListItems.length != 0" class="col-12">
        <AppTodoListItems
            v-for="elem in todoListItems"
            :key="elem.id"
            :todo="elem"
        />
    </ul>
</template>

<script>
import AppTodoListItems from "../app-todo-list-items";
import { mapGetters } from "vuex";
export default {
    name: "AppTodoList",
    components: {
        AppTodoListItems,
    },

    computed: {
        todoListItems() {
            return this.filterTodos()(this.searchedTodos());
        },
    },
    methods: {
        ...mapGetters(["filterTodos", "searchedTodos"]),
    },
};
</script>

<style lang="scss">
ul {
    margin: 0;
    padding: 0;
}
</style>
