import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 导入自己的路由模块
import routerObj from './router.js'

// 完整导入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

// 导入Axios
import vueAxios from 'vue-axios'
import axios from 'axios';
Vue.use(vueAxios,axios);

// 使用bootstrap3
// import $ from 'jquery'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'layui-src/dist/css/layui.css'
import 'layui-src/dist/css/layui.mobile.css'

// 导入自己的全局样式
import './assets/css/loginAndRegister.scss';
import './assets/css/clearMarginAndPadding.css'
import 'lib-flexible/flexible.js'

import store from './store/index.js';
//重新打开页面前清除掉数据，
//      第一个参数清除localStorage中的数据，第二个参数清除sessionStorage中的数据
//      localStorage,关闭页面再开启数据还在，一般适用于购物车
//      sessionStorage，在关闭页面后数据才会消失
clearVuexAlong(true,false);//关闭页面数据被清除，但切换页面不会被清除

import plugin from './pulgin/plugin.js'
Vue.use(plugin);

Vue.config.productionTip = false;

import app from './App.vue'
// new Vue({
//   el:'#app',
//   components:{
//   	app,
//   },
//   router:routerObj,
// })
new Vue({
	router:routerObj,
	store,//挂载vuex到vue实例上
	render: h => h(app)
}).$mount("#app")