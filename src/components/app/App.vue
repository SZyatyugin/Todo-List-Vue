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
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "../app-header";
import AppAddTodo from "../app-add-todo";
import AppFilters from "../app-filters";


export default {
    name: "App",
    components: {
        AppHeader,
        AppAddTodo,
        AppFilters,
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
