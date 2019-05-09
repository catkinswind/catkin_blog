import Vue from 'vue';
import Vuex from 'vuex';
import *as getters from './getters.js' //会将若干个export导出的内容组合成一个对象返回
import *as actions from './actions.js'
import mutations from './mutations.js'
import VuexAlong from 'vuex-along';

Vue.use(Vuex);
// 创建一个Vue.Store实例，得到一个数据仓库对象
let store=new Vuex.Store({//Store一定要大写，表示构造函数
	state:{//可以把state认为是组件中的data，专门存放数据的
		// 调用：this.$store.state.xxx
		userName:'',
		Timer:0,
		backRoutePath:'',
	},
	mutations,
	actions,
	getters,
	// modules,
	plugins:[VuexAlong({
		session:{
			list:["userName"]
		}
	})]
});
export default store;