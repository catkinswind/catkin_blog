<!--
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:36
 * @LastEditTime: 2019-08-17 17:42:28
 -->
<template>
    <div>
        <logo height="60px"></logo>
        <div class="box">
            <div class="content">
                <div class="title">Reset password</div>
                <form autocomplete="off">
                    <label for="login_field" v-focus>Username</label>
                    <el-input
                        placeholder="请输入内容"
                        id="login_field"
                        type="text"
                        v-model.trim="userName"
                        spellcheck="false"
                        clearable
                    ></el-input>
                    <label for="register_pwd">New password</label>
                    <div class="eye">
                        <el-input
                            placeholder="请输入密码"
                            id="register_pwd"
                            type="password"
                            v-model.trim="userPwd"
                            @change="pwd"
                            show-password
                        ></el-input>
                    </div>
                    <div class="forgetline">
                        <label for="register_pwd_repeeat">
                            <span>Repeeat the password</span>
                        </label>
                    </div>
                    <div class="eye">
                        <el-input
                            id="register_pwd_repeeat"
                            v-model.trim="repuserPwd"
                            @change="repwd"
                            @keyup.native.enter="confirm"
                            placeholder="请再次输入密码"
                            show-password
                        ></el-input>
                    </div>
                    <div class="blank" v-if="!errflag"></div>
                    <div class="verify" v-if="errflag">{{errmsg}}</div>
                    <input
                        class="btn"
                        type="button"
                        name
                        value="Confirm"
                        @click="confirm"
                        ref="btn"
                    />
                </form>
                <div class="spancontainer">
                    <span class="entry" @click="tologin">Login ?</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            userName: '', nameflag: false, namemsg: '',
            userPwd: '', pwdlflag: false,
            repuserPwd: '',
            errmsg: '', errflag: false,
            registerflag: '',

        }
    },
    methods: {
        tologin () {
            this.$router.push({ name: 'login' })
        },
        confirm () {
            if (this.repuserPwd === '' || this.userPwd === '') {
                this.errflag = true;
                this.errmsg = '请输入密码';
            }
            if (this.userPwd !== '' && this.repuserPwd !== '' && this.userPwd === this.repuserPwd) {
                this.$refs.btn.removeAttribute('readonly');
                const data = { 'userName': this.userName, 'userPwd': this.userPwd };
                this.$axios.post('/api/forget.php', data).then(data => {
                    if (data.isname) {
                        if (data.changpwd) {
                            Toast({
                                message: "修改成功",
                                duration: 1000,
                                className: 'toastsuc'
                            })
                        } else {
                            this.errflag = true;
                            this.errmsg = '修改失败'
                        }
                    } else {
                        this.errmsg = '账号不存在！';
                        this.errflag = true;
                    }
                }).catch(err => {
                    this.errmsg = '修改失败,服务器错误，请稍后重试！';
                    this.errflag = true;
                })
            }
            else {
                this.$refs.btn.setAttribute('readonly', false)
            }
        }

    },
    components: {
        logo: () => import('@/decorate/Logo'),
    },
    created () {
        this.userName = this.$route.params.name;
    }

};
</script>
<style lang="scss" scoped>
.content .btn {
    background: #fff;
    padding-left: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
    margin-bottom: 20px;
}
</style>

