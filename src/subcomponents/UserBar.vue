<template>
	<div class="head">
		<div class="usericon" :style="[{height:height,width:height}]" @click="info">
			<img src="../assets/timg.jpg" :title="loginName">
		</div>	
		<h2 class="username" :style="[{fontSize:fontsize}]">{{loginName}}</h2>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
	props:['height','fontsize'],
	data(){
		return{
        }
	},
	methods:{
		info(){
			this.$router.push('info')
		}
	},
	computed:{
		...mapGetters(['loginName']),
	}
};
</script>
<style lang="scss" scoped>
.head{
	display: flex;justify-content: flex-start;
	.usericon{
		height: 100%;border-radius: 50%;overflow: hidden;
		img{
			height:inherit;
		}
	}
	.username{
		font-size: 13px;margin-left: 10px;padding-top: 5px;margin-right: 20px;
	}

}
	
</style>