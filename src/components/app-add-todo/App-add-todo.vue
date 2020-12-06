<template>
    <input
        id=""
        v-model="inputValue"
        type="text"
        name=""
        class="col-9"
        @keydown.enter="getInputValue"
    />
    <button class="btn btn-secondary col-2" @click="getInputValue">Add</button>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "AppAddTodo",
    emits: ["addtodo"],
    data() {
        return {
            inputValue: "",
        };
    },
    methods: {
        ...mapActions(["addTodo"]),
        getInputValue(e) {
            if (this.inputValue === "") {
                e.preventDefault();
                return;
            }
            this.addTodo(this.inputValue);
            this.inputValue = "";
        },
    },
};
</script>

<style lang="scss"></style>
