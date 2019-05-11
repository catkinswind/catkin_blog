<template>
	<div class="head" :class="[{'no':!showname}]">
		<div class="usericon" :style="[{height:height,width:height}]" @click="info">
			<img src="../assets/timg.jpg" :title="loginName">
		</div>	
		<h2 class="username" :style="[{fontSize:fontsize}]" v-if="showname" >{{loginName}}</h2>
	</div>
</template>
<script>
import { mapGetters,mapMutations } from 'vuex'
export default{
	props:['height','fontsize','showname'],
	data(){
		return{
        }
	},
	mounted(){
		if (!this.showname) {
			console.log(this.$refs.showname)
			// this.$refs.showname.style.marginRight = '20px'
		}
	},
	methods:{
		...mapMutations(['setBackRoutePath']),
		info(){
			this.setBackRoutePath(this.$route.path)
			this.$router.push('/info')
		}
	},
	computed:{
		...mapGetters(['loginName']),
	}
};
</script>
<style lang="scss" scoped>
.head{
	display: flex;justify-content: space-between;
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
.no	{
	margin-right: 10px;
}
</style>