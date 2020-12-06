import {createRouter,createWebHistory} from "vue-router";
import AppTodoList from "../components/app-todo-list";
const router = createRouter({
    history:createWebHistory(),
    routes: [
        { path: "/", component: AppTodoList },
        { path: "/:id", component: AppTodoList }
    ],
});
export default router;