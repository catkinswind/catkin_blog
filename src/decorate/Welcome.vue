<template>
    <div>
        <navigation></navigation>
        <cover></cover>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods: {

    },
    components: {
        navigation: () => import('../subcomponents/Navigation.vue'),
        cover: () => import('../subcomponents/Cover.vue'),
    }
};
</script>
<style lang="scss" scoped>
</style>