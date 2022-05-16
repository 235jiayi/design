<template>
  <div class="login">
    <Header />
    <div class="login__title">
      <img :src="src0" alt="" />
    </div>
    <div class="login__content">
      <input
        type="file"
        name=""
        class="file"
        accept="image/*"
        @change="handlefile($event)"
      />
      <div class="login__img"><img :src="src1" alt="" /></div>
      <input
        type="text"
        class="login__name"
        placeholder="向晚大魔王"
        v-model="name"
      />
      <input
        class="login__password"
        type="password"
        placeholder="*****"
        v-model="password"
      />
      <input type="checkbox" class="login__check" id="checks" />
      <svg
        viewBox="0 0 14 10"
        v-show="checked"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.20711 4.29289C1.81658 3.90237 1.18342 3.90237 0.792893 4.29289C0.402369 4.68342 0.402369 5.31658 0.792893 5.70711L2.20711 4.29289ZM5 8.5L4.29289 9.20711C4.68342 9.59763 5.31658 9.59763 5.70711 9.20711L5 8.5ZM13.2071 1.70711C13.5976 1.31658 13.5976 0.683417 13.2071 0.292893C12.8166 -0.0976311 12.1834 -0.0976311 11.7929 0.292893L13.2071 1.70711ZM0.792893 5.70711L4.29289 9.20711L5.70711 7.79289L2.20711 4.29289L0.792893 5.70711ZM5.70711 9.20711L13.2071 1.70711L11.7929 0.292893L4.29289 7.79289L5.70711 9.20711Z"
          fill="white"
        />
      </svg>
      <label for="checks" @click="handleClick">记住密码</label>
      <div class="login__forget">忘记密码?</div>
      <div class="login__login" @click="handleLogin">登 陆</div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      checked: false,
      src0: require("../../assets/title/title3.png"),
      src1: require("../../assets/default.png"),
      name: "",
      password: "",
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.changehead();
    if(this.$store.state.login){
      this.$router.push('/')
    }
  },
  methods: {
    handleLogin() {
      if (this.name != "" && this.password != "") {
        const data={
          login:true,
          user:this.name
        }
        this.$store.commit("Login",data);        
        this.$store.commit("Init")
        this.$router.push('/')
      }
    },
    handleClick() {
      this.checked = !this.checked;
    },
    handlefile(e) {
      const file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        let result = reader.result;
        axios.post("http://127.0.0.1:5000/head", { result });
      };
      this.changehead();
      this.$router.go(0);
    },
    changehead() {
      axios.get("http://127.0.0.1:5000/head").then((res) => {
        if (res.data != "") this.src1 = res.data;
      });
    },
  },
};
</script>
<style lang="less" scoped>
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
  background-image: url("../../assets/background.png");
  background-size: 12.8rem 3.8rem;
  background-repeat: no-repeat;
  background-position-y: 2.47rem;
  position: relative;
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
    background-image: url("../../assets/login-background.png");
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
    label {
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
    font-family: "mFont";
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
      content: "\2714"; /*这是html特殊字符的css编码*/
      color: #fff;
    }
  }
  &__forget {
    position: absolute;
    top: 3.14rem;
    left: 3.46rem;
  }
  &__login {
    margin: 0.32rem auto 0 auto;
    width: 1.95rem;
    height: 0.64rem;
    background: #953d2e;
    font-family: "mFont";
    font-size: 0.32rem;
    color: #fff;
    text-align: center;
    line-height: 0.64rem;
  }
}
</style>
