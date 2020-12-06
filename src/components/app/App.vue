<template>
    <div class="shadow p-3 mb-5 bg-white rounded">
        <div class="container">
            <div class="row">
                <AppHeader :header="appHeader" />
            </div>
            <div class="row justify-content-between">
                <AppAddTodo/>
            </div>
            <div class="row justify-content-center mt-3">
                <AppFilters/>
            </div>
            <div class="row">
                <router-view></router-view>
                <!-- <AppTodoList/> -->
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "../app-header";
import AppAddTodo from "../app-add-todo";
import AppFilters from "../app-filters";
// import AppTodoList from "../app-todo-list";

export default {
    name: "App",
    components: {
        AppHeader,
        AppAddTodo,
        AppFilters,
        // // AppTodoList,
    },
    data() {
        return {
            appHeader: "Todo List",
        };
    },
    
    
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#app {
    width: 60vw;
    margin: 20vh auto;
}
* {
    user-select: none;
}
</style>
