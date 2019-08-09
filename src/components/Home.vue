<!--
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:36
 * @LastEditors: 
 * @LastEditTime: 2019-06-04 21:09:36
 -->
<template>
    <div class="home">
        <!-- <lightbar></lightbar> -->
        <!-- :class="[{'titlebox_relative':!titleFlag},{'black_boxshadow':boxshadowFlag},{'titlebox_fixed':titleFlag}]" -->
        <!-- <navigation ref="navigation"></navigation>
        <trunk :element="$refs.navigation"></trunk>-->
        <navigation></navigation>
        <trunk></trunk>
    </div>
</template>
<script>

// import { Prompt } from '../pulgin';
export default {
    name: 'home',
    data () {
        return {
            // scrollTop: $("html").scrollTop()//用不了
        }
    },
    created () {
        console.log(`Home组件接收到的用户名${this.$store.getters.loginName}`);
        // console.log("scrollTop" + this.scrollTop);
    },
    mounted () {
        // this.disappear();
        // const _this = this;
        // window.addEventListener('resize', function () {
        //     _this.disappear();
        // })
    },
    methods: {

        disappear () {
            const el = this.$refs.author;
            if (document.body.clientWidth <= 700) {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
            }
        },
    },
    components: {
        navigation: () => import('../subcomponents/Navigation.vue'),
        trunk: () => import('../subcomponents/Trunk.vue'),
        cover: () => import('../subcomponents/Cover.vue'),
    },

    // watch: {
    //     'scrollTop': function (val, oldVal) {
    //         console.log(111);
    //     },
    // }

};
</script>
<style lang="scss" scoped>
</style>
