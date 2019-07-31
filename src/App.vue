<template>
    <div id="app" ref>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
export default {};
</script>
<style lang="css">
#app {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
}
</style>
