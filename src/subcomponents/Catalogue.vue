<!--
 * @Description: file information
 * @version: 
 * @Company: my Company
 * @Author: zhangpeng
 * @Date: 2019-08-06 17:15:09
 * @LastEditors: 
 * @LastEditTime: 2019-08-09 13:19:41
 -->
<template>
    <div class="catalogue_box">
        <div class="row search_menu">
            <div class="col-lg-10">
                <div class="input-group" style="width:100%;border-radius: 3px !important">
                    <input
                        type="text"
                        class="form-control"
                        v-model.trim="search_value"
                        placeholder="Search for..."
                        ref="search_catalogue"
                    />
                </div>
            </div>
        </div>
        <div class="books_box">
            <div v-for="(item,index) in filter(search_value)" :key="item.name" class="books">
                <div
                    class="primary_title"
                    @click.stop="flod(filter(search_value),item,index)"
                    :ref="item.name+index"
                >
                    <div class="books_icon">
                        <span
                            :class="['glyphicon', {'glyphicon-folder-close':!item.show},{'glyphicon-folder-open':item.show}]"
                            aria-hidden="true"
                        ></span>
                        <a href="javascript:;">{{item.name}}</a>
                    </div>
                    <div class="toright" v-if="item.show">
                        <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                        <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                    </div>
                </div>
                <transition-group tag="div" appear>
                    <div class="second_title" :key="item.name" v-if="item.show">
                        <div v-for="ele in item.second_title" :key="ele.name">
                            <!-- <span class="glyphicon glyphicon-file" aria-hidden="true"></span> -->
                            <span class="glyphicon glyphicon-book" aria-hidden="true"></span>
                            <a href="javascript:;">{{ele.name}}</a>
                        </div>
                    </div>
                </transition-group>
            </div>
        </div>
        <div class="filament"></div>
        <div>
            <div class="abstract">
                <div class="title">
                    <h2>最近发布</h2>
                </div>
            </div>
        </div>
        <!-- <button type="button" class="btn btn-primary" @click="notification">Search</button> -->
    </div>
</template>
<script>
import { Notification } from 'element-ui';
export default {
    data () {
        return {
            search_value: '',
            value: [{ name: "Java", show: false, second_title: [{ name: "Spring" }, { name: "Spring MVC" }, { name: "Spring Boot" }] },
            { name: "JavaScript", show: false, second_title: [{ name: "ES6" }, { name: "NodeJs" }] },
            { name: "Vue", show: false, second_title: [{ name: "mint-ui" }, { name: "element-ui" }] },
            { name: "PhP", show: false, second_title: [{ name: "PHP7" }, { name: "ThinkPHP" }] }],
        }
    },
    updated () {
        this.$refs.search_catalogue.addEventListener("input", () => {
            if (this.search_value === "") {
                this.value.forEach(item => {
                    item.show = false;
                });
            }
        })
    },
    methods: {
        notification () {
            if (this.search_value === "") {
                Notification({ title: "提示", message: "请输入内容", type: "info", position: "top-right", duration: 2500 })
            }
        },
        filter (search_value) {
            //虽然includes方法搜索空字符串返回true但是既然是空的，就是什么都没有搜，那就直接返回原数组，提高性能
            if (search_value !== "") {
                const primary = this.value.filter(item => {
                    if (item.name.toLowerCase().includes(search_value.toLowerCase())) {
                        item.show = true;
                        return true;
                    }
                });
                const second = this.value.filter(item => {
                    return item.second_title.find((ele) => {
                        if (ele.name.toLowerCase().includes(search_value.toLowerCase())) {
                            item.show = true;
                            return true;
                        }
                    })
                });
                return [...new Set([...primary, ...second])];
            } else {
                // this.value.forEach(item => {
                //     item.show = false;
                // });
                return this.value;
            }
        },
        flod (array, item, index) {
            if (item.show) {
                item.show = false;
                return;
            }
            array.forEach((ele, i) => {
                ele.show = false;
                this.$refs[ele.name + i][0].style.color = '#000';
            });
            item.show = true;
            this.$refs[item.name + index][0].style.color = 'red';
            this.$forceUpdate();
        },
    }
};
</script>
<style lang="scss" scoped>
.search_menu {
    button {
        font-size: 12px;
        height: 34px;
    }
}
.books_box {
    width: 100%;
    margin-top: 20px;
    padding: 0 5px;
    .books {
        padding: 5px 0;
        overflow: hidden;
        .primary_title {
            display: flex;
            justify-content: space-between;
        }
        .primary_title:active {
            background-color: #f8cfd2;
        }
        .books_icon {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .toright {
            position: relative;
            z-index: 999;
            color: #222f3e;
            width: 80px;
            font-size: 10px;
            span:nth-child(1) {
                position: absolute;
                left: 55%;
                top: 50%;
                transform: translate(-50%, -50%);
                animation: toRight 1.5s infinite;
            }
            span:nth-child(2) {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                animation: toRight 1.5s infinite;
                animation-delay: 1.2s;
            }
            @keyframes toRight {
                to {
                    color: #576574;
                    opacity: 0.7;
                }
            }
        }
        span {
            margin-right: 15px;
        }
        a {
            text-decoration: none;
            font-family: 'Consolas';
            font-size: 14px;
            font-weight: bold;
            color: #0366d6;
        }
    }
    .second_title {
        width: 100%;
        padding-top: 10px;
        span {
            color: #2b579a;
        }
        div {
            padding: 2px 40px;
        }
        div:hover {
            background-color: #f2f2f2;
        }
    }
}
.v-enter,
.v-leave-to {
    transform: translateY(100%);
}

.v-enter-active {
    transition: all 0.7s;
}
.v-leave-active {
    transition: all 0s;
}
.v-move {
    position: absolute;
}
.abstract {
    margin-top: 20px;
    padding-left: 5px;
    .title {
        h2 {
            font-weight: bold;
        }
    }
}
</style>