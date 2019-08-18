<!--
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:36
 * @LastEditors: 
 * @LastEditTime: 2019-08-17 16:35:02
 -->
<template>
    <div id="app">
        <transition name="fade">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
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
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased; */
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-avtive {
    transition: all 1s ease;
}
</style>
