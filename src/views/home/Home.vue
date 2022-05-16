<template>
  <div class="home">
    <Header />
    <div class="home__content">
      <div class="home__content__title">
        <img :src="title" alt="">
      </div>
      <div class="home__content__imgs" ref="wrapper">
        <div class="img__wrapper">
          <div class="home__content__img" 
          v-for="item in list" 
          :key="item.id"
          @click="handleClick(item.id)"
          ><img :src="item.url" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
import BScroll from "@better-scroll/core";
import ScrollBar from "@better-scroll/scroll-bar";
import MouseWheel from "@better-scroll/mouse-wheel";

BScroll.use(MouseWheel);
BScroll.use(ScrollBar);
export default {
  data() {
    return {
      list:[],
      length:8,
      title:''
    }
  },
  beforeMount() {
    this.initList();
    this.title=require('../../assets/title/title1.png')
  },
  mounted() {
    this.initBscroll();
  },
  methods: {
    handleClick(i){
       this.$router.push(`/exhibition/${i}/${this.length}`)
    },
    initList(){
      for(let i=0;i<this.length;i++){
        this.list.push({url:require(`../../assets/exhibit/exhibit${i}.jpg`),id:i})
      }
    },
    initBscroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        startY: false,
        scrollbar: false,
        click: true,
        mouseWheel: true,
      });
    },
  },
  components: {
    Header,
  },
};
</script>
<style lang="less" scoped>
.home{
  background: url('../../assets/background.png');
  background-size: 100% 3.80rem;
  background-repeat: no-repeat;
  background-position-y: 2.47rem;
}
.home__content {
  margin-top: 0.74rem;
  height: 4.9rem;
  width: 100%;
  position: relative;
  &__title {
    position: absolute;
    top: 0.32rem;
    left: 0.49rem;
    height: 3.16rem;
    width: 0.64rem;
    img{
      height: 100%;
      width: 100%;
    }
  }
  &__imgs {
    display: flex;
    margin-left: 1.49rem;
    height: 4.45rem;
    width: 11.1rem;
    overflow: hidden;
    white-space: nowrap;
  }
  &__img {
    display: inline-block;
    height: 4.45rem;
    width: 3.31rem;
    margin-right: 0.24rem;
    margin-left: 0;
    img{
      height: 100%;
      width: 100%;
    }
  }
}
</style>
