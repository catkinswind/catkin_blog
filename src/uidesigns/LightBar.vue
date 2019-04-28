<template>
	<div class="barbox">
		<div class="bar1"></div>
		<div class="bar2"></div>
		<div class="bar3"></div>
		<div class="bar4"></div>
		<div class="bar5"></div>
		<div class="bar6"></div>
		<div class="bar7"></div>
		<div class="bar8"></div>
		
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
.barbox{
	position: relative;width: 100%;height: 5px;margin-bottom: 5px;
	div{
		width: 25%;height: 100%;position: absolute;left: -100%;top: 0;
		animation: move 4s linear 0s infinite normal;	
	}
	// 如果以25%的宽度，也就是说一行可以完整显示4个，动画时长是4秒的话，延迟就是(4/8)s
	// 起始是-100%，终止是100%
	// 注意:div的是几个数必须是一行能显示个数的两倍，延迟时间是动画时长除于div的实际个数
	@keyframes move {
		0% {
			left:-100%;
		}
		100%{
			left: 100%;
		}
	}
	.bar1{
		background-color: coral;
	}
	.bar2{
		background-color: skyblue;animation-delay: 0.5s
	}
	.bar3{
		background-color: palegreen;animation-delay: 1s
	}
	.bar4{
		background-color: wheat;animation-delay: 1.5s
	}
	.bar5{
		background-color: darkred;animation-delay: 2s
	}
	.bar6{
		background-color: yellow;animation-delay: 2.5s
	}
	.bar7{
		background-color: purple;animation-delay: 3s
	}
	.bar8{
		background-color: blue;animation-delay: 3.5s
	}
}
</style>