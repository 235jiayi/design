<template>
  <div class="souvenir">
    <div class="connect">联系我们：bafashanhaihuajuan@166.com</div>
    <Header />
    <div class="souvenir__content">
      <div class="souvenir__content__title"></div>
      <div class="souvenir__content__items">
        <div class="souvenir__content__item" v-for="item in list" :key="item.id" @click="handleClick(item.id)">
          <img :src="item.url" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  export default {
    data() {
      return {
        length: 3,
        list: []
      }
    },
    beforeMount() {
      this.initList()
    },
    mounted() {},
    methods: {
      initList() {
        for (let i = 0; i < this.length; i++) {
          this.list.push({
            url: require(`../../assets/souvenir/souvenir${i}.png`),
            id: i
          })
        }
      },
      handleClick(i) {
        this.$router.push(`/souvenirItem/${i}`)
      }
    },
    components: {
      Header
    }
  }
</script>
<style lang="less" scoped>
  .connect {
    position: absolute;
    right: 0.45rem;
    bottom: 0.39rem;
    height: 0.14rem;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 0.1rem;
    line-height: 0.14rem;
    color: #999999;
  }
  .souvenir {
		position: relative;
    height: 7.2rem;
    background: url('../../assets/background.png');
    background-size: 100% 3.8rem;
    background-repeat: no-repeat;
    background-position-y: 2.47rem;
    &__content {
      margin-top: 0.35rem;
      position: relative;
      &__title {
        position: absolute;
        background: url('../../assets/title/title2.png') no-repeat;
        background-size: 100% 100%;
        left: 0.44rem;
        width: 0.64rem;
        height: 2.38rem;
        top: 0.97rem;
      }
      &__items {
        margin-left: 1.55rem;
        display: flex;
        white-space: pre-wrap;
      }
      &__item {
        position: relative;
        width: 3.11rem;
        height: 2.07rem;
        box-shadow: 0 0.16rem 0.36rem 0.01rem rgba(0, 0, 0, 0.25);
        background: url('../../assets/souvenir/buy.png');
        background-size: 124% 140%;
        background-position: -0.39rem -0.2rem;
        margin-top: 2.77rem;
        margin-right: 0.72rem;
        &:nth-of-type(3) {
          margin-right: 0rem;
        }
        img {
          position: absolute;
          left: 0.4rem;
          top: -2.87rem;
          height: 4.26rem;
        }
      }
    }
  }
</style>
