<!--
 * @Author: zhangpeng
 * @Date: 2019-08-06 15:07:49
 * @LastEditTime: 2019-08-18 09:29:29
 -->
<template>
    <div class="bground">
        <div class="click" @click="toHome">
            <h1>Welcome >> >></h1>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toHome () {
            this.$router.push({
                name: "home"
            })
        }
    }
};
</script>
<style lang="scss" scoped>
.bground {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 60px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        125deg,
        #2c3e50,
        #27ae60,
        #2980b9,
        #f0932b,
        #e74c3c,
        #8344ad
    );
    background-size: 400%;
    animation: bganimation 30s infinite;
    .click {
        width: 250px;
        height: 60px;
        background-color: #fabc03;
        box-shadow: 6px 6px 0 #6e3112;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    h1 {
        font-family: Consolas;
        font-weight: bold;
        text-align: center;
        font-size: 20px;
        padding: 20px;
    }
    .click:active {
        box-shadow: none;
        opacity: 0.7;
    }
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