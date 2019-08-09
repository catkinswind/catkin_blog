<!--
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-08-06 16:10:06
 * @LastEditors: 
 * @LastEditTime: 2019-08-09 09:18:56
 -->
<template>
    <div class="header">
        <div class="title">
            <div class="logo_search_bar">
                <div class="logobox">
                    <logo height="52px"></logo>
                </div>
                <div class="searchconatiner">
                    <search></search>
                </div>
                <div class="bar" ref="bar">
                    <div class="flexul">
                        <ul>
                            <li>
                                <router-link to="/home/media" title>Home</router-link>
                            </li>
                            <li>
                                <a href="javascript:;" title>Projects</a>
                            </li>
                            <li>
                                <router-link to="/home/uploadfile" title>Upload Files</router-link>
                            </li>
                            <li>
                                <a href="javascript:;" title>Induction</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="siginbox">
                <signinbar v-if="signin"></signinbar>
                <userbar v-if="!signin" height="30px" fontsize="13px" :showname="false"></userbar>
            </div>
        </div>
        <div :class="[{'filament':!boxshadowFlag}]"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data () {
        return {
            boxshadowFlag: false,
            titleFlag: false,
        }
    },
    methods: {

    },
    components: {
        logo: () => import('../decorate/Logo.vue'),
        signinbar: () => import('../person/SignInBar.vue'),
        userbar: () => import('../person/UserBar.vue'),
    },
    computed: {
        // loginName(){
        // 	return this.$store.getters.loginName;
        // }
        ...mapGetters(['loginName']),//相当于调用了上述代码
        signin () {
            return this.loginName === '' ? true : false;
        }
    },
};
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    background-color: white;
}
.title {
    padding: 0 20px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // transform: translateX(calc(-50% - (17px) / 2));
    .logo_search_bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logobox {
        width: 160px;
        height: 50px;
    }
    .searchconatiner {
        margin-left: 20px;
        width: 300px;
        height: 35px;
    }
    .bar {
        width: 500px;
        height: 50px;
        .flexul {
            ul {
                height: 50px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                li {
                    line-height: 40px;
                    text-align: center;
                    padding: 0 10px;
                    position: relative;
                }
                li::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 100%;
                    width: 0;
                    height: 100%;
                    border-bottom: 2px solid #00b894;
                    // #1289a7
                    transition: 0.2s all ease;
                }
                li:hover::before {
                    width: 100%;
                    left: 0;
                }
                li:hover ~ li::before {
                    left: 0;
                }
                a {
                    position: relative;
                    z-index: 999;
                    font-family: 'Consolas';
                    padding-bottom: 6px;
                    height: 40px;
                    font-size: 16px;
                    text-decoration: none;
                    color: black;
                    transform: scale(0.5);
                }
            }
        }
    }
    .siginbox {
        width: 120px;
        div {
            height: 50px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
}
</style>