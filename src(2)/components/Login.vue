<template>
    <form class='login-box'>
      <p class="form-item">
        <input type='text' placeholder='手机号码' v-model='user.phone'>
      </p>
      <p class="form-item">
        <input type='text' placeholder='短信验证码' v-model='user.code'>
        <a href="javascript:;" @click="sendCode">获取验证码</a>
      </p>
      <button class='btn' :class='{disabled:isDisabled}' :disabled='isDisabled' @click.prevent="loginDo">登录</button>
    </form>
</template>
<script>
export default {
  data () {
    return {
      user: {
        phone: '',
        code: ''
      }
    }
  },
  computed: {
    isDisabled () {
      if (this.user.phone !== '' && this.user.code !== '') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    sendCode () {
      this.$fetch.POST('http://39.106.70.14:3000/api/sendCode', {
        phone: this.user.phone
      }).then((res) => {
        console.log(res)
      })
    },
    loginDo () {
      this.$fetch.POST('http://39.106.70.14:3000/api/login', {
        phone: this.user.phone
      }).then((res) => {
        this.$mLayer.getLayerComponent().okFn()
        this.$mLayer.close()
        window.localStorage.setItem('userInfor', res.data)
      })
    }
  }
}
</script>
<style scoped lang='less'>
  .login-box{
    .form-item {
      display: -webkit-box;
      border-bottom: 1px solid #CCCCCC;
      margin-top: 10px;
      line-height: 45px;
      font-size: 0.14rem;
      input {
        -webkit-box-flex: 1;
        height: 45px;
        display: block;
        font-size: 0.14rem;
        border: 0;
      }
      a {
        display: block;
        font-size: 0.14rem;
        color: #000;
      }
    }
    .btn {
      margin: 0 auto;
      margin-top: 40px;
      &.disabled {
        opacity: 0.5;
      }
    }
  }
</style>
