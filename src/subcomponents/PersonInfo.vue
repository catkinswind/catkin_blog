<template>
	<div class="infocontainer">
		<div class="infoset">
			<div class="content95">
				<i @click="back" class="layui-icon layui-icon-return"></i>  
				<h2>个人信息</h2>
			</div>
		</div>
		<div class="head">
			<div class="content90">
				<userbar height="55px" fontsize="15px"></userbar>
			</div>
		</div>
		<div class="content" >
			<div v-for="item in list">
				<div class="line"></div>
				<div class="more content90">
					<p>{{item}}</p>
					<i class="layui-icon layui-icon-right"></i>  
				</div>
			</div>
		</div>
		<div class="switch" @click="change">
			<p>切换账号</p>
		</div>
		<div class="exit" @click="exit">
			<p>退出登录</p>
		</div>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
		<h1>11111111111111</h1>
	</div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex';
import userbar from './UserBar.vue'
export default{
	data(){
		return{
		     list:['个人主页','完善信息','通用设置','功能反馈','关于我们','加入我们','1.2.0']
        }
	},
	created(){

	},
	mounted(){
		// setInterval(function(){
  //           console.log(document.querySelector('#app').scrollTop);
		// }, 1000);
	},
	methods:{
		...mapMutations(['loginUserName']),
		back(){
			this.$router.push(this.getBackRoutePath);
		},
		change(){
			this.$router.push('login')
		},
		exit(){
			this.loginUserName('');
			clearVuexAlong(true,false);
			this.$router.push('home')
		},
	},
	components:{
		userbar
	},
	computed:{
		...mapGetters(['loginName','getBackRoutePath'])
	}
};
</script>
<style lang="scss" scoped>
.infocontainer{
	background-color: #F3F3F3;
	div{
		background-color: #FFF;
	}
}
.infoset{
	position: relative;
	i{
		font-size: 21px; color: #000;line-height: 30px;font-weight: 600;
	}
	h2{
		position: absolute;left:50%;top:0;transform: translateX(-50%);
		font-size: 19px;line-height: 30px;font-weight: 500
	}
}
.head{
	padding: 20px 0;
	
}
p{
	line-height: 50px;font-size: 15px;
}
.content{
	.more{
		display: flex;justify-content: space-between;
		i{
			line-height: 50px;display: block;height: 100%;width: 20px
		}
	}
	.line{
		width: 100%;height: 1px;background: #CCC;transform: scaleY(0.6)
	}
}

.switch{
	margin-top: 30px;
	p{
		text-align: center;
	}
}
.exit{
	margin-top: 20px;
	p{
		text-align: center;
		background: linear-gradient(to bottom right,#CC0D17,#E51C2F)
		;
		// E51C2F
		color: #FFF
	}
	p:active{
		opacity: 0.5
	}
	
}
</style>