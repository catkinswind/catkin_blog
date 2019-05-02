import VueRouter from 'vue-router'

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Forget from './components/Forget.vue'
import PersonInfo from './subcomponents/PersonInfo.vue'

let routerObj=new VueRouter({
	routes:[
	{path:'/',redirect:'home'},
	{path:'/login',component:Login,name:'login'},
	{path:'/register',component:Register,name:'register'},
	{path:'/home',component:Home,name:'home'},
	{path:'/forget/:name',component:Forget,name:'forget'},
	{path:'/info',component:PersonInfo,name:'info'},
	]
})

export default routerObj;