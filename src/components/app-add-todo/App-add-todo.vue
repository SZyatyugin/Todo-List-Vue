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
export default {
    name: "AppAddTodo",
    emits: ["addtodo"],
    data() {
        return {
            inputValue: "",
        };
    },
    methods: {
        getInputValue(e) {
            if (this.inputValue === "") {
                e.preventDefault();
                return;
            }
            this.$emit("addtodo", this.inputValue);
            this.inputValue = "";
        },
    },
};
</script>

<style lang="scss"></style>
