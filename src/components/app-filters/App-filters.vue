<template>
    <div class="input-group">
        <input
            v-model="inputSearch"
            type="text"
            class="form-control"
            placeholder="Search todo"
            aria-label="Recipient's username with two
        button addons"
            aria-describedby="button-addon4"
            @input="
                () => {
                    setInputValue(inputSearch);
                }
            "
        />
        <div id="button-addon4" class="input-group-append">
            <router-link to="/All">
                <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="
                        () => {
                            getFilter('All');
                        }
                    "
                >
                    All
                </button>
            </router-link>
            <router-link to="/Active">
                <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="
                        () => {
                            getFilter('Active');
                        }
                    "
                >
                    Active
                </button>
            </router-link>
            <router-link to="/Done">
                <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="
                        () => {
                            getFilter('Done');
                        }
                    "
                >
                    Done
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "AppFilters",
    data() {
        return {
            inputSearch: "",
            filters: null,
        };
    },
    methods: {
        ...mapActions(["getFilter", "setInputValue"]),
    },
};
</script>

<style lang="scss">
a {
    color: inherit;
}
a:hover {
    color: unset;
    text-decoration: none;
}
</style>
