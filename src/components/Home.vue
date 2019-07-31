<template>
    <div class="home" ref="wrap">
        <lightbar></lightbar>
        <div class="bar" ref="bar">
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
        <div :class="['titlebox',{'black_boxshadow':flag}]" ref="titlebox">
            <div class="title">
                <div class="logobox">
                    <logo height="50px"></logo>
                </div>
                <div class="searchconatiner">
                    <search></search>
                </div>
                <div class="siginbox">
                    <signinbar v-if="signin"></signinbar>
                    <userbar v-if="!signin" height="30px" fontsize="13px" :showname="false"></userbar>
                </div>
            </div>
            <div :class="[{'filament':!flag}]"></div>
        </div>
        <div class="content" ref="content">
            <div class="left"></div>
            <div class="middle">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
                <input type="button" style="width:60px;height:30px" @mouseenter="prompt" />
            </div>
            <div class="right">
                <div>
                    <h1 v-for="count in 100" :key="count">11111111111</h1>
                </div>
            </div>
        </div>
        <div class="footer">
            <div style="width:100px;height:100px;box-shadow:0px 20px 20px -20px #5E5E5E;"></div>
        </div>
    </div>
    <!-- <alert :showAlert="ok" ></alert> -->
</template>
<script>
import { mapGetters } from 'vuex';
import { Prompt } from '../pulgin';
export default {
    name: 'home',
    data () {
        return {
            flag: false,
            // scrollTop: $("html").scrollTop()//用不了
        }
    },
    created () {
        console.log(`Home组件接收到的用户名${this.$store.getters.loginName}`);
        this.$_zp();
        console.log("scrollTop" + this.scrollTop);
    },
    mounted () {
        // this.disappear();
        // const _this = this;
        // window.addEventListener('resize', function () {
        //     _this.disappear();
        // })
        console.log(this.$_diffTime('1998-05-09', new Date(), 'years'));
        const _this = this;
        const $titlebox = this.$refs.titlebox;
        $("#app").on("scroll", function () {
            if (this.scrollTop > _this.$refs.bar.offsetHeight + 2) {
                $titlebox.style.position = 'fixed';
                $titlebox.style.top = 0;
                $titlebox.style.width = $(document).width() - 17 + 'px';
            } else {
                $titlebox.style.position = 'relative';
                $titlebox.style.top = 0;
            }
            if (this.scrollTop !== 0) {
                _this.flag = true;
            } else {
                _this.flag = false;
            }
        })

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
            el = el.target;
            const el_left = el.getBoundingClientRect().left;
            const el_top = el.getBoundingClientRect().top;
            const result = Prompt({
                el,
                message: 'prompt message',
                el_left,
                el_top
            })
            el.onmouseout = () => {
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
    // watch: {
    //     'scrollTop': function (val, oldVal) {
    //         console.log(111);
    //     },
    // }

};
</script>
<style lang="scss" scoped>
.bar {
    height: 50px;
    line-height: 50px;
    letter-spacing: 1px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    background-color: white;
    .flexbar {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 11px;
        span:nth-child(1) {
            margin-right: 20px;
        }
    }
    .flexul {
        position: absolute;
        right: 0;
        top: 0;
        ul {
            li {
                float: left;
                margin-left: 15px;
                font-size: 11px;
            }
            a {
                text-decoration: none;
            }
        }
    }
}
.titlebox {
    position: relative;
    width: 100%;
    background-color: white;
}
.title {
    width: 1200px;
    margin: 0 auto;
    height: 60px;
    position: relative;
    // transform: translateX(calc(-50% - (17px) / 2));
    div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .logobox {
        width: 100px;
        left: 0;
    }
    .searchconatiner {
        width: 300px;
        height: 40px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .siginbox {
        width: 120px;
        right: 0;
        div {
            height: 50px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
}
a:focus {
    color: #1f8acc;
}
.content {
    width: 1200px;
    margin: 0 auto;
    // background-color: #1f8acc;
}
// .bar::after {
//     display: block;
//     content: '';
//     visibility: hidden;
//     clear: both;
//     height: 0;
//     zoom: 1;
// }
</style>
