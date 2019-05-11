import VueRouter from 'vue-router'

import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Forget from './components/Forget.vue';
import PersonInfo from './subcomponents/PersonInfo.vue';
import UpLoadFile from './components/UpLoadFile.vue';

const router = new VueRouter({
	// mode: 'history',
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
			path: 'uploadfile',
			component: UpLoadFile,
			name: 'uploadfile',
			meta: {
				title: 'My First Project',
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