<template>
  <div class="login">
    <div class="page-login--layer">
      <ul class="circles">
        <li v-for="n in 10" :key="n"></li>
      </ul>
    </div>
    <div class="page-login--time">{{time}}</div>
    <div class="logo"/>
    <!-- <AppLogo class="logo" /> -->
    <div class="login-con">
      <Card icon="log-in" class="login-card" title="欢迎登录" :bordered="false" style="user-select: none;">
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click.native="handleSubmit" :loading="loading" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">{{$config.copyrightLogin}}</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
// import { AppLogo } from '@/components'
import dayjs from 'dayjs'
import { mapActions } from 'vuex'
export default {
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '账号不能为空', trigger: 'blur' }]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  mounted () {
    this.timeInterval = setInterval(() => {
      this.refreshTime()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timeInterval)
  },
  data () {
    return {
      timeInterval: null,
      time: dayjs().format('HH:mm:ss'),
      loading: false,
      form: {
        userName: 'admin2',
        password: '123qwe'
      }
    }
  },
  methods: {
    ...mapActions(['handleLogin', 'getUserInfo']),
    handleSubmit () {
      this.loading = true
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.handleLogin(this.form)
            .then(res => {
              this.$Message.success('登录成功~')
              this.$router.push({
                name: this.$config.moduleNav
              })
            })
            .catch(e => {
              this.$Message.warning(e.message)
            })
            .finally(() => {
              this.loading = false
            })
        } else {
          this.$Message.warning('请核实表单')
        }
      })
    },
    refreshTime () {
      this.time = dayjs().format('HH:mm:ss')
    }
  }
}
</script>
<style lang="less" scoped>
// @import "./login.less";
</style>
