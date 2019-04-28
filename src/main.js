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
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// 导入自己的全局样式
import './assets/css/loginAndRegister.scss';
import './assets/css/clearMarginAndPadding.css'
import 'lib-flexible/flexible.js'

// window.onresize=setHhtmlFontSize;
// function setHhtmlFontSize(){
// 	const htmlWidth=document.documentElement.clientWidth||document.body.clientWidth;
// 	const htmlDom=document.getElementsByTagName('html')[0];
// 	htmlDom.style.fontSize = htmlWidth/10+'px';
// };
// setHhtmlFontSize();


Vue.config.productionTip = false

// import hight from './js/my.js'
import app from './App.vue'
Vue.directive('focus',{
	inserted:function(el){
		el.focus();
	}
})
Vue.filter('dataFormat',function(dataStr,pattern=""){
	var dt=new Date(dataStr);
	var y=dt.getFullYear();
	var m=(dt.getMonth()+1).toString().padStart(2,'0');
	var d=dt.getDate().toString().padStart(2,'0');
	if (pattern.toLowerCase()==='yy-mm-dd') {
		return `${y}-${m}-${d}`;
	}else {
		var hh=dt.getHours().toString().padStart(2,'0');
		var mm=dt.getMinutes().toString().padStart(2,'0');
		var ss=dt.getSeconds().toString().padStart(2,'0');
		return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
	}
});
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