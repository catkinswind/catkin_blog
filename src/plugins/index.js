/*
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:37
 * @LastEditTime: 2019-08-18 09:45:49
 */
import moment from "moment";

// vuex保存状态
// import { mapGetters,mapMutations } from 'vuex'

// 过滤器
import * as filters from "@/plugins/filters";
//指令
import * as directives from '@/plugins/directives';
//全局方法
import * as global from '@/utils/global';

// JS Component
export { default as Alert } from "@/plugins/alert";
export { default as Prompt } from "@/plugins/prompt";

export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                // ...mapMutations(['setTimer']),
                ...global,
                //this.$_diffTime('1998-05-09', new Date(), 'years');
                $_diffTime: (date, currdate, option) => moment(currdate).diff(moment(date), option),
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
                                // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                                var speed = curr < json[attr] ? speed = 6 : speed = -6; //很大可能性有一条边抖动，与距离目标点的距离和运动幅度有关
                                if (attr == 'opacity') {
                                    obj.style[attr] = (curr + speed) / 100;
                                    obj.style.filter = 'alpha(opacity:' + (curr + speed) + ')';
                                } else {
                                    obj.style[attr] = curr + speed + 'px'; //因为一个达到目标,他的speed此时为0,+0没有效果
                                    obj.style.display = 'block';
                                    obj.style.overflow = 'hidden';
                                }
                                if (Math.abs(json[attr] - curr) <= 6) {
                                    console.log("小于7");
                                    if (attr == 'opacity') {
                                        obj.style[attr] = json[attr] / 100;
                                        obj.style.filter = 'alpha(opacity:' + json[attr] + ')';
                                    } else {
                                        obj.style[attr] = json[attr] + 'px'; //因为一个达到目标,他的speed此时为0,+0没有效果
                                    }
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
                    }, 5);
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
                ...filters,
            },
            mounted() {},
            updated() {},
            // 在页面离开时记录滚动位置
            beforeRouteLeave(to, from, next) {
                document.title = to.meta.title;
                this.remember_scrollTop = this.$root.$el.scrollTop;
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
                    vm.$root.$el.scrollTop = vm.remember_scrollTop;
                });
            },
            filters: {
                ...filters
            },
            directives: {
                ...directives
            },
            computed: {
                // ...mapGetters(['getTimer'])
            },
            components: {
                // CSS Component
                lightbar: () => import("@/plugins/lightbar.vue"),
                search: () => import("@/plugins/search.vue")
            }
        });
    }
};