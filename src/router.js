/*
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:36
 * @LastEditors: 
 * @LastEditTime: 2019-08-17 20:46:03
 */
import VueRouter from 'vue-router'

import PhonePersonInfo from '@/person/PhonePerson/PhonePersonInfo';
import PcPersonInfo from '@/person/PcPerson/PcPersonInfo';
import AccountManage from '@/person/PcPerson/AccountManage';
import SafeManage from '@/person/PcPerson/SafeManage';

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: 'welcome',
        meta: {
            title: 'catkin | welcome to my project',
            keepAlive: true,
        }
    }, {
        path: '/welcome',
        component: () => import('@/decorate/Welcome'),
        name: 'welcome',
        meta: {
            title: 'Welcome | catkin',
            keepAlive: true,
        }
    }, {
        path: '/home',
        component: () => import('@/components/Home'),
        name: 'home',
        meta: {
            title: 'catkin | welcome to my project',
            keepAlive: true,
        },
        children: [{
            path: 'uploadfile',
            component: () => import('@/components/UpLoadFile'),
            name: 'uploadfile',
            meta: {
                title: 'My First Project',
                keepAlive: true,
            }
        }, {
            path: 'media',
            component: () => import('@/subcomponents/media'),
            name: 'media',
            meta: {
                title: 'My First Project',
                keepAlive: true,
            }
        }, {
            path: "article/:name",
            component: () => import('@/subcomponents/Article'),
            name: 'article',
            meta: {
                keepAlive: true,
            }
        }],
    }, {
        path: '/login',
        component: () => import('@/components/Login'),
        name: 'login',
        meta: {
            title: 'My First Project of login',
            keepAlive: false,
        }
    }, {
        path: '/forget/:name',
        component: () => import('@/components/Forget'),
        name: 'forget',
        meta: {
            title: 'My First Project of retrieve password',
            keepAlive: false,
        }
    }, {
        path: '/register',
        component: () => import('@/components/Register'),
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
    }, {
        path: '/index',
        name: 'index',
        component: () => import('@/decorate/404'),
        meta: {
            title: '404',
            keepAlive: true,
        },
    }, { path: "*", redirect: 'index' }],
    // linkExactActiveClass: "vue_active"
    // linkActiveClass: 'vue_active'

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