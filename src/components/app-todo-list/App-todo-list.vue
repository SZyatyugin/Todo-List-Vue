<template>
    <div class="app-todo-list">
        <ul>
            <AppTodoListItems
                v-for="elem in todoStore"
                :key="elem.id"
                :todo="elem"
                @settododone="setTodoDone"
            />
        </ul>
    </div>
</template>

<script>
import AppTodoListItems from "../app-todo-list-items";
export default {
    name: "AppTodoList",
    components: {
        AppTodoListItems,
    },
    props: {
        todoStore: {
            type: Array,
            required: true,
        },
        setTodoDone: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style lang="scss">
ul {
    margin: 0;
    padding: 0;
}
</style>
