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
    /* background-image: linear-gradient(
        125deg,
        #2c3e50,
        #27ae60,
        #2980b9,
        #f0932b,
        #e74c3c,
        #8344ad
    );
    background-size: 400%;
    animation: bganimation 30s infinite; */
}
@keyframes bganimation {
    0% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}
</style>
