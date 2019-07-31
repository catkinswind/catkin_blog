<template>
    <div class="header" :style="[{height:height}]">
        <h1>
            <img src="../assets/logo.png" title="myProject" />
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