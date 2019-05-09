import VueRouter from 'vue-router'

const Login = () =>
	import ('./components/Login.vue');
const Home = () =>
	import ('./components/Home.vue');
const Register = () =>
	import ('./components/Register.vue');
const Forget = () =>
	import ('./components/Forget.vue');
const PersonInfo = () =>
	import ('./subcomponents/PersonInfo.vue');

const router = new VueRouter({
	mode: 'history',
	routes: [{
		path: '/',
		redirect: 'home',
		meta: {
			title: 'My First Project',
			keepAlive: true,
		}
	}, {
		path: '/home',
		component: Home,
		name: 'home',
		meta: {
			title: 'My First Project',
			keepAlive: true,
		},
		children: [{
			path:'uploadfile',
			component:()=>import('./components/UpLoadFile.vue'),
			name:'uploadfile',
			meta: {
				title: '',
				keepAlive: true,
			},
		}]
	}, {
		path: '/login',
		component: Login,
		name: 'login',
		meta: {
			title: 'My First Project of login',
			keepAlive: false,
		}
	}, {
		path: '/forget/:name',
		component: Forget,
		name: 'forget',
		meta: {
			title: 'My First Project of retrieve password',
			keepAlive: false,
		}
	}, {
		path: '/register',
		component: Register,
		name: 'register',
		meta: {
			title: 'My First Project of register an account',
			keepAlive: false,
		}
	}, {
		path: '/info',
		name: 'info',
		component: PersonInfo,
		meta: {
			title: 'My First Project of PersonInfo',
			keepAlive: true,
		}
	}, ],

	// scrollBehavior(to, from, savedPosition) {
	// 	if (savedPosition) {
	// 		return savedPosition
	// 	} else {
	// 		// if(from.meta.savedPosition){
	// 		// 	from.meta.savedPosition=document.body.scrollTop;
	// 		// }
	// 		return {
	// 			x: 0,
	// 			y: 0
	// 		}
	// 	}
	// },

})

export default router;