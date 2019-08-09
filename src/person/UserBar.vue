<template>
    <div class="head" :class="[{'no':!showname}]">
        <div class="usericon" :style="[{height:height,width:height}]" @click="info">
            <img src="../assets/timg.jpg" :prompt="loginName" v-prompt />
        </div>
        <h2 class="username" :style="[{fontSize:fontsize}]" v-if="showname">{{loginName}}</h2>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: {
        height: {
            type: String,
            default: '',
        },
        fontsize: {
            type: String,
            default: '13px',
        },
        showname: {
            type: Boolean,
            default: true,
        }
    },
    data () {
        return {
        }
    },
    methods: {
        ...mapMutations(['setBackRoutePath']),
        info () {
            this.setBackRoutePath(this.$route.path)
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|BrowserNG|WebOS|Symbian|Window Phone)/i))) {
                this.$router.push({ name: 'phoneinfo' })
            } else {
                this.$router.push({ name: 'pcinfo' })
            }

        }
    },
    computed: {
        ...mapGetters(['loginName']),
    }
};
</script>
<style lang="scss" scoped>
.head {
    display: flex;
    justify-content: space-between;
    .usericon {
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: inherit;
        }
    }
    .username {
        margin-left: 10px;
        padding-top: 5px;
        margin-right: 20px;
    }
}
.no {
    margin-right: 10px;
}
</style>