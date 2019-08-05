<template>
    <div id="promptContainer" class="contentbox">
        <div class="content">{{prompt}}</div>
    </div>
</template>

<script>
export default {
    props: {
        prompt: {
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
    updated () {

    },
    watch: {
        "el_left": function (val) {
            this.$el.style.left = Math.round(val - this.$el.offsetWidth / 2) + 'px';
            this.$el.style.top = Math.round(this.el_top - this.$el.offsetHeight - 10) + 'px';
        }
    }
};
</script>
<style lang="scss" scoped>
.contentbox {
    position: absolute;
    background: black;
    border-radius: 5px;
    padding: 0 5px;
    z-index: 999;
    box-shadow: 0 0 8px;
}
// .contentbox::before {
//     content: '';
//     position: absolute;
//     z-index: -1;
//     width: 15px;
//     height: 15px;
//     background: black;
//     left: 50%;
//     bottom: -8px;
//     transform: rotate(45deg) translateX(-50%);
// }
.content {
    position: relative;
    color: #fff;
    line-height: 25px;
    font-size: 10px;
    text-align: center;
    word-break: break-all;
    letter-spacing: 1px;
}
</style>