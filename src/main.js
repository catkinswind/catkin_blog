import Vue from 'vue'

// 完整导入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 导入自己的路由模块
import routerObj from './router.js'

// 导入Axios
import vueAxios from 'vue-axios'
import axios from 'axios';
Vue.use(vueAxios,axios);

Vue.config.productionTip = false

// import hight from './js/my.js'
import app from './App.vue'
Vue.directive('focus',{
	inserted:function(el){
		el.focus();
	}
})
// new Vue({
//   el:'#app',
//   components:{
//   	app,
//   },
//   router:routerObj,
// })
new Vue({
	router:routerObj,
	render: h => h(app)
}).$mount("#app")