<template>
	<div class="loginOrResgiter">
		<div class="usericon" :style="[{height:iconsize,width:iconsize}]" @click="clear">
			<img src="../assets/timg.jpg" :style="[{height:iconsize}]" :title="$store.getters.loginName">
		</div>
			
		<h2 class="username">{{$store.getters.loginName}}</h2>
	</div>
</template>
<script>
import {mapMutations} from 'vuex';
export default{
	props:['height'],
	data(){
		return{
        }
	},
	created(){
		console.log(this.iconsize)
	},
	methods:{
		...mapMutations(['loginUserName']),
		clear(){
			this.loginUserName('');
			clearVuexAlong(true,false);
		}
	},
	computed:{
		iconsize(){
			return parseInt(this.height)*0.8+'px'
		}
	}
};
</script>
<style lang="scss" scoped>
.title .loginOrResgiter{
	flex:8;display: flex;justify-content: flex-end;
	.usericon{
		height: 100%;border-radius: 50%;overflow: hidden;
	}
		
	.username{
		font-size: 13px;margin-left: 10px;padding-top: 5px;margin-right: 20px;
	}
}
</style>