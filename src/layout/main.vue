<template>
  <div class="main">
    <div class="header">
      <span class="fl">北京国脉信安科技业务演示管理系统 </span>
      <div class="fr">
        <span class="ml10">{{userNameText}}</span>
        <span class="ml10 tuichu" @click="logout">退出</span>
      </div>
    </div>
    <div class="content-main">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'layoutMain',
  data () {
    return {
      page: ''
    }
  },
  computed: {
    ...mapState({
      userAccount: (state) => state.user.accountName
    }),
    userNameText () {
      return this.userAccount
    }
  },
  methods: {
    ...mapActions(['handleLogOut']),
    logout () {
      this.handleLogOut().then((res) => {
        this.$router.push('/login')
      })
    }
  },
  mounted () { }
}
</script>
<style lang="scss" scoped>
.main {
  min-height: 100vh;
  padding-top: 48px;
  background-color: #eff4f7;
}

.header {
  height: 48px;
  background: $theme-color;
  color: #edf6f8;
  padding: 0 16px;
  line-height: 48px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 910;

  .tuichu {
    cursor: pointer;
    &:hover {
      color: #edf6f8;
    }
  }
}
</style>
