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
				<div class="loginOrResgiter">
					<input type="button" value="Login" @click='toLogin'>
					<input type="button" value="register" @click='toRegister'>
				</div>
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
	</div>
</template>
<script>
import logo from '../uidesigns/Logo.vue'
import uploadfile from './UpLoadFile.vue'
import lightbar from '../uidesigns/LightBar.vue'
export default{
	name: 'patchCheck',
	data(){
		return{
			position:{
				left:0,
				marginLeft:0,
				infoshow: false,
                fileList: [],
			}
        }
	},
	created(){

	},
	methods:{
		toLogin(){
			this.$router.push({name:'login'})
		},
		toRegister(){
			this.$router.push({name:'register'})
		}
	},
	components:{
		logo,uploadfile,lightbar
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
.title .loginOrResgiter{
	flex:8;display: flex;justify-content: flex-end;
	input{
		width: 58px;height: 34px;border-radius: 5px;margin-right: 11px;
		transition: all 0.4s ease;box-sizing: border-box;font-size: 15px
	}
	input:focus{
		outline: none;
	}
	input:nth-child(1){
		border: 2px solid red;background: transparent;
	}
	input:nth-child(2){
		border: 2px solid coral;background: white;
	}
}
</style>
