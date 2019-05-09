import moment from 'moment';

// vuex保存状态
import { mapGetters,mapMutations } from 'vuex'

// 过滤器
import * as filters from './filters.js'

// CSS Component
import lightbar from './LightBar.vue'

// JS Component
import Alert from './alert/src/alert.js'

export default {
	install(Vue, options) {
		Vue.mixin({
			methods: {
				...mapMutations(['setTimer']),
				pwd() {
					const el = this.$refs.pwd
					if (this.userPwd !== '') {
						if (!(/^[-_A-z0-9$@!%*#?&]{4,16}$/.test(this.userPwd))) { //密码格式不对
							this.$_hight(el, 'red');
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
				$_diffTime(date, currdate, option) {
					const date1 = moment(filters.dateFormat(currdate));
					const date2 = moment(filters.dateFormat(date));
					const date3 = date1.diff(date2, 'minute');
					if (option === 'minute') {
						return date3;
					} else if (option === 'hour') {
						return Math.floor(date3 / 60);
					} else if (option === 'day') {
						return Math.floor(date3 / 60 / 24);
					} else if (option === 'year') {
						return Math.floor(date3 / 60 / 24 / 365);
					}
				},
				$_openeye(el, node) {
					if (!el.target.style.color) {
						el.target.style.color = 'rgb(204, 204, 204)';
					}
					if (el.target.style.color === 'rgb(204, 204, 204)') {
						el.target.style.color = '#1F8ACC';
						node.setAttribute('type', 'text')
					} else {
						el.target.style.color = '#CCC';
						node.setAttribute('type', 'password')
					}
				},
				Alert,
				...filters,
			},
			mounted() {
				// console.log(filters.dateFormat)
			},
			// 在页面离开时记录滚动位置
			beforeRouteLeave(to, from, next) {
				document.title = to.meta.title;
				this.scrollTop = document.querySelector('#app').scrollTop || 0;
				next();
			},
			//进入该页面时，用之前保存的滚动位置赋值
			beforeRouteEnter(to, from, next) {
				next(vm => {
				    clearInterval(vm.getTimer); // 在路由跳转到指定页面前清除之前的滚动document.title
					let title = document.title + ' ';
					let Timer = setInterval(function() {
						title = title.match(/\w+\s/g);
						title = [...title.slice(1), ...title.slice(0, 1)]
						title = document.title = title.join('');
					}, 1000);
					vm.setTimer(Timer); // 将当前页面得document.title的定时器状态保存到vuex中
					document.querySelector('#app').scrollTop = vm.scrollTop
				})
			},
			filters: {
				...filters,
			},
			directives: {
				'focus': {
					inserted: (el) => {
						el.focus();
					}
				},
			},
			computed: {
				...mapGetters(['getTimer'])
			},
			components: {
				lightbar
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
		})

	}
}