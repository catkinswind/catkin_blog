import moment from 'moment';
import {errorview} from './errorview.js'
export default {
	install(Vue, options) {
		Vue.mixin({
			methods: {
				pwd() {
					const el = this.$refs.pwd
					if (this.userPwd !== '') {
						if (!(/^[-_A-z0-9$@!%*#?&]{4,16}$/.test(this.userPwd))) { //密码格式不对
							this.$hight(el, 'red');
						} else {
							this.repwd();
							el.style.border = ' 1px solid #CCC';
							el.style.boxShadow = '0 0 5px transparent';
						}
					}
				},
				repwd() {
					this.errflag = false
					if (this.repuserPwd !== '' && this.userPwd !== '') {
						if (this.repuserPwd !== this.userPwd) { //两次密码不一致
							this.errflag = true
							this.errmsg = '两次输入的密码不一致'
						}
					}
				},
			},
			filters: {
				dataFormat: (dataStr, pattern = "YYYY-MM-DD hh:mm:ss") => moment(dataStr).format(pattern),
				fileNameFormat: (dataStr) => {
					const index1 = dataStr.lastIndexOf("."); //返回文件类型中.的位置
					const postf = dataStr.slice(index1); //获取文件的后缀名
					if (dataStr.length >= 40) {
						dataStr = dataStr.slice(0, 35) + '......';
					}
					return dataStr.replace(postf, '');
				},
				fileTypeFormat: (dataStr) => {
					dataStr = dataStr.toUpperCase();
					'txt', 'jpg', 'jpeg', 'gif', 'png', 'js', 'php', 'class'
					if (dataStr === 'TXT' || dataStr === "JS") {
						return `${dataStr}文本`;
					} else if (dataStr === "JPG" || dataStr === "JPEG" || dataStr === "GIF" || dataStr === "PNG") {
						return `${dataStr}图片`;
					} else {
						return `${dataStr}文件`;
					}
				}
			},
			directives: {
				'focus': {
					inserted: (el) => {
						el.focus();
					}
				},
			}
		})
		Vue.prototype.extend = function(obj) {
			for (let key in obj) {
				this[key] = obj[key];
			}
		};
		Vue.prototype.extend({
			$_hight(el, warnColor, prevColor) {
				el.timer = setTimeout(function() {
					el.style.transition = 'all 1s ease';
					el.style.borderColor = `${warnColor}`;
					// 1.阴影距离左边框距离  2.阴影距离上边框距离 3.模糊度  4.阴影扩展
					el.style.boxShadow = `0 12px 10px -5px  ${warnColor}`;
					setTimeout(function() {
						if (prevColor) {
							el.style.transition = 'all 1s ease';
							el.style.boxShadow = `0 12px 10px -5px transparent`;
							el.style.borderColor = `${prevColor}`
						}
					}, 1000)
				}, 200)
			},
			$_zp() {
				console.log('自定义组件测试');
			},
			// $_view(){
			// 	console.log(1)
			// 	document.getElementById('app').innerHTML+=errorview;
			// }
		})

	}
}