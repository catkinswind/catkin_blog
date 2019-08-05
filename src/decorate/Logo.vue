<template>
    <div class="header" :style="[{height:height}]" @click="goHome">
        <h1>
            <img src="../assets/logo.png" v-prompt prompt="CATKIN" />
        </h1>
    </div>
</template>
<script>
export default {
    props: {
        height: {
            type: String,
            default: '45px',
        }
    },
    methods: {
        goHome () {
            this.$router.push({ name: 'home' })
        }
    }
};
</script>
<style lang="scss" scoped>
.header {
    width: inherit;
    h1 {
        height: 100%;
        text-align: center;
        img {
            height: inherit;
        }
    }
}
</style>