<template>
    <li :class="{ done: todo.done, important: todo.important }">
        <span class="todo" @click="setDone(todo.id)">{{ todo.name }}</span
        ><span class="todo-btn"
            ><i v-if="todo.done" class="fa fa-check-circle-o"></i
            ><i
                class="fa fa-exclamation-circle"
                @click="
                    () => {
                        makeTodoImportant(todo.id);
                    }
                "
            ></i
            ><i
                class="fa fa-times-circle-o"
                @click="removeItem(todo.id)"
            ></i
        ></span>
    </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "AppTodoListItems",
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapActions(["setTodoDone", "makeTodoImportant", "removeTodoItem"]),
        setDone(id) {
            this.setTodoDone(id);
        },
        removeItem(id) {
            this.removeTodoItem(id);
        },
    },
};
</script>

<style lang="scss">
li {
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    padding: 0 1em;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    & > .todo {
        flex: 1 0;
        font-size: 2em;
    }
    & > .todo-btn {
        flex: 0 0 15%;
        display: flex;
        flex-flow: row nowrap;
        & > i {
            font-size: 2em;
            padding: 0.2em;
        }
    }
    &.done {
        & > .todo {
            text-decoration: line-through;
        }
        & > .todo-btn > .fa-check-circle-o {
            color: green;
        }
    }
    &.important {
        & > .todo {
            color: red;
        }
    }
}
</style>
