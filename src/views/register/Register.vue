<template>
  <div class="register__wrapper">
    <div class="connect">联系我们：bafashanhaihuajuan@166.com</div>
    <Header />
    <div class="register__title">
      <img :src="src0" alt="" />
    </div>
    <div class="register__content">
      <div class="register__content__img"><img :src="src1" alt="" /></div>
      <input type="file" name="" class="file" accept="image/*" @change="handlefile($event)" />
      <div class="register__content__username" ref="username">用户名</div>
      <div class="register__content__info">基本信息</div>
      <div class="register__content__info__content">
        <p>用户名</p>
        <input type="text" placeholder="请填写" @change="handleusername($event)" />
      </div>
      <div class="register__content__info__content">
        <p>手机号</p>
        <input
          type="text"
          placeholder="请填写11位手机号"
          @change="handlephone($event)"
          @click="handleclick($event)"
          v-model="phone"
        />
      </div>
      <div class="register__content__info__content">
        <p>邮箱</p>
        <input type="text" placeholder="请填写" @change="handleemail($event)" @click="handleclick($event)" />
      </div>
      <div class="register__content__info__content">
        <p>性别</p>
        <input type="text" placeholder="请填写" />
      </div>
      <div class="register__content__info__content">
        <p>生日</p>
        <input type="text" placeholder="请填写" />
      </div>
      <div class="register__content__info__content">
        <p>职业</p>
        <input type="text" placeholder="请填写" />
      </div>
      <div class="register__content__info__content">
        <p>密码</p>
        <input type="password" placeholder="请填写" v-model="password" />
      </div>
      <div class="register__content__info__content">
        <p>确认密码</p>
        <input type="password" placeholder="请填写" @change="handlepassword($event)" @click="handleclick($event)" />
      </div>
      <div class="register__content__info__content">
        <p>个性签名</p>
        <input type="text" placeholder="请填写" style="width: 7.27rem" />
      </div>
      <div class="register__content__save" @click="handleinfosave">保存</div>
      <div class="register__content__favor">个人偏好</div>
      <div class="register__content__choose">请选择自己感兴趣的标签</div>
      <div class="register__content__tags">
        <div class="register__content__tag" @click="handleTagClick($event)">书法</div>
        <div class="register__content__tag" @click="handleTagClick($event)">楷书</div>
        <div class="register__content__tag" @click="handleTagClick($event)">行书</div>
        <div class="register__content__tag" @click="handleTagClick($event)">草书</div>
        <div class="register__content__tag" @click="handleTagClick($event)">王羲之</div>
        <div class="register__content__tag" @click="handleTagClick($event)">颜体</div>
        <div class="register__content__tag" @click="handleTagClick($event)">绘画</div>
        <div class="register__content__tag" @click="handleTagClick($event)">国画</div>
        <div class="register__content__tag" @click="handleTagClick($event)">现代画</div>
        <div class="register__content__tag" @click="handleTagClick($event)">艺术插画</div>
        <div class="register__content__tag" @click="handleTagClick($event)">水彩</div>
      </div>
      <div class="register__content__save" @click="savePage">保存</div>
    </div>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  import axios from 'axios'
  export default {
    name: 'Register',
    data() {
      return {
        src0: require('../../assets/title/title4.png'),
        src1: require('../../assets/default.png'),
        username: '用户名',
        flag1: true,
        flag2: true,
        flag3: true,
        password: '',
        phone: ''
      }
    },
    components: {
      Header
    },
    mounted() {
      this.changehead()
    },
    methods: {
      savePage() {
        this.$router.push('/login')
      },
      handleTagClick(e) {
        if (e.target.style.color != 'rgb(255, 255, 255)') {
          e.target.style.background = '#C95945'
          e.target.style.color = '#FFFFFF'
        } else {
          e.target.style.color = '#C7B9B6'
          e.target.style.background = '#FAF9F9'
        }
      },
      handleinfosave() {
        let flag = this.flag1 && this.flag2 && this.flag3
        const input = document.documentElement.getElementsByTagName('input')
        for (let i = 1; i < input.length; i++) {
          if (input[i].value === '') {
            flag = false
          }
        }
        const data = {
          register: true,
          login: false,
          username: this.username,
          password: this.password,
          phone: this.phone
        }
        this.$store.commit('Register', data)
        this.$store.commit('Init')
        this.$refs.username.innerHTML = this.username
      },
      handlepassword(e) {
        this.flag3 = true
        e.target.type = 'password'
        if (e.target.value !== this.password) {
          e.target.style.color = 'red'
          e.target.type = 'text'
          e.target.value = ''
          e.target.setAttribute('placeholder', '请输入正确的密码')
          this.flag3 = false
        } else {
          e.target.style.color = '#000'
        }
      },
      handleclick(e) {
        e.target.style.color = 'black'
      },
      handleemail(e) {
        this.flag2 = true
        if (e.target.value.indexOf('@') < 0) {
          e.target.style.color = 'red'
          e.target.value = ''
          e.target.setAttribute('placeholder', '请输入正确的邮箱')
          this.flag2 = false
        } else {
          e.target.style.color = '#000'
        }
      },
      handleusername(e) {
        this.username = e.target.value
      },
      handlephone(e) {
        this.flag1 = true
        const reg = /^\d{11}$/
        if (!reg.test(e.target.value)) {
          e.target.value = ''
          e.target.setAttribute('placeholder', '请正确输入手机号')
          e.target.style.color = 'red'
          this.flag1 = false
        } else {
          e.target.style.color = '#000'
        }
      },
      changehead() {
        axios.get('http://127.0.0.1:5000/head').then((res) => {
          if (res.data != '') this.src1 = res.data
        })
      },
      handlefile(e) {
        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
          let result = reader.result
          axios.post('http://127.0.0.1:5000/head', { result })
        }
        this.changehead()
        this.$router.go(0)
      }
    }
  }
</script>
<style lang="less" scoped>
  .connect {
    position: absolute;
    right: 0.45rem;
    bottom: 0.79rem;
    height: 0.14rem;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 0.1rem;
    line-height: 0.14rem;
    color: #999999;
  }
  .register__wrapper {
    position: relative;
    width: 12.8rem;
    height: 18rem;
    background: url('../../assets/register-background.png');
    background-position-y: 0.64rem;
  }
  .register__title {
    height: 2.38rem;
    width: 0.64rem;
    position: absolute;
    left: 0.42rem;
    top: 1.28rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .register__content {
    box-sizing: border-box;
    position: absolute;
    left: 1.48rem;
    top: 1.28rem;
    width: 9.87rem;
    height: 15rem;
    background: #ffffff;
    padding: 0 0.95rem 0.88rem 0.56rem;
    &__favor {
      margin-top: 0.4rem;
      font-family: 'mFont';
      font-style: normal;
      font-weight: 400;
      font-size: 0.2rem;
      line-height: 0.28rem;
      color: #953d2e;
    }
    &__choose {
      margin-top: 0.24rem;
      font-style: normal;
      font-weight: 400;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: #999999;
    }
    &__tags {
      margin-top: 0.19rem;
      display: flex;
      width: 6.9rem;
      flex-wrap: wrap;
      margin-bottom: -0.6rem;
    }
    &__tag {
      height: 0.46rem;
      line-height: 0.46rem;
      background: #faf9f9;
      border-radius: 0.08rem;
      font-size: 16px;
      line-height: 0.46rem;
      text-align: right;
      color: #c7b9b6;
      flex: none;
      padding: 0 0.31rem;
      margin-right: 0.22rem;
      margin-bottom: 0.2rem;
    }
    &__save {
      width: 1.29rem;
      height: 0.48rem;
      background: #c95945;
      border-radius: 0.08rem;
      font-style: normal;
      font-weight: 400;
      font-size: 0.2rem;
      line-height: 0.48rem;
      text-align: center;
      margin-left: 7.08rem;
      margin-top: 0.7rem;
      font-family: 'mFont';
      color: #fff;
    }
    &__info__content {
      margin-bottom: 0.2rem;
      height: 0.56rem;
      line-height: 0.56rem;
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 0.16rem;
        line-height: 0.22rem;
        text-align: right;
        display: inline-block;
        width: 0.64rem;
        margin-left: 0.16rem;
        color: #999999;
      }
      input {
        color: #000;
        text-decoration: none;
        outline: none;
        border: none;
        height: 0.56rem;
        background: #faf9f9;
        width: 2.3rem;
        border-radius: 0.08rem;
        text-indent: 0.2rem;
        font-size: 0.16rem;
        line-height: 0.56rem;
        margin-left: 0.24rem;
        &::placeholder {
          font-family: 'PingFang SC';
          font-size: 0.16rem;
          line-height: 0.56rem;
          color: #c7b9b6;
          text-indent: 0.2rem;
        }
      }
    }
    &__img {
      width: 1.01rem;
      height: 1.01rem;
      margin-top: 0.49rem;
      margin-left: 3.7rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__username {
      margin-top: 0.16rem;
      font-family: 'mFont';
      font-style: normal;
      font-weight: 400;
      font-size: 0.24rem;
      line-height: 0.34rem;
      text-align: center;
      color: #c95945;
    }
    &__info {
      font-family: 'mFont';
      font-style: normal;
      font-weight: 400;
      font-size: 0.2rem;
      line-height: 0.28rem;
      color: #953d2e;
      margin-top: 0.45rem;
      margin-bottom: 0rem;
    }
  }
  .file {
    position: absolute;
    opacity: 0;
    display: block;
    top: 0.5rem;
    left: 4.48rem;
    width: 1.01rem;
    height: 1.01rem;
    border-radius: 50%;
  }
</style>
