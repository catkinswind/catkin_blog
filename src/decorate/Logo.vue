<template>
		<div class="header" :style="[{height:height}]">
			<h1>
				<img src="../assets/logo.png" alt=""title="myProject" >
			</h1>
		</div>
</template>
<script>
export default{
	props:{
		height:{
			type: String,
			default: '45px',
		}
	},
};
</script>
<style lang="scss" scoped>
.header{
	width: 80%;margin: 0 auto;padding: 5px 0;position: relative;
	h1{
		height:100%;margin: 0 auto;text-align: center;
		img{
			position: relative;height: inherit;
		}
	}
}
</style>