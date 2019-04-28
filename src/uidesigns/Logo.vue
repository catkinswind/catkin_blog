<template>
	<div>
		<div class="header" >
			<h1 :style="[{height:height}]">
				<img src="../assets/logo.png" alt=""title="myProject" >
			</h1>
		</div>
	</div>
</template>
<script>
export default{
	props:['height'],
};
</script>
<style lang="scss" scoped>
.header{
	width: 100%;position: relative;
	h1{
		width: 100%;position: relative;height: 70px;margin: 0;
		img{
			height: 100%;
			position: relative;left: 50%;top: 50%;transform: translate(-50%,-50%);
		}
	}
}
</style>