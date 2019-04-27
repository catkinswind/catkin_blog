import VueRouter from 'vue-router'

import Login from './components/Login.vue'
import Main from './components/Main.vue'
import Register from './components/Register.vue'
import Forget from './components/Forget.vue'

let routerObj=new VueRouter({
	routes:[
	{path:'/',redirect:'main'},
	{path:'/login',component:Login,name:'login'},
	{path:'/register',component:Register,name:'register'},
	{path:'/main',component:Main,name:'main'},
	{path:'/forget/:name',component:Forget,name:'forget'},
	]
})

export default routerObj;