<!--
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-08-06 14:56:54
 * @LastEditors: 
 * @LastEditTime: 2019-08-16 22:38:35
 -->
<template>
    <div
        :class="[{'content':!contentFlag},{'content_fiexd':contentFlag},'clearfloat']"
        ref="content"
    >
        <div class="catalogue">
            <catalogue></catalogue>
        </div>
        <div class="middle">
            <transition name="fade">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath"></router-view>
                </keep-alive>
            </transition>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
            <div class="jumbotron" style="padding:48px 80px">
                <h1>Hello, world!</h1>
                <p>Welcome to my project !!!</p>
                <p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <h1 v-for="count in 50" :key="count">11111</h1>
            <bottom></bottom>
        </div>
        <div class="right">
            <el-progress type="circle" :percentage="0" :stroke-width="4" :width="45"></el-progress>
            <el-progress type="circle" :percentage="25" :stroke-width="4" :width="45"></el-progress>
            <el-progress
                type="circle"
                :percentage="100"
                status="success"
                :stroke-width="4"
                :width="45"
            ></el-progress>
            <el-progress
                type="circle"
                :percentage="50"
                status="exception"
                :stroke-width="4"
                :width="45"
            ></el-progress>
        </div>
    </div>
</template>
<script>
export default {
    // props: {
    //     element: {
    //         default: ''
    //     }
    // },
    data () {
        return {
            contentFlag: false,
        }
    },
    mounted () {
        this.$root.$el.addEventListener("scroll", () => {
            if (this.$root.$el.scrollTop > 60) {
                // $titlebox.style.width = $(document).width() - 17 + 'px';
                this.contentFlag = true;
            } else {
                this.contentFlag = false;
            }
        })
    },
    methods: {

    },
    components: {
        catalogue: () => import('@/subcomponents/Catalogue'),
        bottom: () => import('@/subcomponents/Bottom'),
    }
};
</script>
<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .catalogue {
        width: 20%;
        padding: 30px;
        padding-right: 0px;
    }
    .middle {
        padding: 15px 15px 0 15px;
        width: 55%;
        height: 100%;
        border-left: 1px solid #ccc;
        box-sizing: border-box;
        background-image: url('~@/assets/images/bg_footer.png');
    }
    .right {
        width: 25%;
        background-image: url('~@/assets/images/bg_footer.png');
    }
}

.content_fiexd {
    width: calc(100% / 5 * 4);
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0;
    .catalogue {
        width: calc((100% - 17px) / 5);
        position: fixed;
        top: 0;
        left: 0;
        padding: 30px;
        padding-right: 0px;
    }
    .middle {
        padding: 15px 15px 0 15px;
        width: calc(100% * 0.688);
        height: 100%;
        border-left: 1px solid #ccc;
        box-sizing: border-box;
        background-image: url('~@/assets/images/bg_footer.png');
    }
    .right {
        width: calc(100% * 0.313);
        background-image: url('~@/assets/images/bg_footer.png');
    }
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