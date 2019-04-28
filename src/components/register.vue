<template>
	<div>
		<logo></logo>
		<div class="box">
			<div class="content">
				
				<div class="title">Sign up</div>
				<form autocomplete="off">
					<label for="register_field">
						Username
					</label>
					<input id="register_field" type="text" v-model.trim="userName" placeholder="" v-focus spellcheck="false"  @change="name" >
					<div class="verify" v-if='nameflag'>{{namemsg}}</div>
					<label for="register_email">
						Email
					</label>
					<div class="emailbox">
						<input id="register_email" type="text" v-model.trim="userEmail" placeholder=""  @change="email" spellcheck="false" @keyup='emailcontainer'>
						<div class="emailcontainer" ref='email' >
							<p v-for="item in emailList" :key='item' @click.stop='cheackemail' 
							@mouseover="hightcheckone" @mouseout.stop="cancelhight">{{userEmail}}{{item}}</p>
						</div>
						<div class="verify" v-if='emailflag'>{{emailmsg}}</div>
					</div>
					<label for="register_pwd">
						Password
					</label>
					<input id="register_pwd" type="password" v-model.trim="userPwd" placeholder="" @change="pwd" ref="pwd">
					<div class="forgetline">
						<label for="register_pwd_repeeat">
							<span>Repeeat the password</span> 
						</label>
						<a href="javascript:;" @click="tologin">Already have an account?</a>
					</div>
					<input id="register_pwd_repeeat" type="password" v-model.trim="repuserPwd" placeholder="" @change="repwd" @keyup.enter='register'>
					<div class="blank"  v-if='!errflag'></div>
					<div class="verify" v-if='errflag'>{{errmsg}}</div>
					<input class="btn" type="button" name="" value="Register" @click="register" ref="btn">
					<div :class="['verify','tranpar',{'succclass':succclassflag},{'errclass':errclassflag}]" >{{registerflag}}</div>
				</form>
				<div class="spancontainer">
					<span class="entry" @click="tologin">Login ?</span>
				</div>
			</div>
			<div class="about">

				<span class="entry">Application guidelines</span>
			</div>
		</div>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui';
	import logo from '../uidesigns/Logo.vue'
	import hight from '../assets/js/my.js'
	export default{
		data(){
			return{
			//同户名格式错误提示信息,验证用户名格式是否符合规范
			userName:'',nameflag:false,namemsg:'',
			userEmail:'',emailflag:false,emailmsg:'',
			userPwd:'',pwdlflag:false,
			repuserPwd:'',
			errmsg:'',errflag:false,
			registerflag:'',
			succclassflag:false,
			errclassflag:false,
			emailList:['@qq.com','@163.com','@126.com','@sohu.com','@sina.com'],
		}
	},
	methods:{
		tologin(){
			this.$router.push({name:'login'})
		},
		name(){
			this.nameflag=false;
			if (this.userName!=='') {
				if (!(/^[-_A-z0-9]{3,16}$/.test(this.userName))) {
					this.nameflag=!this.nameflag;
					this.namemsg='用户名不低于三位字符，不能含有特殊字符和空格'
				}
			}
		},
		email(){
			this.emailflag=false;
			if (this.userEmail!=='') {
				if (!(/^[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/.test(this.userEmail))) {
					this.emailflag=!this.emailflag;
					this.emailmsg='请输入正确的邮箱'
				}
			}
		},
		emailcontainer(el){
			if(el.target.value.toString().length>=3) {
				this.$refs.email.style.display = 'block';
			}else {
				this.$refs.email.style.display = 'none';
			}
	    	// setTimeout(this.cancelcontainer, 3000);
	    },
	    cheackemail(el){
	    	this.userEmail=el.target.textContent;
	    	this.$refs.email.style.display = 'none';
	    	this.email();
	    },
	    hightcheckone(el){
	    	el.target.style.backgroundColor = '#CCC'
	    },
	    cancelhight(el){
	    	el.target.style.backgroundColor = 'transparent';
	    },
	    cancelcontainer(){
	    	this.$refs.email.style.display = 'none';
	    },
	    pwd(){
	    	const el=this.$refs.pwd
	    	if (this.userPwd!=='') {
				if (!(/^[-_A-z0-9$@!%*#?&]{4,16}$/.test(this.userPwd))){//密码格式不对
					hight(el,'red');
				}else {
					this.repwd();
					el.style.border =' 1px solid #CCC';
					el.style.boxShadow ='0 0 5px transparent';
				}
			}
			
		},
		repwd(){
			this.errflag=false
			if (this.repuserPwd!==''&&this.userPwd!=='') {
				if (this.repuserPwd!==this.userPwd) {//两次密码不一致
					this.errflag=true
					this.errmsg='两次输入的密码不一致'
				}
			}
		},
		register(){
			const el=this.$refs.btn;
			el.style.border =' 1px solid #CCC';
			el.style.boxShadow ='0 0 5px transparent';
			this.errclassflag=this.succclassflag=false;
			// 判断信息是否为空
			if (this.userName==='') {
				this.nameflag=true;
				this.namemsg='请输入用户名'
			}
			if (this.userEmail==='') {
				this.emailflag=true;
				this.emailmsg='请输入邮箱'
			}
			if (this.userPwd==='') {
				hight(this.$refs.pwd,'red');
			}
			if (this.repuserPwd==='') {
				this.errflag=true;
				this.errmsg='请输入密码';
			}
			let flag=!this.nameflag&&!this.emailflag&&!this.pwdlflag&&!this.errflag;
			let blank=this.userName!==''&&this.userEmail!==''&&this.userPwd!==''&&this.repuserPwd!=='';
			if (flag&&blank) {
				this.$refs.btn.removeAttribute('readonly');
				let form=new FormData();
				form.append('userName',this.userName);
				let config={
					headers:{'Content-Type':'multipart/from-data'}
				}
				this.axios.post('/api/register.php',form,config).then(resp=>{
					let data=resp.data;
				    // console.log(data)
				    if (data.isname) {//账号存在
				    	this.registerflag='用户名已存在'
				    	hight(el,'red');
				    	this.errclassflag=true;
				    }else {
				    	let form=new FormData();
				    	form.append('userName',this.userName);
				    	form.append('userEmail',this.userEmail);
				    	form.append('userPwd',this.userPwd);
				    	let config={
				    		headers:{'Content-Type':'multipart/from-data'}
				    	}
				    	this.axios.post('/api/register.php',form,config).then(resp=>{
				    		let data=resp.data;
				    		console.log(data)
				            if (data===1) {//存入json文件中并验证成功
				            	this.registerflag='注册成功'
				            	hight(el,'green');
				            	this.succclassflag=true;
				            }
				            else {
				            	this.registerflag='注册失败'
				            	hight(el,'red');
				            	this.errclassflag=true;
				            }
				        })
				    }
				})
			}else {
				this.$refs.btn.setAttribute('readonly', false)
			}
		}
	},
	components:{
		logo
	},
	updated(){
		let el=this.$refs.email;
        document.addEventListener('click', function(){
        	el.style.display = 'none';
        })
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content .btn{
	background: #FFF;padding-left: 0;text-shadow: 0 2px 4px rgba(0,0,0,.25);font-weight: 600;
}
.box .about{
	width: 100%;line-height: 40px;border: 2px solid #CCC;border-radius: 5px;margin-top: 20px;
	text-align: center;box-sizing: border-box;background: white
}
.succclass{
	background: linear-gradient(.31deg,#3cac8a .7%,#5cceac 99.3%);opacity: 1 !important;
	text-align: center;
}
.errclass{
	background: red;
	opacity: 1 !important
}
.tranpar{
	opacity: 0;
}
.emailbox{
	position: relative;width: 100%;
	.emailcontainer{
		position: absolute;left: 0;top: 40px;width: 100%;background: #FFF;border-radius: 5px;
		border: 1px solid #CCC;box-sizing: border-box;display:none;overflow: hidden;
		p{
			width: 100%;height: 35px;line-height: 35px;font-size: 13px;font-weight: 500;
			padding-left: 20px;box-sizing: border-box;border-radius: 5px
		}
		p:nth-child(1){
			margin-top: 5px;
		}
	}
}

</style>

