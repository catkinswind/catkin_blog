<template>
	<div>
		<logo left='50%' marginLeft="-100px"></logo>
		<div class="box">
			<div class="content">
				<form autocomplete="off">
					<label for="login_field">
						Username
					</label>
					<input id="login_field" type="text" v-model.trim="userName" placeholder="" v-focus spellcheck="false">
					<label for="register_pwd">
						Password
					</label>
					<input id="register_pwd" type="password" v-model.trim="userPwd" placeholder="" @change="pwd" ref="pwd">
					<div class="forgetline">
						<label for="register_pwd_repeeat">
							<span>Repeeat the password</span> 
						</label>
					</div>
					<input id="register_pwd_repeeat" type="password" v-model.trim="repuserPwd" placeholder="" @change="repwd" @keyup.enter='confirm'>
					<div class="blank"  v-if='!errflag'></div>
					<div class="verify" v-if='errflag'>{{errmsg}}</div>
					<input class="btn" type="button" name="" value="Confirm" @click="confirm" ref="btn">
					
				</form>
				<div class="spancontainer">
					<span class="entry" @click="tologin">Login ?</span>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui';
	import logo from './logo.vue'
	import hight from '../js/my.js'
	export default{
		data(){
			return{
				userName:'',nameflag:false,namemsg:'',
				userPwd:'',pwdlflag:false,
				repuserPwd:'',
				errmsg:'',errflag:false,
				registerflag:'',

			}
		},
		methods:{
			tologin(){
				this.$router.push({name:'login'})
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
		confirm(){
			this.errflag=false;
			if (this.userPwd==='') {
				hight(this.$refs.pwd,'red');
			}
			if (this.repuserPwd==='') {
				this.errflag=true;
				this.errmsg='请输入密码';
			}
			if (this.userPwd!==''&&this.repuserPwd!==''&&this.userPwd===this.repuserPwd) {
				this.$refs.btn.removeAttribute('readonly');
				let form=new FormData();
				form.append('userName',this.userName);
				form.append('userPwd',this.userPwd);
				const config={
					headers:{'Content-Type':'multipart/from-data'}
				}
				this.axios.post('/api/forget.php',form,config).then(resp=>{
					console.log(resp.data)
					let result=resp.data;
					if (result.isname) {
						if (result.changpwd) {
							Toast({
								message:"修改成功",
								duration:1000,
								className:'toastsuc'
							})
						}else {
							this.errflag=true;
							this.errmsg='修改失败'
						}
					}else{
						this.errmsg='You enter the Username does not exist!';
						this.errflag=true;
					}
				})
			}
			else {
				this.$refs.btn.setAttribute('readonly', false)
			}
		}
		
	},
	components:{
		logo
	},
	
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content .btn{
	background: #FFF;padding-left: 0;text-shadow: 0 2px 4px rgba(0,0,0,.25);font-weight: 600;
	margin-bottom: 20px;
}


</style>

