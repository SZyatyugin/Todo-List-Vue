<template>
    <div>
        <h2>{{ header }}</h2>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    props: {
        header: {
            type: String,
            required: true
        }
    }
};
</script>
<style lang="scss">
h2 {
    font-family: "Montserrat", sans-serif;
    text-align: center;
}
</style>
