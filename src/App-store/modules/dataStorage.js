let state = {
    data: [],
    filters: ["All", "Active", "Done"],
    activeFilter: null,
    inputValue: null,
};
const getters = {
    filter(state) {
        return state.activeFilter;
    },
    getAllFilters(state) {
        return state.filters;
    },
    searchedTodos(state) {

        let {inputValue}=state;
        if (!inputValue) {
            return state.data;
        }
        return state.data.filter(elem => {
            if (elem.name.indexOf(inputValue) > -1) {
                return elem;
            }
        });
    },
    filterTodos:(state)=>(todos)=>{
        let {activeFilter}=state;

        if (activeFilter === null || activeFilter === "All") {
            return todos;
        }
        if (activeFilter === "Active") {
            return todos.filter(elem => !elem.done);
        }
        if (activeFilter === "Done") {
            return todos.filter(elem => elem.done);
        }
    },
};
const actions = {
    addTodo({ commit, state }, value) {
        let todoId;
        let todos = [...state.data];
        if (!state.data) {
            todoId = 0;
        } else {
            todoId = 0;
            state.data.map(elem => {
                if (elem.id >= todoId) {
                    todoId = elem.id + 1;
                }
            });
        }
        let todo = {
            id: todoId,
            name: value,
            done: false,
            important: false,
        };
        todos.push(todo);
        commit("changeData", todos);
    },
    setTodoDone({ commit, state }, id) {
        let newTodos = [...state.data];
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
        commit("changeData", newTodos);
    },
    makeTodoImportant({ commit, state }, id) {
        let newTodos = [...state.data].map(elem => {
            if (elem.id === id) {
                if (!elem.important) {
                    elem.important = true;
                } else {
                    elem.important = false;
                }
            }
            return elem;
        });
        commit("changeData", newTodos);
    },
    removeTodoItem({ commit, state }, id) {
        let elemToDelete = state.data.findIndex(elem => {
            if (elem.id === id) {
                return elem;
            }
        });
        let newTodos = [
            ...state.data.slice(0, elemToDelete),
            ...state.data.slice(elemToDelete + 1, state.data.length),
        ];
        commit("changeData", newTodos);
    },
    getFilter({ commit }, filter) {
        commit("changeActiveFilter", filter);
    },
    setInputValue({ commit }, value) {
        commit("setInputValue", value);
    },
};
const mutations = {
    changeData(state, value) {
        state.data = value;
    },
    changeActiveFilter(state, value) {
        state.activeFilter = value;
    },
    setInputValue(state, value) {
        state.inputValue = value;
    },
};

export default { state, getters, actions, mutations };
