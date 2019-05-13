<template>
	<div style="background-color: #F3F3F3" ref='wrap'>
		<div class="headerbox">
			<lightbar></lightbar>
			<div class="header">
				<div class="bar content90">
					<div class="flexbar" ref='author'>
						<span>Author:catkinswind</span>
						<span>Date:2019-4-10</span>
					</div>
					<div class="flexul">
						<ul>
							<li><a href="javascript:;" title="">Products</a></li>
							<li><a href="javascript:;" title="">Projects</a></li>
							<li><a href="javascript:;" title="">Home</a></li>
							<li><router-link to="/home/uploadfile" title="">Upload Files</router-link></li>
							<li><a href="javascript:;" title="">Induction</a></li>
							<li><a href="javascript:;" title="">key</a></li>
						</ul>
					</div>
				</div>
				<div class="filament8"></div>
				<div class="title content95">
					<div class="logobox">
						<logo style="height: 45px"></logo>
					</div>
					<signinbar v-if="signin"></signinbar>
					<userbar v-if="!signin" height="30px" fontsize="13px" :showname="false"></userbar>
				</div>
				<div class="filament8"></div>
			</div>
		</div>
		<div class="content">
			<div class="left">
			</div>
			<div class="middle">
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive"></router-view>
				</keep-alive>
				<router-view v-if="!$route.meta.keepAlive"></router-view>	
				<input type="button" name="" value="" style="width:60px;height:30px" @mouseenter ='prompt'>
				<div>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>111111111111</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					<h1>222222222222</h1>
					
					<h1>222222222222</h1>
					<h1>222222222222</h1>
				</div>
			</div>
			<div class="right">
			</div>
		</div>
		<div class="footer"></div>
		<!-- <alert :showAlert="ok" ></alert> -->
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Prompt } from '../pulgin/plugin.js'; 
export default{
	name:'home',
	data(){
		return{
			// ok:false
        }
	},
	created(){
		console.log(`Home组件接收到的用户名${this.$store.getters.loginName}`);
		this.$_zp();
	},
	mounted(){
		this.disappear();
		const _this=this;
		window.addEventListener('resize', function(){
			_this.disappear();
		})
		console.log(this.$_diffTime('1998-05-09 00:00:00',new Date(),'year'))

	},
	methods:{
		disappear(){
			const el=this.$refs.author;
			if(document.body.clientWidth<=500){
				el.style.display = 'none';
			}else{
				el.style.display = 'block';
			}
		},
		prompt(el){
			const result=Prompt({
				el:el.target,
				message:'sncbainvianvian',
			})
			el.target.onmouseout=()=>{
				result.close();
			}
		}
	},
	components:{
		logo:()=>import('../decorate/Logo.vue'),
		signinbar:()=>import('../subcomponents/SignInBar.vue'),
		userbar:()=>import('../subcomponents/UserBar.vue'),
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
.headerbox{
	position: fixed;top:0;left: 0;width: 100%;z-index: 999;
}
.header{
	background-color: #FFF;
	.bar{
		display: flex;justify-content: space-between;flex-wrap: wrap;
		font-size: 12px;letter-spacing: 1px;font-weight: 500;line-height: 30px;
		.flexbar{
			display: block;flex-grow: 1;
			span:nth-child(1){
				margin-right: 20px;
			}
		}
		.flexul{
			display: block;flex-grow: 1;
			ul{
				display: flex;justify-content: space-between;align-items: center;font-size: 11px;
				a:focus{
					color: #1F8ACC;
				}
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
	position: relative;padding-top: 95px
	// margin-top: 10px;
}
</style>
