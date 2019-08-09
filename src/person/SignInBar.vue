<template>
    <div>
        <input type="button" value="登录" @click="toLogin" />
        <input type="button" value="注册" @click="toSignUp" />
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        toLogin () {
            this.$router.push({ name: 'login' })
        },
        toSignUp () {
            this.$router.push({ name: 'register' })
        }
    }
};
</script>
<style lang="scss" scoped>
input {
    letter-spacing: 1px;
    font-size: 13px;
    font-weight: 500;
    background: #fb3e44;
    color: white;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
input:active {
    outline: 0;
    opacity: 0.8;
    box-shadow: 0 0 2px red;
    // background: rgba(204, 204, 204, 0.4);
    border-color: #1f8acc;
}
input:nth-child(1) {
    border: 1px solid red;
    margin-right: 11px;
    width: 70px;
    height: 30px;
}
input:nth-child(2) {
    background: #ffffff;
    color: red;
    border: none;
}
</style>