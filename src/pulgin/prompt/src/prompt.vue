<template>
    <div id="promptContainer" class="contentbox">
        <div class="content">{{message}}</div>
    </div>
</template>

<script>
export default {
    // :style="[{position:'absolute',left:left,top:top}]"
    props: {
        message: {
            type: String,
            default: 'Promppt Message!',
        },
        el: '',
        "el_left": {
            type: Number,
        },
        "el_top": {
            type: Number,
        }
    },
    watch: {
        "el_left": function (val) {
            this.$el.style.left = Math.round(val + this.el.offsetWidth / 2 - this.$el.offsetWidth / 2) + 'px';
            this.$el.style.top = Math.round(this.el_top - this.$el.offsetHeight - 15) + 'px';
        }
    }
};
</script>
<style lang="scss" scoped>
.contentbox {
    position: absolute;
    width: 200px;
    background: black;
    border-radius: 5px;
    font-size: 13px;
    letter-spacing: 1px;
    padding: 10px 5px;
    z-index: 999;
}
.contentbox::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 30px;
    height: 30px;
    background: black;
    left: 50%;
    bottom: -13px;
    transform: rotate(45deg) translateX(-50%);
}
.content {
    color: #fff;
    position: relative;
    text-indent: 2em;
    line-height: 15px;
    word-break: break-all;
}
</style>