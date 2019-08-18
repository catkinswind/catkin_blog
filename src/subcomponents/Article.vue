<!--
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-08-15 19:55:05
 * @LastEditors: 
 * @LastEditTime: 2019-08-17 21:08:05
 -->
<template>
    <div>
        <h1>{{$route.params.name}}</h1>
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
    watch: {
        '$route.params' (to, from) {
            console.log(this.$route.params.name);
        }
    }
};
</script>
<style lang="scss" scoped>
</style>