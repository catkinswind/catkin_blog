<template>
	<div>
		<div class="header" :style="[{left:left,marginLeft:marginLeft}]" >
			<h1><img src="../assets/logo.png" alt=""title="myProject" :style="[{width:width}]"></h1>
		</div>
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

	},
	props:['left','marginLeft','width'],
};
</script>
<style lang="scss" scoped>
.header{
	width: 100%;
	position: relative;
	z-index: 3;
	h1{
		position: relative;left: 0;top: 0;
		img{
			width: 200px;
		}
	}
}
</style>