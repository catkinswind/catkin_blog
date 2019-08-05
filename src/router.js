import VueRouter from 'vue-router'

import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Forget from './components/Forget.vue';
import UpLoadFile from './components/UpLoadFile.vue';
import media from './subcomponents/media.vue';

import PhonePersonInfo from './person/PhonePerson/PhonePersonInfo.vue';
import PcPersonInfo from './person/PcPerson/PcPersonInfo.vue';
import AccountManage from './person/PcPerson/AccountManage.vue';
import SafeManage from './person/PcPerson/SafeManage.vue';

const router = new VueRouter({
    // mode: 'history',
    routes: [{
        path: '/',
        redirect: 'home',
        meta: {
            title: 'catkin | welcome to my project',
            keepAlive: true,
        }
    }, {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            title: 'catkin | welcome to my project',
            keepAlive: true,
        },
        children: [{
            path: 'uploadfile',
            component: UpLoadFile,
            name: 'uploadfile',
            meta: {
                title: 'My First Project',
                keepAlive: true,
            }
        }, {
            path: 'media',
            component: media,
            name: 'media',
            meta: {
                title: 'My First Project',
                keepAlive: true,
            }
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
        path: '/pcinfo',
        name: 'pcinfo',
        component: PcPersonInfo,
        meta: {
            title: 'My First Project of PersonInfo',
            keepAlive: true,
        },
        children: [{
            path: 'account',
            component: AccountManage,
            name: 'account',
            meta: {
                title: 'My First Project',
                keepAlive: true,
            }
        }, {
            path: 'safe',
            component: SafeManage,
            name: 'safe',
            meta: {
                title: 'My First Project',
                keepAlive: true,
            }
        }]
    }, {
        path: '/phoneinfo',
        name: 'phoneinfo',
        component: PhonePersonInfo,
        meta: {
            title: 'My First Project of PersonInfo',
            keepAlive: true,
        },
    }],

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