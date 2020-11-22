<template>
    <div class="shadow p-3 mb-5 bg-white rounded">
        <div class="container">
            <div class="row">
                <AppHeader :header="appHeader" />
            </div>
            <div class="row justify-content-between">
                <AppAddTodo @addtodo="addTodo" />
            </div>
            <div class="row justify-content-center mt-3">
                <AppFilters
                    :filters="filters"
                    @getfilter="getFilter"
                    @searchtodosinputvalue="searchTodosInputValue"
                />
            </div>
            <div class="row">
                <AppTodoList
                    :todo-store="filteredTodos"
                    :settododone="setTodoDone"
                    :removetodoitem="removeTodoItem"
                    :maketodoimportant="makeTodoImportant"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "../app-header";
import AppAddTodo from "../app-add-todo";
import AppFilters from "../app-filters";
import AppTodoList from "../app-todo-list";

export default {
    name: "App",
    components: {
        AppHeader,
        AppAddTodo,
        AppFilters,
        AppTodoList,
    },
    data() {
        return {
            appHeader: "Todo List",
            filters: ["All", "Active", "Done"],
            activeFilter: null,
            todoStore: [],
            inputValueSearch:""
        };
    },
    computed: {
        filteredTodos() { 
            return this.filterTodos(this.searchTodos(this.inputValueSearch),this.activeFilter);
        },
    },
    methods: {
        addTodo(value) {
            let todoId;
            if (this.todoStore.length === 0) {
                todoId = 0;
            } else {
                todoId = 0;
                this.todoStore.map(elem => {
                    if (elem.id >= todoId) {
                        todoId = elem.id + 1;
                    }
                });
            }
            let newTodos = [...this.todoStore];
            newTodos.push({
                id: todoId,
                name: value,
                done: false,
                important: false,
            });
            this.todoStore = newTodos;
        },
        setTodoDone(id) {
            let newTodos = [...this.todoStore];
            newTodos.map(elem => {
                if (elem.id === id) {
                    if (!elem.done) {
                        elem.done = true;
                    } else {
                        elem.done = false;
                    }
                }
                return elem;
            });
            this.todoStore = newTodos;
        },
        makeTodoImportant(id) {
            let newTodos=[...this.todoStore].map((elem)=>{
                if(elem.id===id){
                    if(!elem.important){
                        elem.important=true;
                    }else{
                        elem.important=false;
                    };
                };
                return elem;
            });
            this.todoStore=newTodos;
        },
        removeTodoItem(id) {
            console.log(this.todoStore);
            let elemToDelete=this.todoStore.findIndex((elem,index)=>{if(elem.id===id){console.log(elem.id===id);return index;}});
            console.log(elemToDelete);
            let newTodos = [...this.todoStore.slice(0,elemToDelete),...this.todoStore.slice(elemToDelete+1,this.todoStore.length)];
            console.log(newTodos);
            this.todoStore=newTodos;

        },
        searchTodos(value){
            if(!value){
                return this.todoStore;
            }
            return this.todoStore.filter((elem)=>{
                if(elem.name.indexOf(value)>-1){
                    return elem;
                };
            });
        },
        searchTodosInputValue(value) {
            this.inputValueSearch=value;
        },
        filterTodos(todos,filter) {
            if (filter === null || filter === "All") {
                return todos;
            }
            if (filter === "Active") {
                return todos.filter(elem => !elem.done);
            }
            if (filter === "Done") {
                return todos.filter(elem => elem.done);
            }
        },
        getFilter(filter) {
            this.activeFilter = filter;
        },
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
