<template>
    <div>
        <el-input placeholder="输入关键字进行查询" v-model="filterText"></el-input>
        <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            :default-expand-all="false"
            :filter-node-method="filterNode"
            :indent="30"
            node-key="id"
            highlight-current
            accordion
            draggable
            ref="tree"
            @node-click="submitForm"
        ></el-tree>
    </div>
</template>
<script>
export default {
    watch: {
        filterText (val) {
            this.$refs.tree.filter(val);
        }
    },

    methods: {
        filterNode (value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        submitForm: function () {
            console.log(this.$refs.tree.getCurrentNode().label)
            console.log(this)
            // window.location.href = "/user/hotel"
        }
    },

    data () {
        return {
            filterText: '',
            data: [{
                id: 1,
                label: 'Java',
                icon: 'el-icon-success',
                children: [{
                    id: 4,
                    label: 'Spring',

                }, {
                    id: 5,
                    label: 'Spring',
                }, {
                    id: 6,
                    label: 'Spring',
                }, {
                    id: 7,
                    label: 'Spring',
                }, {
                    id: 8,
                    label: 'Spring',
                }]
            }, {
                id: 2,
                label: '前端',
                children: [{
                    id: 9,
                    label: 'JavaScript'
                }, {
                    id: 10,
                    label: 'CSS3'
                }, {
                    id: 11,
                    label: 'Vue'
                }, {
                    id: 12,
                    label: 'NodeJs'
                }, {
                    id: 13,
                    label: 'Vue'
                }, {
                    id: 14,
                    label: 'NodeJs'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 15,
                    label: '二级 3-1'
                }, {
                    id: 16,
                    label: '二级 3-1'
                }, {
                    id: 17,
                    label: '二级 3-2'
                }, {
                    id: 18,
                    label: '二级 3-1'
                }, {
                    id: 19,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    }
};
</script>
<style lang="scss" scoped>
</style>