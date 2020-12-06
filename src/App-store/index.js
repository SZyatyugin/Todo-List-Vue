import { createStore } from "vuex";
import dataStorage from "./modules/dataStorage.js";

const store = createStore({
    modules: {
        dataStorage
    },
});
export default store;
