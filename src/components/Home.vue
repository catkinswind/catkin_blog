<template>
    <div style="background-color: #F3F3F3" ref="wrap">
        <div class="headerbox">
            <lightbar></lightbar>
            <div class="header">
                <div class="bar content95">
                    <div class="flexbar" ref="author">
                        <span>Author:catkinswind</span>
                        <span>Date:2019-4-10</span>
                    </div>
                    <div class="flexul">
                        <ul>
                            <li>
                                <a href="javascript:;" title>Products</a>
                            </li>
                            <li>
                                <a href="javascript:;" title>Projects</a>
                            </li>
                            <li>
                                <router-link to="/home/media" title>Home</router-link>
                            </li>
                            <li>
                                <router-link to="/home/uploadfile" title>Upload Files</router-link>
                            </li>
                            <li>
                                <a href="javascript:;" title>Induction</a>
                            </li>
                            <li>
                                <a href="javascript:;" title>key</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filament"></div>
                <div class="title content95">
                    <div class="logobox">
                        <logo style="height: 45px"></logo>
                    </div>
                    <signinbar v-if="signin"></signinbar>
                    <userbar v-if="!signin" height="30px" fontsize="13px" :showname="false"></userbar>
                </div>
            </div>
            <div class="filament"></div>
        </div>
        <div class="content">
            <div class="left"></div>
            <div class="middle">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
                <input type="button" name value style="width:60px;height:30px" @mouseenter="prompt" />
            </div>
            <div class="right"></div>
        </div>
        <div class="footer"></div>
        <div>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
            <h1>22222222222</h1>
        </div>
        <!-- <alert :showAlert="ok" ></alert> -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Prompt } from '../pulgin';
export default {
    name: 'home',
    data () {
        return {
            // ok:false
        }
    },
    created () {
        console.log(`Home组件接收到的用户名${this.$store.getters.loginName}`);
        this.$_zp();
    },
    mounted () {
        this.disappear();
        const _this = this;
        window.addEventListener('resize', function () {
            _this.disappear();
        })
        console.log(this.$_diffTime('1998-05-09', new Date(), 'years'))

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
        prompt (el) {
            const result = Prompt({
                el: el.target,
                message: 'sncbainvianvian',
            })
            el.target.onmouseout = () => {
                result.close();
            }
        }
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
.headerbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}
.header {
    background-color: #fff;
    .bar {
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 30px;
    }
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logobox {
            transform: translateX(-20%);
        }
    }
    a:focus {
        color: #1f8acc;
    }
}
.content {
    position: relative;
    padding-top: 85px;
}
/*手机*/
@media screen and (max-width: 600px) {
    .header {
        .bar {
            .flexbar {
                display: none;
            }
            .flexul {
                width: 100%;
                ul {
                    display: flex;
                    justify-content: space-between;
                    font-size: 11px;
                }
            }
        }
    }
}
/*平板*/
@media screen and (min-width: 600px) and (max-width: 960px) {
    .headerbox {
        margin-left: -17px;
    }
    .header {
        .bar {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-size: 12px;
            .flexbar {
                flex-grow: 1;
                span:nth-child(1) {
                    margin-right: 20px;
                }
            }
            .flexul {
                flex-grow: 1;
                ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 11px;
                }
            }
        }
    }
}
/*PC*/
@media screen and (min-width: 960px) {
    .headerbox {
        margin-left: -17px;
    }
    .header {
        .bar {
            .flexbar {
                float: left;
                font-size: 11px;
                span:nth-child(1) {
                    margin-right: 20px;
                }
            }
            .flexul {
                float: right;
                ul {
                    li {
                        float: left;
                        margin-left: 15px;
                        font-size: 11px;
                    }
                }
            }
        }
    }
    .bar::after {
        display: block;
        content: '';
        visibility: hidden;
        clear: both;
        height: 0;
        zoom: 1;
    }
    .content {
        position: relative;
        padding-top: 80px;
    }
}
</style>
