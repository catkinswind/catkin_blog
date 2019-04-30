<template>
	<div class="lightbox">
		<div class="barbox">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
			<div class="bar4"></div>
			<div class="bar5"></div>
		</div>
		<div class="signbox">
			<div class="sign1"></div>
			<div class="sign2"></div>
			<div class="sign3"></div>
			<div class="sign4"></div>
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

		}
	};
</script>
<style lang="scss" scoped>
.lightbox{
	// width: 100%;overflow-x: hidden;
}
.barbox{
	position: relative;width: 100%;height: 5px;
	div{
		width: 25%;height: 100%;position: absolute;left: -25%;top: 0;
		animation: move 2.5s linear infinite normal;	
	}
	// 如果以25%的宽度，也就是说一行可以完整显示4个，要实现无视觉连续滚动，至少需要5个div，
	// 动画时长2.5s，则每一个div的延迟是0.5s，可以简单的认为延迟时间是动画时长除于div的实际个数，
	// 起始是-25%，终止是100%
	@keyframes move {
		0% {
			left:-25%;
		}
		100%{
			left: 100%;
		}
	}
	.bar1{
		background-color: coral;
	}
	.bar2{
		background-color: black;animation-delay: 0.5s
	}
	.bar3{
		background-color: palegreen;animation-delay: 1s
	}
	.bar4{
		background-color: yellow;animation-delay: 1.5s
	}
	.bar5{
		background-color: darkred;animation-delay: 2s
	}
}
.signbox{
	position: absolute;width: 100%;left: 0;top:0;overflow-x: hidden;
	div{
		width: 25%;float:left;height: 5px;position: relative;left: 0;top:0;
		animation: toright 2s linear  forwards;	//保持最后一帧的状态也就是，出界
	}
	.sign1{
		background-color: blue;
	}
	.sign2{
		background-color: purple;
	}
	.sign3{
		background-color: red;
	}
	.sign4{
		background-color: skyblue;
	}
	@keyframes toright {
		0% {
			left:0;
		}
		100%{
			left: 100%;
		}
	}
}
</style>