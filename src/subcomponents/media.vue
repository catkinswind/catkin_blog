<template>
	<div>
		media测试组件12345678901234567890123456789012345678901234567890
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

	}
};
</script>
<style lang="scss" scoped>
/*通用样式*/
/*手机*/
@media screen and (max-width:600px){
	div{
		width:100%;height: 100px;background-color:red;
		color: white;
	}	
}
/*平板*/
@media screen and (min-width:600px) and (max-width:960px){
	div{
		width:100px;height: 100px;background-color:yellow;
		color: white;
	}	
}
/*PC*/
@media screen and (min-width:960px){
	div{
		width:100px;height: 100px;background-color:green;
		color: white;
	}	
}
</style>