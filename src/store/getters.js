/*
  只负责对外提供数据，不负责修改数据，如果想要修改数据，切记使用mutations中的方法
  第一个参数规定死了,必须是state
  调用：this.$store.getters.方法名
 */
export const loginName=state=>state.userName;
export const getTimer=state=>state.Timer;
export const getBackRoutePath=state=>state.backRoutePath;
		