import { createApp } from "vue";
import router from "./App-router";
import store from "./App-store/index";
import App from "./components/app";


createApp(App).use(store).use(router).mount("#app");
