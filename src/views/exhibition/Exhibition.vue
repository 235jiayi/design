<template>
  <div class="exhibition">
    <Header />
    <div class="exhibition__content">
      <div class="exhibition__content__title"><img :src="src0" alt="" /></div>
      <div class="exhibition__content__exhibit">
        <div class="route__left" @click.native="hanleleft">
          <svg
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.292893 7.70711C-0.097631 7.31658 -0.0976309 6.68342 0.292893 6.29289L6.29289 0.2929C6.68342 -0.0975999 7.31658 -0.0975999 7.70711 0.2929C8.09763 0.6834 8.09763 1.3166 7.70711 1.7071L2.41422 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="route__right" @click="hanleleright">
          <svg
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683421 14.0976 0.292891 13.7071C-0.0976286 13.3166 -0.0976286 12.6834 0.292891 12.2929L5.58578 7L0.292892 1.70711C-0.0976281 1.31658 -0.0976281 0.683417 0.292892 0.292893C0.683422 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L7.70711 6.29289Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="wrapper" ref="scroll">
          <img
            :src="src"
            alt=""
            class="largesize"
            v-show="large"
            :style="large"
          />
          <img
            :src="src"
            alt=""
            v-show="!large"
            class="smallsize"
            :style="large"
          />
        </div>
        <div class="exhibition__content__svg">
          <div class="svg__wrapper" @click="handleLargeClick">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.40001 1.2C3.08041 1.2 1.2 3.08041 1.2 5.40001C1.2 7.71961 3.08041 9.60001 5.40001 9.60001C6.53155 9.60001 7.55863 9.15253 8.31385 8.42485C8.32963 8.40433 8.34691 8.38453 8.36575 8.36575C8.38453 8.34691 8.40433 8.32963 8.42485 8.31385C9.15253 7.55863 9.60001 6.53155 9.60001 5.40001C9.60001 3.08041 7.71961 1.2 5.40001 1.2ZM9.61915 8.77063C10.3581 7.84681 10.8 6.67501 10.8 5.40001C10.8 2.41767 8.38237 0 5.40001 0C2.41767 0 0 2.41767 0 5.40001C0 8.38237 2.41767 10.8 5.40001 10.8C6.67501 10.8 7.84681 10.3581 8.77063 9.61915L10.9758 11.8243C11.2101 12.0586 11.59 12.0586 11.8243 11.8243C12.0586 11.59 12.0586 11.2101 11.8243 10.9758L9.61915 8.77063ZM5.40001 3C5.73138 3 6.00001 3.26864 6.00001 3.6V4.80001H7.20001C7.53139 4.80001 7.80001 5.06864 7.80001 5.40001C7.80001 5.73138 7.53139 6.00001 7.20001 6.00001H6.00001V7.20001C6.00001 7.53139 5.73138 7.80001 5.40001 7.80001C5.06864 7.80001 4.80001 7.53139 4.80001 7.20001V6.00001H3.6C3.26864 6.00001 3 5.73138 3 5.40001C3 5.06864 3.26864 4.80001 3.6 4.80001H4.80001V3.6C4.80001 3.26864 5.06864 3 5.40001 3Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="svg__wrapper" @click="handleSmallClick">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.40001 1.2C3.08041 1.2 1.2 3.08041 1.2 5.40001C1.2 7.71961 3.08041 9.60001 5.40001 9.60001C6.53155 9.60001 7.55863 9.15253 8.31385 8.42485C8.32963 8.40433 8.34691 8.38453 8.36575 8.36575C8.38453 8.34691 8.40433 8.32963 8.42485 8.31385C9.15253 7.55863 9.60001 6.53155 9.60001 5.40001C9.60001 3.08041 7.71961 1.2 5.40001 1.2ZM9.61915 8.77063C10.3581 7.84681 10.8 6.67501 10.8 5.40001C10.8 2.41767 8.38237 0 5.40001 0C2.41767 0 0 2.41767 0 5.40001C0 8.38237 2.41767 10.8 5.40001 10.8C6.67501 10.8 7.84681 10.3581 8.77063 9.61915L10.9758 11.8243C11.2101 12.0586 11.59 12.0586 11.8243 11.8243C12.0586 11.59 12.0586 11.2101 11.8243 10.9758L9.61915 8.77063ZM3 5.40001C3 5.06864 3.26864 4.80001 3.6 4.80001H7.20001C7.53139 4.80001 7.80001 5.06864 7.80001 5.40001C7.80001 5.73138 7.53139 6.00001 7.20001 6.00001H3.6C3.26864 6.00001 3 5.73138 3 5.40001Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="svg__wrapper" @click="handlereflesh">
            <svg
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.6741 1.24758C5.64369 1.10142 4.59368 1.29412 3.68231 1.79664C2.77094 2.29916 2.04759 3.08428 1.62125 4.03367C1.19491 4.98307 1.08868 6.0453 1.31859 7.06032C1.54848 8.07534 2.10204 8.98818 2.89586 9.6612C3.68967 10.3342 4.68073 10.7311 5.71968 10.7918C6.75864 10.8526 7.78921 10.574 8.65609 9.99816C9.52297 9.42228 10.1792 8.58024 10.5259 7.59894C10.6363 7.28652 10.979 7.12272 11.2915 7.23312C11.6039 7.34352 11.7677 7.68624 11.6573 7.99872C11.224 9.2253 10.4037 10.2779 9.3201 10.9977C8.2365 11.7176 6.94831 12.0658 5.6496 11.9897C4.35091 11.9138 3.11209 11.4178 2.11982 10.5765C1.12755 9.73518 0.435598 8.59416 0.148226 7.3254C-0.139146 6.05664 -0.0063656 4.72884 0.526558 3.54209C1.05948 2.35534 1.96368 1.37395 3.10289 0.7458C4.2421 0.11765 5.55461 -0.123226 6.84265 0.0594694C8.12755 0.241728 9.31867 0.835686 10.2374 1.75212L11.9976 3.40967V1.19884C11.9976 0.867468 12.2662 0.598837 12.5976 0.598837C12.929 0.598837 13.1976 0.867468 13.1976 1.19884V4.79884C13.1976 5.13021 12.929 5.39884 12.5976 5.39884H8.99761C8.66623 5.39884 8.39761 5.13021 8.39761 4.79884C8.39761 4.46747 8.66623 4.19884 8.99761 4.19884H11.0852L9.40825 2.61965C9.40387 2.61548 9.39948 2.61126 9.39516 2.60697C8.6595 1.87083 7.70454 1.39373 6.6741 1.24758Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="svg__wrapper" @click="handledownload">
            <svg
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.19763 0C6.52901 0 6.79763 0.268629 6.79763 0.6V6.35148L8.77337 4.37573C9.00767 4.14142 9.38759 4.14142 9.62189 4.37573C9.85619 4.61005 9.85619 4.98995 9.62189 5.22427L6.62189 8.22426C6.38759 8.45856 6.00769 8.45856 5.77337 8.22426L2.77337 5.22427C2.53906 4.98995 2.53906 4.61005 2.77337 4.37573C3.00769 4.14142 3.38758 4.14142 3.6219 4.37573L5.59763 6.35148V0.6C5.59763 0.268629 5.86626 0 6.19763 0ZM0.797632 7.2C1.129 7.2 1.39763 7.46862 1.39763 7.8V10.2C1.39763 10.3591 1.46085 10.5118 1.57337 10.6243C1.68589 10.7368 1.8385 10.8 1.99763 10.8H10.3976C10.5568 10.8 10.7094 10.7368 10.8219 10.6243C10.9344 10.5118 10.9976 10.3591 10.9976 10.2V7.8C10.9976 7.46862 11.2663 7.2 11.5976 7.2C11.929 7.2 12.1976 7.46862 12.1976 7.8V10.2C12.1976 10.6774 12.008 11.1352 11.6704 11.4728C11.3329 11.8103 10.8751 12 10.3976 12H1.99763C1.52024 12 1.0624 11.8103 0.724838 11.4728C0.387272 11.1352 0.197632 10.6774 0.197632 10.2V7.8C0.197632 7.46862 0.466261 7.2 0.797632 7.2Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="exhibition__content__introduce">
        <div class="introduce__title">作品介绍</div>
        <div class="introduce__writer">
          作品名：八法·山海绘卷<br />作者：杖杖<br />创作时间：2020年4月28日
        </div>
        <div class="introduce__text">
          作品简介：<br />
          本作品名为《八法·山海画卷》，是一个虚构线上书画云展会的视觉作品。
          本作品依托线上书画云展会，以汉字书法用笔法则“永字八法”为精神内涵，
          将汉字笔画形态与古典人物造型相结合，构成云展会的视觉表现、促进人们对汉字文化的认识、提高人们的文化认同感。
        </div>
        <div class="introduce__tags">
          <p>绘画</p>
          <p>数字绘画</p>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <p>国风潮</p>
        </div>
        <div class="introduce__svgs">
          <div class="svg__wrappers">
            <transition-group
              :durtion="5000"
              name="animate__animated animate__bounce"
              enter-active-class="animate__fadeIn"
              leave-active-class="animate__fadeOut"
            >
              <div
                class="wrapper"
                v-show="!like"
                @click.stop="like = !like"
                key="1"
              >
                <svg
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.12205 0.324593C9.63929 0.110298 10.1936 0 10.7534 0C11.3132 0 11.8676 0.110298 12.3847 0.324593C12.9018 0.538849 13.3717 0.852869 13.7674 1.24871C14.1632 1.64442 14.4775 2.11446 14.6917 2.63155C14.906 3.14873 15.0163 3.70306 15.0163 4.26289C15.0163 4.82271 14.906 5.37705 14.6917 5.89422C14.4774 6.41136 14.1634 6.88119 13.7675 7.27693C13.7674 7.277 13.7675 7.27693 13.7675 7.27693L7.97159 13.0728C7.71556 13.3289 7.30041 13.3289 7.04438 13.0728L1.24846 7.27693C0.449084 6.47757 0 5.39338 0 4.26289C0 3.13239 0.449084 2.0482 1.24846 1.24882C2.04784 0.449438 3.13204 0.000350621 4.26254 0.000350621C5.39303 0.000350621 6.47723 0.449438 7.27661 1.24882L7.50798 1.48019L7.73923 1.24892C7.73929 1.24889 7.73923 1.24896 7.73923 1.24892C8.13497 0.853033 8.60494 0.538869 9.12205 0.324593ZM10.7534 1.31129C10.3659 1.31129 9.98205 1.38765 9.62401 1.536C9.26596 1.68436 8.94069 1.90181 8.6667 2.17593L7.97159 2.87102C7.71556 3.12707 7.30041 3.12707 7.04438 2.87102L6.34937 2.17604C5.79591 1.62258 5.04526 1.31164 4.26254 1.31164C3.47982 1.31164 2.72916 1.62258 2.17569 2.17604C1.62223 2.72951 1.31129 3.48017 1.31129 4.26289C1.31129 5.0456 1.62223 5.79626 2.17569 6.34973L7.50798 11.682L12.8403 6.34973C13.1144 6.07575 13.3319 5.75032 13.4803 5.39228C13.6286 5.03422 13.705 4.65045 13.705 4.26289C13.705 3.87532 13.6286 3.49155 13.4803 3.1335C13.3319 2.77545 13.1145 2.45014 12.8403 2.17615C12.5664 1.90203 12.2409 1.68436 11.8828 1.536C11.5248 1.38765 11.141 1.31129 10.7534 1.31129Z"
                    fill="#86693E"
                  />
                </svg>
              </div>
              <div
                class="wrapper"
                key="2"
                v-show="like"
                @click.stop="like = !like"
              >
                <svg
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.12205 0.324593C9.63929 0.110298 10.1936 0 10.7534 0C11.3132 0 11.8676 0.110298 12.3847 0.324593C12.9018 0.538849 13.3717 0.852869 13.7674 1.24871C14.1632 1.64442 14.4775 2.11446 14.6917 2.63155C14.906 3.14873 15.0163 3.70306 15.0163 4.26289C15.0163 4.82271 14.906 5.37705 14.6917 5.89422C14.4774 6.41136 14.1634 6.88119 13.7675 7.27693L7.97159 13.0728C7.71556 13.3289 7.30041 13.3289 7.04438 13.0728L1.24846 7.27693C0.449084 6.47757 0 5.39338 0 4.26289C0 3.13239 0.449084 2.0482 1.24846 1.24882C2.04784 0.449438 3.13204 0.000350621 4.26254 0.000350621C5.39303 0.000350621 6.47723 0.449438 7.27661 1.24882L7.50798 1.48019L7.73923 1.24892C8.13497 0.853033 8.60494 0.538869 9.12205 0.324593Z"
                    fill="#953D2E"
                  />
                </svg>
              </div>
            </transition-group>
          </div>
          <div class="svg__wrappers" @click="handleCommend">
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.98323 1.31129C1.80934 1.31129 1.64258 1.38037 1.51962 1.50332C1.39667 1.62628 1.32759 1.79304 1.32759 1.96693V10.8744L2.83091 9.37106C2.95387 9.24813 3.12063 9.17902 3.29452 9.17902H11.1623C11.3361 9.17902 11.5029 9.10992 11.6259 8.98698C11.7488 8.86405 11.8179 8.69726 11.8179 8.52338V1.96693C11.8179 1.79304 11.7488 1.62628 11.6259 1.50332C11.5029 1.38037 11.3361 1.31129 11.1623 1.31129H1.98323ZM0.592396 0.576102C0.961268 0.20723 1.46157 0 1.98323 0H11.1623C11.6839 0 12.1842 0.20723 12.5531 0.576102C12.9219 0.944974 13.1292 1.44527 13.1292 1.96693V8.52338C13.1292 9.04507 12.9219 9.54533 12.5531 9.9142C12.1842 10.2831 11.6839 10.4903 11.1623 10.4903H3.5661L1.13555 12.9209C0.948038 13.1084 0.666029 13.1645 0.421032 13.063C0.176034 12.9615 0.0162964 12.7225 0.0162964 12.4572V1.96693C0.0162964 1.44527 0.223524 0.944974 0.592396 0.576102Z"
                fill="#86693E"
              />
            </svg>
          </div>
          <div class="svg__wrappers">
            <svg
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.56637 0.192034C5.82242 -0.0640113 6.23754 -0.0640113 6.49359 0.192034L9.11617 2.81461C9.3722 3.07066 9.3722 3.48579 9.11617 3.74184C8.86014 3.99788 8.44498 3.99788 8.18895 3.74184L6.68563 2.23851V9.17902C6.68563 9.54113 6.39209 9.83467 6.02998 9.83467C5.66788 9.83467 5.37434 9.54113 5.37434 9.17902V2.23851L3.87101 3.74184C3.61497 3.99788 3.19984 3.99788 2.94379 3.74184C2.68775 3.48579 2.68775 3.07066 2.94379 2.81461L5.56637 0.192034ZM0.784825 6.55644C1.14692 6.55644 1.44047 6.84998 1.44047 7.21209V12.4572C1.44047 12.6311 1.50955 12.7979 1.6325 12.9209C1.75546 13.0438 1.92222 13.1129 2.09611 13.1129H9.96385C10.1377 13.1129 10.3045 13.0438 10.4275 12.9209C10.5504 12.7979 10.6195 12.6311 10.6195 12.4572V7.21209C10.6195 6.84998 10.913 6.55644 11.2751 6.55644C11.6372 6.55644 11.9308 6.84998 11.9308 7.21209V12.4572C11.9308 12.9789 11.7235 13.4792 11.3547 13.8481C10.9858 14.2169 10.4855 14.4242 9.96385 14.4242H2.09611C1.57445 14.4242 1.07415 14.2169 0.705281 13.8481C0.336409 13.4792 0.129181 12.9789 0.129181 12.4572V7.21209C0.129181 6.84998 0.422723 6.55644 0.784825 6.55644Z"
                fill="#86693E"
              />
            </svg>
          </div>
        </div>
        <textarea
          name=""
          id=""
          placeholder="你觉得这个作品怎么样呢......"
          v-model="commend"
        ></textarea>
      </div>
    </div>
    <div class="commend" v-show="showList">
      <div
        class="commend__item"
        v-for="(item, index) in list"
        :key="index"
        v-show="this.id == item.id"
      >
        <img :src="src1" alt="" />
        <div class="commend__box">
          <div class="commend__box__user">{{ $store.state.login.user }}</div>
          <div class="commend__box__time">{{ item.time }}</div>
          <div class="commend__box__commend">{{ item.commend }}</div>
        </div>
      </div>
      <div class="scroll" @click="scroll">
        <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7878 0.502103C11.4573 -0.167368 12.5427 -0.167368 13.2122 0.502103L23.4979 10.7878C24.1674 11.4573 24.1674 12.5427 23.4979 13.2122C22.8285 13.8817 21.743 13.8817 21.0736 13.2122L12 4.13866L2.92648 13.2122C2.257 13.8817 1.17157 13.8817 0.502102 13.2122C-0.167369 12.5427 -0.167369 11.4573 0.502102 10.7878L10.7878 0.502103Z"
            fill="#86693E"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
import BScroll from "@better-scroll/core";
import Movable from "@better-scroll/movable";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import FileSaver from "file-saver";
import axios from "axios";
import moment from "moment";

BScroll.use(ScrollBar);
BScroll.use(MouseWheel);
BScroll.use(Movable);
export default {
  name: "Exhibition",
  components: {
    Header,
  },
  data() {
    return {
      like: false,
      large: false,
      adImg: "",
      src: "",
      src0: require("../../assets/title/title0.png"),
      id: 0,
      src1: "",
      commend: "",
      list: [],
      showList: false,
    };
  },
  mounted() {
    this.handleSrc();
    this.list = this.$store.state.list;
    axios.get("http://127.0.0.1:5000/head").then((res) => {
      if (res.data != "") this.src1 = res.data;
    });
    this.initList();
  },
  methods: {
    initList() {
      this.showList = false;
      for (let item of this.list) if (item.id == this.id) this.showList = true;
    },
    scroll() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    handleCommend() {
      if (this.$store.state.login) {
        let time = `${moment().year()}/${moment().month()}/${moment().date()}`;
        let data = {
          time,
          commend: this.commend,
          id: this.id,
        };
        this.$store.commit("Commend", data);
        this.commend = "";
        this.$router.go(0)
      }
    },
    hanleleft() {
      let length = this.$route.params.length - 0;
      this.id = (length + this.id - 1) % length;
      this.src = require(`../../assets/exhibit/exhibit${this.id}.jpg`);
      this.$router.push(`/exhibition/${this.id}/${length}`);
    },
    hanleleright() {
      let length = this.$route.params.length - 0;
      this.id = (length + this.id + 1) % length;
      this.src = require(`../../assets/exhibit/exhibit${this.id}.jpg`);
      this.$router.push(`/exhibition/${this.id}/${length}`);
      this.initList();
    },
    handleSrc() {
      this.id = this.$route.params.id;
      this.src = require(`../../assets/exhibit/exhibit${this.id}.jpg`);
    },
    handleLargeClick() {
      this.large = true;
      this.init();
    },
    handleSmallClick() {
      this.large = false;
      this.bs.destroy();
    },
    handlereflesh() {
      window.location.reload();
    },
    handledownload() {
      this.adImg = require(`../../assets/exhibit/exhibit${this.$route.params.id}.jpg`);
      FileSaver.saveAs(this.adImg, "image.jpg");
    },
    init() {
      this.$nextTick(function () {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollbar: true,
          bindToTarget: true,
          scrollX: true,
          scrollY: true,
          freeScroll: true,
          bounce: true,
          movable: true,
          mouseWheel: true,
          click: true,
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.scroll {
  position: absolute;
  height: 0.6rem;
  width: 0.6rem;
  bottom: 0rem;
  right: -1.57rem;
  background: #f3e7dd;
  svg {
    position: absolute;
    width: 0.24rem;
    height: 0.14rem;
    left: 0.18rem;
    top: 0.26rem;
  }
}
.commend {
  position: relative;
  box-sizing: border-box;
  padding: 0.51rem 0.4rem 0.05rem 0.4rem;
  margin: 0.67rem 0 0 2.15rem;
  width: 7.42rem;
  background: #f3e7dd;
  &__item {
    display: flex;
    font-size: 0.16rem;
    font-weight: 400;
    color: #86693e;
    line-height: 0.22rem;
    img {
      width: 0.48rem;
      height: 0.48rem;
      margin-right: 0.14rem;
    }
  }
  &__box {
    position: relative;
    flex: 1;
    border-bottom: 0.01rem solid #86693e;
    margin-bottom: 0.2rem;
    &__user {
      line-height: 0.22rem;
    }
    &__time {
      position: absolute;
      top: 0;
      right: 0;
      line-height: 0.22rem;
    }
    &__command {
      margin-top: 0.04rem;
      margin-bottom: 0.1rem;
    }
  }
}
.exhibition {
  background: url("../../assets/background.png");
  background-size: 100% 3.8rem;
  background-repeat: no-repeat;
  background-position-y: 2.47rem;
}
.exhibition__content {
  margin-top: 0.74rem;
  height: 4.9rem;
  width: 100%;
  position: relative;
  &__title {
    position: absolute;
    top: 0.65rem;
    left: 1.08rem;
    height: 2.38rem;
    width: 0.64rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  &__exhibit {
    margin-left: 2.15rem;
    height: 4.69rem;
    width: 7.42rem;
    background: rgba(0, 0, 0, 0.6);
    position: relative;
  }
  .route__left {
    z-index: 20;
    position: absolute;
    left: 0.24rem;
    top: 2.17rem;
    height: 0.2rem;
    width: 0.2rem;
    svg {
      height: 0.14rem;
      width: 0.08rem;
      margin-bottom: 0.74rem;
    }
  }
  .route__right {
    z-index: 20;
    position: absolute;
    right: 0.24rem;
    top: 2.17rem;
    height: 0.14rem;
    width: 0.08rem;
    svg {
      height: 0.14rem;
      width: 0.08rem;
      margin-bottom: 0.74rem;
    }
  }
  &__svg {
    box-sizing: border-box;
    padding-left: 6.41rem;
    width: 7.42rem;
    position: absolute;
    bottom: 0;
    line-height: 0.24rem;
    height: 0.24rem;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
  }
  .svg__wrapper {
    display: inline-block;
    height: 0.24rem;
    width: 0.12rem;
    margin-right: 0.12rem;
    svg {
      position: absolute;
      top: 0.06rem;
      width: 0.12rem;
      height: 0.12rem;
    }
  }
  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .smallsize {
    position: relative;
    height: 100%;
    transform: translateX(-50%);
    left: 50%;
    user-select: none;
  }
  .largesize {
    width: 150%;
    user-select: none;
  }
  .large {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 300px;
  }
  .small {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 340px;
  }
  &__introduce {
    position: absolute;
    height: 4.69rem;
    width: 2.03rem;
    top: 0;
    right: 0.96rem;
    background: #f3e7dd;
    padding: 0.25rem 0.18rem 0.15rem 0.16rem;
    box-sizing: border-box;
    .introduce__title {
      font-size: 0.2rem;
      font-family: "mFont";
      font-weight: 400;
      color: #c95945;
      line-height: 0.23rem;
    }
    .introduce__writer {
      margin-top: 0.12rem;
      font-size: 0.1rem;
      font-weight: 400;
      color: #86693e;
      line-height: 0.2rem;
    }
    .introduce__text {
      margin-top: 0.24rem;
      font-size: 0.08rem;
      font-weight: 400;
      color: #86693e;
      line-height: 0.12rem;
    }
    .introduce__tags {
      margin-top: 0.1rem;
      display: flex;
      flex-wrap: wrap;
      span {
        display: inline-block;
        height: 0.08rem;
      }
      p {
        margin-right: 0.06rem;
        padding: 0 0.08rem;
        text-align: center;
        font-size: 0.1rem;
        font-weight: 400;
        color: #c95945;
        line-height: 0.2rem;
        border-radius: 0.04rem;
        border: 0.01rem solid #c95945;
      }
    }
    .introduce__svgs {
      position: absolute;
      top: 3.52rem;
      display: flex;
      width: 0.65rem;
      height: 0.24rem;
      .svg__wrappers {
        margin-right: 0.08rem;
        z-index: 10;
        &:nth-of-type(1) {
          margin-right: 0.2rem;
        }
        svg {
          margin-bottom: 0.85rem;
          width: 0.13rem;
          height: 0.13rem;
        }
      }
    }
    textarea {
      position: absolute;
      bottom: 0.15rem;
      resize: none;
      text-decoration: none;
      outline: none;
      width: 1.69rem;
      height: 0.78rem;
      background: rgba(255, 255, 255, 0.5);
      border: 0.01rem solid #dcba9e;
      font-family: "PingFang SC";
      color: #86693e;
      font-style: normal;
      font-weight: 400;
      font-size: 0.08rem;
      line-height: 150%;
      text-indent: 0.09rem;
      &::placeholder {
        color: #dcba9e;
        font-style: normal;
        font-weight: 400;
        font-size: 0.08rem;
        line-height: 150%;
      }
    }
  }
}
</style>
