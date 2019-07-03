<template>
    <div>
        <logo style="height: 70px"></logo>
        <div class="box">
            <div class="content">
                <div class="title">Sign up</div>
                <form autocomplete="off">
                    <label for="register_field">Username</label>
                    <input
                        id="register_field"
                        type="text"
                        v-model.trim="userName"
                        v-focus
                        spellcheck="false"
                        @change="name"
                    />
                    <div class="verify" v-if="nameflag">{{ namemsg }}</div>
                    <label for="register_email">Email</label>
                    <div class="emailbox">
                        <input
                            id="register_email"
                            type="text"
                            v-model.trim="userEmail"
                            @change="email"
                            spellcheck="false"
                            @keyup="emailcontainer"
                        />
                        <div class="emailcontainer" ref="email">
                            <p
                                v-for="item in emailList"
                                :key="item"
                                @click.stop="cheackemail"
                                @mouseover="hightcheckone"
                                @mouseout.stop="cancelhight"
                            >{{ userEmail }}{{ item }}</p>
                        </div>
                        <div class="verify" v-if="emailflag">{{ emailmsg }}</div>
                    </div>
                    <label for="register_pwd">Password</label>
                    <div class="eye">
                        <input
                            id="register_pwd"
                            type="password"
                            v-model.trim="userPwd"
                            placeholder="密码不低于3位字符，且不能含有特殊字符和空格"
                            @change="pwd($refs.pwd)"
                            ref="pwd"
                        />
                        <i
                            class="layui-icon layui-icon-password"
                            @click="$_openeye($event, $refs.pwd)"
                        ></i>
                    </div>
                    <div class="forgetline">
                        <label for="register_pwd_repeeat">
                            <span>Repeeat the password</span>
                        </label>
                        <a href="javascript:;" @click="tologin">Already have an account?</a>
                    </div>
                    <div class="eye">
                        <input
                            id="register_pwd_repeeat"
                            type="password"
                            v-model.trim="repuserPwd"
                            @change="repwd"
                            @keyup.enter="register"
                            ref="eye"
                        />
                        <i
                            class="layui-icon layui-icon-password"
                            @click="$_openeye($event, $refs.eye)"
                        ></i>
                    </div>
                    <div class="blank" v-if="!errflag"></div>
                    <div class="verify" v-if="errflag">{{ errmsg }}</div>
                    <input
                        class="btn"
                        type="button"
                        value="Register"
                        @click.stop="register"
                        ref="btn"
                    />
                    <div
                        :class="[
                            'verify',
                            'tranpar',
                            { succclass: succclassflag },
                            { errclass: errclassflag }
                        ]"
                    >{{ registerflag }}</div>
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
// 发布到npm上的包因为被放在了node_modules中了，同时加载的原理会从内往外找node_modules加载需要的资源
import { Alert } from '../pulgin'
export default {
    data () {
        return {
            userName: '',
            nameflag: false,
            namemsg: '',
            userEmail: '',
            emailflag: false,
            emailmsg: '',
            userPwd: '',
            pwdlflag: false,
            repuserPwd: '',
            errmsg: '',
            errflag: false,
            registerflag: '',
            succclassflag: false,
            errclassflag: false,
            emailList: ['@qq.com', '@163.com', '@126.com', '@sohu.com', '@sina.com'],
            show: {} //保存Alert组件的返回值，返回一个close实例方法用于关闭组件
        }
    },
    methods: {
        tologin () {
            this.$router.push({
                name: 'login'
            })
        },
        name () {
            this.nameflag = false
            if (this.userName !== '') {
                if (!/^[-_A-z0-9]{3,16}$/.test(this.userName)) {
                    this.nameflag = !this.nameflag
                    this.namemsg = '用户名不低于三位字符，不能含有特殊字符和空格'
                }
            }
        },
        email () {
            this.emailflag = false
            if (this.userEmail !== '') {
                if (!/^[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/.test(this.userEmail)) {
                    this.emailflag = !this.emailflag
                    this.emailmsg = '请输入正确的邮箱'
                }
            }
        },
        emailcontainer (el) {
            if (el.target.value.toString().length >= 3) {
                this.$refs.email.style.display = 'block'
            } else {
                this.$refs.email.style.display = 'none'
            }
        },
        cheackemail (el) {
            this.userEmail = el.target.textContent
            this.$refs.email.style.display = 'none'
            this.email()
        },
        hightcheckone (el) {
            el.target.style.backgroundColor = '#CCC'
        },
        cancelhight (el) {
            el.target.style.backgroundColor = 'transparent'
        },
        cancelcontainer () {
            this.$refs.email.style.display = 'none'
        },
        register () {
            const el = this.$refs.btn
            el.style.border = ' 1px solid #CCC'
            el.style.boxShadow = '0 0 5px transparent'
            this.errclassflag = this.succclassflag = false
            // 判断信息是否为空
            if (this.userName === '') {
                this.nameflag = true
                this.namemsg = '请输入用户名'
            }
            if (this.userEmail === '') {
                this.emailflag = true
                this.emailmsg = '请输入邮箱'
            }
            if (this.userPwd === '' || this.repuserPwd === '') {
                this.errflag = true
                this.errmsg = '请输入密码'
            }
            let flag = !this.nameflag && !this.emailflag && !this.pwdlflag && !this.errflag
            let blank = this.userName !== '' && this.userEmail !== '' && this.userPwd !== '' && this.repuserPwd !== ''
            if (flag && blank) {
                this.$refs.btn.removeAttribute('readonly')
                // if (this.show.showAlert) {
                // 	// setTimeout(()=>{
                // 	// 	this.show.close();
                // 	// }, 1000)
                // 	return;
                // }
                this.show = Alert({
                    message:
                        'No matter where people go and no matter how far they go,they will try their best to go home enjoying family time. And no matter what difficulty or trouble they are experiencing,they will put aside for the period of time. In every house,the main atmosphere is happiness. What do people usually do during the New Year time？',
                    resolve: 'Accept',
                    reject: 'Cancel',
                    position: 'bottom',
                    className: 'myalert'
                }, result => {
                    if (result) {
                        let form = new FormData()
                        form.append('userName', this.userName)
                        let config = { headers: { 'Content-Type': 'multipart/from-data' } }
                        this.axios.post('/api/register.php', form, config).then(resp => {
                            let data = resp.data
                            console.log(data)
                            if (data.isname) {
                                //账号存在
                                this.registerflag = '用户名已存在'
                                this.$_hight(el, 'red')
                                this.errclassflag = true
                            } else {
                                let form = new FormData()
                                form.append('userName', this.userName)
                                form.append('userEmail', this.userEmail)
                                form.append('userPwd', this.userPwd)
                                let config = { headers: { 'Content-Type': 'multipart/from-data' } }
                                this.axios.post('/api/register.php', form, config).then(resp => {
                                    let data = resp.data;
                                    console.log(data)
                                    if (data === 1) {
                                        //存入json文件中并验证成功
                                        this.registerflag = '注册成功'
                                        this.$_hight(el, 'green')
                                        this.succclassflag = true
                                    } else {
                                        this.registerflag = '注册失败!'
                                        this.$_hight(el, 'red');
                                        this.errclassflag = true;
                                    }
                                }).catch(() => {
                                    this.registerflag = '注册失败，暂未提供权限，请稍后重试！'
                                    this.$_hight(el, 'red')
                                    this.errclassflag = true
                                })
                            }
                        }).catch(() => {
                            this.registerflag = '注册失败，暂未提供权限，请稍后重试！'
                            this.$_hight(el, 'red')
                            this.errclassflag = true
                        })
                    } else {
                        this.registerflag = '注册失败，没有接受协议！'
                        this.errclassflag = true
                    }
                })
            } else {
                this.$refs.btn.setAttribute('readonly', false)
            }
        }
    },
    components: {
        logo: () => import('../decorate/Logo.vue')
    },
    updated () {
        let el = this.$refs.email
        document.addEventListener('click', function () {
            el.style.display = 'none'
        })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content .btn {
    background: #fff;
    padding-left: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
}

.box .about {
    width: 100%;
    line-height: 40px;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    text-align: center;
    box-sizing: border-box;
    background: white;
}

.succclass {
    background: linear-gradient(0.31deg, #3cac8a 0.7%, #5cceac 99.3%);
    opacity: 1 !important;
    text-align: center;
}

.errclass {
    background: red;
    opacity: 1 !important;
}

.tranpar {
    opacity: 0;
}

.emailbox {
    position: relative;
    width: 100%;

    .emailcontainer {
        position: absolute;
        left: 0;
        top: 40px;
        width: 100%;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #ccc;
        z-index: 3;
        box-sizing: border-box;
        display: none;
        overflow: hidden;

        p {
            width: 100%;
            line-height: 40px;
            font-size: 13px;
            font-weight: 500;
            padding-left: 20px;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
        }

        p:last-child {
            border-bottom: none;
        }
    }
}
</style>