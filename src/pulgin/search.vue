<template>
    <div class="searchbox">
        <input
            type="text"
            class="value"
            @input="input"
            @click.stop="expandWidth"
            v-model.trim="value"
            ref="value"
            @keyup.enter="search"
        />
        <div class="delete_search">
            <span
                class="glyphicon glyphicon-remove-circle"
                aria-hidden="true"
                v-if="flag"
                @click="del"
            ></span>
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
export default {
    mounted () {
        if (this.el.style.width > 300) {
            document.addEventListener('click', () => {
                this.$_startMove(this.el, { 'width': 300 }, function () { })
            });
        }
    },
    updated () {
        if (this.value === "") {
            this.$_startMove(this.el, { 'width': 300 }, function () { })
        } else {
            this.$_startMove(this.el, { 'width': 500 }, function () { })

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
            if (this.value == "") {
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
            this.$_startMove(this.el, { 'width': 500 }, function () { })
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
            return this.$refs.value.parentNode.parentNode;//searchconatiner
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
    border-radius: 5px;
    background-color: #f2f2f2;
}

.searchbox span:hover {
    cursor: pointer;
}

.delete_search {
    right: 10px;
    width: 100px;
    height: 100%;
    padding: 0 15px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.searchbox span {
    font-size: 17px;
}

.searchbox span:nth-of-type(2):active {
    font-size: 22px;
}
</style>