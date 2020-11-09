<template>
    <div class="app-filters">
        <button v-for="elem in filters" :key="elem" class="btn btn-info">
            {{ elem }}
        </button>
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
};
</script>

<style lang="scss">
.app-filters {
    padding: 1em;
    width: 50%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
}
</style>
