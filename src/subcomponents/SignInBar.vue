<template>
	<div class="loginOrResgiter">
		<input type="button" value="Login" @click='toLogin'>
		<input type="button" value="register" @click='toRegister'>
	</div>
</template>
<script>
export default{
	data(){
		return{
		     
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
	}
};
</script>
<style lang="scss" scoped>
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