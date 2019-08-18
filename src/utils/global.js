/*
 * @Author: zhangpeng
 * @Date: 2019-08-18 08:41:09
 * @LastEditTime: 2019-08-18 09:31:36
 */
export function pwd() {
    if (this.userPwd !== "") {
        if (!/^[-_A-z0-9$@!%*#?&]{4,16}$/.test(this.userPwd)) {
            //密码格式不对
            this.errflag = true;
            this.errmsg = "密码格式错误";
        } else {
            this.repwd();
        }
    }
}

export function repwd() {
    this.errflag = false;
    if (this.repuserPwd !== "" && this.userPwd !== "") {
        if (this.repuserPwd !== this.userPwd) {
            //两次密码不一致
            this.errflag = true;
            this.errmsg = "两次输入的密码不一致";
        }
    }
}

export function $_openeye(el, node) {
    // 取样式不能直接使用el.target.style.color，这样获取不到
    if (this.$_getStyle(el.target, "color") === "rgb(204, 204, 204)") {
        el.target.style.color = "#1F8ACC";
        node.setAttribute("type", "text");
    } else {
        el.target.style.color = "#CCC";
        node.setAttribute("type", "password");
    }
}
export function $_hight(el, warnColor, prevColor) {
    el.timer = setTimeout(() => {
        el.style.transition = "all 1s ease";
        el.style.borderColor = `${warnColor}`;
        // 1.阴影距离左边框距离  2.阴影距离上边框距离 3.模糊度  4.阴影扩展
        el.style.boxShadow = `0 12px 10px -5px  ${warnColor}`;
        setTimeout(() => {
            if (prevColor) {
                el.style.transition = "all 1s ease";
                el.style.boxShadow = `0 12px 10px -5px transparent`;
                el.style.borderColor = `${prevColor}`;
            }
        }, 1000);
    }, 200);
}