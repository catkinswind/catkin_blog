<template>
	<div style="background-color: #F3F3F3">
		<lightbar></lightbar>
		<div class="header">
			<div class="bar">
				<ul class="content95">
					<li><a href="javascript::" title="">Products</a></li>
					<li><a href="javascript::" title="">Projects</a></li>
					<li><a href="javascript::" title="">Home</a></li>
					<li><a href="javascript::" title="">Upload Files</a></li>
					<li><a href="javascript::" title="">Induction</a></li>
					<li><a href="javascript::" title="">key</a></li>
				</ul>
			</div>
			<div class="filament8"></div>
			<div class="title content95">
				<div class="logobox">
					<logo style="height: 45px;"></logo>
				</div>
				<signinbar v-if="signin"></signinbar>
				<userbar v-if="!signin" height="35px" fontsize="13px"></userbar>
			</div>
			<div class="filament8"></div>
		</div>
		<div class="content">
			<div class="left">
				<uploadfile></uploadfile>
			</div>
			<div class="right">
			</div>
		</div>
		<div class="footer"></div>
		<!-- <lightbar></lightbar> -->
	</div>
</template>
<script>
import logo from '../decorate/Logo.vue'
import uploadfile from './UpLoadFile.vue'
import lightbar from '../decorate/LightBar.vue'
import signinbar from '../subcomponents/SignInBar.vue';
import userbar from '../subcomponents/UserBar.vue'
import { mapGetters } from 'vuex'
export default{
	data(){
		return{
        }
	},
	created(){
		console.log(`Home组件接收到的用户名${this.$store.getters.loginName}`);
		this.$_zp();
	},
	methods:{
	},
	components:{
		logo,
		uploadfile,
		lightbar,
		signinbar,
		userbar,
	},
	computed:{
		// loginName(){
		// 	return this.$store.getters.loginName;
		// }
		...mapGetters(['loginName']),//相当于调用了上述代码
		signin(){
			return this.loginName===''?true:false;
		}
	},
	
};
</script>
<style lang="scss" scoped>
.header{
	background-color: #FFF;
	.bar{
		ul{
			display: flex;justify-content: space-between;align-items: center;
			a{
				font-size: 12px;line-height: 30px;font-weight: 500;letter-spacing: 1px;
			}
			a:focus{
				color: #1F8ACC;
			}
		}
	}
	.title{
		display: flex;justify-content: space-between;align-items: center;
		.logobox{
			transform: translateX(-20%);
		}
	}
}
.content{
	margin-top: 10px;
}
</style>
