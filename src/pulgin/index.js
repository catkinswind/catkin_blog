import moment from "moment";

// vuex保存状态
// import { mapGetters,mapMutations } from 'vuex'

// 过滤器
import * as filters from "./filters.js";

// JS Component
export { default as Alert } from "./alert";
import { default as Prompt } from './prompt';
export { default as Prompt } from "./prompt";

export default {
    install(Vue, options) {
        Vue.mixin({
            methods: {
                // ...mapMutations(['setTimer']),
                pwd(el) {
                    if (this.userPwd !== "") {
                        if (!/^[-_A-z0-9$@!%*#?&]{4,16}$/.test(this.userPwd)) {
                            //密码格式不对
                            this.$_hight(el, "red");
                        } else {
                            this.repwd();
                            el.style.border = " 1px solid #CCC";
                            el.style.boxShadow = "0 0 5px transparent";
                        }
                    }
                },
                repwd() {
                    this.errflag = false;
                    if (this.repuserPwd !== "" && this.userPwd !== "") {
                        if (this.repuserPwd !== this.userPwd) {
                            //两次密码不一致
                            this.errflag = true;
                            this.errmsg = "两次输入的密码不一致";
                        }
                    }
                },
                $_diffTime: (date, currdate, option) => moment(currdate).diff(moment(date), option),
                $_openeye(el, node) {
                    // 取样式不能直接使用el.target.style.color，这样获取不到
                    if (this.$_getStyle(el.target, "color") === "rgb(204, 204, 204)") {
                        el.target.style.color = "#1F8ACC";
                        node.setAttribute("type", "text");
                    } else {
                        el.target.style.color = "#CCC";
                        node.setAttribute("type", "password");
                    }
                },
                //目标物体属性的值，带有单位
                $_getStyle: (el, name) => el.currentStyle ? el.currentStyle[name] : getComputedStyle(el, false)[name],
                $_startMove(obj, json, fnEnd) { //元素节点，需要改变的属性，改变的目标值
                    // console.log(this);//vue,换成箭头函数就是window了
                    // console.log(obj.Timer + "开始");
                    if (obj.Timer) { return; }
                    obj.Timer = setInterval(() => {
                        // console.log(this);//vue
                        let bStop = true; //假设所有的都到了
                        for (var attr in json) {
                            var curr = 0;
                            if (attr == 'opacity') {
                                curr = Math.round(parseFloat(this.$_getStyle(obj, attr)) * 100);
                            } else {
                                curr = parseInt(this.$_getStyle(obj, attr));
                            }
                            if (curr != json[attr]) { //没有到目标效果点
                                bStop = false;
                                //没有else，如果写true第一个条件满足后，bstop为true，即使第二个条件不满足，bstop不能赋值为false
                                //如果写false，第一个条件满足后，bstop为flase，第二个条件满足，bstop仍未false，定时器第二次启动，
                                //bstop初始值为true，判断条件后，满足，仍为true， if (bStop) 为true，停止定时器
                                var speed = (json[attr] - curr) / 4;
                                //到了目标效果点，speed速度为0，obj.style[attr] = curr + speed + 'px';此句没有效果
                                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                                // var speed=curr<json[attr]?speed=1:speed=-1;//很大可能性有一条边抖动，与距离目标点的距离和运动幅度有关
                                if (attr == 'opacity') {
                                    obj.style[attr] = (curr + speed) / 100;
                                    obj.style.filter = 'alpha(opacity:' + (curr + speed) + ')';
                                } else {
                                    obj.style[attr] = curr + speed + 'px'; //因为一个达到目标,他的speed此时为0,+0没有效果
                                    obj.style.display = 'block';
                                    obj.style.overflow = 'hidden';
                                }
                            }
                        }
                        console.log(bStop + "bstop");
                        if (bStop) {
                            clearInterval(obj.Timer);
                            obj.Timer = null;
                            if (fnEnd) { fnEnd(); }
                        }
                        // console.log(obj.Timer);
                    }, 30);
                },
                $_getPos(ev, obj) {
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
                    if (arguments.length === 1) {
                        return { x: ev.pageX || ev.clientX + scrollLeft, y: ev.pageY || ev.clientY + scrollTop };
                        //返回鼠标的x，y坐标,纯数值
                    } else {
                        obj.style.left = ev.clientX + scrollLeft + 'px'; //鼠标光标的位置放在元素左上角顶点，无视滚动窗口
                        obj.style.top = ev.clientY + scrollTop + 'px';
                    }
                },
                ...filters
            },
            mounted() {},
            updated() {},
            // 在页面离开时记录滚动位置
            beforeRouteLeave(to, from, next) {
                document.title = to.meta.title;
                this.scrollTop = document.querySelector("#app").scrollTop || 0;
                next();
            },
            //进入该页面时，用之前保存的滚动位置赋值
            beforeRouteEnter(to, from, next) {
                next(vm => {
                    //    clearInterval(vm.getTimer); // 在路由跳转到指定页面前清除之前的滚动document.title
                    // let title = document.title + ' ';
                    // let Timer = setInterval(function() {
                    // 	title = title.match(/\w+\s/g);
                    // 	title = [...title.slice(1), ...title.slice(0, 1)]
                    // 	title = document.title = title.join('');
                    // }, 1000);
                    // vm.setTimer(Timer); // 将当前页面得document.title的定时器状态保存到vuex中
                    document.querySelector("#app").scrollTop = vm.scrollTop;
                });
            },
            filters: {
                ...filters
            },
            directives: {
                focus: {
                    inserted: el => {
                        el.focus();
                    }
                },
                prompt: function(el) {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
                    let result = null;
                    el.onmousemove = ev => {
                        let pos = { x: ev.pageX || ev.clientX + scrollLeft, y: ev.pageY || ev.clientY + scrollTop };
                        result = Prompt({
                            el,
                            prompt: el.getAttribute("prompt"),
                            el_left: pos.x,
                            el_top: pos.y
                        })
                        window.event ? window.event.cancelBubble = true : ev.stopPropagation();
                    }
                    el.onmouseout = () => {
                        if (result && result.exist()) result.close();
                    }
                    document.addEventListener("mousemove", function(ev) {
                        if (ev.srcElement === el) {
                            let pos = { x: ev.pageX || ev.clientX + scrollLeft, y: ev.pageY || ev.clientY + scrollTop };
                            result = Prompt({
                                el,
                                prompt: el.getAttribute("prompt"),
                                el_left: pos.x,
                                el_top: pos.y
                            })
                        } else {
                            if (result && result.exist()) result.close();
                        }
                    })
                }
            },
            computed: {
                // ...mapGetters(['getTimer'])
            },
            components: {
                // CSS Component
                lightbar: () => import("./lightbar.vue"),
                search: () => import("./search.vue")
            }
        });
        Vue.prototype.extend = function(obj) {
            for (let key in obj) {
                this[key] = obj[key];
            }
        };
        Vue.prototype.extend({
            $_hight(el, warnColor, prevColor) {
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
            },
            $_zp() {
                console.log("自定义组件测试");
            },


        });
        // Vue.$ref.prototype.hover = function() {
        //     console.log(111);
        // }
    }
};