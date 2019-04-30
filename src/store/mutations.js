/*
  如果想要更新state中的数据，最好通过调用mutations中的方法，
  不推荐直接操作state中的数据，容易造成数据混乱，且不容易定位查错，因为每个组件都可以有操作state中的数据的方法
  最多只支持两个参数，第一个参数已经规定死了，是state，
                    第二个参数是commit传过来的参数，可以传递一个对象过来达到传递多个参数的效果
  在子组件中调用：this.$store.commit('方法名',{参数})
 */
/*
  mutation必须是同步函数，在 mutation 中混合异步调用会导致程序很难调试。
  例如，当调用了两个包含异步回调的 mutation 来改变状态，怎么知道什么时候回调和哪个先回调呢？
  这就是为什么要区分这两个概念，在 Vuex 中，mutation 都是同步事务
 */
import *as types from './mutation-types.js';

const mutations={
	[types.loginUserName](state,name){
		state.userName=name;
	}
};
// 任何由"loginUserName"导致的状态变更都应该在 this.$store.commit('loginUserName') 时完成
export default mutations;
