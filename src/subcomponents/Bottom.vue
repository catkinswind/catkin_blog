<!--
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-08-07 18:48:56
 * @LastEditors: 
 * @LastEditTime: 2019-08-09 10:05:11
 -->
<template>
    <div class="bottom_box">
        <div class="footer_box1">
            <div class="git">
                <a
                    class="github"
                    href="https://github.com/catkinswind"
                    target="blank"
                    prompt="github"
                    v-prompt
                >
                    <img src="~@/assets/images/github.svg" alt />
                </a>
                <a
                    class="gitee"
                    href="https://gitee.com/catkinswind"
                    target="blank"
                    prompt="gitee"
                    v-prompt
                >
                    <img src="~@/assets/images/gitee.svg" alt />
                </a>
                <a class="vue" prompt="vue" v-prompt>
                    <img src="~@/assets/images/vue.png" alt />
                </a>
            </div>
        </div>
        <div class="footer_box2">
            <ul>
                <!-- <li>推荐工具</li> -->
            </ul>
        </div>
    </div>
    <!-- <a class="wechat" prompt="微信二维码" v-prompt>
                    <img src="~@/assets/images/QR_code.jpg" alt />
    </a>-->
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods: {

    }
};
</script>
<style lang="scss" scoped>
.bottom_box {
    width: 100%;
    height: 170px;
    // background-color: #81ecec;
    background-color: #dfe6e9;
    padding: 15px;
    position: relative;
    .footer_box1 {
        width: 50%;
        height: 100%;
        // background-color: #b2bec3;
        float: left;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .git {
        line-height: 60px;
        padding-left: 10px;
        .github {
            margin-right: 7px;
        }
        .github img {
            width: 20px;
            height: 20px;
        }
        .gitee {
            margin-right: 7px;
        }
        .gitee img {
            width: 17px;
            height: 17px;
        }
        .vue {
        }
        .vue img {
            width: 22px;
            height: 22px;
        }
        .wechat img {
            width: 65px;
            height: 65px;
        }
        span {
            font-size: 12px;
            margin-left: 20px;
            transform: translateY(10%);
        }
    }
    .footer_box2 {
        width: 50%;
        height: 100%;
        float: right;
        // background-color: #636e72;
    }
}
</style>