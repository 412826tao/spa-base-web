<template>
  <div class="login-wrap">
    <div class="head">
      <span>北京国脉信安科技业务演示管理系统</span>
    </div>
    <Form class="login-form" ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
      <div class="form-title">
        用户登录
      </div>
      <FormItem prop="userName" style="margin-bottom: 30px">
        <Input v-model="form.userName" placeholder="请输入用户名" />
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="form.password" placeholder="请输入密码" />
      </FormItem>
      <Alert v-if="errorMsg" closable type="warning">{{ errorMsg }}
        <Icon type="ios-close" slot="close" @click="errorMsg=''"></Icon>
      </Alert>
      <FormItem>
        <Button class="btn-submit" @click="handleSubmit" type="primary" long>登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        userName: 'admin',
        password: 'admin'
      },
      errorMsg: ''
    }
  },
  components: {},
  computed: {
    rules () {
      return {
        userName: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    ...mapActions([
      'handleLogin'
    ]),
    handleSubmit () {
      this.handleLogin({ userName: this.form.userName, password: this.form.password }).then(res => {
        if (res.code !== 0) {
          this.errorMsg = res.msg
          return
        }
        this.$router.push({
          name: this.$config.homeName
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  background-color: #ffffff;
  padding-bottom: 30px;
}
.head {
  height: 48px;
  line-height: 48px;
  background-color: $theme-color;
  padding: 0 20px;

  span {
    color: #ffffff;
    font-size: 16px;
  }
}

.login-form {
  width: 380px;
  margin: 60px auto 0;

  .form-title {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 10px;
  }

  ::v-deep .ivu-input {
    font-size: 14px;
    height: 40px;
  }

  .btn-submit {
    font-size: 16px;
    height: 40px;
  }
}
</style>
