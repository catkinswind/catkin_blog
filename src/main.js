/*
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:36
 * @LastEditors: 
 * @LastEditTime: 2019-08-18 09:20:38
 */
import Vue from "vue";

// 导入路由
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 导入自己的路由模块
import router from "@/router";

// 完整导入mint-ui
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);

// 使用bootstrap3
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

// 导入自己的全局样式
import "@/assets/css/global.scss";
import "@/assets/css/loginAndRegister.scss";
import "@/assets/css/clearMarginAndPadding.css";
// import 'lib-flexible/flexible'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import store from "@/store/index";
//重新打开页面前清除掉数据，不然会之前登陆的用户会在页面重新打开时还存在，会有安全问题
//      第一个参数清除localStorage中的数据，第二个参数清除sessionStorage中的数据
//      localStorage,关闭页面再开启数据还在，一般适用于购物车
//      sessionStorage，在关闭页面后数据才会消失
//      true,false   ==>    不关闭什么，就是意味着使用什么方式
window.clearVuexAlong(true, false); //关闭页面数据被清除，但切换页面不会被清除

import plugins from "@/plugins";
Vue.use(plugins);
// 导入Axios
import $axios from "@/utils/request"
Vue.use($axios);

Vue.config.productionTip = false;

import app from "@/App";

new Vue({
    router,
    store, //挂载vuex到vue实例上
    render: h => h(app)
}).$mount("#app");