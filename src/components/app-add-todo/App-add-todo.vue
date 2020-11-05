<template>
  <div class="app-add-todo">
    <input
      type="text"
      name=""
      id=""
      v-model="inputValue"
      @keydown.enter="getInputValue"
    />
    <button class="btn btn-secondary" @click="getInputValue">Add</button>
  </div>
</template>

<script>
export default {
  name: "AppAddTodo",
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
      this.$emit('addtodo',this.inputValue);
      this.inputValue=''
    },
  },
};
</script>

<style lang="scss">
.app-add-todo {
  display: flex;
  flex-flow: row wrap;
  & > input {
    flex: 1 0;
  }
  & > button {
    width: 6em;
    margin-left: 2em;
  }
}
</style>
