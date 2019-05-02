<template>
	<div>
		<input type="button" value="Login" @click='toLogin'>
		<input type="button" value="Sign Up" @click='toSignUp'>
	</div>
</template>
<script>
export default{
	data(){
		return{		     
        }
	},
	methods:{
		toLogin(){
			this.$router.push({name:'login'})
		},
		toSignUp(){
			this.$router.push({name:'register'})
		}
	}
};
</script>
<style lang="scss" scoped>
input{
	letter-spacing: 1px;font-size: 13px;font-weight: 500;background: #FFF;
}
input:active{
	outline: 0;background: rgba(204,204,204,0.4);border-color: #1F8ACC;
}
input:nth-child(1){
	border: 1px solid red;margin-right: 11px;width: 58px;height: 30px;
}
input:nth-child(2){
	border: none;
}
</style>