<template>
  <div class="login">
    <van-nav-bar title="账号登陆" left-arrow @click-left="back" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账户"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin: 16px">
        <van-button square block type="info" native-type="submit"
          >登录</van-button
        >
      </div>

      <p>还没有账号，去注册~</p>
    </van-form>
  </div>
</template>

<script>
import { usersLogin } from '@/API'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    async onSubmit(value) {
      this.loading()
      try {
        const { data } = await usersLogin(value)
        console.log(data.body)
        this.SET_TOKEN(data.body)
        // console.log(111)
        if (data.status === 200) {
          // 成功提示
          this.$toast.success({
            message: '账号密码正确'
          })
          this.$router.push('/layout/home')
        } else {
          // 失败提示
          this.$toast.fail('账号密码错误')
          this.password = ''
        }
      } catch (error) {
        this.$toast.fail('请刷新重试')
        throw error
      }
    },
    back() {
      this.$router.back()
    },
    loading() {
      this.$toast.loading({
        message: '刷新重试...',
        forbidClick: true,
        duration: 0
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  /deep/.van-nav-bar {
    background-color: #21b97a;

    .van-nav-bar__title {
      color: #fff;
      font-size: 18px;
    }

    .van-icon {
      color: #fff;
    }
  }

  .van-form {
    margin-top: 15px;
    padding: 5px;

    /deep/ .van-field {
      font-weight: 400;
      font-size: 18px;
      padding: 20px 20px;
    }
  }

  .van-button {
    border: 0;
    background-color: #21b97a;
    border-radius: 4px;
    font-size: 18px;
  }

  p {
    color: #ccc;
    font-size: 16px;
    text-align: center;
  }
}
</style>
