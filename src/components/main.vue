<template>
	<div>
		<div class="header">
			<div class="bar">
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
				</ul>
			</div>
			<div class="title">
				<logo height="45px"></logo>
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
import logo from './Logo.vue'
import uploadfile from './UpLoadFile.vue'
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
		logo,uploadfile
	},
};
</script>
<style lang="scss" scoped>
.header{
	width: 100%;background: yellow;
	.bar{
		width: 100%;background: #CCC
	}
    .bar ul{
    	width: 100%;display: flex;
    	li{
    		flex: 1;background: red;height: 40px;
    		line-height: 40px;text-align: center;
    	}
    }
    .title{
    	display: flex;justify-content: space-between;align-items: center;
    }
}
.title .loginOrResgiter{
	display: flex;align-items: center;justify-content: flex-end;
	input{
		width: 58px;height: 34px;border-radius: 5px;margin-right: 11px;
		transition: all 0.4s ease;box-sizing: border-box;
	}
	input:focus{
		outline: none;
	}
	input:nth-child(1){
		border: 2px solid red;background: transparent;
	}
	input:nth-child(2){
		border: 2px solid red;background: white;
	}
}
</style>
