<template>
	<div>
		<lightbar></lightbar>
		<div class="header">
			<div class="bar">
				<ul>
					<li><a href="#" title="">products</a></li>
					<li><a href="#" title="">projects</a></li>
					<li><a href="#" title="">home</a></li>
					<li><a href="#" title="">uploadfile</a></li>
					<li><a href="#" title="">induction</a></li>
				</ul>
			</div>
			<div class="title">
				<div class="logobox">
					<logo height="45px"></logo>
				</div>
				<signinbar v-if="signin"></signinbar>
				<signupbar v-if="!signin" height="45px"></signupbar>
			</div>
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
import signupbar from '../subcomponents/SignUpBar.vue'
import { mapGetters } from 'vuex'
export default{
	// name: 'patchCheck',
	data(){
		return{
			// signin:true,
        }
	},
	created(){
		console.log(`Home组件接收到的用户名${this.$store.getters.loginName}`);
	},
	methods:{
	},
	components:{
		logo,
		uploadfile,
		lightbar,
		signinbar,
		signupbar,
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
	.bar{
		ul{
			width: 100%;display: flex;justify-content: space-between;align-items: center;
			// padding: 0 5px;
			li{
				flex: 1;text-align: center;color: black;
			}
			a{
				text-decoration: none;font-size: 16px;line-height: 40px
			}
		}
	}
    .title{
    	display: flex;justify-content: space-between;align-items: center;
    	.logobox{
    		flex:2;
    	}
    }
}
</style>
