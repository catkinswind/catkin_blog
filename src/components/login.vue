<template>
	<div>
		<logo left='50%' marginLeft="-100px"></logo>
		<div class="box">
			<div class="content">
				<div class="headportrait">
					<div class="container">
						<img src="../assets/timg.jpg" alt="">
					</div>
				</div>
				<div class="login">Login</div>
				<form autocomplete="off">
					<label for="login_field">
						Username
					</label>
					<input id="login_field" type="text" v-model.trim="userName" placeholder="" v-focus spellcheck="false">
					<div class="forgetline">
						<label for="login_pwd">
							Password
						</label>
						<a href="javascript:;" title="忘记密码？" @click='forget'>Forget password?</a>
					</div>
					<input id="login_pwd" type="password" v-model.trim="userPwd" @keyup.enter='submit'>
					<div class="blank"  v-if='!errflag'></div>
					<div class="verify" v-if='errflag'>{{errmsg}}</div>
					<input class="btn" type="button" name="" value="Login" @click="submit">
				</form>
				<div class="spancontainer">
					<span class="entry" @click="register">Register Account ?</span>
				</div>
			</div>
			<div class="about">
				<span class="entry noline">Welcome to myproject</span><br>
				<span class="entry">Application guidelines</span>
			</div>
			
		</div>

	</div>
</template>
<script>
	import {Toast} from 'mint-ui';
	import logo from './logo.vue'
	export default{
		data(){
			return{
				userName:'',
				userPwd:'',
				errmsg:'',
				errflag:false,
			}
		},
		methods:{
			submit(){
				this.succmsg=this.errmsg='';
				if (this.userName==='') {
					this.errflag=true;
					this.errmsg='You enter a Username!';
				}
				if (this.userPwd==='') {
					this.errmsg='Please enter your password';
					this.errflag=true;
				}
				if (this.userName===''&&this.userPwd===''){
					this.errmsg='Please enter username and password';
					this.errflag=true;
				}
				if (this.userName!==''&&this.userPwd!=='') {
					let form=new FormData();
					form.append('userName',this.userName);
					form.append('userPwd',this.userPwd);
					let config={
						headers:{'Content-Type':'multipart/from-data'}
					}
					this.axios.post('/api/login.php',form,config).then(resp=>{
						let data=resp.data;
				        // console.log(data)
				        if (data.isname) {//账号存在
				            if (data.ispwd) {//密码正确
				            	this.$router.push({name:'main'})
					    	    Toast({
					    		    message:"登录成功",
					    		    duration:1000,
					    		    className:'toastsuc'
					    	    })
					        }else {
					    	    this.errmsg='Password is wrong!';
					    	    this.errflag=true;
					        }
					    }else {
					    	this.errmsg='You enter the Username does not exist!';
					    	this.errflag=true;
					    }
				    })
				}
			},
			register(){
				this.$router.push({name:'register'})
			},
			forget(){
				this.$router.push({name:'forget'})
			}
		},
		components:{
			logo
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.box{
	width: 400px;position: absolute;left: 50%;margin-left: -200px;top: 18%;
	display: flex;flex-direction: column;justify-content: center;
	font-weight: 600;font-size: 13px;
	.about{
		width: 100%;line-height: 40px;border: 2px solid #CCC;border-radius: 5px;margin-top: 20px;
		box-sizing: border-box;background: white;text-align: center;
	}
}
.box .content{
	width: 100%;text-align: left;padding:15px;padding-bottom: 20px;
	box-sizing: border-box;border: 2px solid #ccc;border-radius: 5px;background: white;
	.headportrait{
		width: 150px;height: 150px;
		margin: 10px auto 30px;border-radius: 50%;overflow: hidden;
	}
	.headportrait .container{
		width: 100%;height: 100%;background: transparent;
		img{
			width: 220px
		}
	}
	.login{
		font-size: 18px;margin-bottom: 10px;
	}
	label{
		display: inline-block;width: 50%;height: 35px;line-height: 35px;
	} 
	input{
		width: 100%;height: 40px; border: 1px solid #CCC;
		border-radius: 5px;padding-left: 20px;box-sizing: border-box;
	}
	input:focus{
		outline: 0;border-color: #1F8ACC;
	}
}
.forgetline{
	display: flex;justify-content: space-between;line-height: 35px;
	label{
		width: 50%
	}
}
.blank{
	background: transparent;width: 100%;height: 20px;
}
.verify{
	width: 100%;border-radius: 5px;margin: 5px auto;
	height: 25px;line-height: 25px;padding-left: 10px;box-sizing: border-box;
	background: red;color: white;font-size: 12px;font-weight: 500;
}
.spancontainer{
	text-align: center;
}
.entry{
	height: 30px;line-height: 30px;
	text-decoration: underline;text-shadow: 0 2px 4px rgba(0,0,0,.25);font-weight: 500
}
.noline{
	text-decoration: none
}
</style>

<style lang="scss" scoped>
.content .btn{
	background: #FFF;padding-left: 0;margin-bottom:20px ;
	text-shadow: 0 2px 4px rgba(0,0,0,.25);font-weight: 600;
}
.toastsuc{
	background: linear-gradient(.31deg,#3cac8a .7%,#5cceac 99.3%) !important;
	text-shadow: 0 2px 4px rgba(0,0,0,.25);
	/* Mint-Ui组件的提示文字 */
	span{
		text-align: left;font-size: 12px;color: white;
	}
}

</style>
