<!--
 * @Author: zhangpeng
 * @Date: 2019-07-30 14:36:16
 * @LastEditTime: 2019-08-17 17:11:42
 -->
<template>
    <div class="searchbox">
        <input
            type="text"
            class="value"
            @input="input"
            @click.stop="expandWidth"
            v-model.trim="value"
            @keyup.enter="search"
            placeholder="输入关键字搜索"
        />
        <div class="delete_search">
            <transition>
                <span
                    class="glyphicon glyphicon-remove-circle"
                    aria-hidden="true"
                    v-show="flag"
                    @click="del"
                ></span>
            </transition>
            <span
                class="glyphicon glyphicon-search"
                aria-hidden="true"
                id="search"
                @click.stop="search"
            ></span>
        </div>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    updated () {
        //组件更新是指data中的数据发生变化或焦点离开该组件
        console.log("组件更新了");
        if (this.value === "") {
            //焦点离开组件是text为""，那么长度肯定大于300px了
            // setTimeout(() => {
            this.$_startMove(this.el, { 'width': 300 }, () => { })
            // }, 200)
        } else {
            this.$_startMove(this.el, { 'width': 450 }, () => { })
        }
    },
    data () {
        return {
            flag: false,
            value: "",
            // a: this.$refs.value//不能在data中使用$refs,可以用原生js
        }
    },
    methods: {
        input () {
            if (this.value === "") {
                this.flag = false
            } else {
                this.flag = true
            }
        },
        del () {
            this.flag = false;
            this.value = ""
        },
        expandWidth () {
            this.$_startMove(this.el, { 'width': 450 }, () => { })
        },
        search () {
            if (this.value !== "") {
                console.log(this.value);
            } else {
            }
        }
    },
    computed: {//this指向vue，所以不能使用箭头函数，因为外部的this是undefined
        el () {
            return this.$el.parentNode;//searchconatiner
        }
    }
};
</script>
<style lang="scss" scoped>
.searchbox {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.value {
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 15px 0 15px;
    border-radius: 3px;
    background-color: #f2f2f2;
}

.searchbox span:hover {
    cursor: pointer;
}

.delete_search {
    right: 10px;
    width: 100px;
    height: 100%;
    padding: 0 15px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}

.searchbox span {
    font-size: 17px;
}

.searchbox span:nth-of-type(2):active {
    font-size: 22px;
}
.v-enter,
.v-leave-to {
    transform: translateX(-60px);
}
.v-enter-active,
.v-leave-active {
    transition: all 0.8s ease;
}
</style>