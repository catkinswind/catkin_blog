<template>
    <transition :name="position">
        <div
            :class="['alert',appear?'top':'bottom',className]"
            v-if="showAlert"
            id="alertComponent"
        >
            <div class="wrap">
                <div class="text">{{message}}</div>
                <div class="inputbox">
                    <input type="button" :value="reject" @click.stop="cancel" />
                    <input type="button" :value="resolve" @click.stop="sure" />
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        message: {
            type: String,
            default: 'Alert message!',
        },
        resolve: {
            type: String,
            default: 'AAAA',
        },
        reject: {
            type: String,
            default: 'CCCC',
        },
        position: {
            type: String,
            default: 'bottom',
        },
        showAlert: {
            type: Boolean,
            default: false,
        },
        className: {
            type: String,
            default: '',
        }
    },
    updated () {
        // mounted只会在dom元素绑定到页面上时执行，此时this.showAlert=false
        // 必须是updated，因为要根据是否点击了其他位置来确定关闭窗口渲染动画
        const _this = this;
        document.documentElement.style.overflowY = "hidden"; //组件出现时html元素隐藏滚动条
        if (this.showAlert) {//组件已存在，点击组件不会消失，点击其他地方隐藏组件
            this.$el.addEventListener('click', () => {
                _this.showAlert = true;
                window.event ? window.event.cancelBubble = true : e.stopPropagation();
            })
            document.addEventListener('click', () => {
                _this.showAlert = false;
            })
        }
    },
    data () {
        return {
            res: null,
            rej: null,
        };
    },
    methods: {
        sure () {
            this.showAlert = false;
            this.res = true;
        },
        cancel () {
            this.showAlert = false;
            this.rej = false;
        },
    },
    computed: {
        appear () {
            if (this.position === 'top') { return true; }
            else if (this.position === 'bottom') { return false; }
            else { return false; }
        }
    }
};
</script>
<style lang='scss' scoped>
.alert {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    background: red;
    border-radius: 5px;
    z-index: 999;
    box-shadow: 0 0 5px #ccc;
}
.bottom {
    bottom: 0px;
}
.top {
    top: 0px;
}
.wrap {
    font-size: 13px;
    letter-spacing: 1px;
    padding: 10px;
    .text {
        text-indent: 2em;
        line-height: 18px;
        word-break: break-all;
    }
    .inputbox {
        margin-top: 5px;
        display: flex;
        justify-content: flex-end;
    }
    input {
        width: 60px;
        height: 30px;
        margin-left: 15px;
        border-radius: 5px;
        background-color: black;
        border: none;
        color: white;
        font-size: 12px;
    }
    input:active {
        opacity: 0.4;
    }
}
.bottom-enter,
.bottom-leave-to {
    transform: translate(-50%, 100%);
}
.top-enter,
.top-leave-to {
    transform: translate(-50%, -100%);
}
.top-enter-active,
.top-leave-active,
.bottom-enter-active,
.bottom-leave-active {
    transition: all 0.5s ease;
}
</style>