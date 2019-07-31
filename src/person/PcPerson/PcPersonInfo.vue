<template>
  <div class="infocontainer">
    <div class="menu">
      <div class="infoset">
        <div class="content90">
          <i @click="back" class="layui-icon layui-icon-return"></i>
          <h2>个人信息</h2>
        </div>
      </div>
      <div class="content">
        <div v-for="item in list" :key="item">
          <div class="more content90">
            <p @click="manage(item)">{{item}}</p>
            <i class="layui-icon layui-icon-right"></i>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div class="content">
        <div v-for="item in list2" :key="item">
          <div class="more content90">
            <p>{{item}}</p>
            <i class="layui-icon layui-icon-right"></i>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div class="content">
        <div v-for="item in list3" :key="item">
          <div class="more content90">
            <p>{{item}}</p>
            <i class="layui-icon layui-icon-right"></i>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div class="switch" @click="change">
        <p>切换账号</p>
      </div>
      <div class="exit" @click="exit">
        <p>退出登录</p>
      </div>
    </div>
    <div class="details">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
// import userbar from './UserBar.vue'
export default {
  data () {
    return {
      list: ['账号管理', '安全隐私', '用户手册'],
      list2: ['通用设置', '消息设置', '插件', '下载路径'],
      list3: ['意见反馈', '关于我们', '联系我们', '帮助'],
      routePath: '',
    }
  },
  created () {

  },
  mounted () {
    // if(this.routePath)
  },
  methods: {
    ...mapMutations(['loginUserName']),
    back () {
      this.$router.push(this.getBackRoutePath);
    },
    change () {
      this.$router.push({ name: 'login' })
    },
    exit () {
      this.loginUserName('');
      window.clearVuexAlong(true, false);
      this.$router.push({ name: 'home' })
    },
    manage (item) {
      switch (item) {
        case '账号管理':
          this.$router.push('/pcinfo/account');
          break;
        case '安全隐私':
          this.$router.push('/pcinfo/safe');
          break;
        case '用户手册':
          this.$router.push('/pcinfo/account');
          break;
        case '通用设置':
          this.$router.push('/pcinfo/account');
          break;
        case '消息设置':
          this.$router.push('/pcinfo/account');
          break;
        default:
          break;
      }
    }
  },
  components: {
    // userbar
  },
  computed: {
    ...mapGetters(['loginName', 'getBackRoutePath'])
  }
};
</script>
<style lang="scss" scoped>
.infocontainer {
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  div {
    background-color: #fff;
  }
  .menu {
    width: 10%;
    flex: 1;
    padding-left: 5px;
  }
  .details {
    flex: 9;
    background-color: #ccc;
  }
}
.infoset {
  position: relative;
  top: 15px;
  margin-bottom: 30px;
  i {
    font-size: 17px;
    color: #000;
    line-height: 40px;
    font-weight: 600;
  }
  h2 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-size: 15px;
    line-height: 40px;
    font-weight: 500;
  }
}
.head {
  padding: 20px 0;
}
p {
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
}
.content {
  margin-top: 20px;
  .more {
    display: flex;
    justify-content: space-between;
    i {
      line-height: 40px;
      display: block;
      height: 100%;
      width: 20px;
      color: #a3a3a3;
    }
  }
  .line {
    position: relative;
    width: 100%;
    height: 1px;
    background: #ccc;
    transform: scaleY(0.3);
  }
}

.switch {
  margin-top: 30px;
  p {
    text-align: center;
  }
  p:active {
    background: rgba(204, 204, 204, 0.4);
  }
}
.exit {
  margin-top: 5px;
  p {
    text-align: center;
    background: linear-gradient(to bottom right, #cc0d17, #e51c2f);
    color: #fff;
  }
  p:active {
    opacity: 0.5;
  }
}
</style>