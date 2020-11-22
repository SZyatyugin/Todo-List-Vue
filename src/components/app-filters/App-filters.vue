<template>
    <div class="input-group">
        <input v-model="inputSearch" type="text" class="form-control"
        placeholder="Search todo" aria-label="Recipient's username with two
        button addons" aria-describedby="button-addon4"
        @input="()=>{this.$emit('searchtodosinputvalue',inputSearch)}">
        <div id="button-addon4" class="input-group-append">
            <button
                v-for="elem in filters"
                :key="elem"
                class="btn btn-outline-secondary"
                type="button"
                @click="
                    () => {
                        this.$emit('getfilter', elem);
                    }
                "
            >
                {{ elem }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppFilters",
    props: {
        filters: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            inputSearch: "",
        };
    },
};
</script>

<style lang="scss"></style>
