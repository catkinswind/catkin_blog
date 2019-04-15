import VueRouter from 'vue-router'

import Login from './components/login.vue'
import Main from './components/main.vue'
import Register from './components/register.vue'

let routerObj=new VueRouter({
	routes:[
	{path:'/',redirect:'main'},
	{path:'/login',component:Login,name:'login'},
	{path:'/register',component:Register,name:'register'},
	{path:'/main',component:Main,name:'main'},
	]
})

export default routerObj;