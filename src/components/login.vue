<!--
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:36
 * @LastEditTime: 2019-08-17 17:25:13
 -->
<template>
    <div>
        <logo height="60px"></logo>
        <div class="box">
            <div class="content">
                <div class="headportrait">
                    <div class="container">
                        <img src="../assets/timg.jpg" alt />
                    </div>
                </div>
                <div class="title">Login</div>
                <form autocomplete="off">
                    <label for="login_field">Username</label>
                    <el-input
                        v-element_focus
                        placeholder="请输入内容"
                        id="login_field"
                        type="text"
                        v-model.trim="userName"
                        spellcheck="false"
                        clearable
                    ></el-input>
                    <div class="forgetline">
                        <label for="login_pwd">Password</label>
                        <a href="javascript:;" title="忘记密码？" @click="forget">Forget password?</a>
                    </div>
                    <div class="eye">
                        <el-input
                            placeholder="请输入密码"
                            id="login_pwd"
                            type="password"
                            v-model.trim="userPwd"
                            @keyup.native.enter="submit"
                            show-password
                        ></el-input>
                    </div>
                    <div class="blank" v-if="!errflag"></div>
                    <div class="verify" v-if="errflag">{{errmsg}}</div>
                    <input class="btn" type="button" name value="Login" @click="submit" />
                </form>
                <div class="spancontainer">
                    <span class="entry" @click="register">Register Account ?</span>
                </div>
            </div>
            <div class="about">
                <span class="entry noline">Welcome to myproject</span>
                <br />
                <span class="entry">Application guidelines</span>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { mapMutations } from 'vuex'
export default {
    data () {
        return {
            userName: '',
            userPwd: '',
            errmsg: '',
            errflag: false,
        }
    },
    methods: {
        ...mapMutations(['loginUserName']),
        submit () {
            this.succmsg = this.errmsg = '';
            if (this.userName === '') {
                this.errflag = true;
                this.errmsg = 'You enter a Username!';
            }
            if (this.userPwd === '') {
                this.errmsg = 'Please enter your password';
                this.errflag = true;
            }
            if (this.userName === '' && this.userPwd === '') {
                this.errmsg = 'Please enter username and password';
                this.errflag = true;
            }
            if (this.userName !== '' && this.userPwd !== '') {
                const data = { 'userName': this.userName, 'userPwd': this.userPwd };
                this.$axios.post('/api/login.php', data).then(data => {
                    console.log(data)
                    if (data.isname) {//账号存在
                        if (data.ispwd) {//密码正确
                            this.$router.push({ name: 'home' });
                            // 相当于调用this.$store.commit('loginUserName',this.userName);
                            this.loginUserName(this.userName);
                            Toast({
                                message: "登录成功",
                                duration: 1000,
                                className: 'toastsuc',
                            })
                        } else {
                            this.errmsg = '密码错误！';
                            this.errflag = true;
                        }
                    } else {
                        this.errmsg = '账号不存在！';
                        this.errflag = true;
                    }
                }).catch(err => {
                    this.errmsg = '登录失败，服务器错误！';
                    this.errflag = true;
                })
            }
        },
        register () {
            this.$router.push({ name: 'register' })
        },
        forget () {
            this.$router.push({
                name: 'forget',
                params: {
                    name: this.userName || ''
                }
            })
        }
    },
    components: {
        logo: () => import('@/decorate/Logo'),
    }
};
</script>
<style lang="scss" scoped>
.content .btn {
    background: #fff;
    padding-left: 0;
    margin-bottom: 20px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
}
</style>
