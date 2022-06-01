<template>
  <div class="souvenirItem">
    <div class="connect">联系我们：bafashanhaihuajuan@166.com</div>
    <Header />
    <div class="souvenirItem__content">
      <img :src="src0" alt="" class="souvenirItem__content__title" />
      <img :src="src1" alt="" class="souvenirItem__content__item" />
      <img :src="src2" alt="" class="souvenirItem__content__introduce" />
      <div @click="buy = !buy" class="buy"></div>
    </div>
    <div class="buyItem" v-show="buy">
      <div class="product">
        <div class="product__decoration"></div>
        <div class="product__tags">
          <div class="product__tag">商品</div>
          <div class="product__tag">商品属性</div>
          <div class="product__tag">单价</div>
          <div class="product__tag">数量</div>
          <div class="product__tag">优惠</div>
          <div class="product__tag">小计</div>
        </div>
        <div class="product__info">
          <div class="product__info__item">书签</div>
          <div class="product__info__item">
            颜色分类：{{ color }}<br />
            尺寸分类：中<br />
            包装类型：精品包装
          </div>
          <div class="product__info__item">8.8元</div>
          <div class="product__info__item">1</div>
          <div class="product__info__item">无优惠</div>
          <div class="product__info__item">8.8元</div>
        </div>
        <div class="product__address">
          <div class="product__address__title">收货地址：</div>
          <div class="product__address__info">{{$store.state.user.username}} {{$store.state.user.phone}}</div>
          <div class="product__address__address">湖北省 武汉市 洪山区 珞南街道 武汉理工大学（南湖校区）</div>
          <div class="product__address__change">切换地址</div>
        </div>
        <img :src="src1" alt="" class="product__img" />
      </div>
      <div class="img__wrapper">
        <img :src="src3" alt="" />
        <div class="return" @click="buy = !buy"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '../../components/Header.vue'
  export default {
    data() {
      return {
        src0: require(`../../assets/title/title2.png`),
        src2: require(`../../assets/souvenir/souvenirItem.png`),
        src3: require('../../assets/buy/buy__return.png'),
        buy: false,
        colors: ['橘', '黄', '粉']
      }
    },
    computed: {
      src1() {
        const id = this.$route.params.id
        return require(`../../assets/souvenir/souvenir${id}.png`)
      },
      color() {
        const id = this.$route.params.id - 0
        return this.colors[id]
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
  .souvenirItem {
    position: relative;
    height: 100%;
    background: url('../../assets/background.png');
    background-size: 100% 3.8rem;
    background-repeat: no-repeat;
    background-position-y: 2.47rem;
  }
  .souvenirItem__content {
    &__title {
      position: absolute;
      left: 0.44rem;
      top: 2rem;
    }
    &__item {
      position: absolute;
      left: 1.99rem;
      top: 1.7rem;
      height: 4.26rem;
      z-index: 2;
    }
    &__introduce {
      position: absolute;
      top: 1.53rem;
      right: 1.74rem;
      width: 7.82rem;
      z-index: 1;
    }
  }
  .buy {
    position: absolute;
    height: 0.5rem;
    width: 2.04rem;
    top: 5.1rem;
    left: 5.9rem;
    z-index: 3;
  }
  .buyItem {
    z-index: 4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -2rem;
    background: rgba(0, 0, 0, 0.5);
    .img__wrapper {
      position: relative;
      width: 7.8rem;
      height: 1.8rem;
      margin-top: 0.16rem;
      margin-left: 2.5rem;
      img {
        width: 100%;
        height: 100%;
      }
      .return {
        position: absolute;
        width: 1.2rem;
        height: 0.2941rem;
        top: 1.3rem;
        left: 6.12rem;
      }
    }
  }
  .product {
    overflow: hidden;
    box-sizing: border-box;
    width: 7.8rem;
    height: 3.02rem;
    margin-top: 1.16rem;
    margin-left: 2.5rem;
    background: #f3e7dd;
    padding-left: 0.17rem;
    &__decoration {
      height: 3.02rem;
      position: absolute;
      width: 0.17rem;
      left: 2.5rem;
      top: 1.16rem;
      background: #ecd8c8;
    }
    &__tags {
      padding-top: 0.43rem;
      margin-left: 1.65rem;
      display: flex;
      width: 5.89rem;
    }
    &__tag {
      border-bottom: 0.02rem solid #ecd8c8;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      width: 0.28rem;
      height: 0.2rem;
      font-weight: 500;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: #86693e;
      margin-right: 0.18rem;
      white-space: nowrap;
      padding-bottom: 0.02rem;
      &:nth-of-type(2) {
        width: 1.24rem;
      }
    }
    &__info {
      margin-top: 0.07rem;
      width: 7.63rem;
      height: 0.8rem;
      background: linear-gradient(270deg, rgba(255, 255, 255, 0.3) 80.29%, rgba(255, 255, 255, 0) 100%);
      display: flex;
      padding-left: 1.94rem;
      &__item {
        font-size: 0.1rem;
        font-weight: 400;
        color: #86693e;
        line-height: 0.14rem;
        width: 0.7rem;
        margin: auto 0;
        margin-right: 0.18rem;
        &:nth-of-type(2) {
          width: 1.24rem;
        }
        &:nth-of-type(6) {
          font-weight: 500;
          font-size: 0.14rem;
          line-height: 0.2rem;
          color: #953d2e;
        }
      }
    }
    &__address {
      position: relative;
      margin-top: 0.24rem;
      width: 7.63rem;
      height: 0.9rem;
      padding-left: 1.9rem;
      background: linear-gradient(270deg, rgba(255, 255, 255, 0.3) 80.29%, rgba(255, 255, 255, 0) 100%);
      font-weight: 400;
      font-size: 0.12rem;
      line-height: 0.17rem;
      color: #86693e;
      &__title {
        padding-top: 0.1rem;
        font-weight: 500;
        font-size: 0.14rem;
        line-height: 0.2rem;
        color: #953d2e;
      }
      &__info,
      &__address {
        height: 0.17rem;
        margin-top: 0.07rem;
      }
      &__change {
        position: absolute;
        top: 0.37rem;
        right: 0.45rem;
      }
    }
    img {
      display: block;
      position: absolute;
      width: 1.32rem;
      height: 2.13rem;
      left: 2.89rem;
      top: 1.53rem;
    }
  }
</style>
