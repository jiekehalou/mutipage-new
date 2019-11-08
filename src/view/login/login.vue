<template>
  <div class="login">
        登陆3个
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
