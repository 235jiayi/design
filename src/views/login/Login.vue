<template>
  <div class="login">
    <Header />
    <div class="login__title">
      <img :src="src0" alt="" />
    </div>
    <div class="login__content">
      <div class="login__img"><img :src="src1" alt="" /></div>
      <input type="text" class="login__name" placeholder="输入姓名" @change="handleusername($event)" ref="username" />
      <input
        class="login__password"
        type="password"
        placeholder="*****"
        @change="handlePassword($event)"
        ref="password"
      />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-show="checked">
        <rect width="20" height="20" fill="#D1A481" />
        <path
          d="M5.20711 10.2929C4.81658 9.90237 4.18342 9.90237 3.79289 10.2929C3.40237 10.6834 3.40237 11.3166 3.79289 11.7071L5.20711 10.2929ZM8 14.5L7.29289 15.2071C7.68342 15.5976 8.31658 15.5976 8.70711 15.2071L8 14.5ZM16.2071 7.70711C16.5976 7.31658 16.5976 6.68342 16.2071 6.29289C15.8166 5.90237 15.1834 5.90237 14.7929 6.29289L16.2071 7.70711ZM3.79289 11.7071L7.29289 15.2071L8.70711 13.7929L5.20711 10.2929L3.79289 11.7071ZM8.70711 15.2071L16.2071 7.70711L14.7929 6.29289L7.29289 13.7929L8.70711 15.2071Z"
          fill="white"
        />
      </svg>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-show="!checked">
        <rect x="1" y="1" width="18" height="18" fill="white" stroke="#D1A481" stroke-width="2" />
      </svg>
      <div @click="handleClick" class="login__content__rember">记住密码</div>
      <div class="login__forget" @click="forget">忘记密码?</div>
      <div class="login__login" @click="handleLogin">登 陆</div>
    </div>
    <div class="shareout" v-show="showforget" ref="shareout" @click="showforget = false">
      <div class="shareout__wrapper">
        <img :src="srcShare" alt="" />
        <p>手机扫描二维码登录</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        srcShare: require('../../assets/share.png'),
        name: '',
        checked: false,
        src0: require('../../assets/title/title3.png'),
        src1: require('../../assets/default.png'),
        password: '',
        flag0: true,
        flag1: true,
        showforget: false
      }
    },
    components: {
      Header
    },
    mounted() {
      this.changehead()
      if (this.$store.state.rember) {
        this.$refs.username.value = this.$store.state.user.username
        this.$refs.password.value = this.$store.state.user.password
        this.handleClick()
      }
    },
    methods: {
      forget() {
        this.showforget = true
        const width = document.documentElement.clientWidth || document.body.clientWidth
        let bottom = document.documentElement.scrollHeight
        this.$refs.shareout.style.height = bottom + 'px'
      },
      handleusername(e) {
        this.flag0 = true
        if (e.target.value !== this.$store.state.user.username) {
          this.flag0 = false
          e.target.value = ''
          e.target.setAttribute('placeholder', '请输入正确的用户名')
        }
      },
      handlePassword(e) {
        this.flag1 = true
        if (e.target.value != this.$store.state.user.password) {
          this.flag1 = false
          e.target.value = ''
          e.target.setAttribute('placeholder', '请输入正确的密码')
        }
      },
      handleLogin() {
        if (this.flag0 && this.flag1 && this.$refs.username != '' && this.$refs.password != '') {
          this.$store.commit('Login')
          this.$router.push('/')
        }
      },
      handleClick() {
        this.checked = !this.checked
        console.log(this.checked)
        this.$store.commit('Rember', this.checked)
      },
      changehead() {
        axios.get('http://127.0.0.1:5000/head').then((res) => {
          if (res.data != '') this.src1 = res.data
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .shareout {
    z-index: 4;
    position: absolute;
    top: 0;
    width: 12.8rem;
    background: rgba(0, 0, 0, 0.5);
    &__wrapper {
      width: 3.04rem;
      height: 3.67rem;
      background: #f3e7dd;
      position: relative;
      left: 4.87rem;
      top: 1.76rem;
      img {
        position: absolute;
        top: 0.32rem;
        left: 0.31rem;
        width: 2.45rem;
        height: 2.45rem;
      }
      p {
        position: absolute;
        font-size: 0.24rem;
        font-family: 'mFont';
        font-weight: 400;
        color: #86693e;
        line-height: 0.28rem;
        top: 3.08rem;
        left: 0.44rem;
      }
    }
  }
  .file {
    position: absolute;
    opacity: 0;
    display: block;
    top: 0.4rem;
    left: 2.13rem;
    width: 0.9rem;
    height: 0.9rem;
  }
  .login {
    background-image: url('../../assets/background.png');
    background-size: 12.8rem 3.8rem;
    background-repeat: no-repeat;
    background-position-y: 2.47rem;
    height: 7.2rem;
    width: 12.8rem;
    &__title {
      position: absolute;
      width: 0.64rem;
      height: 1.95rem;
      top: 1.77rem;
      left: 2.79rem;
      img {
        height: 100%;
        width: 100%;
      }
    }
    &__content {
      background-image: url('../../assets/login-background.png');
      background-repeat: no-repeat;
      background-size: 5.17rem 4.7rem;
      font-size: 0.14rem;
      font-weight: 400;
      color: #d1a481;
      position: absolute;
      left: 3.81rem;
      top: 1.77rem;
      width: 5.17rem;
      height: 4.7rem;
      svg {
        position: absolute;
        height: 0.13rem;
        width: 0.13rem;
        left: 1.12rem;
        top: 3.15rem;
        font-size: 0.18rem;
        color: #fff;
      }
      &__rember {
        line-height: 0.16rem;
        position: absolute;
        top: 3.14rem;
        left: 1.33rem;
      }
    }
    &__img {
      margin: 0.4rem auto 0.36rem auto;
      border-radius: 50%;
      width: 0.9rem;
      height: 0.9rem;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    &__name,
    &__password {
      display: block;
      width: 3.01rem;
      height: 0.54rem;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.6);
      font-size: 20px;
      font-family: 'mFont';
      font-weight: 400;
      line-height: 0.54rem;
      text-align: center;
      text-decoration: none;
      outline: none;
      border: none;
      color: #000;
      &::placeholder {
        color: #d1a481;
      }
    }
    &__password {
      margin-top: 0.29rem;
      margin-bottom: 0.05rem;
    }
    &__check {
      margin-top: -0.01rem;
      margin-left: 1.07rem;
      width: 0.2rem;
      height: 0.2rem;
      -webkit-appearance: none;
      text-decoration: none;
      border: 0.01rem solid #d1a481;
      &:checked {
        background: #d1a481;
        background-repeat: no-repeat;
        content: '\2714'; /*这是html特殊字符的css编码*/
        color: #fff;
      }
    }
    &__forget {
      position: absolute;
      top: 3.14rem;
      left: 3.46rem;
    }
    &__login {
      margin: 0.45rem auto 0 auto;
      width: 1.95rem;
      height: 0.64rem;
      background: #953d2e;
      font-family: 'mFont';
      font-size: 0.32rem;
      color: #fff;
      text-align: center;
      line-height: 0.64rem;
    }
  }
</style>
